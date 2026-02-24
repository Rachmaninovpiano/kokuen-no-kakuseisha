/* ============================================
   黒炎の覚醒者 - WEB小説+漫画ビューア制御
   縦スクロール版
   ============================================ */

// --- 状態管理 ---
const State = {
  currentScreen: 'title', // title | toc | reader
  currentEpisode: 0,
};

// --- 初期化 ---
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initLoadingScreen();
  initEventListeners();
  initScrollProgress();
});

// --- ローディング画面 ---
function initLoadingScreen() {
  setTimeout(() => {
    const loading = document.getElementById('loading-screen');
    loading.classList.add('hidden');
    setTimeout(() => loading.style.display = 'none', 1000);
  }, 2500);
}

// --- パーティクルエフェクト ---
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * w;
      this.y = h + Math.random() * 100;
      this.size = Math.random() * 3 + 1;
      this.speedY = -(Math.random() * 1.5 + 0.5);
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.8 + 0.2;
      this.color = Math.random() > 0.3
        ? `rgba(255, ${Math.floor(Math.random() * 60)}, 0, ${this.opacity})`
        : `rgba(139, 0, 255, ${this.opacity * 0.6})`;
      this.life = Math.random() * 200 + 100;
      this.age = 0;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.age * 0.02) * 0.3;
      this.age++;
      if (this.age > this.life || this.y < -10) this.reset();
    }
    draw() {
      const fadeRatio = 1 - (this.age / this.life);
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * fadeRatio, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      // Glow
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * fadeRatio * 3, 0, Math.PI * 2);
      ctx.fillStyle = this.color.replace(/[\d.]+\)$/, `${fadeRatio * 0.15})`);
      ctx.fill();
    }
  }

  for (let i = 0; i < 60; i++) {
    const p = new Particle();
    p.age = Math.random() * p.life;
    particles.push(p);
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
}

// --- スクロール進捗バー ---
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    if (State.currentScreen !== 'reader') {
      bar.style.width = '0%';
      return;
    }
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + '%';
  });
}

// --- イベントリスナー ---
function initEventListeners() {
  // スタートボタン
  document.getElementById('btn-start')?.addEventListener('click', showTOC);

  // キーボード操作
  document.addEventListener('keydown', (e) => {
    if (State.currentScreen === 'reader') {
      if (e.key === 'Escape') showTOC();
    }
  });

  // 目次に戻る
  document.getElementById('btn-back-toc')?.addEventListener('click', showTOC);
}

// --- 画面遷移 ---
function showTitle() {
  State.currentScreen = 'title';
  document.getElementById('title-screen').style.display = '';
  document.getElementById('toc-screen').style.display = 'none';
  document.getElementById('reader-screen').style.display = 'none';
}

function showTOC() {
  State.currentScreen = 'toc';
  document.getElementById('title-screen').style.display = 'none';
  document.getElementById('toc-screen').style.display = 'block';
  document.getElementById('reader-screen').style.display = 'none';
  window.scrollTo(0, 0);
}

function openEpisode(episodeNum) {
  State.currentScreen = 'reader';
  State.currentEpisode = episodeNum;

  document.getElementById('title-screen').style.display = 'none';
  document.getElementById('toc-screen').style.display = 'none';
  document.getElementById('reader-screen').style.display = 'block';

  renderEpisode(episodeNum);
  window.scrollTo(0, 0);
}

// --- 漫画パネルHTML生成 ---
function buildMangaHTML(mangaData) {
  const { layout, panels } = mangaData;

  let html = `<div class="manga-page layout-${layout}">`;

  panels.forEach((panel, idx) => {
    html += `<div class="panel">`;

    // 画像
    html += `<img src="${panel.img}" alt="${panel.alt}" loading="lazy">`;

    // オーバーレイ
    if (panel.overlay) {
      html += `<div class="panel-overlay ${panel.overlay}"></div>`;
    }

    // 吹き出し
    if (panel.balloons && panel.balloons.length > 0) {
      panel.balloons.forEach((b, bi) => {
        const tailClass = b.tail ? ` ${b.tail}` : '';
        const delay = (idx * 0.2 + bi * 0.15).toFixed(2);
        html += `<div class="balloon balloon-${b.type}${tailClass}" style="${b.pos};animation-delay:${delay}s">${b.text}</div>`;
      });
    }

    // 効果音
    if (panel.sfx && panel.sfx.length > 0) {
      panel.sfx.forEach((s, si) => {
        const delay = (idx * 0.2 + 0.3 + si * 0.1).toFixed(2);
        html += `<div class="sfx ${s.style}" style="${s.pos};animation-delay:${delay}s">${s.text}</div>`;
      });
    }

    html += `</div>`; // .panel
  });

  html += `</div>`; // .manga-page
  return html;
}

// --- エピソード全体を描画（縦スクロール） ---
function renderEpisode(num) {
  const content = document.getElementById('reader-content');
  const ep = EPISODES[num - 1];
  if (!ep) return;

  // ナビタイトル更新
  const navTitle = document.querySelector('.nav-title');
  navTitle.textContent = `第${num}話 ${ep.title}`;

  content.innerHTML = '';

  // スクロールコンテナ
  const scrollContainer = document.createElement('div');
  scrollContainer.className = 'episode-scroll';

  // 章扉ヘッダー
  const header = document.createElement('div');
  header.className = 'section-header section-fade';
  header.innerHTML = `
    <div class="chapter-num">第${num}話</div>
    <h2 class="chapter-title">${ep.title}</h2>
    ${ep.subtitle ? `<div class="chapter-subtitle">${ep.subtitle}</div>` : ''}
    <div class="chapter-line"></div>
  `;
  scrollContainer.appendChild(header);

  // 各セクションを描画
  ep.sections.forEach((section, idx) => {
    const el = document.createElement('div');
    el.className = `section section-fade`;

    if (section.type === 'manga') {
      el.classList.add('section-manga');
      el.innerHTML = buildMangaHTML(section.manga);
    } else if (section.type === 'text') {
      el.classList.add('section-text');
      el.innerHTML = `<div class="novel-body">${section.content}</div>`;
    }

    scrollContainer.appendChild(el);
  });

  // エピソード終了フッター
  const footer = document.createElement('div');
  footer.className = 'section-footer section-fade';
  const nextEp = EPISODES[num];
  if (nextEp) {
    footer.innerHTML = `
      <div class="episode-end-line"></div>
      <div class="episode-end-text">第${num}話 了</div>
      <button class="next-episode-btn" onclick="openEpisode(${num + 1})">
        次話へ ▷ 第${num + 1}話「${nextEp.title}」
      </button>
    `;
  } else {
    footer.innerHTML = `
      <div class="episode-end-line"></div>
      <div class="episode-end-text">第${num}話 了</div>
      <div class="episode-end-sub">— 第一巻 完 —</div>
      <button class="next-episode-btn" onclick="showTOC()">
        目次に戻る
      </button>
    `;
  }
  scrollContainer.appendChild(footer);

  content.appendChild(scrollContainer);

  // フェードインアニメーション（IntersectionObserver）
  initFadeInObserver();
}

// --- フェードインアニメーション ---
function initFadeInObserver() {
  const sections = document.querySelectorAll('.section-fade');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  sections.forEach(section => observer.observe(section));
}
