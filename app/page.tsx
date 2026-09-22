import Image from "next/image";
import { ScrollMotion } from "./scroll-motion";
import { ReviewDemo, OverlayDemo, PrivacyDemo } from "./review-demo";
import { product } from "./product";

const data = [
  ["01", "Economy & match events", "Gold, level, XP, rounds and combat outcomes give each decision its context.", "Proposed · approval required"],
  ["02", "Own board & bench", "Player-owned units, positions, star levels and items show how a transition developed.", "Proposed · approval required"],
  ["03", "Encountered shops", "Only shops the player actually saw, retained for review after the match. No live shop analysis.", "Proposed · approval required"],
  ["04", "Player-chosen scouting activity", "A possible count of manual board views, without opponent compositions. Excluded unless explicitly approved.", "Separate approval question"],
  ["05", "Optional screenshots", "Own-board review moments only. Off by default in the proposed app; no opponent-board screenshots in initial scope.", "Separate approval question"],
  ["06", "Coaching history", "Completed reports and player-selected practice goals help connect lessons across matches.", "Planned · player-controlled"],
];

export default function Page() {
  return (
    <>
      <a href="#main" className="skipLink">Skip to content</a>
      <ScrollMotion />
      <div className="readingProgress" aria-hidden="true" />
      <header className="nav shell">
        <a className="brand" href="#" aria-label={`${product.name} home`}><span className="brandMark" aria-hidden="true">✳</span>{product.name}<span className="brandLabel">THE POST-GAME COACH</span></a>
        <nav aria-label="Main navigation"><a href="#experience">The idea</a><a href="#coach">The experience</a><a href="#scope">For reviewers</a></nav>
        <a className="navCta" href="#coach">Enter the review <span aria-hidden="true">↗</span></a>
      </header>
      <main id="main">
        <section className="hero shell">
          <div className="heroCopy" data-reveal>
            <div className="eyebrow"><span className="statusDot" /> A NEW PERSPECTIVE ON YOUR LAST MATCH</div>
            <h1>The game ends.<br />Your growth<br /><em>doesn’t.</em></h1>
            <p className="lede">Meet your post-game TFT coach.</p>
            <p className="heroDescription">Turn the decisions you made into lessons that stay with you. A clearer picture of the last match. A little more intention for the next.</p>
            <div className="heroActions"><a className="button primary" href="#coach">Explore a match review <span aria-hidden="true">↗</span></a><a className="textLink" href="#experience">Discover the idea ↓</a></div>
            <p className="prototypeNote">RIOT / OVERWOLF REVIEW CONCEPT · NOT YET APPROVED</p>
          </div>
          <div className="heroVisual">
            <div className="sceneLabel"><span>YOUR NEXT CHAPTER STARTS HERE</span><span>01 — 03</span></div>
            <div className="boardScene" role="img" aria-label="An abstract three-dimensional game board, with a completed-match timeline floating above it. Decorative concept, not gameplay.">
              <div className="sceneOrbit orbitOne" /><div className="sceneOrbit orbitTwo" />
              <div className="boardAssembly">
                <div className="boardBase"><div className="boardGrid">{Array.from({length:49},(_,i)=><span key={i} className={[9,16,24,29,32,38].includes(i) ? "occupied" : ""}>{[9,16,24,29,32,38].includes(i) && <i className="crystal"><i /></i>}</span>)}</div><span className="boardEdge">TACTICIAN / REFLECTION ENGINE</span></div>
                <div className="boardHalo" />
              </div>
              <div className="floatingInsight"><span className="insightIcon">✧</span><div><small>AFTER THE MATCH</small><strong>A decision worth revisiting.</strong><span>Stage 4-1 · The transition window</span></div></div>
              <div className="floatingMoment"><span>4-1</span><div className="miniTimeline"><i /><i /><i /><i /><i /><i /><i /></div><small>MATCH COMPLETE</small></div>
              <span className="sceneCoordinate coordinateLeft">34:18 / RECORDED</span><span className="sceneCoordinate coordinateRight">LEARNING UNLOCKED ↗</span>
            </div>
            <div className="sceneFoot"><span className="statusDot" /> Record now. Coach later.<span>ILLUSTRATIVE 3D CONCEPT</span></div>
          </div>
        </section>
        <div className="chapterRail shell"><span>DESIGNED FOR REFLECTION</span><span>01 / PLAY</span><span>02 / UNDERSTAND</span><span>03 / GROW</span><a href="#experience" aria-label="Scroll to the product story">↓</a></div>

        <section id="experience" className="manifesto shell" data-reveal>
          <div className="eyebrow">THE RESULT IS ONLY PART OF THE STORY</div>
          <h2>You remember the finish.<br /><span>Let’s understand</span><br />how you got there.</h2>
          <div className="manifestoBottom"><span className="asterisk" aria-hidden="true">✳</span><p>A placement tells you where you ended up. Tactician is a proposed desktop coach for exploring the choices, trade-offs and patterns behind a completed match.</p><p>Personalized coaching starts only after the full match ends. During play, you stay in charge.</p></div>
        </section>

        <section className="storyChapter shell" id="flow">
          <div className="chapterIntro" data-reveal><span className="chapterIndex">01 — THE RHYTHM</span><h2>Play it.<br />Revisit it.<br /><em>Build on it.</em></h2><p>One match becomes a small, useful step forward.</p><a className="textLink" href="#coach">Step inside the review ↗</a></div>
          <div className="storySteps">
            <article data-reveal><span className="stepNumber">01</span><div><small>BEFORE & DURING PLAY</small><h3>Bring a focus.<br />Play your own game.</h3><p>Choose a practice goal from an earlier review. Keep static references nearby, or dismiss the overlay. With consent, only explicitly approved match context would be recorded.</p><span className="storyTag">No personalized current-match advice</span></div></article>
            <article className="stepGate" data-reveal><span aria-hidden="true">◇</span><div><small>THE FULL MATCH ENDS</small><p>The proposed match-end gate unlocks analysis. Uncertain completion keeps it locked.</p></div></article>
            <article data-reveal><span className="stepNumber">02</span><div><small>AFTER THE MATCH</small><h3>Find the moment.<br />Understand the choice.</h3><p>Follow your historical timeline. Inspect the evidence. Explore an AI-assisted explanation of what worked, what was uncertain and what you might practice.</p><span className="storyTag">Evidence before explanation</span></div></article>
            <article data-reveal><span className="stepNumber">03</span><div><small>INTO THE NEXT MATCH</small><h3>Leave with a habit.<br />Not a list of orders.</h3><p>Save one or two player-chosen objectives. During future play, these remain static reminders, unchanged by current-match events.</p><span className="storyTag">A future focus, chosen by you</span></div></article>
          </div>
        </section>

        <section className="worldBreak" aria-label="Original arena concept artwork">
          <Image src="/images/arena-after-match.webp" alt="A quiet floating fantasy arena after a match." fill sizes="100vw" />
          <div className="worldCopy shell" data-reveal><span className="eyebrow">THE BOARD GOES QUIET. THE PICTURE GETS CLEARER.</span><h2>A little distance.<br /><em>A different perspective.</em></h2><p>Original concept artwork · not a gameplay capture</p></div>
        </section>
        <section id="coach" className="section shell coachSection">
          <div className="sectionHeading" data-reveal><div><div className="eyebrow">THE EXPERIENCE / POST-GAME ONLY</div><h2>Your match.<br /><span className="mutedHeading">With the missing context.</span></h2></div><p>Explore a synthetic review. Select a moment, inspect its evidence, and save a practice objective for a future match.</p></div>
          <div className="reviewStage" data-reveal><div className="reviewStageLabel"><span className="statusDot" /> MATCH ENDED — COACHING AVAILABLE<span>CLICK THROUGH THE DEMO BELOW</span></div><ReviewDemo /></div>
          <div className="teachingNotes"><p><b>Evidence first.</b> Planned deterministic analyzers identify decision points before an AI explanation is generated.</p><p><b>Context over certainty.</b> Alternative paths are discussion points, not proof that another choice would have won.</p><p><b>Progress over prescriptions.</b> Review strengths, recurring habits and a small number of future practice goals.</p></div>
          <section className="reviewRoom" data-reveal aria-label="The review room"><figure className="reviewRoomArtwork"><Image src="/images/coaching-study.webp" alt="Original fantasy study concept artwork for a post-game coaching session." fill sizes="(max-width: 850px) calc(100vw - 48px), (max-width: 1100px) 44vw, 520px" /><figcaption>Original concept artwork · not a gameplay capture</figcaption></figure><div className="reviewRoomCopy"><div className="eyebrow">THE REVIEW ROOM</div><h3>Turn a finished game into a future habit.</h3><p>Return to one decision with its evidence, discuss the trade-offs, and leave with a player-chosen focus for the next match.</p></div></section>
        </section>

        <section id="live" className="section shell liveSection">
          <div><div className="eyebrow">DURING PLAY / INTENTIONALLY QUIET</div><h2>Your instincts.<br />Your decisions.</h2><p className="sectionIntro">The proposed live surface shows references and goals established before the match. Those goals stay unchanged, regardless of what happens in the game.</p><div className="policyColumns"><div><h3><span className="mintText">＋</span> Proposed live surface</h3><ul><li>Static champion and composition references</li><li>Static item information and recipes</li><li>Previous-session practice goals</li><li>Optional, dismissible overlay</li></ul></div><div><h3><span className="goldText">−</span> Excluded from live play</h3><ul><li>Buy, sell, reroll or level instructions</li><li>Current-shop or augment advice</li><li>Opponent-based positioning or scouting</li><li>Dynamic pivots or event-triggered reminders</li></ul></div></div></div>
          <div className="liveStage"><div className="stageLabel"><span className="statusDot" /> ILLUSTRATIVE LIVE SURFACE</div><div className="abstractBoard" aria-hidden="true">{Array.from({length:28},(_,i)=><span key={i} />)}</div><OverlayDemo /><p className="stageFoot">No live analysis. No reacting to the current board.<br />Try the reference panel or dismiss the overlay.</p></div>
        </section>

        <section id="data" className="section shell">
          <div className="sectionHeading" data-reveal><div><div className="eyebrow">PROPOSED RECORDING SCOPE</div><h2>The context behind the lesson.</h2></div><p>Every telemetry category is subject to Riot/Overwolf approval and source availability. This website records no gameplay and connects to no game APIs.</p></div>
          <div className="dataGrid">{data.map(([n,title,desc,status])=><article key={n} data-reveal><div className="dataTop"><span>{n}</span><span aria-hidden="true">↗</span></div><h3>{title}</h3><p>{desc}</p><small>{status}</small></article>)}</div>
          <div className="architecture" data-reveal><div className="architectureTitle"><span>PROPOSED DATA FLOW</span><small>Collection and coaching are separate paths.</small></div><div className="pipeline"><div><small>IN MATCH</small><strong>Approved recorder</strong><p>Consented events → stored timeline</p></div><div className="matchGate"><span aria-hidden="true">◇</span><strong>Match-end gate</strong><p>No analysis until confirmed complete</p></div><div><small>POST-GAME ONLY</small><strong>Analyzers → AI coach</strong><p>Structured findings → report → future goals</p></div></div><p className="architectureFoot">If match completion is uncertain, the proposed design keeps analysis locked. No current-match data path leads back into the live overlay.</p></div>
        </section>

        <section id="scope" className="section shell scopeSection">
          <div><div className="eyebrow">REVIEWER BRIEF</div><h2>Built around<br />player agency.</h2><p className="sectionIntro">A proposal for public product review. This prototype demonstrates the intended experience; it does not claim Riot or Overwolf approval.</p><a className="textLink" href="https://developer.riotgames.com/docs/tft">Riot TFT developer policy ↗</a><a className="textLink" href="https://dev.overwolf.com/ow-electron/guides/game-compliance/teamfight-tactics/">Overwolf TFT guidelines ↗</a></div>
          <div className="scopeDetails"><details open><summary><span>01</span> Initial approval request</summary><p>A public desktop post-game coach, supported by optional static references and prior-session goals during play. Proposed recording covers player-owned state and encountered shops only where explicitly permitted. The site is a synthetic demonstration, not a telemetry bridge.</p></details><details><summary><span>02</span> Explicit exclusions</summary><p>No automated opponent-board tracking, opponent compositions or opponent screenshots in initial scope. No current augment-offering ingestion, augment win-rate or average-placement statistics, gameplay automation, hidden-player analysis, MMR estimates or live tactical instructions.</p></details><details><summary><span>03</span> Approval sequence</summary><p>Submit the exact product description and this prototype to Riot first. Production API key approval and the applicable Riot Sign On integration must be resolved before launch. After Riot approval, return to Overwolf with the approval screenshot and exact submitted description for its separate compliance review.</p></details><details><summary><span>04</span> MVP and later milestones</summary><p><b>Now:</b> testable reviewer prototype with synthetic reports, reference panels and control demonstrations.</p><p><b>After approval:</b> permitted recorder, own-board / bench / items / economy / shop timelines, post-game analyzers, coaching summaries, history deletion and persistent practice goals.</p><p><b>Only with separate permission:</b> optional own-board screenshots and measurement of player-chosen scouting activity. No opponent-board tracking is planned for this initial scope.</p></details></div>
        </section>

        <section id="privacy" className="section shell privacySection"><div><div className="eyebrow">PRIVACY & PLAYER CONTROL</div><h2>Your history.<br />Your choice.</h2><p className="sectionIntro">Try the proposed controls. These switches affect this demo only; nothing is recorded, uploaded or sent to an AI service.</p><a className="textLink" href="/privacy">Read the prototype privacy notice ↗</a></div><PrivacyDemo /></section>
        <section className="closing shell" data-reveal><div className="eyebrow">RECORD NOW. COACH LATER.</div><h2>The next game starts<br /><em>with a little more you.</em></h2><a className="button primary" href="#coach">Explore the sample review <span aria-hidden="true">↗</span></a><p>Working name · Public product concept · Approval required before launch</p></section>
      </main>
      <footer className="footer shell"><div><a className="brand" href="#">{product.name}<span className="brandMark smallMark" aria-hidden="true">T·</span></a><p>Independent TFT post-game coaching concept.</p><div className="footerLinks"><a href="/privacy">Privacy</a><a href="#scope">Review scope</a>{product.contactEmail ? <a href={`mailto:${product.contactEmail}`}>Contact developer</a> : <span>Review contact: to be added before submission</span>}</div></div><p className="disclaimer">{product.name} isn&apos;t endorsed by Riot Games and doesn&apos;t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.</p></footer>
    </>
  );
}
