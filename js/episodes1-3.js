/* ============================================
   黒炎の覚醒者 第1話〜第3話
   縦スクロール形式：漫画コマ＋小説テキスト交互配置
   Pixabay フリー画像使用（商用利用可・帰属表示不要）
   ============================================ */

const EPISODES_1_3 = [

// ========== 第1話 ==========
{
  title: '転生、拒絶、そして泥の匂い',
  subtitle: '——すべてを拒んだ者に、すべてを滅ぼす力が宿る',
  sections: [
    // --- 冒頭：トラック事故（漫画） ---
    {
      type: 'manga',
      manga: {
        layout: 'A',
        panels: [
          {
            img: 'https://cdn.pixabay.com/photo/2016/08/12/16/38/road-1589126_1280.jpg',
            alt: '夜道 — ヘッドライトが迫る',
            overlay: 'panel-overlay-vignette',
            balloons: [
              { type: 'narration', pos: 'top:6%;left:5%;width:55%', text: '黒瀬虚無、享年十七歳。' },
              { type: 'narration', pos: 'top:30%;right:5%;width:50%', text: '死因——トラック。<br>月並みにも程がある。' }
            ],
            sfx: []
          },
          {
            img: 'https://cdn.pixabay.com/photo/2017/08/06/10/20/truck-2591007_1280.jpg',
            alt: 'トラックが正面から迫る',
            overlay: 'panel-overlay-vignette',
            balloons: [
              { type: 'thought', pos: 'top:10%;left:8%;width:50%', text: 'あ——', tail: 'tail-bottom' }
            ],
            sfx: [
              { text: 'ゴォォォ', pos: 'bottom:20%;right:5%', style: 'sfx-large sfx-flame sfx-tilt-r' }
            ]
          },
          {
            img: 'https://cdn.pixabay.com/photo/2025/01/21/21/22/rays-9350519_1280.jpg',
            alt: '衝撃の閃光',
            overlay: '',
            balloons: [],
            sfx: [
              { text: 'ドォォォン!!', pos: 'top:20%;left:10%', style: 'sfx-large sfx-flame sfx-tilt-r' }
            ]
          }
        ]
      }
    },
    // --- 神との邂逅（漫画） ---
    {
      type: 'manga',
      manga: {
        layout: 'D',
        panels: [
          {
            img: 'https://cdn.pixabay.com/photo/2024/06/28/09/45/light-8859072_1280.jpg',
            alt: '神の光 — 白い空間',
            overlay: 'panel-overlay-vignette',
            balloons: [
              { type: 'normal', pos: 'top:10%;right:8%;width:45%', text: 'ようこそ、死者よ。<br>チートスキルを一つ選べ', tail: 'tail-bottom' }
            ],
            sfx: []
          },
          {
            img: 'https://cdn.pixabay.com/photo/2026/01/20/08/10/person-10077816_1280.jpg',
            alt: '光に向かう人影',
            overlay: 'panel-overlay-bottom',
            balloons: [
              { type: 'void', pos: 'bottom:12%;left:8%;width:40%', text: 'いらない。<br>何もくれなくていい。', tail: 'tail-left' }
            ],
            sfx: []
          }
        ]
      }
    },
    // --- 神との邂逅（テキスト） ---
    {
      type: 'text',
      content: `
<p>死は、あっけなかった。</p>

<p>黒瀬虚無（くろせ・うつろ）、享年十七歳。死因——トラック。月並みにも程がある。コンビニのレジ袋を片手にぶら下げ、イヤホンから流れるピアノ曲に意識を委ねていたその一瞬。視界の端で光が膨張し、世界が白く弾けた。痛みはなかった。ただ——<strong>音が消えた</strong>。</p>

<p>目を開けると、そこには何もなかった。上も下もなく、光も闇もない。ただ、漠然とした「白」が広がっている。その白の中心に——もしくは全体に——何か途方もなく巨大な存在の気配があった。</p>

<p class="dialogue">「ようこそ、死者よ」</p>

<p>声は聞こえたのではなく、脳に直接刻まれた。虚無はポケットに手を突っ込んだまま——ポケットなどもうないのだが——顔を上げた。</p>

<p class="dialogue">「お前には転生の権利がある。異世界に送る。チートスキルを一つ選べ」</p>

<p>沈黙。三秒。</p>

<p class="void-speech">「いらない」</p>

<p>神と呼ぶべき存在が、一瞬だけ沈黙した。それは驚愕だったのかもしれないし、単なる処理落ちだったのかもしれない。</p>

<p class="dialogue">「……聞き間違いか？　もう一度言え」</p>

<p class="void-speech">「いらない。何もくれなくていい。勝手に送ればいい」</p>

<p class="dialogue">「理由は」</p>

<p class="void-speech">「他人から貰ったもので生きるのは、前の世界で十分やった。——もう飽きた」</p>

<p>再び沈黙。今度は五秒ほど続いた。</p>

<p class="dialogue">「では——何も与えぬ。お前はただの人間として転生する。死ぬ時も、ただの人間として死ぬがいい」</p>

<p class="void-speech">「それでいい」</p>

<p>会話は合計十秒。神との邂逅は、レジ袋を受け取るより短かった。</p>

<p>白が砕けた。意識が落ちた。</p>

<p>そして——泥の匂いがした。</p>
`
    },
    // --- 辺境の麦畑 + 黒炎覚醒（漫画） ---
    {
      type: 'manga',
      manga: {
        layout: 'E',
        panels: [
          {
            img: 'https://cdn.pixabay.com/photo/2024/08/16/09/38/ai-generated-8973231_1280.jpg',
            alt: '夕焼けの麦畑 — 目覚めの地',
            overlay: 'panel-overlay-bottom',
            balloons: [
              { type: 'narration', pos: 'top:6%;left:5%;width:55%', text: '異世界——アルカナ・ヴェルディア大陸。<br>辺境の麦畑で、虚無は目覚めた。' }
            ],
            sfx: []
          },
          {
            img: 'https://cdn.pixabay.com/photo/2024/08/02/21/43/ai-generated-8940748_1280.png',
            alt: '老農夫ガルド',
            overlay: 'panel-overlay-vignette',
            balloons: [
              { type: 'normal', pos: 'top:8%;left:8%;width:50%', text: 'おい、坊主——<br>大丈夫か', tail: 'tail-bottom' }
            ],
            sfx: []
          },
          {
            img: 'https://cdn.pixabay.com/photo/2023/01/28/06/57/man-7750139_1280.png',
            alt: '月夜のシルエット',
            overlay: 'panel-overlay-flame',
            balloons: [
              { type: 'thought', pos: 'top:10%;right:8%;width:45%', text: '体の内側で、何かが<br>燃えている——' }
            ],
            sfx: []
          },
          {
            img: 'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_1280.png',
            alt: '炎の男 — 黒炎覚醒',
            overlay: 'panel-overlay-flame',
            balloons: [
              { type: 'void', pos: 'bottom:10%;left:5%;width:50%', text: '何も貰っていないはずだが——', tail: 'tail-left' }
            ],
            sfx: [
              { text: 'ゴォォォ', pos: 'top:15%;right:5%', style: 'sfx-large sfx-flame sfx-tilt-r' }
            ]
          }
        ]
      }
    },
    // --- 辺境〜黒炎覚醒（テキスト） ---
    {
      type: 'text',
      content: `
<p>顔に泥がついていた。</p>

<p>虚無が最初に感じたのは、それだった。口の中にまで入り込んだ土の味。空気は前の世界とは違う、どこか甘い草の匂いが混じっている。体が重い。しかし痛みはない。——生きている。</p>

<p class="void-speech">「……転生、したらしいな」</p>

<p>体を起こすと、目の前に広がっていたのは黄金色の麦畑だった。地平線まで続く穂が夕暮れの風に揺れている。空は深い紫と橙が溶け合い、見たこともない二つの月が昇り始めていた。</p>

<p>異世界。それ以外に説明のしようがない光景だった。</p>

<p class="dialogue">「おい、坊主——大丈夫か」</p>

<p>声のした方を振り向くと、一人の老農夫が立っていた。日焼けした顔に深い皺。腰に鎌を下げ、心配そうにこちらを覗き込んでいる。</p>

<p>これが<strong>ガルド</strong>との出会いだった。</p>

<p>ガルドは多くを聞かなかった。名も素性も問わず、ただ「飯を食え」と言って虚無を小屋に連れ帰った。粗末な干し肉のスープと硬いパン。だが虚無にとっては——生まれて初めて、誰かが何の見返りもなく差し出した食事だった。</p>

<p class="scene-break">＊ ＊ ＊</p>

<p>その夜。</p>

<p>ガルドが寝静まった後、虚無は納屋の裏に出た。二つの月が蒼白い光を落としている。</p>

<p>右手を見つめる。前の世界——黒瀬虚無として生きた十七年間の記憶が頭にある。だが体は違う。若い。力がある。そして何より——体の内側で、何かが<strong>燃えている</strong>。</p>

<p>意識を集中した瞬間、それは起きた。</p>

<p>右手の掌から、漆黒の炎が噴き上がった。</p>

<p>炎なのに熱くない。光は放っているのに、周囲を照らさない。まるで闇そのものが燃えているかのように、その炎は<strong>存在を主張しながら世界から浮いていた</strong>。</p>

<p class="void-speech">「……何も貰っていないはずだが」</p>

<p>炎を見つめる。それは虚無の意思に従って形を変え、指の間をすり抜け、腕を這い上がる。気持ち悪いほど自然に——まるで最初から体の一部であったかのように。</p>

<p>神は「何も与えない」と言った。だが、この炎は何だ。</p>

<p>考えて、すぐに結論が出た。</p>

<p class="void-speech">「——与えられたんじゃない。俺が『要らない』と言った瞬間に、<strong>拒絶そのものが力になった</strong>のか」</p>

<p>皮肉だった。何も求めなかった者に、何でも拒む力が刻まれた。神の意図か、あるいは単なるバグか。どちらでもよかった。</p>

<p class="void-speech">「<ruby>理力<rt>ことわり</rt></ruby>とやらに縛られない力か。——悪くない」</p>

<p>黒炎が夜風に揺れた。二つの月だけが、その光を見ていた。</p>
`
    },
    // --- 徴税部隊壊滅（漫画） ---
    {
      type: 'manga',
      manga: {
        layout: 'F',
        panels: [
          {
            img: 'https://cdn.pixabay.com/photo/2024/08/06/23/26/ai-generated-8950490_1280.jpg',
            alt: '帝国兵の部隊',
            overlay: 'panel-overlay-vignette',
            balloons: [
              { type: 'shout', pos: 'top:8%;right:5%;width:48%', text: '今期の税を収めろ！<br>麦の七割、家畜の半分！' },
              { type: 'narration', pos: 'bottom:8%;left:5%;width:50%', text: 'ゾット帝国徴税部隊——三十人。' }
            ],
            sfx: [
              { text: 'ザッ', pos: 'top:40%;left:5%', style: 'sfx-medium sfx-white' }
            ]
          },
          {
            img: 'https://cdn.pixabay.com/photo/2025/08/12/07/27/shadow-9769605_1280.jpg',
            alt: '黒い影 — 虚無が歩み出る',
            overlay: 'panel-overlay-flame',
            balloons: [
              { type: 'void', pos: 'top:10%;left:8%;width:45%', text: 'うるさい', tail: 'tail-bottom' }
            ],
            sfx: [
              { text: 'ゾクッ', pos: 'bottom:20%;right:8%', style: 'sfx-medium sfx-void' }
            ]
          },
          {
            img: 'https://cdn.pixabay.com/photo/2017/05/29/19/13/fire-and-water-2354583_1280.jpg',
            alt: '黒炎 — 全拒絶発動',
            overlay: 'panel-overlay-flame',
            balloons: [
              { type: 'void', pos: 'top:8%;left:5%;width:52%', text: '俺に触れるものは全部消える。<br>矢も、魔法も、殺意も。', tail: 'tail-bottom' }
            ],
            sfx: [
              { text: '全 拒 絶', pos: 'bottom:10%;right:5%', style: 'sfx-large sfx-flame sfx-tilt-l' }
            ]
          }
        ]
      }
    },
    // --- 徴税部隊壊滅（テキスト） ---
    {
      type: 'text',
      content: `
<p>翌朝は、騒がしかった。</p>

<p>蹄の音。怒号。金属が擦れる耳障りな音。虚無が小屋の戸を開けると、村の中央広場に三十人ほどの武装した兵士が展開していた。</p>

<p>ゾット帝国の紋章——白銀の盾に刻まれた理力紋章を胸に掲げた<strong>徴税部隊</strong>だった。</p>

<p class="dialogue">「今期の税を収めろ！　麦の七割、家畜の半分。拒否すれば——わかっているな」</p>

<p>隊長格の男が馬上から見下ろしている。村人たちは顔を青くして震えていた。七割。それは飢え死にしろと同義だ。</p>

<p>ガルドが前に出た。</p>

<p class="dialogue">「待ってくれ。七割は——子供たちが冬を越せない。せめて五割に——」</p>

<p class="dialogue">「黙れ」</p>

<p>隊長が指を弾くと、兵士の一人が弓を引いた。矢が放たれる——ガルドの足元に突き刺さった。脅し。次は外さない、という意味だ。</p>

<p>村人たちが悲鳴を上げる。子供が泣く。その音が、虚無の耳に届いた。</p>

<p>虚無は——欠伸を噛み殺しながら、広場に歩み出た。</p>

<p class="void-speech">「うるさい」</p>

<p>兵士三十人の視線が集まる。誰だ、と隊長が目を細める。</p>

<p class="dialogue">「何者だ、貴様。邪魔をするなら——」</p>

<p class="dialogue">「撃て」</p>

<p>五本の矢が同時に放たれた。さらに後方から理力を纏った魔法弾が三発。合計八つの攻撃が虚無に向かって飛翔した。</p>

<p>虚無は動かなかった。</p>

<p>矢が虚無に触れる寸前——<strong>消えた</strong>。</p>

<p>魔法弾が虚無の顔面に到達する寸前——<strong>消えた</strong>。</p>

<p>音もなく。光もなく。ただ——<strong>在ったものが、無くなった</strong>。</p>

<p>静寂が落ちた。</p>

<p class="void-speech">「俺に触れるものは全部消える。矢も、魔法も、お前たちの殺意も。——要らないものは全部」</p>

<p>虚無は、右手を軽く振った。</p>

<p>黒炎が<strong>脈動</strong>した。</p>

<p>剣が消えた。魔法陣が消えた。理力障壁が消えた。鎧の留め金が消えた。兵士たちは武装を失い、次の瞬間には地面に転がっていた。</p>

<p>三十人。全員が地に伏している。しかし——<strong>全員生きている</strong>。</p>

<p class="void-speech">「帰れ。お前たちの命は要らないが——もう一度来るなら、次は『帰る場所』を消す」</p>

<p>その中で——虚無だけが、大きな欠伸をした。</p>

<p class="void-speech">「朝飯、まだか」</p>

<p>虚無はそう言って小屋に戻った。背後で村人たちのざわめきが広がるのを聞きながら、彼は思った。</p>

<p class="inner-voice">（この世界には「理力」とやらの法則があるらしい。そして俺の炎は、その法則の外にある。——面倒な話だ）</p>

<p>しかし、面倒だと言いながら、虚無の口元にはわずかな笑みが浮かんでいた。</p>

<p class="void-speech">「悪くない。——悪くない世界じゃないか」</p>

<p>黒炎が、静かに消えた。</p>
`
    }
  ]
},

// ========== 第2話 ==========
{
  title: 'ゾット帝国、動く',
  subtitle: '——報告書の余白に、滅亡の予兆が記されていた',
  sections: [
    // --- 帝都・ゼロス（漫画） ---
    {
      type: 'manga',
      manga: {
        layout: 'C',
        panels: [
          {
            img: 'https://cdn.pixabay.com/photo/2025/11/08/09/48/gothic-9944265_1280.jpg',
            alt: 'ゴシック城 — ゾット帝都クロニクル',
            overlay: 'panel-overlay-top',
            balloons: [
              { type: 'narration', pos: 'top:6%;left:5%;width:55%', text: 'ゾット帝国帝都クロニクル——<br>大陸の三分の二を統べる巨大国家の心臓部。' }
            ],
            sfx: []
          },
          {
            img: 'https://cdn.pixabay.com/photo/2017/11/02/03/35/gothic-2910057_1280.jpg',
            alt: 'ゴシックの闇',
            overlay: 'panel-overlay-vignette',
            balloons: [
              { type: 'normal', pos: 'top:10%;left:8%;width:48%', text: '報告です。辺境の<br>徴税部隊が壊滅しました', tail: 'tail-bottom' }
            ],
            sfx: []
          },
          {
            img: 'https://cdn.pixabay.com/photo/2024/03/27/11/18/witch-8658915_1280.png',
            alt: 'ゼロス — 宮廷魔法士長',
            overlay: 'panel-overlay-vignette',
            balloons: [
              { type: 'normal', pos: 'top:6%;right:5%;width:48%', text: '理力の反応がゼロだと？<br>……面白い', tail: 'tail-bottom' },
              { type: 'thought', pos: 'bottom:12%;left:8%;width:50%', text: '理力の枠外にある力——<br>私の計画に必要なピースか' }
            ],
            sfx: [
              { text: 'ニィ…', pos: 'bottom:35%;right:10%', style: 'sfx-medium sfx-void' }
            ]
          }
        ]
      }
    },
    // --- 帝都・ゼロス（テキスト） ---
    {
      type: 'text',
      content: `
<p>ゾット帝国帝都<strong>クロニクル</strong>。</p>

<p>大陸の三分の二を統べる巨大国家の心臓部は、白亜の尖塔が林立する壮麗な都市だった。理力で強化された建築物は重力を嘲笑うかのように空へ伸び、街路には理力紋章を刻んだ街灯が青白い光を落としている。</p>

<p>その最奥——宮廷魔法士長の執務室は、帝都で最も高い尖塔の最上階にあった。</p>

<p class="dialogue">「報告です。辺境第七管区の徴税部隊が壊滅しました」</p>

<p>跪く伝令兵の声が、暗い部屋に響く。窓のない部屋。壁一面に刻まれた理力紋章だけが淡い紫光を放っている。</p>

<p>その光の中で——<strong>ゼロス・アビス・クロウリー</strong>は報告書を手に取った。</p>

<p>長い銀髪。蒼白い肌。痩身の体躯をゾット帝国宮廷魔法士の漆黒のローブが包んでいる。その瞳だけが異質だった。虹彩の色が——見る角度によって変わる。紫から金、金から深紅へ。</p>

<p class="dialogue">「壊滅。面白い言葉だ。——三十名の武装兵が、正確にはどう壊滅した」</p>

<p class="dialogue">「は……全員の武装が消滅し、鎧の留め金まで消え——しかし人体への損傷は皆無です。黒い炎を使う、身元不明の若い男一人によるものと」</p>

<p class="dialogue">「黒い炎」</p>

<p>ゼロスの唇が、ゆっくりと弧を描いた。それは微笑みと呼ぶには不気味すぎた。</p>

<p class="dialogue">「理力の反応は」</p>

<p class="dialogue">「それが——理力測定器に一切反応がなかったとのことです」</p>

<p class="dialogue">「あるいは、理力の体系そのものの外にいるか」</p>

<p class="dialogue">「<ruby>理力の埒外<rt>ことわりのらちがい</rt></ruby>、か。——面白い」</p>

<p class="dialogue">「泳がせろ。追討は禁止だ。ただし、監視は続けろ。一挙手一投足、すべて報告させろ」</p>

<p>ゼロスは窓のない壁に向かって歩き、理力紋章に指を触れた。紋章が紫に明滅する。</p>

<p class="dialogue">「私の計画に必要なピースが、向こうから歩いてくるかもしれない。——神に感謝だな」</p>

<p>その言葉に、信仰の欠片も含まれていなかった。</p>
`
    },
    // --- ディア・ノクスと予言書（漫画） ---
    {
      type: 'manga',
      manga: {
        layout: 'D',
        panels: [
          {
            img: 'https://cdn.pixabay.com/photo/2025/07/21/11/58/ai-generated-9726059_1280.png',
            alt: '魔女 — ディア・ノクス',
            overlay: 'panel-overlay-vignette',
            balloons: [
              { type: 'narration', pos: 'top:5%;left:5%;width:55%', text: '凍土と枯れ森の境界——古代遺跡にて。' },
              { type: 'normal', pos: 'bottom:15%;right:5%;width:48%', text: '虚無炎の器、起動確認。<br>カイトの予言通りに動き始めた', tail: 'tail-left' }
            ],
            sfx: [
              { text: 'ヒュゥ…', pos: 'top:40%;right:5%', style: 'sfx-small sfx-void' }
            ]
          },
          {
            img: 'https://cdn.pixabay.com/photo/2020/04/24/19/03/book-5088287_1280.jpg',
            alt: '予言書 — 古代の書物',
            overlay: 'panel-overlay-vignette',
            balloons: [
              { type: 'narration', pos: 'top:8%;left:5%;width:90%', text: '「理力に縛られぬ黒炎の者が現れる。<br>その者は帝国を壊すか、あるいは本当の意味で人を守るか」' }
            ],
            sfx: []
          },
          {
            img: 'https://cdn.pixabay.com/photo/2024/08/16/09/38/ai-generated-8973231_1280.jpg',
            alt: '街道 — 村を出る虚無',
            overlay: 'panel-overlay-bottom',
            balloons: [
              { type: 'normal', pos: 'top:8%;left:5%;width:38%', text: '行くのか', tail: 'tail-right' },
              { type: 'void', pos: 'top:8%;right:5%;width:30%', text: 'ああ', tail: 'tail-left' },
              { type: 'normal', pos: 'bottom:15%;left:5%;width:42%', text: '——飯、持って行け', tail: 'tail-bottom' }
            ],
            sfx: []
          }
        ]
      }
    },
    // --- ディア・ノクスと予言書 / 村を出る（テキスト） ---
    {
      type: 'text',
      content: `
<p>同日、同刻。</p>

<p>帝都から遥か北——凍土と枯れ森が接する境界に、一つの遺跡があった。</p>

<p>風化した石柱が円形に並び、その中心に一つの石棺。石棺の蓋は開いており、中には何もない。代わりに——石棺の縁に腰掛ける少女が一人。</p>

<p><strong>ディア・ノクス・マレフィカ</strong>。</p>

<p>年の頃は十五、六に見える。銀を帯びた淡紫の長い髪。透き通るような白い肌。瞳は左右で色が違った。右が深紫、左が金。その手には——古びた革装丁の書物が開かれている。</p>

<p>予言書。この世界が作られた時、神が遺した<strong>設計図</strong>の写本。</p>

<p class="dialogue">「<strong>虚無炎の器、起動確認</strong>。——カイトの予言通りに動き始めた」</p>

<p class="prophecy">「いつか、理力に縛られぬ黒炎の者が現れる。<br>その者は帝国を壊すか、あるいは本当の意味で人を守るか<br>——それは、その者の心が決める」</p>

<p class="dialogue">「カイト様。あなたが待ち望んだ人が、ようやく来たみたいですよ」</p>

<p class="scene-break">＊ ＊ ＊</p>

<p>虚無は翌朝、村を出た。</p>

<p>理由は単純だった。帝国の兵を三十人叩きのめした以上、村に報復が来る。自分がいなければ、村人に危害は及ばない。</p>

<p>ガルドとの別れは三行で終わった。</p>

<p class="dialogue">「行くのか」</p>

<p class="void-speech">「ああ」</p>

<p class="dialogue">「——飯、持って行け」</p>

<p>干し肉と硬いパンが詰まった布袋を受け取り、虚無は街道に出た。帝都へ向かう。帝国の中枢に自ら乗り込む。追われる前に、追う側に回る。</p>

<p>街道を半日歩いた頃。</p>

<p>木立の陰から、五つの影が現れた。</p>

<p>黒装束に身を包んだ<strong>帝国の刺客</strong>。五人が半円形に虚無を取り囲む。</p>

<p class="dialogue">「黒炎の化け物。帝国の命により——ここで死ね」</p>

<p>虚無は足を止めなかった。歩き続けた。</p>

<p>虚無に触れる寸前——すべてが<strong>消えた</strong>。</p>

<p>虚無は振り返らず、歩きながら言った。</p>

<p class="void-speech">「帰って伝えろ。——俺が行く、と」</p>

<p>帝都まで——あと七日。</p>
`
    }
  ]
},

// ========== 第3話 ==========
{
  title: '紅剣のクリムゾン、そしてカイトの亡霊',
  subtitle: '——折れない剣と、消えない炎が交差する',
  sections: [
    // --- 廃橋の激闘（漫画） ---
    {
      type: 'manga',
      manga: {
        layout: 'A',
        panels: [
          {
            img: 'https://cdn.pixabay.com/photo/2024/02/16/12/16/ai-generated-8577456_1280.jpg',
            alt: '紅い剣の戦士 — クリムゾン・ヴェイン',
            overlay: 'panel-overlay-flame',
            balloons: [
              { type: 'narration', pos: 'top:5%;left:5%;width:50%', text: 'グレイル河——帝都と辺境を隔てる天然の壁。<br>廃橋の上に、男が立っていた。' },
              { type: 'shout', pos: 'bottom:10%;right:5%;width:42%', text: 'やっと見つけた——<br>俺が殺すべき相手を！' }
            ],
            sfx: [
              { text: 'ギラッ', pos: 'top:50%;right:15%', style: 'sfx-medium sfx-crimson sfx-tilt-r' }
            ]
          },
          {
            img: 'https://cdn.pixabay.com/photo/2023/11/25/18/58/ai-generated-8412300_1280.png',
            alt: '剣戟 — 紅蓮の斬撃',
            overlay: 'panel-overlay-flame',
            balloons: [
              { type: 'shout', pos: 'top:8%;left:5%;width:35%', text: '死ねぇッ！' }
            ],
            sfx: [
              { text: 'ガキィン', pos: 'top:35%;right:5%', style: 'sfx-large sfx-crimson sfx-tilt-l' }
            ]
          },
          {
            img: 'https://cdn.pixabay.com/photo/2015/12/16/17/49/solar-1096311_1280.png',
            alt: '黒炎 — 全拒絶',
            overlay: 'panel-overlay-flame',
            balloons: [
              { type: 'void', pos: 'bottom:15%;left:8%;width:45%', text: '<ruby>全拒絶<rt>オール・リジェクト</rt></ruby>', tail: 'tail-bottom' }
            ],
            sfx: [
              { text: 'シュウウ', pos: 'top:20%;right:10%', style: 'sfx-large sfx-void' }
            ]
          }
        ]
      }
    },
    // --- 廃橋の激闘（テキスト） ---
    {
      type: 'text',
      content: `
<p>帝都への街道は、三日目に大きな川にぶつかった。</p>

<p>地図によれば<strong>グレイル河</strong>。帝都と辺境を隔てる天然の境界線であり、帝国はこの河を「支配の壁」として利用していた。</p>

<p>虚無は正門橋を避けた。面倒だ。代わりに見つけたのは、上流の渓谷に架かる<strong>廃橋</strong>だった。</p>

<p>虚無が一歩目を踏み出した時——</p>

<p class="dialogue">「止まれ」</p>

<p>橋の中央に、男が立っていた。</p>

<p>紅い髪。炎のように逆立った長髪が風に靡く。鍛え抜かれた体躯に、使い込まれた革鎧を纏っている。そして右手には——<strong>紅く輝く片手剣</strong>。</p>

<p><strong>クリムゾン・ヴェイン</strong>。ゾット帝国騎士団の現役最強剣士。</p>

<p class="dialogue">「やっと見つけた。俺が殺すべき相手を」</p>

<p>次の瞬間、クリムゾンが消えた。</p>

<p>速い。虚無の視界から完全に消失するほどの速度。殺気だけが首筋を撫でる——右。</p>

<p>虚無が首を傾けた瞬間、紅い剣閃が空を裂いた。髪が数本、切れて舞う。</p>

<p class="void-speech">「——速いな」</p>

<p class="dialogue">「褒めるな。死ね」</p>

<p>二撃、三撃、四撃。神速の連撃が虚無を襲う。一撃一撃が必殺。帝国騎士団最強の名は伊達ではない。</p>

<p>虚無は——<strong>斬撃ごと存在を拒絶した</strong>。</p>

<p class="dialogue">「<ruby>紅蓮一閃<rt>ぐれんいっせん</rt></ruby>——！」</p>

<p>空間を断つ斬撃。橋の石畳が真っ二つに裂け、渓谷の崖壁にまで亀裂が走る。</p>

<p>虚無は右手を前に出した。黒炎が手の平に凝縮する。</p>

<p class="void-speech">「<ruby>全拒絶<rt>オール・リジェクト</rt></ruby>」</p>

<p>紅蓮の斬撃が——黒炎に触れた瞬間、<strong>消えた</strong>。</p>

<p>決着はつかなかった。</p>
`
    },
    // --- カイトの紋章と対話（漫画） ---
    {
      type: 'manga',
      manga: {
        layout: 'B',
        panels: [
          {
            img: 'https://cdn.pixabay.com/photo/2018/04/03/15/29/fantasy-3287062_1280.png',
            alt: 'ファンタジー騎士 — カイトの幻影',
            overlay: 'panel-overlay-vignette',
            balloons: [
              { type: 'narration', pos: 'top:5%;left:5%;width:55%', text: '初代騎士団長カイト——百年前に死んだ英雄。<br>「人を守る剣」を信条にした男。' }
            ],
            sfx: []
          },
          {
            img: 'https://cdn.pixabay.com/photo/2024/02/16/12/16/ai-generated-8577456_1280.jpg',
            alt: 'クリムゾン — 矛盾を抱える剣士',
            overlay: 'panel-overlay-bottom',
            balloons: [
              { type: 'normal', pos: 'top:8%;left:5%;width:50%', text: '今の帝国は腐っている。<br>俺は——その鎖の一部だ', tail: 'tail-bottom' }
            ],
            sfx: []
          },
          {
            img: 'https://cdn.pixabay.com/photo/2023/01/28/06/57/man-7750139_1280.png',
            alt: '虚無のシルエット',
            overlay: 'panel-overlay-bottom',
            balloons: [
              { type: 'void', pos: 'top:10%;right:5%;width:42%', text: '自覚があるなら、<br>やめればいい', tail: 'tail-left' }
            ],
            sfx: []
          },
          {
            img: 'https://cdn.pixabay.com/photo/2024/02/24/12/22/ai-generated-8593917_1280.png',
            alt: '金色に光る紋章',
            overlay: 'panel-overlay-flame',
            balloons: [
              { type: 'thought', pos: 'top:10%;left:8%;width:50%', text: 'あの男——矛盾を抱えたまま<br>剣を振るい続けている。<br>救いようのない馬鹿だ' },
              { type: 'narration', pos: 'bottom:8%;right:5%;width:45%', text: '廃橋のカイトの紋章が——<br>一瞬だけ、金色に光った。' }
            ],
            sfx: [
              { text: 'キラッ', pos: 'bottom:35%;left:10%', style: 'sfx-medium sfx-gold' }
            ]
          }
        ]
      }
    },
    // --- カイトの紋章と対話（テキスト） ---
    {
      type: 'text',
      content: `
<p>クリムゾンが紅い剣を下ろした。構えを解いた。</p>

<p class="dialogue">「お前は帝国を壊しに来たのか」</p>

<p class="void-speech">「興味ない。俺は俺の用事で動いている」</p>

<p class="dialogue">「用事？」</p>

<p class="void-speech">「帝都に行く。それだけだ」</p>

<p class="dialogue">「帝都に行って、何をする」</p>

<p class="void-speech">「……さあ。着けば分かるだろう」</p>

<p>クリムゾンは呆れたように——しかし、どこか嬉しそうに鼻を鳴らした。</p>

<p class="dialogue">「目的もなく帝都に乗り込むのか。——お前、馬鹿だな」</p>

<p class="void-speech">「よく言われる」</p>

<p>クリムゾンが橋の欄干に手をつき、ふと下を見た。崩れかけた石の欄干。その表面に——古い紋章が刻まれていた。</p>

<p>初代騎士団長<strong>カイト</strong>の紋章だった。</p>

<p class="dialogue">「……俺はゾット帝国騎士団第三席、クリムゾン・ヴェイン。帝国最強の剣士と呼ばれている。——お前を殺すために来た」</p>

<p class="void-speech">「殺せなかっただろう」</p>

<p class="dialogue">「ああ。だから——次は必ず殺す。それまで勝手に死ぬな」</p>

<p>歩き出すクリムゾンが、一度だけ足を止めた。</p>

<p class="dialogue">「カイトが見たかったのは、お前みたいな奴かもしれないな」</p>

<p class="dialogue">「今の帝国は腐っている。カイトの意志は形骸化し、騎士団は民を守る剣ではなく民を抑圧する鎖になった。俺は——その鎖の一部だ」</p>

<p class="void-speech">「自覚があるなら、やめればいい」</p>

<p class="dialogue">「やめられない。やめれば——俺の剣に意味がなくなる」</p>

<p class="inner-voice">（あの男——矛盾を抱えたまま剣を振るい続けている。救いようのない馬鹿だ）</p>

<p>虚無は思った。しかし不思議と——不快ではなかった。</p>

<p>廃橋を渡り終え、帝都への道が続く。</p>

<p>帝都まで——あと四日。</p>

<p>背後で、廃橋のカイトの紋章が——一瞬だけ、金色に光った気がした。</p>

<p class="void-speech">「……気のせいか」</p>

<p>気のせいだと思うことにして、虚無は前を向いた。</p>
`
    }
  ]
}

];
