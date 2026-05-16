# 바이브코딩 앱박스

설치형 WordPress를 앱 포털로 쓰고, 각 앱은 외부 정적 호스팅에 따로 배포하는 구성을 위한 샘플입니다.

## 구성

- `index.html`: 앱 모음 포털 페이지
- `assets/app-catalog.js`: 앱 카드 데이터와 검색/필터 로직
- `assets/styles.css`: 포털과 샘플 앱 공용 스타일
- `apps/lotto/index.html`: 샘플 로또번호 생성기
- `apps/puzzle/index.html`: 샘플 4x4 슬라이드 퍼즐
- `wordpress-custom-html.html`: WordPress 커스텀 HTML 블록에 붙여 넣을 수 있는 포털 조각

## 사용 방법

브라우저에서 `index.html`을 열면 바로 확인할 수 있습니다. 앱 카탈로그의 실제 배포 URL은 `assets/app-catalog.js`의 `app_url` 값을 각 정적 호스팅 URL로 바꾸면 됩니다.

WordPress에 올릴 때는 `wordpress-custom-html.html` 내용을 페이지의 Custom HTML 블록에 넣고, `app_url`을 실제 앱 URL로 교체하세요.

## 권장 배포 흐름

1. 앱별 정적 사이트를 GitHub Pages, Vercel, Netlify 중 하나에 배포합니다.
2. WordPress에는 `/apps` 페이지를 만들고 `wordpress-custom-html.html` 내용을 넣습니다.
3. 각 카드의 `app_url`을 실제 앱 실행 URL로 교체합니다.
4. 모바일과 데스크톱에서 카드 레이아웃, 새 탭 실행, 앱 접근 권한을 확인합니다.
