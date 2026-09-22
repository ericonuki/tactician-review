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
      <header className="nav shell">
        <a className="brand" href="#" aria-label={`${product.name} home`}><span className="brandMark" aria-hidden="true">T<span>·</span></span>{product.name}<span className="brandLabel">POST-GAME COACH</span></a>
        <nav aria-label="Main navigation"><a href="#experience">Experience</a><a href="#live">In game</a><a href="#scope">Review scope</a></nav>
        <a className="navCta" href="#coach">Explore the demo <span aria-hidden="true">↗</span></a>
      </header>
      <main id="main">
        <section className="hero shell">
          <div className="heroCopy">
            <div className="eyebrow"><span className="statusDot" /> FOR RIOT / OVERWOLF REVIEW</div>
            <h1>Record now.<br /><em>Coach later.</em></h1>
            <p className="lede">A better understanding of your last game.<br className="desktopBreak" /> A clearer focus for your next.</p>
            <p className="heroDescription">A proposed Teamfight Tactics desktop coach that turns completed matches into evidence-led lessons. You make the decisions. The coaching comes after.</p>
            <div className="heroActions"><a className="button primary" href="#coach">Open a sample review <span aria-hidden="true">↗</span></a><a className="textLink" href="#scope">Read the approval scope <span aria-hidden="true">→</span></a></div>
            <div className="prototypeNote"><span aria-hidden="true">◇</span> Interactive concept · Synthetic match data · Not yet approved</div>
          </div>
          <div className="heroVisual" aria-label="Illustrative post-game coaching report">
            <div className="visualCaption"><span>THE MATCH IS OVER. THE LEARNING ISN’T.</span><span>01 / REVIEW</span></div>
            <div className="window">
              <div className="windowBar"><span className="miniBrand">T·</span><b>Match review</b><span className="pill">MATCH COMPLETE</span></div>
              <div className="reportHead"><div><small>SYNTHETIC MATCH / 34:18</small><h2>A good result.<br /><span>A useful lesson.</span></h2></div><div className="placement"><b>04<span>th</span></b><small>PLACEMENT</small></div></div>
              <div className="chartHeader"><strong>Economy timeline</strong><span>Gold · selected snapshots</span></div>
              <div className="economyChart" role="img" aria-label="Synthetic gold timeline: 20, 30, 40, 50, 42, 8, 18, 28 gold. Roll-down at Stage 4-1.">
                {[20,30,40,50,42,8,18,28].map((gold, i) => <div key={i} className={i === 5 ? "chartBar selected" : "chartBar"} style={{height: `${gold * 1.5 + 14}px`}}><span>{gold}</span></div>)}
              </div>
              <div className="chartLabels"><span>STAGE 2</span><span>STAGE 3</span><span className="goldText">4-1 ROLL-DOWN</span><span>STAGE 5</span></div>
              <div className="findingGrid"><div><span className="findingTag mintText">WHAT WENT WELL</span><h3>Economy discipline</h3><p>Built a healthy reserve before the transition.</p></div><div><span className="findingTag goldText">WORTH A CLOSER LOOK</span><h3>Transition flexibility</h3><p>Two possible paths appeared in the shops you saw.</p></div></div>
              <div className="coachCard"><span className="coachIcon" aria-hidden="true">✧</span><div><small>ONE FOCUS FOR YOUR NEXT GAME</small><p>Consider two transition paths before committing.</p></div><span aria-hidden="true">↗</span></div>
            </div>
            <div className="visualFoot"><span className="statusDot" /> Personalized analysis begins only after the match ends.</div>
          </div>
        </section>

        <section id="experience" className="boundary shell" aria-label="Product principle">
          <div><span className="phaseNumber">01</span><div><small>DURING YOUR MATCH</small><h2>Space to play.</h2><p>Static references. Goals set beforehand.<br />Passive recording, only where approved.</p></div></div>
          <div className="boundaryGate"><span aria-hidden="true">→</span><small>MATCH ENDS</small></div>
          <div><span className="phaseNumber">02</span><div><small className="mintText">AFTER YOUR MATCH</small><h2>Room to improve.</h2><p>A decision timeline. Evidence-led explanations.<br />One or two objectives for future games.</p></div></div>
        </section>

        <section className="section shell" id="flow">
          <div className="sectionHeading"><div><div className="eyebrow">THE PLAYER JOURNEY</div><h2>One match. A lasting lesson.</h2></div><p>A front-facing coaching experience, from a practice objective to a completed-match review.</p></div>
          <ol className="journey">{[
            ["Choose a focus", "Before queueing, select a goal from a previous review."],
            ["Play your game", "Keep a small static overlay, or dismiss it entirely."],
            ["Record quietly", "With consent, save only explicitly approved match context."],
            ["Finish the match", "Confirm the full match has ended before unlocking analysis."],
            ["Review & practice", "Explore key moments, then carry a lesson into a future game."],
          ].map(([title, text], i) => <li key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
        </section>

        <section id="live" className="section shell liveSection">
          <div><div className="eyebrow">01 / DURING THE MATCH</div><h2>A small overlay.<br />A clear boundary.</h2><p className="sectionIntro">The proposed live surface shows references and goals established before the match. Those goals stay unchanged, regardless of what happens in the game.</p><div className="policyColumns"><div><h3><span className="mintText">＋</span> Proposed live surface</h3><ul><li>Static champion and composition references</li><li>Static item information and recipes</li><li>Previous-session practice goals</li><li>Optional, dismissible overlay</li></ul></div><div><h3><span className="goldText">−</span> Excluded from live play</h3><ul><li>Buy, sell, reroll or level instructions</li><li>Current-shop or augment advice</li><li>Opponent-based positioning or scouting</li><li>Dynamic pivots or event-triggered reminders</li></ul></div></div></div>
          <div className="liveStage"><div className="stageLabel"><span className="statusDot" /> ILLUSTRATIVE LIVE SURFACE</div><div className="abstractBoard" aria-hidden="true">{Array.from({length:28},(_,i)=><span key={i} />)}</div><OverlayDemo /><p className="stageFoot">No live analysis. No reacting to the current board.<br />Try the reference panel or dismiss the overlay.</p></div>
        </section>

        <section id="coach" className="section shell">
          <div className="sectionHeading"><div><div className="eyebrow">02 / AFTER THE MATCH</div><h2>Understand the decision.<br /><span className="mutedHeading">Then build the habit.</span></h2></div><p>Explore a synthetic review. Select a moment, inspect its evidence, and save a practice objective for a future match.</p></div>
          <ReviewDemo />
          <div className="teachingNotes"><p><b>Evidence first.</b> Planned deterministic analyzers identify decision points before an AI explanation is generated.</p><p><b>Context over certainty.</b> Alternative paths are discussion points, not proof that another choice would have won.</p><p><b>Progress over prescriptions.</b> Review strengths, recurring habits and a small number of future practice goals.</p></div>
        </section>

        <section id="data" className="section shell">
          <div className="sectionHeading"><div><div className="eyebrow">PROPOSED RECORDING SCOPE</div><h2>The context behind the lesson.</h2></div><p>Every telemetry category is subject to Riot/Overwolf approval and source availability. This website records no gameplay and connects to no game APIs.</p></div>
          <div className="dataGrid">{data.map(([n,title,desc,status])=><article key={n}><div className="dataTop"><span>{n}</span><span aria-hidden="true">↗</span></div><h3>{title}</h3><p>{desc}</p><small>{status}</small></article>)}</div>
          <div className="architecture"><div className="architectureTitle"><span>PROPOSED DATA FLOW</span><small>Collection and coaching are separate paths.</small></div><div className="pipeline"><div><small>IN MATCH</small><strong>Approved recorder</strong><p>Consented events → stored timeline</p></div><div className="matchGate"><span aria-hidden="true">◇</span><strong>Match-end gate</strong><p>No analysis until confirmed complete</p></div><div><small>POST-GAME ONLY</small><strong>Analyzers → AI coach</strong><p>Structured findings → report → future goals</p></div></div><p className="architectureFoot">If match completion is uncertain, the proposed design keeps analysis locked. No current-match data path leads back into the live overlay.</p></div>
        </section>

        <section id="scope" className="section shell scopeSection">
          <div><div className="eyebrow">REVIEWER BRIEF</div><h2>Built around<br />player agency.</h2><p className="sectionIntro">A proposal for public product review. This prototype demonstrates the intended experience; it does not claim Riot or Overwolf approval.</p><a className="textLink" href="https://developer.riotgames.com/docs/tft">Riot TFT developer policy ↗</a><a className="textLink" href="https://dev.overwolf.com/ow-electron/guides/game-compliance/teamfight-tactics/">Overwolf TFT guidelines ↗</a></div>
          <div className="scopeDetails"><details open><summary><span>01</span> Initial approval request</summary><p>A public desktop post-game coach, supported by optional static references and prior-session goals during play. Proposed recording covers player-owned state and encountered shops only where explicitly permitted. The site is a synthetic demonstration, not a telemetry bridge.</p></details><details><summary><span>02</span> Explicit exclusions</summary><p>No automated opponent-board tracking, opponent compositions or opponent screenshots in initial scope. No current augment-offering ingestion, augment win-rate or average-placement statistics, gameplay automation, hidden-player analysis, MMR estimates or live tactical instructions.</p></details><details><summary><span>03</span> Approval sequence</summary><p>Submit the exact product description and this prototype to Riot first. Production API key approval and the applicable Riot Sign On integration must be resolved before launch. After Riot approval, return to Overwolf with the approval screenshot and exact submitted description for its separate compliance review.</p></details><details><summary><span>04</span> MVP and later milestones</summary><p><b>Now:</b> testable reviewer prototype with synthetic reports, reference panels and control demonstrations.</p><p><b>After approval:</b> permitted recorder, own-board / bench / items / economy / shop timelines, post-game analyzers, coaching summaries, history deletion and persistent practice goals.</p><p><b>Only with separate permission:</b> optional own-board screenshots and measurement of player-chosen scouting activity. No opponent-board tracking is planned for this initial scope.</p></details></div>
        </section>

        <section id="privacy" className="section shell privacySection"><div><div className="eyebrow">PRIVACY & PLAYER CONTROL</div><h2>Your history.<br />Your choice.</h2><p className="sectionIntro">Try the proposed controls. These switches affect this demo only; nothing is recorded, uploaded or sent to an AI service.</p><a className="textLink" href="/privacy">Read the prototype privacy notice ↗</a></div><PrivacyDemo /></section>
        <section className="closing shell"><div className="eyebrow">RECORD NOW. COACH LATER.</div><h2>The player plays.<br />The coach helps them reflect.</h2><a className="button primary" href="#coach">Explore the sample review <span aria-hidden="true">↗</span></a><p>Working name · Public product concept · Approval required before launch</p></section>
      </main>
      <footer className="footer shell"><div><a className="brand" href="#">{product.name}<span className="brandMark smallMark" aria-hidden="true">T·</span></a><p>Independent TFT post-game coaching concept.</p><div className="footerLinks"><a href="/privacy">Privacy</a><a href="#scope">Review scope</a>{product.contactEmail ? <a href={`mailto:${product.contactEmail}`}>Contact developer</a> : <span>Review contact: to be added before submission</span>}</div></div><p className="disclaimer">{product.name} isn&apos;t endorsed by Riot Games and doesn&apos;t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.</p></footer>
    </>
  );
}
