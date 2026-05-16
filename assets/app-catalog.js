const apps = [
  {
    title: "로또번호 생성기",
    description: "겹치지 않는 6개 번호를 빠르게 뽑고 조합을 다시 만들 수 있는 간단한 도구입니다.",
    category: "tool",
    categoryLabel: "도구",
    thumbnail: "lotto",
    app_url: "apps/lotto/index.html",
    status: "ready",
    statusLabel: "실행 가능",
    tags: ["lotto", "random", "utility"],
  },
  {
    title: "3x3 슬라이드 퍼즐",
    description: "빈 칸을 이용해 숫자 타일을 맞추는 짧은 퍼즐게임입니다.",
    category: "game",
    categoryLabel: "게임",
    thumbnail: "puzzle",
    app_url: "apps/puzzle/index.html",
    status: "ready",
    statusLabel: "실행 가능",
    tags: ["puzzle", "game", "logic"],
  },
  {
    title: "집중 타이머",
    description: "짧은 몰입 세션과 휴식 시간을 기록하는 생산성 앱 예정작입니다.",
    category: "coming-soon",
    categoryLabel: "준비중",
    thumbnail: "timer",
    app_url: "",
    status: "coming-soon",
    statusLabel: "준비중",
    tags: ["timer", "focus", "productivity"],
  },
];

const appNameList = document.querySelector("#app-name-list");
const detailMeta = document.querySelector("#detail-meta");
const detailTitle = document.querySelector("#detail-title");
const detailDescription = document.querySelector("#detail-description");
const detailTags = document.querySelector("#detail-tags");
const goLink = document.querySelector("#go-link");

let selectedIndex = 0;

function renderList() {
  appNameList.innerHTML = apps
    .map(
      (app, index) => `
        <button
          class="app-name-button ${index === selectedIndex ? "is-active" : ""}"
          type="button"
          data-index="${index}"
          aria-current="${index === selectedIndex ? "true" : "false"}"
        >
          ${app.title}
        </button>
      `
    )
    .join("");
}

function renderDetail() {
  const app = apps[selectedIndex];
  const isReady = app.status === "ready" && app.app_url;

  detailMeta.innerHTML = `
    <span class="badge">${app.categoryLabel}</span>
    <span class="badge ${app.status}">${app.statusLabel}</span>
  `;
  detailTitle.textContent = app.title;
  detailDescription.textContent = app.description;
  detailTags.innerHTML = app.tags.map((tag) => `<span>${tag}</span>`).join("");

  if (isReady) {
    goLink.textContent = "go";
    goLink.href = app.app_url;
    goLink.setAttribute("aria-label", `${app.title} 열기`);
    goLink.removeAttribute("aria-disabled");
  } else {
    goLink.textContent = "soon";
    goLink.removeAttribute("href");
    goLink.setAttribute("aria-label", `${app.title} 준비중`);
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

renderList();
renderDetail();
