# Checkbox / Radio / Toggle

<div class="component-preview">
  <div class="preview-item">
    <div class="preview-row">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_22_43)"><path d="M15 1H5C2.79086 1 1 2.79086 1 5V15C1 17.2091 2.79086 19 5 19H15C17.2091 19 19 17.2091 19 15V5C19 2.79086 17.2091 1 15 1Z" fill="#FBFCFF" stroke="#DCDEE3" stroke-width="1.5"/><path d="M5.5 10.2L8.5 13L14.5 6.5" stroke="#DCDEE3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_22_43"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
      <div class="mock-checkbox is-checked"><svg class="i-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10"/></svg></div>
    </div>
    <span class="preview-caption">Checkbox — 선택 안 됨 / 선택됨</span>
  </div>
  <div class="preview-item">
    <div class="preview-row">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_22_54)"><path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" fill="#FBFCFF" stroke="#DCDEE3" stroke-width="1.5"/><path d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z" fill="#DCDEE3"/></g><defs><clipPath id="clip0_22_54"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
      <div class="mock-radio is-checked"></div>
    </div>
    <span class="preview-caption">Radio — 선택 안 됨 / 선택됨</span>
  </div>
  <div class="preview-item">
    <div class="preview-row">
      <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_22_57)"><path d="M28 0H12C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24H28C34.6274 24 40 18.6274 40 12C40 5.37258 34.6274 0 28 0Z" fill="#DCDEE3"/><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="#FBFCFF"/></g><defs><clipPath id="clip0_22_57"><rect width="40" height="24" fill="white"/></clipPath></defs></svg>
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
