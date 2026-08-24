# i-apps Design System 사이트 — 설정 가이드

## 1. 처음 한 번만: 설치

터미널(VSCode 안 터미널 써도 됨)에서:

```bash
pip install mkdocs-material
```

## 2. 로컬에서 미리보기

이 폴더(`mkdocs-site`) 안에서 실행해야 함. 터미널 열었을 때 프로젝트 최상위 폴더(`iapps_design_system`)에 있다면 먼저 아래로 이동:

```bash
cd mkdocs-site
mkdocs serve
```

터미널에 뜨는 주소(보통 `http://127.0.0.1:8000`)를 브라우저로 열면 실시간으로 확인 가능. `docs/` 안의 `.md` 파일을 수정하면 저장하자마자 화면에 바로 반영됨.

## 3. 내용 수정하는 법

`docs/` 폴더 안에 파일이 섹션별로 나뉘어 있음 (`color.md`, `typography.md` 등). 원하는 파일 열어서 마크다운 그대로 수정하면 됨. 페이지 순서나 그룹은 `mkdocs.yml`의 `nav:` 부분에서 바꿀 수 있음.

## 4. GitHub Pages로 배포

### 처음 한 번만

이미 Git 계정이 있으니, 터미널에서 **`iapps_design_system` 최상위 폴더**로 이동한 뒤:

```bash
# 이 폴더를 깃 저장소로 만들고 GitHub에 새 repo를 만든 뒤 연결
git init
git add .
git commit -m "init design system docs"
git branch -M main
git remote add origin <본인 repo 주소>
git push -u origin main
```

### 이후 수정할 때마다 (평소 배포 루틴)

내용을 고칠 때마다 아래 순서로. 먼저 **`mkdocs-site` 폴더로 이동**:

```bash
cd mkdocs-site
```

그다음 두 단계:

```bash
# 1. 수정한 원본(.md 등)을 GitHub(main 브랜치)에 저장 — 수정 기록이 남음
git add .
git commit -m "수정 내용 설명"
git push

# 2. 실제 사이트에 배포
mkdocs gh-deploy
```

`git add/commit/push`는 "원본 파일을 저장소에 백업 + 기록"하는 것이고, `mkdocs gh-deploy`는 그 원본을 빌드해서 실제 보여지는 사이트(`gh-pages` 브랜치)에 올리는 것 — **둘 다 해야** 원본도 안전하게 남고 사이트도 업데이트됨. `mkdocs gh-deploy`만 하면 사이트는 바뀌지만 원본 수정 기록은 저장소에 안 남으니 주의.

몇 분 뒤 `https://<github아이디>.github.io/<repo이름>/` 주소에서 확인 가능.

**참고**: GitHub Pages 무료 플랜은 사이트가 공개 상태로 열림(엔터프라이즈 아니면 완전 비공개 불가). 검색엔진에 안 잡히게 하려면 저장소 설정에서 `Settings → Pages`에 안내된 대로 두거나, `docs/robots.txt`에 아래 내용 추가:

```
User-agent: *
Disallow: /
```

## 5. 브랜드 폰트(Pretendard) — 이미 적용해둠

`docs/stylesheets/brand.css` 맨 위에 Pretendard를 인터넷에서 바로 불러오는 링크(CDN)를 한 줄 넣어놨어요. 폰트 파일을 직접 다운받아 넣을 필요 없이, 사이트를 열 때마다 자동으로 그 폰트를 가져와서 적용돼요. 별도로 하실 일 없음.

## 6. 다운로드 링크 / 바로가기 링크 — 이미 적용해둠

`docs/index.md` 맨 위에 두 가지를 추가해뒀어요.

- **전체 문서 다운로드**: `docs/assets/iapps-design-system-guideline.md` 파일을 두고, 그 파일로 가는 링크를 걸어둔 것뿐이에요. 서버나 API 필요 없이, 그냥 "파일 하나 + 그 파일로 가는 링크" 조합이에요.
- **바로가기**: Figma·홈페이지·가이드 문서로 가는 링크 3개를 넣어뒀어요. Figma 링크는 아직 실제 주소가 아니라 자리표시(placeholder)라서, `docs/index.md` 파일을 열어서 본인 Figma 프로젝트 주소로 바꿔주세요.

새 바로가기 링크를 추가하고 싶으면 `docs/index.md`에 이 형식으로 한 줄 추가하면 됨:

```
- [보여줄 이름](https://실제주소)
```

## 앞으로 새 섹션 추가할 때

1. `docs/`에 새 `.md` 파일 생성
2. `mkdocs.yml`의 `nav:`에 한 줄 추가
3. "[이후 수정할 때마다](#이후-수정할-때마다-평소-배포-루틴)" 순서대로 `git add/commit/push` 후 `mkdocs gh-deploy`
