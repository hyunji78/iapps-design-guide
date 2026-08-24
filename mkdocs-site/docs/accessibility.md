# Inclusive Design

| 원칙 | 내용 |
|---|---|
| 텍스트 대비 | 본문 최소 4.5:1, 큰 텍스트·아이콘 3:1 이상 |
| 터치·클릭 영역 | 단독 클릭 요소 최소 40×40px |
| 색만으로 의미 전달 금지 | 에러/성공/경고는 색과 함께 아이콘·텍스트 라벨 항상 병기 |
| 키보드 접근성 | 모든 인터랙티브 요소 Tab 접근 가능, 포커스 시 2px 링 |
| 텍스트 확대 대응 | 폰트 크기 rem 단위 사용 |

<div class="contrast-scale">
  <div class="contrast-item" style="background:#FBFCFF;color:#1A1C20;">본문 텍스트<span class="contrast-caption">4.5:1 이상</span></div>
  <div class="contrast-item" style="background:#FBFCFF;color:#555D6D;font-size:18px;">큰 텍스트<span class="contrast-caption">3:1 이상</span></div>
</div>

<div class="state-scale">
  <div class="state-item"><div class="state-chip" style="background:#EFFAF6;color:#158456;"><svg class="i-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10"/></svg>발송 완료</div><span class="state-label">색+아이콘+텍스트</span></div>
  <div class="state-item"><div class="state-chip" style="background:#FEF1F2;color:#E60F24;"><svg class="i-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v4"/><path d="M12 16v.01"/><path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z"/></svg>발송 실패</div><span class="state-label">색+아이콘+텍스트</span></div>
</div>

<div class="touch-target-demo">
  <div class="touch-target-box"><svg class="i-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12"/><path d="M6 6l12 12"/></svg></div>
  <span class="visual-note" style="margin:0;">점선 = 최소 40×40px 클릭 영역</span>
</div>

---
