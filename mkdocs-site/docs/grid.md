# Grid

<div class="grid-demo">
  <div class="grid-demo-label">모바일 (~767px) · 4칼럼 · 거터 16px · 여백 16px</div>
  <div class="grid-demo-frame" style="padding:0 16px; gap:16px;">
    <div class="grid-demo-col"></div><div class="grid-demo-col"></div><div class="grid-demo-col"></div><div class="grid-demo-col"></div>
  </div>
  <div class="grid-demo-label">태블릿 (768~1023px) · 8칼럼 · 거터 24px · 여백 32px</div>
  <div class="grid-demo-frame" style="padding:0 32px; gap:24px;">
    <div class="grid-demo-col"></div><div class="grid-demo-col"></div><div class="grid-demo-col"></div><div class="grid-demo-col"></div><div class="grid-demo-col"></div><div class="grid-demo-col"></div><div class="grid-demo-col"></div><div class="grid-demo-col"></div>
  </div>
  <div class="grid-demo-label">데스크톱 (1024px~) · 12칼럼 · 거터 24px · 여백 40px</div>
  <div class="grid-demo-frame" style="padding:0 40px; gap:24px;">
    <div class="grid-demo-col"></div><div class="grid-demo-col"></div><div class="grid-demo-col"></div><div class="grid-demo-col"></div><div class="grid-demo-col"></div><div class="grid-demo-col"></div><div class="grid-demo-col"></div><div class="grid-demo-col"></div><div class="grid-demo-col"></div><div class="grid-demo-col"></div><div class="grid-demo-col"></div><div class="grid-demo-col"></div>
  </div>
</div>
<p class="visual-note">칼럼 폭은 화면 너비에 따라 상대적으로 늘어나며, 위 다이어그램은 칼럼 수·거터·여백의 비율만 보여줘요.</p>

| 구간 | 너비 | 칼럼 | 거터 | 좌우 여백 |
|---|---|---|---|---|
| 모바일 | ~767px | 4칼럼 (보통 1열 스택) | 16px | 16px |
| 태블릿 | 768~1023px | 8칼럼 | 24px | 32px |
| 데스크톱 | 1024px~ | 12칼럼 | 24px | 40px |

| 구분 | 일반 웹(홈페이지·랜딩·팝업) | CMS 대시보드 |
|---|---|---|
| 정렬 방식 | 중앙 정렬(fixed) | 꽉 채움(fluid) |
| 최대 너비 | 1280px | 없음 |
| 콘텐츠 안쪽 여백 | 데스크톱 40px | 32px |
| 사이드바 | 없음 | 256px 고정 → 태블릿에서 64px 아이콘 레일 |
| 그리드 용도 | 텍스트·이미지 블록 정렬 | 카드/차트/표 배치 (3+3+3+3, 6+6, 12 등) |

---
