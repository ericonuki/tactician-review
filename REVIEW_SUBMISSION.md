# Tactician — Product Review Submission Package

Submission copy, compliance declarations, and pre-submission checklist for **Riot Developer Relations** and **Overwolf Review**.

---

## Prototype vs. Planned Application

- **Static Reviewer Prototype**: The website hosted from this repository is a static Next.js concept demonstration. It illustrates the UX, telemetry boundaries, and post-game focus for reviewers. It does not execute live game hooks, ingest real-time APIs, or run active AI models.
- **Planned Application**: A future desktop companion client (built on Overwolf) that passively records gameplay context and initiates coaching sessions strictly after the match concludes.
- **No Approval Guarantees**: Neither this prototype nor the planned app is endorsed by Riot Games or Overwolf. Submission carries **no guarantee of approval** or production API key access; approval remains at the sole discretion of Riot Games and Overwolf.

---

## Official Compliance References

- [Riot Games TFT Developer Documentation & Policies](https://developer.riotgames.com/docs/tft)
- [Overwolf TFT Game Compliance Guidelines](https://dev.overwolf.com/ow-electron/guides/game-compliance/teamfight-tactics/)

---

## Draft Product Description (For Riot & Overwolf Portals)

> **Working Title:** Tactician
> **Product Category:** Post-Game Coaching & Educational Desktop Companion
> **Target Audience:** Teamfight Tactics players seeking long-term fundamental skill improvement.

### Overview & Core Principle: "Record Now. Coach Later."
Tactician is a proposed post-game coaching companion designed to develop player fundamentals across multiple matches. Rather than influencing live gameplay, Tactician passively records the decision context the player actually experienced and provides structured, pedagogical AI coaching **strictly after the match ends**.

### Live In-Game Behavior (Strictly Non-Prescriptive)
- **Post-Game Only AI**: Artificial intelligence models and personalized evaluations are never executed during an active match.
- **Passive Collection Only**: Telemetry recording operates passively in the background, strictly limited to data points explicitly approved by Riot Games and Overwolf.
- **Static Pre-Match Goals**: The minimal in-game overlay displays only static, non-reactive practice objectives established during previous coaching sessions (e.g., *"Scout more consistently"*, *"Protect economy during Stage 3"*). Goals do not react to current game events and never trigger real-time advice.
- **Static Reference Material**: Basic static component recipes and reference tables.
- **No Current Augment Ingestion**: The app does not evaluate offered augments, display augment win-rates or average placements, or recommend augment selections during the match.
- **No Opponent-Board Ingestion**: Full-lobby opponent-board tracking and automated opponent scouting are strictly excluded from the initial approval scope. Any scouting metrics are limited to measuring the player's own manual camera switches, subject to explicit Riot/Overwolf authorization.
- **No Live Prescriptions**: Tactician will never offer real-time recommendations on buying/selling units, rolling, leveling, pivoting, or positioning.

### Post-Match Analysis & Coaching Experience
1. **Deterministic Reconstruction**: Once the match concludes, an event-sourced timeline reconstructs the choices the player actually encountered (e.g., gold spent during roll-downs, shops seen, and alternative lines passed).
2. **AI Teaching Layer**: Post-game AI explains strategic trade-offs and recurring patterns across matches rather than dictating a singular "correct" move.
3. **Practice Objectives**: Identifies 1–2 actionable goals to focus on in future sessions.

---

## Pre-Submission Requirements Checklist

Before submitting to the Riot Developer Portal or Overwolf Developer Console, complete the following items:

- [ ] **Real Public URL**: Deploy this Next.js prototype to a publicly accessible Vercel Hobby URL (e.g., `https://tactician-review.vercel.app`) with functional mockups and reviewer flows.
- [x] **Public Developer Contact**: ericonuki@gmail.com is displayed on the website and privacy notice.
- [ ] **Verified Telemetry Permissions**: Audit all requested Overwolf Game Events Provider (GEP) events against current Riot TFT API policies, ensuring every recorded telemetry point has explicit developer permission.
- [ ] **Data Retention & AI Provider Decision**: Decide storage location, concrete retention periods, deletion semantics and any AI processor. Disclose actual provider retention/training terms before collecting real data; none are decided in this prototype.
- [ ] **Production Key / RSO Path**: Define the Production API Key and Riot Sign-On (RSO) integration roadmap required by Riot Developer Relations for production tier access.
- [ ] **Riot Approval Screenshot (Overwolf Requirement)**: Submit first to Riot Developer Relations. The Overwolf response recorded in CODEX_HANDOFF.md requests a complete screenshot of Riot's formal approval, **explicitly displaying the exact product description submitted to Riot**, before Overwolf compliance review can begin.
