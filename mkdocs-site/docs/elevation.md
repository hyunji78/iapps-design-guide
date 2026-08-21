# Elevation

| 단계 | 용도 | CSS |
|---|---|---|
| shadow-1 | 살짝 뜬 카드, hover | `0 1px 2px rgba(26,28,32,.06), 0 1px 3px rgba(26,28,32,.08)` |
| shadow-2 | 드롭다운, 툴팁, 팝오버 | `0 2px 4px rgba(26,28,32,.06), 0 4px 6px rgba(26,28,32,.08)` |
| shadow-3 | 모달, 다이얼로그 | `0 4px 6px rgba(26,28,32,.08), 0 10px 15px rgba(26,28,32,.10)` |
| shadow-4 | 토스트, 최상단 알림 | `0 8px 10px rgba(26,28,32,.08), 0 20px 25px rgba(26,28,32,.12)` |

색상 매칭 규칙은 1번 Color 섹션 참고.

## 그라데이션 글로우 (별도 토큰, 장식용 강조 — 랜딩 히어로 CTA 등 제한적 사용)

| 항목 | 값 예시 |
|---|---|
| 도형 크기 | 대상 요소 대비 -6px~+16px |
| 그라데이션 | linear 135deg, Primary 300→600 |
| Blur | 22px (Figma "Layer Blur") |
| 불투명도 | 55% |
| 쌓임 순서 | 콘텐츠보다 뒤 (z-index 낮음) |

CSS 구현: 별도 `::before`/wrapper div에 `filter: blur()` — box-shadow는 그라데이션 미지원(Figma Drop Shadow와 동일한 제약). 부모에 `overflow: hidden` 있으면 잘리므로 확인 필요.

---
