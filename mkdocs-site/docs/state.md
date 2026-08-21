# State

색을 새로 만들지 않고, 기존 50~900 스케일에서 단계를 이동하는 방식으로 통일.

| 상태 | 규칙 |
|---|---|
| Default | 기본 단계 (예: primary-600) |
| Hover | 1단계 더 깊게 (primary-700) |
| Pressed/Active | 2단계 더 깊게 (primary-800) |
| Selected(선택 유지) | 배경: surface-accent / 텍스트: primary-600 |
| Disabled | opacity 40%, cursor: not-allowed (컬러 배경 위 사용이 잦아지면 전용 gray 토큰으로 전환 검토) |
| Focus(키보드) | 2px 링(primary-600), 요소에서 2px 띄움. `:focus-visible` 사용 (마우스 클릭 시엔 안 보이게) |

- Hover는 `@media (hover: hover)` 안에서만 적용 (모바일 터치에서 hover 고착 방지)

---
