# Tactician Review — Reviewer Prototype

A static, reviewer-facing Next.js microsite demonstrating the product architecture, user experience, and competitive-integrity boundaries for **Tactician**, a planned Teamfight Tactics post-game AI coach.

This prototype is built specifically for **Riot Developer Relations** and **Overwolf compliance reviewers**.

---

## Prototype vs. Planned Application

- **This Prototype (`tactician-review`)**: A static Next.js web application designed to give reviewers a complete walkthrough of the concept, UI mockups, telemetry boundaries, and user privacy controls in 2–3 minutes. It contains no live telemetry capture, no game client hooks, and no active AI backend.
- **Planned Application**: A desktop/Overwolf companion app that passively records approved telemetry during a match and runs deterministic analysis and AI coaching *strictly post-game*.
- **No Approval Guarantees**: Publication, review, or deployment of this prototype does not imply or guarantee approval or Production API keys from Riot Games or Overwolf.

---

## Local Development

Prerequisites: Node.js 20.9+ (Node.js 22 LTS recommended) and npm.

```bash
# Install dependencies
npm install

# Create production build
npm run build

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment & Architecture

- **No Environment Variables**: Requires zero `.env` secrets or configuration keys.
- **No Backend / Database**: Prerendered Next.js App Router pages with local React state for demo interactions.
- **No Paid Dependencies**: No paid APIs or proprietary SDKs. Hosting remains subject to Vercel plan limits.

---

## Vercel Hobby Deployment

Compatible with the Vercel Hobby tier, subject to its usage limits and terms:

1. Push this repository to GitHub.
2. In the [Vercel Dashboard](https://vercel.com), select **Add New → Project** and import the repository.
3. Vercel will automatically detect Next.js. Leave all build/output settings at their defaults.
4. Leave Environment Variables empty.
5. Click **Deploy** to generate a live `*.vercel.app` URL for submission.

---

## Core Product Boundaries

- **Record Now. Coach Later.** All personalized evaluations happen exclusively after match completion.
- **Minimal Live Overlay**: Limited to static reference info and non-reactive goals set prior to match start (e.g., "Scout more consistently").
- **No In-Game Prescriptions**: Zero live recommendations for buying, rolling, leveling, pivoting, or positioning.
- **No Current Augment Ingestion**: The app does not evaluate or recommend current augment offerings during play.
- **No Opponent-Board Ingestion**: Full-lobby opponent-board tracking is excluded from initial scope. Scouting telemetry is restricted to measuring the player's own manual view switching, subject to explicit approval.

---

## Official Compliance Links

- [Riot Games TFT Developer Documentation & Policies](https://developer.riotgames.com/docs/tft)
- [Overwolf TFT Game Compliance Guidelines](https://dev.overwolf.com/ow-electron/guides/game-compliance/teamfight-tactics/)
- [Review Submission Guide & Draft Package](REVIEW_SUBMISSION.md)

## Demo behavior

- `/`: select review moments, expand evidence, save a session-only practice goal, dismiss the overlay, and try synthetic recording/history controls.
- `/privacy`: distinguishes the current website from the planned desktop application.
- Branding and public contact are centralized in `app/product.ts`.
- All interactive state resets on reload. No match capture, AI inference, cookies or analytics are implemented.
