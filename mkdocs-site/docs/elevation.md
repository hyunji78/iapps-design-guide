# Elevation

| 단계 | 용도 | CSS | 미리보기 |
|---|---|---|---|
| shadow-1 | 살짝 뜬 카드, hover | `0 1px 2px rgba(26,28,32,.06), 0 1px 3px rgba(26,28,32,.08)` | <span class="mini-elevation" style="box-shadow:0 1px 2px rgba(26,28,32,.06), 0 1px 3px rgba(26,28,32,.08);"></span> |
| shadow-2 | 드롭다운, 툴팁, 팝오버 | `0 2px 4px rgba(26,28,32,.06), 0 4px 6px rgba(26,28,32,.08)` | <span class="mini-elevation" style="box-shadow:0 2px 4px rgba(26,28,32,.06), 0 4px 6px rgba(26,28,32,.08);"></span> |
| shadow-3 | 모달, 다이얼로그 | `0 4px 6px rgba(26,28,32,.08), 0 10px 15px rgba(26,28,32,.10)` | <span class="mini-elevation" style="box-shadow:0 4px 6px rgba(26,28,32,.08), 0 10px 15px rgba(26,28,32,.10);"></span> |
| shadow-4 | 토스트, 최상단 알림 | `0 8px 10px rgba(26,28,32,.08), 0 20px 25px rgba(26,28,32,.12)` | <span class="mini-elevation" style="box-shadow:0 8px 10px rgba(26,28,32,.08), 0 20px 25px rgba(26,28,32,.12);"></span> |

색상 매칭 규칙은 1번 Color 섹션 참고.

## 그라데이션 글로우 (별도 토큰, 장식용 강조 — 랜딩 히어로 CTA 등 제한적 사용)

<div class="glow-table">
<table>
<thead><tr><th>항목</th><th>값 예시</th><th>미리보기</th></tr></thead>
<tbody>
<tr><td>도형 크기</td><td>대상 요소 대비 -6px~+16px</td><td rowspan="5" style="vertical-align:middle;text-align:center;min-width:220px;">
<div class="glow-demo-wrap">
  <div class="glow-demo-blur"></div>
  <div class="glow-demo-card">CTA</div>
</div>
</td></tr>
<tr><td>그라데이션</td><td>linear 135deg, Primary 300→600</td></tr>
<tr><td>Blur</td><td>22px (Figma "Layer Blur")</td></tr>
<tr><td>불투명도</td><td>55%</td></tr>
<tr><td>쌓임 순서</td><td>콘텐츠보다 뒤 (z-index 낮음)</td></tr>
</tbody>
</table>
</div>

CSS 구현: 별도 `::before`/wrapper div에 `filter: blur()` — box-shadow는 그라데이션 미지원(Figma Drop Shadow와 동일한 제약). 부모에 `overflow: hidden` 있으면 잘리므로 확인 필요.

---
