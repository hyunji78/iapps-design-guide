# Typography

기본 폰트: Pretendard. 두께는 Regular(400)/Medium(500)/SemiBold(600)/Bold(700)/ExtraBold(800) 5단계, Black(900)은 사용하지 않음.

| 이름 | 크기(px/rem) | 줄높이 | 두께 | 용도 | 미리보기 |
|---|---|---|---|---|---|
| Display 0 | 64px / 4rem | 76px | ExtraBold(800) | 랜딩 히어로, 최상단 커버 | <span class="mini-type" style="font-size:64px;font-weight:800;letter-spacing:-0.04em;">Aa</span> |
| Display 1 | 56px / 3.5rem | 66px | Bold(700) | PPT 표지, 랜딩 히어로 | <span class="mini-type" style="font-size:56px;font-weight:700;letter-spacing:-0.04em;">Aa</span> |
| Display 2 | 44px / 2.75rem | 54px | Bold(700) | 랜딩 섹션 대제목 | <span class="mini-type" style="font-size:44px;font-weight:700;letter-spacing:-0.03em;">Aa</span> |
| Heading 1 | 36px / 2.25rem | 46px | Bold(700) | 페이지 타이틀 | <span class="mini-type" style="font-size:36px;font-weight:700;letter-spacing:-0.03em;">Aa</span> |
| Heading 2 | 28px / 1.75rem | 38px | SemiBold(600) | 섹션 타이틀 | <span class="mini-type" style="font-size:28px;font-weight:600;letter-spacing:-0.025em;">Aa</span> |
| Heading 3 | 22px / 1.375rem | 30px | SemiBold(600) | 카드·서브섹션 타이틀 | <span class="mini-type" style="font-size:22px;font-weight:600;letter-spacing:-0.02em;">Aa</span> |
| Heading 4 | 18px / 1.125rem | 26px | SemiBold(600) | 리스트 그룹명, 작은 타이틀 | <span class="mini-type" style="font-size:18px;font-weight:600;letter-spacing:-0.02em;">Aa</span> |
| Body Large | 17px / 1.0625rem | 26px | Regular(400) | 인트로 문단, 강조 본문 | <span class="mini-type" style="font-size:17px;font-weight:400;letter-spacing:-0.015em;">Aa</span> |
| Body Default | 15px / 0.9375rem | 24px | Regular(400) | 기본 본문 (CMS 기준) | <span class="mini-type" style="font-size:15px;font-weight:400;letter-spacing:-0.015em;">Aa</span> |
| Body Small | 14px / 0.875rem | 20px | Regular(400) | 보조 설명, 폼 텍스트 | <span class="mini-type" style="font-size:14px;font-weight:400;letter-spacing:-0.01em;">Aa</span> |
| Caption | 13px / 0.8125rem | 18px | Regular(400) | 캡션, 헬퍼텍스트, 타임스탬프 | <span class="mini-type" style="font-size:13px;font-weight:400;letter-spacing:-0.01em;">Aa</span> |
| Label | 12px / 0.75rem | 16px | Medium(500) | 배지, 태그, 오버라인 | <span class="mini-type" style="font-size:12px;font-weight:500;letter-spacing:-0.005em;">Aa</span> |

## 자간 (국문만 크기별로 조정, 영문/일문은 0)

| 이름 | 자간(국문) |
|---|---|
| Display 0 / 1 | -4% |
| Display 2 / Heading 1 | -3% |
| Heading 2 | -2.5% |
| Heading 3 / 4 | -2% |
| Body Large / Default | -1.5% |
| Body Small / Caption | -1% |
| Label | -0.5% |

- 영문: 0(기본값). 라벨·올캡스에 한해 선택적으로 +2~3%
- 일문: 0(베타구미 원칙), 조정 최소화
- CSS는 `em` 단위 사용 권장 (`letter-spacing: -0.04em`), px 고정 금지 — 크기 바뀌어도 비율 유지되게

## 폰트 폴백

| 화면 언어 | 폰트 |
|---|---|
| 국문/영문 | `Pretendard, sans-serif` |
| 일문 | `"Pretendard JP", Pretendard, sans-serif` |

페이지(언어) 단위로 전체 전환, 한 화면에서 두 폰트 혼용 금지.

---
