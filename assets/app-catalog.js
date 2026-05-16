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

const grid = document.querySelector("#catalog-grid");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#search-input");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const totalCount = document.querySelector("#total-count");
const readyCount = document.querySelector("#ready-count");

let currentFilter = "all";
let searchTerm = "";

function renderThumbnail(type) {
  if (type === "lotto") {
    return `
      <div class="thumb-panel" aria-hidden="true">
        <div class="lotto-balls">
          <span>7</span><span>12</span><span>19</span><span>28</span><span>34</span><span>41</span>
        </div>
      </div>
    `;
  }

  if (type === "puzzle") {
    return `
      <div class="thumb-panel" aria-hidden="true">
        <div class="puzzle-board">
          <span>1</span><span>2</span><span>3</span>
          <span>4</span><span>8</span><span>5</span>
          <span>7</span><span>6</span><span></span>
        </div>
      </div>
    `;
  }

  return `
    <div class="thumb-panel" aria-hidden="true">
      <div class="timer-bars"><span></span><span></span><span></span></div>
    </div>
  `;
}

function normalize(value) {
  return value.toLowerCase().trim();
}

function isVisible(app) {
  const matchesFilter = currentFilter === "all" || app.category === currentFilter;
  const haystack = normalize(
    [app.title, app.description, app.categoryLabel, app.statusLabel, ...app.tags].join(" ")
  );
  return matchesFilter && haystack.includes(searchTerm);
}

function renderApps() {
  const visibleApps = apps.filter(isVisible);
  emptyState.hidden = visibleApps.length > 0;

  grid.innerHTML = visibleApps
    .map((app) => {
      const disabled = app.status !== "ready";
      const action = disabled
        ? `<a class="launch-link" aria-disabled="true">준비중</a>`
        : `<a class="launch-link" href="${app.app_url}" target="_blank" rel="noopener">실행하기</a>`;

      return `
        <article class="app-card">
          <div class="app-thumb">${renderThumbnail(app.thumbnail)}</div>
          <div class="app-content">
            <div class="app-meta">
              <span class="badge">${app.categoryLabel}</span>
              <span class="badge ${app.status}">${app.statusLabel}</span>
            </div>
            <h2>${app.title}</h2>
            <p>${app.description}</p>
            <div class="tags" aria-label="태그">
              ${app.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <div class="card-actions">${action}</div>
          </div>
        </article>
      `;
    })
    .join("");
}

function updateStats() {
  totalCount.textContent = String(apps.length);
  readyCount.textContent = String(apps.filter((app) => app.status === "ready").length);
}

searchInput.addEventListener("input", (event) => {
  searchTerm = normalize(event.target.value);
  renderApps();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderApps();
  });
});

updateStats();
renderApps();
