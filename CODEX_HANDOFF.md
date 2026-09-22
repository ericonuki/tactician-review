# Tactician Review — Codex CLI Handoff

## 1. Goal

Continue development of the reviewer-facing prototype website for **Tactician**, a Teamfight Tactics post-game AI coaching application.

This website is intended first for **Riot product approval**, then for **Overwolf review**.

The immediate objective is not to build the full Overwolf application. It is to create a polished, credible public product prototype that accurately communicates the planned product, data usage, user experience, and competitive-integrity boundary.

---

## 2. Why this site exists

Overwolf responded that they will not complete their review until Riot has approved the project.

Their response establishes this process:

1. Ensure the concept complies with Riot and Overwolf policy.
2. Apply to Riot through the Riot Developer Portal.
3. Obtain Riot approval / Production API key approval.
4. Send Overwolf a screenshot of Riot's approval, including the exact product description submitted to Riot.
5. Overwolf then performs its own approval/compliance review.

Overwolf also stated that the following categories will not be approved:

- telemetry/bridge-only apps,
- apps with no front-facing features,
- private apps,
- apps using prohibited third-party monetization.

Therefore the website must make it clear that Tactician is a substantial front-facing coaching product, with telemetry serving the user experience rather than being the product itself.

---

## 3. Product concept

Tactician records decision context while a TFT game is being played and performs personalized analysis after the match.

The core product principle is:

> **Record now. Coach later.**

The product aims to teach users how to improve over many games rather than telling them what action to take in the current match.

### Examples of post-game analysis

- Economy discipline.
- Roll-down timing and gold usage.
- Shops encountered during transitions.
- Board progression.
- Itemization choices.
- Scouting habits.
- Positioning review where compliant.
- Alternative lines actually encountered by the player.
- Recurring mistakes across matches.
- Practice goals for the next games.

AI is primarily a **teaching/explanation layer after the game**.

A deterministic analysis layer should eventually identify concrete decision points first, and the AI should explain them instead of inventing facts from raw telemetry.

Future conceptual architecture:

```text
Match telemetry
      ↓
Timestamped event timeline
      ↓
Match ends
      ↓
Deterministic analyzers
  - EconomyAnalyzer
  - ShopAnalyzer
  - ScoutingAnalyzer
  - ItemAnalyzer
  - TransitionAnalyzer
  - PositioningAnalyzer (if approved)
      ↓
Structured findings
      ↓
AI coach
      ↓
Post-game coaching session
      ↓
Practice objectives for future games
```

---

## 4. Live-game experience

The live overlay should be deliberately minimal.

It may contain:

- static tier lists,
- static item information,
- item recipes,
- generic educational reference content,
- practice reminders generated during previous coaching sessions.

Examples of acceptable reminder wording:

- "Scout more consistently."
- "Protect your economy."
- "Evaluate augments deliberately."
- "Consider multiple transition paths."

These reminders are established **before the current game** and do not react to the current board, current shop, opponent state, or current augment offerings.

### Explicitly out of scope for live gameplay

The product must not be presented as providing:

- buy/sell recommendations,
- roll-now recommendations,
- level-now recommendations,
- current augment recommendations,
- current-shop optimization,
- automatic comp pivots,
- opponent-based positioning instructions,
- live scouting assistance.

A static reminder such as "Scout more consistently" must not become "You have not scouted this round; scout now."

---

## 5. Data collection concept

The initial concept uses approved Overwolf TFT telemetry where Riot/Overwolf permit it.

Useful categories include:

### Player state

- Match lifecycle.
- Stage/round.
- HP.
- Level/XP.
- Gold.
- Combat boundaries/results.

### Player-owned state

- Own board.
- Bench.
- Unit positions.
- Star levels.
- Equipped items.
- Item bench.

### Shop history

A major differentiator is retaining the shops the player actually encountered so the post-game coach can review the alternatives that were available.

Important product boundary:

- Record shop during match.
- Do **not** recommend purchases based on that shop during the match.
- Analyze it only after the match ends.

### Scouting behavior

The app may want to measure whether the user manually inspected other boards and how often.

However, Riot documentation has historically treated opponent-board tracking/scouting features as sensitive or unapproved. For the initial approval proposal:

- Do not advertise automated full-lobby opponent-board ingestion.
- Do not claim live opponent-board analysis.
- Phrase any board-view telemetry as measuring the player's own scouting behavior, subject to explicit Riot/Overwolf approval.
- If uncertain, prefer counting scouting actions rather than persisting opponent compositions.

### Screenshots

Potential screenshots:

- own board at meaningful moments,
- selected decision points,
- possibly a board the user manually chose to inspect, but only if explicitly approved.

Screenshot capture should be optional and controllable by the user.

---

## 6. Augments

Be conservative.

The live app should **not** consume current augment offerings to produce advice.

Do not show:

- current offered augments,
- recommended current augment,
- live augment win-rate selection guidance,
- personalized current-game augment prescriptions.

A previous coaching goal like "Improve augment evaluation" is acceptable product positioning because it is not calculated from the current offering.

Post-game discussion of finalized augment decisions should be added only under a clearly compliant data source / approval path.

---

## 7. Why the product is differentiated

The strongest product idea is not "AI tells you what you should have done" in the abstract.

It is that Tactician can reconstruct **the choices the player actually encountered**.

Example:

```text
Stage 4-1 roll-down
Gold spent: 34
Shops seen: 17
Current board: ...
Bench: ...
Items: ...

The player passed units supporting an alternate transition.
```

Then post-game coaching can explain the decision context.

That is more pedagogically meaningful than evaluating only the final comp/placement.

---

## 8. Current website implementation

Project path in the generated artifact:

```text
/mnt/data/tactician-review
```

Current files:

```text
.gitignore
AGENTS.md
CODEX_HANDOFF.md
README.md
app/
  globals.css
  layout.tsx
  page.tsx
next-env.d.ts
package.json
tsconfig.json
```

Current stack:

- Next.js 16
- React 19
- TypeScript
- Plain CSS

Current package.json:

```json
{
  "name": "tactician-review",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "16.0.0",
    "react": "19.2.0",
    "react-dom": "19.2.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.7.0"
  }
}
```

The previous generation environment did **not** successfully complete `npm install && npm run build` because package installation timed out. Build verification is therefore the first task for Codex.

---

## 9. Current page sections

The page already contains:

1. Navigation.
2. Hero:
   - "Record the match. Coach the player after."
   - Post-game report mockup.
3. Product principle.
4. Five-step flow:
   - Previous coaching.
   - Play normally.
   - Passive recording.
   - Match ends.
   - AI coaching.
5. In-game section:
   - allowed live features,
   - explicitly excluded features,
   - minimal overlay mockup.
6. Recorded-data cards:
   - shop timeline,
   - own board/bench,
   - economy,
   - scouting behavior,
   - screenshots,
   - combat timeline.
7. Post-game coaching example:
   - Stage 4-1 roll-down,
   - 34g spent,
   - 17 shops,
   - 2 alternative lines,
   - AI coaching text.
8. Competitive integrity.
9. Privacy/user controls.
10. Roadmap.
11. Riot disclaimer/footer.

---

## 10. Design intent

The site uses a dark, clean, product-review aesthetic.

Desired perception:

- professional,
- credible,
- technically sophisticated,
- restrained,
- reviewer-friendly.

Avoid copying Riot/TFT branding or copyrighted artwork.

A useful design principle:

> Make the post-game dashboard visually rich and intelligent; make the in-game overlay small and intentionally unexciting.

That visual contrast communicates policy compliance better than prose alone.

---

## 11. First Codex tasks

### Task 1 — verify the build

Run:

```bash
npm install
npm run build
```

Resolve any dependency or Next.js 16 compatibility issues.

Then:

```bash
npm run dev
```

Inspect the page manually.

### Task 2 — test responsiveness

Check at minimum:

- 1440×900
- 1280×720
- 1024×768
- 768×1024
- 390×844

Fix overflow, poor typography scaling, layout collisions, and unreadable mockups.

### Task 3 — strengthen reviewer flow

A reviewer should answer these questions without searching:

- What is Tactician?
- What appears during the game?
- What does not appear during the game?
- What data is recorded?
- When does AI analysis happen?
- Why is this not a live tactical assistant?
- What user controls exist?
- What is the initial approval scope?

### Task 4 — add/strengthen compliance presentation

Consider a visual two-lane architecture:

```text
LIVE MATCH                          AFTER MATCH
----------                          -----------
Static reference                    Match timeline
Prior coaching goals                Deterministic analysis
Passive approved recording    →     AI coaching
                                    New practice goals

NO current-match recommendation engine
```

### Task 5 — improve the post-game mockup

Make it feel like a real product.

Potential additions:

- decision timeline,
- highlighted shop events,
- scouting trend,
- economy chart,
- "what went well / what to improve",
- one next-game objective,
- expandable evidence cards.

Use synthetic/mock data only.

### Task 6 — add reviewer/legal surfaces if useful

Potential routes:

```text
/privacy
/compliance
```

A single-page site is also acceptable if these sections are clear enough.

Do not build unnecessary backend functionality.

---

## 12. Deployment target

The user wants to start at **$0/month**.

Target platform: **Vercel Hobby**.

Preferred deployment model:

```text
GitHub repository
      ↓
Vercel Git integration
      ↓
Automatic deployment
      ↓
*.vercel.app public reviewer URL
```

Keep the review microsite static/server-component-oriented where practical.

Do not add:

- databases,
- paid APIs,
- auth providers,
- object storage,
- serverless processing,
- analytics requiring billing,

unless directly requested.

---

## 13. Future full product architecture — not required for this site

Conceptual application architecture:

```text
TFT / Overwolf GEP
        ↓
Telemetry adapter
        ↓
Event-sourced match recorder
        ↓
Local / backend match store
        ↓
MATCH COMPLETE
        ↓
Deterministic analyzers
        ↓
Structured findings
        ↓
AI coaching service
        ↓
Desktop post-game dashboard
        ↓
Practice objectives
        ↓
Future match overlay reminder
```

Provider isolation is desirable:

```ts
interface GameSnapshot {
  stage: Stage;
  player: PlayerState;
  board: BoardState;
  bench: Unit[];
  shop: Unit[];
  inventory: Item[];
}
```

Eventually the core coaching engine should not care whether state came from Overwolf GEP, post-game Riot APIs, replay-like telemetry, or another approved source.

---

## 14. Approval-sensitive phrasing

### Good wording

- "post-game coaching"
- "practice objective"
- "previous coaching focus"
- "historical decision context"
- "player-owned board state"
- "shop history for post-game review"
- "passive recording"
- "analysis begins after the match"
- "subject to Riot and Overwolf approval"

### Wording to avoid

- "best move"
- "optimal action"
- "live AI recommendation"
- "scouting assistant"
- "track all opponent boards"
- "choose this augment"
- "buy this champion"
- "roll now"
- "position here"

---

## 15. Product name

The current working name is **Tactician** / **Tactician Review**.

It has not been finalized.

Keep all product-name usage easy to replace centrally if practical.

---

## 16. Important constraint

Do not optimize the approval prototype for growth, SEO, conversion, or monetization before reviewer clarity.

The primary success metric right now is:

> A Riot or Overwolf reviewer can quickly understand the app, see a credible product, and clearly distinguish its post-game coaching system from prohibited real-time tactical assistance.
