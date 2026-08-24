# Radius

B2B 톤에 맞춰 과도하게 둥근 형태 지양, 각진 느낌 유지.

| 이름 | 값 | 용도 | 미리보기 |
|---|---|---|---|
| radius-1 | 4px | 배지, 체크박스, 작은 태그 | <span class="mini-radius" style="width:32px;height:24px;border-radius:4px;"></span> |
| radius-2 | 6px | 버튼, 인풋 | <span class="mini-radius" style="width:32px;height:24px;border-radius:6px;"></span> |
| radius-3 | 8px | 카드, 드롭다운 | <span class="mini-radius" style="width:32px;height:24px;border-radius:8px;"></span> |
| radius-4 | 12px | 모달, 바텀시트, 큰 컨테이너 | <span class="mini-radius" style="width:32px;height:24px;border-radius:12px;"></span> |
| radius-full | 9999px | 필(pill) — 가로≠세로 요소 (버튼, 배지, 토글) | <span class="mini-radius" style="width:40px;height:20px;border-radius:9999px;"></span> |
| radius-circle | 50% | 완전한 원 — 가로=세로 요소 (정사각형 아바타) | <span class="mini-radius" style="width:24px;height:24px;border-radius:50%;"></span> |

핸드오프 시 "height/2" 값 대신 항상 `9999px`(필) 또는 `50%`(원) 그대로 전달 — 높이가 나중에 바뀌어도 자동으로 형태 유지됨.

---
