# Checkbox / Radio / Toggle

<div class="component-preview">
  <div class="preview-item">
    <div class="preview-row">
      <div class="mock-checkbox"><svg class="i-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10"/></svg></div>
      <div class="mock-checkbox is-checked"><svg class="i-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10"/></svg></div>
    </div>
    <span class="preview-caption">Checkbox — 선택 안 됨 / 선택됨</span>
  </div>
  <div class="preview-item">
    <div class="preview-row">
      <div class="mock-radio"></div>
      <div class="mock-radio is-checked"></div>
    </div>
    <span class="preview-caption">Radio — 선택 안 됨 / 선택됨</span>
  </div>
  <div class="preview-item">
    <div class="preview-row">
      <div class="mock-toggle"></div>
      <div class="mock-toggle is-checked"></div>
    </div>
    <span class="preview-caption">Toggle — Off / On</span>
  </div>
</div>

- Checkbox·Radio 20×20px, Toggle 40×24px
- 색상은 White(#FBFCFF)/Primary-500(#2D70F8)/Gray-400(#DCDEE3) 3가지만 사용
- 선택됨: 배경·링·점 Primary-500, 아이콘/갭 White / 선택 안 됨: 배경·갭 White, 테두리·아이콘·점 Gray-400
- Checkbox는 테두리+배경 위에 체크 아이콘(선택 안 됨일 땐 Gray-400 고스트 아이콘), Radio는 링(4px)+중앙 점 구조
- Checkbox radius-1(4px), Radio·Toggle radius-full
- SVG 기반으로 제작 (PNG 이미지 방식 지양)
