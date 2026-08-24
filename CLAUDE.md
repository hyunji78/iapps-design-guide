# i-apps Design System — 작업 지침

## 프로젝트 구조

- `mkdocs-site/docs/*.md` — 실제 배포되는 개별 문서 페이지 (Color, Typography, Spacing, Grid, International, Elevation, Radius, Iconography, State, Inclusive Design, Components 3종, Voice and Tone, Writing, 디자인 생성 금지사항, 문서 관리 방법). 각 페이지에는 시각적 미리보기(막대/도형/아이콘/컴포넌트 목업 등)가 표의 "미리보기" 컬럼이나 컴포넌트 프리뷰 블록으로 들어가 있음.
- `mkdocs-site/docs/assets/iapps-design-system-guideline.txt` — 위 개별 페이지들을 하나로 합친 **순수 텍스트 버전**. index.md의 "전체 문서 MD 파일 다운로드" 링크가 이 파일을 가리킴.
- `mkdocs-site/docs/index.md` — 다운로드 링크는 `assets/iapps-design-system-guideline.txt`를 `download="iapps-design-system-guideline.md"` 속성으로 참조함. **절대 `.md` 확장자로 되돌리지 말 것** — MkDocs는 `docs_dir` 안의 모든 `.md` 파일을 자동으로 페이지(HTML)로 빌드하고 그 링크를 html 경로로 재작성해버려서, `.md`로 두면 사용자가 다운로드 버튼을 눌러도 실제로는 렌더링된 html이 받아짐. `.txt`로 두고 `download` 속성으로만 파일명을 `.md`처럼 보이게 하는 현재 방식을 유지해야 함.

## 필수 규칙 — 개별 문서 수정 시 통합 파일 동기화

`mkdocs-site/docs/*.md` 개별 페이지의 **텍스트·수치·색상 값**을 수정했다면(사용자가 직접 고쳤든, Claude Code로 고쳤든), 같은 작업 안에서 반드시 `mkdocs-site/docs/assets/iapps-design-system-guideline.txt`의 해당 섹션도 같이 갱신할 것. 둘 중 하나만 고치고 끝내지 말 것.

- 통합 파일은 개별 페이지의 **시각 자료(미리보기 컬럼의 span/div, 인라인 SVG, mock-* 컴포넌트 블록)는 제외**하고, 표/불릿/본문 텍스트 등 순수 마크다운 내용만 반영한다 — 시각 프리뷰는 사이트 자체의 CSS(brand.css)에 의존하므로 별도 텍스트 파일에 넣어도 의미가 없음.
- 섹션 번호와 순서는 `mkdocs-site/mkdocs.yml`의 `nav` 순서를 따른다 (Color → Typography → Spacing → Grid → International Design → Elevation → Radius → Iconography → State → Inclusive Design → Components 3종 → Voice and Tone → Writing → 디자인 생성 금지사항 → 문서 관리 방법).
- 새 페이지를 추가하거나 nav 구조를 바꾼 경우, 통합 파일의 섹션 번호도 그에 맞게 재정렬한다.

## 배포 워크플로

이 프로젝트의 "배포"는 다음 두 단계로 이뤄진다 (하나만 하면 사용자가 못 봄):

1. `git add` + `git commit` + `git push origin main` — 소스(마크다운/CSS) 를 `hyunji78/iapps-design-guide` 저장소 main 브랜치에 반영
2. `cd mkdocs-site && mkdocs gh-deploy --force` — 실제 라이브 사이트(`gh-pages` 브랜치, https://hyunji78.github.io/iapps-design-guide/)에 빌드 결과 반영

1번만 하고 2번을 빠뜨리면 사용자에게는 변경 사항이 보이지 않으므로, 문서/스타일을 고친 작업은 항상 두 단계를 함께 수행한다.

## 시각 자료 스타일 규칙

- 색상·크기 등 값이 있는 표에는 별도 블록이 아니라 표 안에 **"미리보기" 컬럼**을 추가해 값 옆에서 바로 확인할 수 있게 한다 (Spacing/Radius/Elevation/Typography/Grid/Iconography/State/Inclusive Design 페이지 참고).
- 원시 `<table>`에 직접 `class`를 주지 말 것 — Material 테마는 `class` 없는 `<table>`에만 기본 스타일(테두리·패딩·hover)을 적용하므로, 예외적인 스타일이 필요하면 표를 감싸는 `<div class="...">`에 class를 주고 CSS는 `.클래스 table ...` 형태로 작성한다 (`elevation.md`의 `.glow-table` 참고).
