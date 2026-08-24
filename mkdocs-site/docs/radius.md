# Radius

B2B 톤에 맞춰 과도하게 둥근 형태 지양, 각진 느낌 유지.

<div class="radius-scale">
  <div class="radius-item"><div class="radius-shape" style="width:64px;height:64px;border-radius:4px;"></div><span class="radius-label">radius-1<br>4px</span></div>
  <div class="radius-item"><div class="radius-shape" style="width:64px;height:64px;border-radius:6px;"></div><span class="radius-label">radius-2<br>6px</span></div>
  <div class="radius-item"><div class="radius-shape" style="width:64px;height:64px;border-radius:8px;"></div><span class="radius-label">radius-3<br>8px</span></div>
  <div class="radius-item"><div class="radius-shape" style="width:64px;height:64px;border-radius:12px;"></div><span class="radius-label">radius-4<br>12px</span></div>
  <div class="radius-item"><div class="radius-shape" style="width:96px;height:48px;border-radius:9999px;"></div><span class="radius-label">radius-full<br>pill</span></div>
  <div class="radius-item"><div class="radius-shape" style="width:64px;height:64px;border-radius:50%;"></div><span class="radius-label">radius-circle<br>50%</span></div>
</div>

| 이름 | 값 | 용도 |
|---|---|---|
| radius-1 | 4px | 배지, 체크박스, 작은 태그 |
| radius-2 | 6px | 버튼, 인풋 |
| radius-3 | 8px | 카드, 드롭다운 |
| radius-4 | 12px | 모달, 바텀시트, 큰 컨테이너 |
| radius-full | 9999px | 필(pill) — 가로≠세로 요소 (버튼, 배지, 토글) |
| radius-circle | 50% | 완전한 원 — 가로=세로 요소 (정사각형 아바타) |

핸드오프 시 "height/2" 값 대신 항상 `9999px`(필) 또는 `50%`(원) 그대로 전달 — 높이가 나중에 바뀌어도 자동으로 형태 유지됨.

---
