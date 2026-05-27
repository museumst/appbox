const apps = [
  {
    title: "로또번호 생성기",
    description: "겹치지 않는 6개 번호를 빠르게 뽑고 조합을 다시 만들 수 있는 간단한 도구입니다.",
    i18n: {
      ko: {
        title: "로또번호 생성기",
        description: "겹치지 않는 6개 번호를 빠르게 뽑고 조합을 다시 만들 수 있는 간단한 도구입니다.",
      },
      en: {
        title: "Lottery Number Generator",
        description: "A simple tool for quickly drawing six unique numbers and creating new combinations.",
      },
      ja: {
        title: "ロト番号ジェネレーター",
        description: "重複しない6つの番号をすばやく選び、新しい組み合わせを作れるシンプルなツールです。",
      },
      zh: {
        title: "乐透号码生成器",
        description: "一个简单工具，可快速抽取6个不重复号码并重新生成组合。",
      },
      es: {
        title: "Generador de Lotería",
        description: "Una herramienta simple para elegir rápidamente seis números únicos y crear nuevas combinaciones.",
      },
    },
    category: "tool",
    categoryLabel: "도구",
    thumbnail: "lotto",
    app_url: "apps/lotto/index.html",
    status: "ready",
    statusLabel: "실행 가능",
    tags: ["lotto", "random", "utility"],
  },
  {
    title: "4x4 Sliding Puzzle",
    description: "",
    i18n: {
      ko: {
        title: "4x4 슬라이딩 퍼즐",
        description: "",
      },
      en: {
        title: "4x4 Sliding Puzzle",
        description: "",
      },
      ja: {
        title: "4x4 スライドパズル",
        description: "",
      },
      zh: {
        title: "4x4 滑块拼图",
        description: "",
      },
      es: {
        title: "Puzzle Deslizante 4x4",
        description: "",
      },
    },
    category: "game",
    categoryLabel: "게임",
    thumbnail: "puzzle",
    app_url: "apps/puzzle/index.html",
    status: "ready",
    statusLabel: "실행 가능",
    tags: ["puzzle", "game", "logic"],
  },
  {
    title: "3x3 Sliding Puzzle",
    description: "",
    i18n: {
      ko: {
        title: "3x3 슬라이딩 퍼즐",
        description: "",
      },
      en: {
        title: "3x3 Sliding Puzzle",
        description: "",
      },
      ja: {
        title: "3x3 スライドパズル",
        description: "",
      },
      zh: {
        title: "3x3 滑块拼图",
        description: "",
      },
      es: {
        title: "Puzzle Deslizante 3x3",
        description: "",
      },
    },
    category: "game",
    categoryLabel: "게임",
    thumbnail: "puzzle",
    app_url: "apps/puzzle-3x3/index.html",
    status: "ready",
    statusLabel: "실행 가능",
    tags: ["puzzle", "game", "logic"],
  },
  {
    title: "세계지도",
    description: "지구본을 돌려가며 나라를 찾는 세계지도 퀴즈입니다. 일반 모드에서는 나라이름이 표시되고, 퀴즈 모드에서는 이름이 사라져 클릭으로 맞춰야 합니다.",
    i18n: {
      ko: {
        title: "세계지도",
        description: "지구본을 돌려가며 나라를 찾는 세계지도 퀴즈입니다. 일반 모드에서는 나라이름이 표시되고, 퀴즈 모드에서는 이름이 사라져 클릭으로 맞춰야 합니다.",
      },
      en: {
        title: "World Map",
        description: "A globe-based country quiz. Study mode shows country names, while quiz mode hides them so you can answer by clicking.",
      },
      ja: {
        title: "世界地図",
        description: "地球儀を回しながら国を探す世界地図クイズです。通常モードでは国名を表示し、クイズモードでは国名を隠してクリックで答えます。",
      },
      zh: {
        title: "世界地图",
        description: "一个可旋转地球仪的国家测验。普通模式显示国家名称，测验模式隐藏名称，需要点击作答。",
      },
      es: {
        title: "Mapa Mundial",
        description: "Un quiz de países con un globo interactivo. El modo normal muestra los nombres y el modo quiz los oculta para responder con clics.",
      },
    },
    category: "game",
    categoryLabel: "게임",
    thumbnail: "globe",
    app_url: "apps/globe/index.html",
    status: "ready",
    statusLabel: "실행 가능",
    tags: ["geography", "quiz", "world", "globe"],
  },
  {
    title: "조선왕조 가계도",
    description: "조선 왕의 순서와 혈통 관계를 스마트폰에서 세로로 읽기 쉽게 정리한 가계도입니다.",
    i18n: {
      ko: {
        title: "조선왕조 가계도",
        description: "조선 왕의 순서와 혈통 관계를 스마트폰에서 읽기 쉽게 정리한 가계도입니다.",
      },
      en: {
        title: "Joseon Dynasty Family Tree",
        description: "A mobile-friendly family tree showing the order and lineage of the kings of Joseon.",
      },
      ja: {
        title: "朝鮮王朝系図",
        description: "朝鮮王朝の王の順序と血統関係をスマートフォンでも読みやすく整理した系図です。",
      },
      zh: {
        title: "朝鲜王朝家谱",
        description: "以适合手机阅读的方式整理朝鲜王朝国王顺序与血统关系的家谱。",
      },
      es: {
        title: "Árbol de la Dinastía Joseon",
        description: "Un árbol genealógico móvil que muestra el orden y el linaje de los reyes de Joseon.",
      },
    },
    category: "study",
    categoryLabel: "학습",
    thumbnail: "joseon",
    app_url: "apps/joseon/index.html",
    status: "ready",
    statusLabel: "실행 가능",
    tags: ["history", "joseon", "memory"],
  },
  {
    title: "그리스 신화 계보",
    description: "원초신, 티탄, 올림포스 신과 주요 영웅의 관계를 SVG 계보도로 정리한 학습 앱입니다.",
    i18n: {
      ko: {
        title: "그리스 신화 계보",
        description: "원초신, 티탄, 올림포스 신과 주요 영웅의 관계를 SVG 계보도로 정리한 학습 앱입니다.",
      },
      en: {
        title: "Greek Myth Genealogy",
        description: "A study app that maps primordial gods, Titans, Olympians, and heroes as an SVG family tree.",
      },
      ja: {
        title: "ギリシャ神話系図",
        description: "原初神、ティタン、オリュンポス神、主な英雄の関係をSVG系図で整理した学習アプリです。",
      },
      zh: {
        title: "希腊神话谱系",
        description: "用SVG家谱图整理原初神、泰坦、奥林匹斯诸神和主要英雄关系的学习应用。",
      },
      es: {
        title: "Genealogía Griega",
        description: "Una app de estudio que organiza dioses primordiales, titanes, olímpicos y héroes en un árbol SVG.",
      },
    },
    category: "study",
    categoryLabel: "학습",
    thumbnail: "greekmyth",
    app_url: "apps/greekmyth/index.html",
    status: "ready",
    statusLabel: "실행 가능",
    tags: ["mythology", "greek", "genealogy", "svg"],
  },
  {
    title: "Harmony",
    description: "코드를 선택하면 건반 위에서 눌린 음을 보여주고 실제 화음으로 들려주는 미니 신시사이저입니다.",
    i18n: {
      ko: {
        title: "Harmony",
        description: "코드를 선택하면 건반 위에서 눌린 음을 보여주고 실제 화음으로 들려주는 미니 신시사이저입니다.",
      },
      en: {
        title: "Harmony",
        description: "A mini synthesizer that shows selected chord tones on a keyboard and plays the actual harmony.",
      },
      ja: {
        title: "Harmony",
        description: "コードを選ぶと鍵盤上で押された音を表示し、実際の和音を鳴らすミニシンセです。",
      },
      zh: {
        title: "Harmony",
        description: "一个迷你合成器，选择和弦后会在键盘上显示按下的音并播放实际和声。",
      },
      es: {
        title: "Harmony",
        description: "Un minisintetizador que muestra las notas del acorde en el teclado y reproduce la armonía real.",
      },
    },
    category: "music",
    categoryLabel: "음악",
    thumbnail: "harmony",
    app_url: "apps/harmony/index.html",
    status: "ready",
    statusLabel: "실행 가능",
    tags: ["music", "chord", "keyboard"],
  },
  {
    title: "명상 사운드",
    description: "수딩 사운드를 겹쳐 믹싱하고 BGM을 함께 재생하는 명상용 오디오 플레이어입니다.",
    i18n: {
      ko: {
        title: "명상 사운드",
        description: "수딩 사운드를 겹쳐 믹싱하고 BGM을 함께 재생하는 명상용 오디오 플레이어입니다.",
      },
      en: {
        title: "Meditation Sound Player",
        description: "A meditation audio player for layering soothing sounds with background music.",
      },
      ja: {
        title: "瞑想サウンドプレイヤー",
        description: "癒やしの環境音を重ね、BGMと一緒に再生できる瞑想用オーディオプレイヤーです。",
      },
      zh: {
        title: "冥想声音播放器",
        description: "一款可叠加舒缓环境音并播放背景音乐的冥想音频播放器。",
      },
      es: {
        title: "Reproductor de Meditación",
        description: "Un reproductor para meditación que mezcla sonidos relajantes con música de fondo.",
      },
    },
    category: "music",
    categoryLabel: "음악",
    thumbnail: "meditation",
    app_url: "apps/meditation/index.html",
    status: "ready",
    statusLabel: "실행 가능",
    tags: ["meditation", "audio", "bgm", "ambient"],
  },
];

const uiText = {
  ko: {
    htmlLang: "ko",
    language: "언어",
    menuLabel: "앱 목록",
    open: "열기",
    soon: "준비중",
    openAria: (title) => `${title} 열기`,
    soonAria: (title) => `${title} 준비중`,
  },
  en: {
    htmlLang: "en",
    language: "Language",
    menuLabel: "Apps",
    open: "open",
    soon: "soon",
    openAria: (title) => `Open ${title}`,
    soonAria: (title) => `${title} is coming soon`,
  },
  ja: {
    htmlLang: "ja",
    language: "言語",
    menuLabel: "アプリ一覧",
    open: "開く",
    soon: "準備中",
    openAria: (title) => `${title}を開く`,
    soonAria: (title) => `${title}は準備中です`,
  },
  zh: {
    htmlLang: "zh-Hans",
    language: "语言",
    menuLabel: "应用列表",
    open: "打开",
    soon: "即将推出",
    openAria: (title) => `打开${title}`,
    soonAria: (title) => `${title}即将推出`,
  },
  es: {
    htmlLang: "es",
    language: "Idioma",
    menuLabel: "Aplicaciones",
    open: "abrir",
    soon: "pronto",
    openAria: (title) => `Abrir ${title}`,
    soonAria: (title) => `${title} estará disponible pronto`,
  },
};

const appNameList = document.querySelector("#app-name-list");
const detailTitle = document.querySelector("#detail-title");
const detailDescription = document.querySelector("#detail-description");
const goLink = document.querySelector("#go-link");
const languageSelect = document.querySelector("#language-select");
const languageLabel = document.querySelector("#language-label");

let selectedIndex = 0;
let currentLanguage = localStorage.getItem("ashosho-language") || "ko";
if (!uiText[currentLanguage]) currentLanguage = "ko";

function getText() {
  return uiText[currentLanguage] || uiText.ko;
}

function getLocalizedApp(app) {
  const localized = app.i18n?.[currentLanguage] || app.i18n?.ko || app;
  return {
    ...app,
    title: localized.title || app.title,
    description: localized.description ?? app.description,
  };
}

function applyLanguage() {
  const text = getText();

  document.documentElement.lang = text.htmlLang;
  languageLabel.textContent = text.language;
  languageSelect.setAttribute("aria-label", text.language);
  appNameList.setAttribute("aria-label", text.menuLabel);
  appNameList.closest(".app-list-pane")?.setAttribute("aria-label", text.menuLabel);
}

function renderList() {
  appNameList.innerHTML = apps
    .map((app, index) => {
      const localizedApp = getLocalizedApp(app);
      return `
        <button
          class="app-name-button ${index === selectedIndex ? "is-active" : ""}"
          type="button"
          data-index="${index}"
          aria-current="${index === selectedIndex ? "true" : "false"}"
        >
          ${localizedApp.title}
        </button>
      `;
    })
    .join("");
}

function renderDetail() {
  const app = getLocalizedApp(apps[selectedIndex]);
  const text = getText();
  const isReady = app.status === "ready" && app.app_url;

  detailTitle.textContent = app.title;
  detailDescription.textContent = app.description;
  detailDescription.hidden = !app.description;

  if (isReady) {
    goLink.textContent = "go";
    goLink.href = app.app_url;
    goLink.setAttribute("aria-label", text.openAria(app.title));
    goLink.removeAttribute("aria-disabled");
  } else {
    goLink.textContent = "soon";
    goLink.removeAttribute("href");
    goLink.setAttribute("aria-label", text.soonAria(app.title));
    goLink.setAttribute("aria-disabled", "true");
  }
}

function selectApp(index) {
  selectedIndex = index;
  renderList();
  renderDetail();
}

appNameList.addEventListener("click", (event) => {
  const button = event.target.closest(".app-name-button");
  if (!button) return;
  selectApp(Number(button.dataset.index));
});

languageSelect.value = currentLanguage;
languageSelect.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  localStorage.setItem("ashosho-language", currentLanguage);
  applyLanguage();
  renderList();
  renderDetail();
});

applyLanguage();
renderList();
renderDetail();
