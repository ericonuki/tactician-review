# Codex Instructions — Tactician Review

## Mission

Build and polish a public reviewer-facing website for **Tactician**, a Teamfight Tactics post-game coaching product intended for Riot and Overwolf approval.

The site's primary audience is **Riot Developer Relations / product reviewers and Overwolf reviewers**, not end users yet.

The core product principle is:

> **Record now. Coach later.**

During a TFT match the product may show only minimal, non-prescriptive material such as static reference information and coaching goals created before the current match. Personalized analysis of the current match happens only after the match ends.

## Non-negotiable product boundary

Do not redesign the product into a live tactical assistant.

### Allowed live experience

- Static composition/champion reference information.
- Static item recipes and item information.
- Small reminders derived from **previous** coaching sessions, for example:
  - "Scout more consistently."
  - "Protect your economy."
  - "Evaluate augments deliberately."
- Optional/minimal/dismissible overlay.
- Passive collection of telemetry that is explicitly approved by Riot/Overwolf and used later.

### Do not represent the product as doing any of these live

- Buy/sell recommendations.
- Reroll or level-now recommendations.
- Current augment recommendations.
- Current-shop optimization.
- Opponent-based positioning instructions.
- Dynamic comp pivot recommendations.
- Live opponent scouting assistance.
- Automated opponent-board tracking as part of the initial approval scope.

A reminder from a previous coaching session is static. It must **not** become event-triggered advice such as "you have not scouted this round, scout now."

## Approval context

Overwolf replied that the project cannot be reviewed further until Riot approves it.

Overwolf specifically stated that:

- A Riot game requires Riot approval even if Riot APIs are not used.
- The app must eventually have a **Production API key approval** to go live.
- Overwolf still performs its own compliance review after Riot approval.
- Overwolf will not approve:
  - telemetry/bridge-only apps,
  - apps with no front-facing features,
  - private apps,
  - apps using third-party monetization where prohibited by Overwolf policy.
- When returning to Overwolf, the developer must provide a screenshot of Riot's approval **including the exact app description submitted to Riot**.

Therefore this site should demonstrate a real front-facing product, not merely a telemetry collector.

## Current strategy for Riot approval

The strongest framing is:

- Main product: **post-game AI TFT coach**.
- During game: static references + previously established coaching goals.
- During game: passive recording only.
- After game: personalized analysis begins.
- AI is primarily used post-game to explain evidence, patterns, mistakes, strengths, and practice goals.
- Initial approval scope intentionally excludes automated opponent-board tracking.

Scouting behavior may be framed as measuring how often the player chose to inspect boards, subject to explicit Riot/Overwolf approval. Do not claim unrestricted opponent-board ingestion is approved.

## Website objective

A reviewer should understand the complete product in 2–3 minutes.

Recommended information order:

1. Product purpose.
2. Clear "Record now. Coach later." positioning.
3. User flow.
4. In-game overlay mockup.
5. Explicit allowed/excluded live behavior.
6. Recorded match context.
7. Post-game AI coaching mockup.
8. Competitive integrity.
9. Privacy/user control.
10. MVP/roadmap.
11. Riot disclaimer / contact.

The visual design should make the **post-game application feel rich and intelligent** while making the **in-game overlay intentionally small and boring**. This distinction helps reviewers understand the product boundary immediately.

## Current implementation

Stack:

- Next.js App Router
- React
- TypeScript
- Plain CSS
- No database
- No auth
- No API keys
- No paid dependencies
- Vercel Hobby-compatible

Current files:

```text
app/
  globals.css
  layout.tsx
  page.tsx
.gitignore
README.md
package.json
tsconfig.json
next-env.d.ts
AGENTS.md
CODEX_HANDOFF.md
```

`app/page.tsx` contains the complete one-page prototype.
`app/globals.css` contains all styling.

## Current design/content

The current page already includes:

- Hero section with reviewer-oriented product pitch.
- Post-game report mockup.
- Product-principle section.
- Five-step product flow.
- Minimal live-overlay mockup.
- Allowed vs explicitly excluded live functionality.
- Recorded-data cards.
- Stage 4-1 roll-down coaching example.
- Competitive-integrity section.
- Privacy/data-control section.
- MVP roadmap.
- Riot disclaimer/footer.

Do not remove these concepts unless replacing them with stronger equivalents.

## Immediate technical priority

First verify the project builds with the current runtime.

Run:

```bash
npm install
npm run build
npm run dev
```

Fix any Next.js 16 / React 19 issues found.

Then visually inspect the site at desktop and mobile breakpoints.

## Preferred next improvements

Prioritize in this order:

1. **Build verification**
   - Ensure `npm install` succeeds.
   - Ensure `npm run build` succeeds with no warnings/errors that matter.

2. **Reviewer clarity**
   - Add a prominent "For Riot / Overwolf review" context indicator if useful.
   - Make the live-vs-post-game boundary impossible to misunderstand.
   - Tighten any wording that sounds like a real-time recommendation engine.

3. **Visual polish**
   - Improve visual hierarchy and spacing.
   - Make mockups look like credible product UI, not wireframes.
   - Keep visual style professional/dark/esports-adjacent without copying Riot/TFT assets.

4. **Approval pages/sections**
   - Add `/privacy` or a strong privacy section if needed.
   - Add `/compliance` if separating reviewer-specific details improves clarity.
   - Add a concise data flow diagram using HTML/CSS/SVG, not a heavy dependency.

5. **Reviewer-specific evidence**
   - Clearly state what telemetry is intended for collection.
   - Mark sensitive items as "subject to Riot/Overwolf approval" rather than assuming permission.
   - Do not claim current-augment data will be consumed live.

6. **Vercel readiness**
   - Keep deployment zero-config where possible.
   - Do not add paid services.
   - Avoid unnecessary server functions.
   - Keep the prototype usable on the Vercel Hobby tier.

## Suggested follow-up UX sections

Potential additions that would materially help approval:

### Architecture / data-flow visual

```text
TFT match
   ↓
Approved telemetry recorder
   ↓
Match timeline storage
   ↓
MATCH ENDS
   ↓
Deterministic analyzers
   ↓
AI coach
   ↓
Post-game report
   ↓
Practice goals for future matches
```

Emphasize that the live path does not feed a current-match recommendation engine.

### Example coaching-session drill-down

Use realistic but synthetic data, e.g.:

- Stage 4-1
- 34 gold spent
- 17 shops seen
- 2 alternative transition paths
- scouting frequency drop after Stage 4

Then show how the post-game coach explains the decision rather than simply assigning a score.

### Data controls

Reviewer-friendly controls to depict:

- Match recording on/off.
- Screenshot capture on/off.
- Delete one match.
- Delete all coaching history.
- Data retention explanation.

## Wording rules

Prefer:

- "practice objective"
- "coaching focus"
- "post-game review"
- "decision context"
- "historical match timeline"
- "player-chosen scouting activity"
- "subject to Riot/Overwolf approval"

Avoid:

- "real-time recommendation engine"
- "best move"
- "optimal choice"
- "tell the player what to do"
- "track every opponent board"
- "augment recommendation"
- "scouting assistant"

## Branding

"Tactician" / "Tactician Review" is a **working name**. Keep branding easy to replace.

Do not use Riot/TFT logos or copyrighted game artwork unless explicitly supplied and approved. Generic game-like UI/mockups are preferable for the approval prototype.

## Riot disclaimer

Keep an appropriate Riot disclaimer visible in the final reviewer site. Current prototype wording should be checked against Riot's current policy before production submission.

## Deployment target

Target: Vercel Hobby / free tier.

Preferred workflow:

```text
GitHub repo
  ↓
push to main
  ↓
Vercel automatic build
  ↓
public *.vercel.app reviewer URL
```

No backend is required for the initial review microsite.

## Definition of done for the approval prototype

- `npm run build` passes.
- Site looks polished on desktop and mobile.
- Reviewer understands product in under 3 minutes.
- Live vs post-game boundary is unmistakable.
- No text implies prohibited live tactical assistance.
- Data collection language is conservative and transparent.
- There is a clear front-facing desktop product experience.
- There is a clear post-game AI coaching experience.
- Site can deploy to Vercel Hobby with no paid dependencies.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
