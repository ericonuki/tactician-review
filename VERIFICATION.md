# Prototype verification — 2026-09-22

- `npm install` completed. The original Next.js 16.0.0 dependency had a security warning; updated to Next.js 16.3.6 and React/React DOM 19.2.8. The updated install audit reports **0 vulnerabilities**.
- `npm run build` passed, including TypeScript. `/`, `/privacy` and `/icon.svg` are prerendered static routes.
- `npm run dev -- --port 3000` starts successfully.
- Browser Harness checks at CSS viewports 1440×900, 1280×720, 1024×768, 768×1024 and 390×844: no document horizontal overflow after removing a decorative glow. Desktop/mobile report and mobile privacy screenshots inspected.
- Browser interactions verified: all three review moments; saving a practice objective; evidence disclosure; opening the static reference example; dismissing and restoring the overlay; recording and screenshot switches; recording-off disables screenshots; delete one/all synthetic history; deletion buttons disabled when empty.
- Internal anchors resolve, privacy route renders, public contact is `mailto:ericonuki@gmail.com`. Demo state resets on a new page load.
- Website uses authored synthetic data, with no game/AI requests or production collection. Proposed telemetry remains subject to explicit permission.

Screenshots are local in `.scratch/verification/`. This is browser verification of the prototype, not proof of a production recorder, AI system, privacy backend or policy approval.

## Still required for submission / launch

Public reviewer URL: https://tactician-review.vercel.app. Obtain explicit decisions on telemetry and sensitive categories, define production retention and processors, and follow the Riot approval / Production key / applicable RSO and subsequent Overwolf review process. See `REVIEW_SUBMISSION.md`.

## Motion redesign — 2026-09-22

- `npm run build` passed after the redesign; verified using `npm run start -- --port 3001`.
- No new dependencies. CSS 3D board responds to scroll; section reveals and review-panel entrance use an IntersectionObserver; artwork parallax is progressive CSS enhancement.
- Browser Harness checked CSS viewport widths 1440, approximately 768 (769 after browser zoom rounding), 390 and 320: no horizontal document overflow. Desktop hero/report and mobile hero/report screenshots inspected.
- Observed board rotation changing from -0.972deg to -8.172deg after scrolling; review reveal completed at opacity 1, and reading progress advanced.
- All review moments, goal saving and evidence disclosure passed. Static references, overlay dismissal/restoration, recording/screenshots and synthetic deletion controls passed. Internal anchors resolve; `/privacy` returned HTTP 200.
- Changing reduced-motion preference cleared scroll/rotation properties and disabled animations. Base content is not hidden by animation classes, preserving the reading experience without JavaScript.
- Task-created browser tabs were closed after checks to remove viewport emulation from the user’s browser.

Artifacts: `.scratch/verification/overhaul-*.png`; browser scripts in `.scratch/check-overhaul*.py` (ignored local verification files).
