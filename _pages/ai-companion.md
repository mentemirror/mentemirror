---
layout: mm-default
title: Mente Mirror AI Companion
description: A bounded conversational AI designed to listen, help you reflect, support low-risk wellbeing actions and connect you with human care when appropriate.
permalink: /ai-wellness/mjuzi/
body_class: mm-ai-companion-page
---
<style>
/* AI Companion hero: make the title visually span the desktop hero width */
.mm-ai-companion-page .mm-ai-companion-hero h1 {
  width: 100%;
  max-width: none;
}

@media (min-width: 921px) {
  .mm-ai-companion-page .mm-ai-companion-hero h1 {
    font-size: clamp(3rem, 5.25vw, 4.5rem);
    line-height: 1.02;
    letter-spacing: -0.04em;
    white-space: nowrap;
  }

  .mm-ai-companion-page .mm-ai-companion-hero > .mm-container > p {
    max-width: none;
    width: 100%;
  }
}

@media (max-width: 920px) {
  .mm-ai-companion-page .mm-ai-companion-hero h1 {
    white-space: normal;
  }
}

/* Everyday capabilities heading: use the full section width */
.mm-ai-companion-page .mm-capabilities-heading {
  max-width: none;
  width: 100%;
}

.mm-ai-companion-page .mm-capabilities-heading h2,
.mm-ai-companion-page .mm-capabilities-heading p {
  max-width: none;
  width: 100%;
}


/* AI Companion hero: keep the text on the left and push the artwork to the right */
.mm-ai-companion-page .mm-ai-companion-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, .92fr);
  gap: clamp(42px, 6vw, 76px);
  align-items: center;
}

.mm-ai-companion-page .mm-ai-companion-hero-copy {
  min-width: 0;
}

.mm-ai-companion-page .mm-ai-companion-hero-copy > p {
  width: 100%;
  max-width: none;
}

.mm-ai-companion-page .mm-ai-companion-hero-image {
  width: 100%;
  max-width: 455px;
  margin: 0 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.mm-ai-companion-page .mm-ai-companion-hero-image img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 430px;
  object-fit: contain;
}

@media (max-width: 920px) {
  .mm-ai-companion-page .mm-ai-companion-hero-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .mm-ai-companion-page .mm-ai-companion-hero-image {
    max-width: 390px;
    margin: 0 auto;
    justify-content: center;
  }

  .mm-ai-companion-page .mm-ai-companion-hero-image img {
    max-height: 360px;
  }
}


/* ===== AI Companion hero visual polish ===== */

/* Balance the hero like the Smart Wearable Insights page. */
.mm-ai-companion-page .mm-ai-companion-hero {
  padding: 54px 0 58px;
}

.mm-ai-companion-page .mm-ai-companion-hero-grid {
  grid-template-columns: minmax(0, 1.04fr) minmax(360px, .96fr);
  gap: clamp(42px, 6vw, 72px);
  align-items: center;
}

.mm-ai-companion-page .mm-ai-companion-hero-copy {
  max-width: 700px;
}

.mm-ai-companion-page .mm-ai-companion-hero-copy h1 {
  width: 100%;
  max-width: 690px;
  margin: 14px 0 16px;
  font-size: clamp(3rem, 4.7vw, 4.35rem);
  line-height: 1.03;
  letter-spacing: -0.04em;
  white-space: normal;
  text-wrap: balance;
}

.mm-ai-companion-page .mm-ai-companion-hero-copy > p {
  max-width: 650px;
  width: 100%;
  font-size: 1rem;
  line-height: 1.7;
}

/* Give the artwork a contained, intentional presentation. */
.mm-ai-companion-page .mm-ai-companion-hero-image {
  width: 100%;
  max-width: 470px;
  margin-left: auto;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 26px;
  background:
    radial-gradient(circle at 78% 20%, rgba(235,63,122,.08), transparent 30%),
    linear-gradient(145deg,#fff 0%,#fff9fc 100%);
}

.mm-ai-companion-page .mm-ai-companion-hero-image img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 430px;
  object-fit: contain;
}

@media (max-width: 1100px) {
  .mm-ai-companion-page .mm-ai-companion-hero-grid {
    grid-template-columns: minmax(0, 1fr) minmax(330px, .9fr);
    gap: 36px;
  }

  .mm-ai-companion-page .mm-ai-companion-hero-copy h1 {
    font-size: clamp(2.8rem, 4.5vw, 3.8rem);
  }
}

@media (max-width: 920px) {
  .mm-ai-companion-page .mm-ai-companion-hero {
    padding: 46px 0 50px;
  }

  .mm-ai-companion-page .mm-ai-companion-hero-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .mm-ai-companion-page .mm-ai-companion-hero-copy,
  .mm-ai-companion-page .mm-ai-companion-hero-copy h1,
  .mm-ai-companion-page .mm-ai-companion-hero-copy > p {
    max-width: none;
  }

  .mm-ai-companion-page .mm-ai-companion-hero-image {
    max-width: 410px;
    margin: 0 auto;
    justify-content: center;
  }

  .mm-ai-companion-page .mm-ai-companion-hero-image img {
    max-height: 360px;
  }
}

@media (max-width: 640px) {
  .mm-ai-companion-page .mm-ai-companion-hero {
    padding: 38px 0 42px;
  }

  .mm-ai-companion-page .mm-ai-companion-hero-copy h1 {
    font-size: clamp(2.35rem, 10vw, 3.2rem);
  }

  .mm-ai-companion-page .mm-ai-companion-hero-image {
    max-width: 330px;
    padding: 8px;
  }
}


/* ===== Alternate hero treatment: readable artwork, aligned with page grid ===== */
.mm-ai-companion-page .mm-ai-companion-hero {
  padding: 52px 0 56px;
  background:
    radial-gradient(circle at 88% 42%, rgba(235,63,122,.06), transparent 24%),
    linear-gradient(110deg,#fff 0%,#fff 66%,#fff9fc 100%);
}

.mm-ai-companion-page .mm-ai-companion-hero-grid {
  grid-template-columns: minmax(0, 1fr) 440px;
  gap: 56px;
  align-items: center;
}

.mm-ai-companion-page .mm-ai-companion-hero-copy {
  max-width: 700px;
}

.mm-ai-companion-page .mm-ai-companion-hero-copy h1 {
  max-width: 700px;
  font-size: clamp(3rem, 4.4vw, 4.2rem);
  line-height: 1.02;
  white-space: normal;
  text-wrap: balance;
}

.mm-ai-companion-page .mm-ai-companion-hero-copy > p {
  max-width: 660px;
  line-height: 1.7;
}

.mm-ai-companion-page .mm-ai-companion-hero-image {
  width: 440px;
  max-width: none;
  margin-left: auto;
  padding: 0;
  border-radius: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: visible;
}

.mm-ai-companion-page .mm-ai-companion-hero-image img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 520px;
  object-fit: contain;
  image-rendering: auto;
}

@media (max-width: 1100px) {
  .mm-ai-companion-page .mm-ai-companion-hero-grid {
    grid-template-columns: minmax(0, 1fr) 380px;
    gap: 40px;
  }

  .mm-ai-companion-page .mm-ai-companion-hero-image {
    width: 380px;
  }

  .mm-ai-companion-page .mm-ai-companion-hero-image img {
    max-height: 460px;
  }
}

@media (max-width: 920px) {
  .mm-ai-companion-page .mm-ai-companion-hero-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .mm-ai-companion-page .mm-ai-companion-hero-copy,
  .mm-ai-companion-page .mm-ai-companion-hero-copy h1,
  .mm-ai-companion-page .mm-ai-companion-hero-copy > p {
    max-width: none;
  }

  .mm-ai-companion-page .mm-ai-companion-hero-image {
    width: min(100%, 440px);
    margin: 0 auto;
    justify-content: center;
  }

  .mm-ai-companion-page .mm-ai-companion-hero-image img {
    max-height: 420px;
  }
}

@media (max-width: 640px) {
  .mm-ai-companion-page .mm-ai-companion-hero {
    padding: 38px 0 42px;
  }

  .mm-ai-companion-page .mm-ai-companion-hero-copy h1 {
    font-size: clamp(2.35rem, 10vw, 3.2rem);
  }

  .mm-ai-companion-page .mm-ai-companion-hero-image {
    width: min(100%, 350px);
  }

  .mm-ai-companion-page .mm-ai-companion-hero-image img {
    max-height: 360px;
  }
}


/* ===== Readability-first AI Companion hero =====
   The source artwork contains small UI text, so it needs substantially
   more rendered width than a narrow right-hand column can provide. */
.mm-ai-companion-page .mm-ai-companion-hero {
  padding: 50px 0 56px;
  background:
    radial-gradient(circle at 86% 18%, rgba(235,63,122,.05), transparent 24%),
    linear-gradient(110deg,#fff 0%,#fff 72%,#fff9fc 100%);
}

.mm-ai-companion-page .mm-ai-companion-hero-grid {
  display: block;
}

.mm-ai-companion-page .mm-ai-companion-hero-copy {
  max-width: 900px;
}

.mm-ai-companion-page .mm-ai-companion-hero-copy h1 {
  max-width: none;
  width: 100%;
  margin: 14px 0 16px;
  font-size: clamp(3rem, 4.6vw, 4.35rem);
  line-height: 1.02;
  letter-spacing: -0.04em;
  white-space: normal;
  text-wrap: balance;
}

.mm-ai-companion-page .mm-ai-companion-hero-copy > p {
  max-width: 820px;
  width: 100%;
  font-size: 1rem;
  line-height: 1.7;
}

/* Give the product artwork enough physical size for its embedded UI text
   to remain legible on normal desktop screens. */
.mm-ai-companion-page .mm-ai-companion-hero-image {
  width: 100%;
  max-width: 920px;
  margin: 34px auto 0;
  padding: 0;
  border-radius: 0;
  background: transparent;
  display: block;
  overflow: visible;
}

.mm-ai-companion-page .mm-ai-companion-hero-image img {
  display: block;
  width: 100%;
  height: auto;
  max-height: none;
  object-fit: contain;
  image-rendering: auto;
}

/* On very wide screens, let the artwork breathe a little more. */
@media (min-width: 1400px) {
  .mm-ai-companion-page .mm-ai-companion-hero-image {
    max-width: 1040px;
  }
}

@media (max-width: 920px) {
  .mm-ai-companion-page .mm-ai-companion-hero {
    padding: 44px 0 48px;
  }

  .mm-ai-companion-page .mm-ai-companion-hero-copy,
  .mm-ai-companion-page .mm-ai-companion-hero-copy h1,
  .mm-ai-companion-page .mm-ai-companion-hero-copy > p {
    max-width: none;
  }

  .mm-ai-companion-page .mm-ai-companion-hero-image {
    max-width: 760px;
    margin-top: 28px;
  }
}

@media (max-width: 640px) {
  .mm-ai-companion-page .mm-ai-companion-hero {
    padding: 36px 0 40px;
  }

  .mm-ai-companion-page .mm-ai-companion-hero-copy h1 {
    font-size: clamp(2.3rem, 10vw, 3.15rem);
  }

  .mm-ai-companion-page .mm-ai-companion-hero-image {
    margin-top: 22px;
  }
}


/* ===== Full-width AI Companion hero copy ===== */
.mm-ai-companion-page .mm-ai-companion-hero-copy {
  max-width: none;
  width: 100%;
}

.mm-ai-companion-page .mm-ai-companion-hero-copy h1 {
  max-width: none;
  width: 100%;
}

.mm-ai-companion-page .mm-ai-companion-hero-copy > p {
  max-width: none;
  width: 100%;
}

</style>

<section class="mm-page-hero mm-ai-companion-hero">
  <div class="mm-container mm-ai-companion-hero-grid">
    <div class="mm-ai-companion-hero-copy">
      <span class="mm-eyebrow">Mjuzi AI Companion</span>
      <h1>Mente Mirror AI Companion - LIVA</h1>
      <p>LIVA is a conversational AI designed to listen before it guides—helping you reflect, notice possible patterns and practise manageable wellbeing actions without pretending to be a therapist.</p>
    </div>
    <div class="mm-psychologists-intro-image mm-ai-companion-hero-image">
      <img
        src="{{ './assets/images/mjuzi/AI Companion.png' | relative_url }}"
        alt="Mjuzi Wellness Companion"
        loading="lazy"
      >
    </div>
  </div>
</section>

<section class="mm-section mm-section--tight">
  <div class="mm-container">
    <div class="mm-section-heading mm-section-heading--center">
      <span class="mm-eyebrow">How a conversation is designed</span>
      
      <p>Mjuzi is designed as a guided conversation, not a rapid-fire assessment. It follows your concern, asks one primary question at a time and keeps deeper exploration permission-led.</p>
    </div>
    <ol class="mm-journey mm-journey--conversation">
      <li><span class="mm-journey__number">01</span><h3>Listen</h3><p>Start with your words and your pace.</p></li>
      <li><span class="mm-journey__number">02</span><h3>Reflect</h3><p>Mirror what was shared without adding hidden meaning.</p></li>
      <li><span class="mm-journey__number">03</span><h3>Explore</h3><p>Ask one relevant question and invite correction.</p></li>
      <li><span class="mm-journey__number">04</span><h3>Practise</h3><p>Offer one approved low-risk tool when useful and wanted.</p></li>
      <li><span class="mm-journey__number">05</span><h3>Integrate</h3><p>Check what helped, note what remains, then close or connect onward.</p></li>
    </ol>
    <div class="mm-safety-callout" role="note"><span>{% include mm-icon.html name="shield" %}</span><p><strong>Safety and boundaries come first.</strong> Crisis, safeguarding, medical urgency, requests for human support and prohibited clinical requests override the ordinary conversational flow.</p></div>
  </div>
</section>

<section class="mm-section mm-section--soft">
  <div class="mm-container">
    <div class="mm-section-heading mm-capabilities-heading"><span class="mm-eyebrow">Everyday capabilities</span><h2>Useful support without pretending to do everything.</h2><p>The experience groups common needs into a smaller set of clear capabilities.</p></div>
    <div class="mm-card-grid mm-card-grid--3 mm-capability-clusters">
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="chat" %}</span><h3>Text &amp; voice conversation</h3><p>Conversational reflection through supported text or voice modes.</p></article>
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="heart" %}</span><h3>Emotional reflection</h3><p>Supportive acknowledgement, clarification and gentle pattern exploration.</p></article>
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="check" %}</span><h3>Check-ins &amp; continuity</h3><p>Short check-ins and approved prior context can help a returning conversation start with less repetition.</p></article>
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="meditation" %}</span><h3>Low-risk wellbeing tools</h3><p>Approved options such as breathing, grounding, reflection or journaling where eligibility and consent allow.</p></article>
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="sparkles" %}</span><h3>Personalised next steps</h3><p>Small suggestions informed by the current conversation and permitted wellness context.</p></article>
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="users" %}</span><h3>Human-care pathway</h3><p>Clear routing toward psychologists, psychiatrists or other appropriate support when AI should not decide alone.</p></article>
    </div>
  </div>
</section>

<section class="mm-section" id="ai-human-boundary">
  <div class="mm-container">
    <div class="mm-section-heading mm-section-heading--center"><span class="mm-eyebrow">AI + human, clearly separated</span><h2>LIVA supports the conversation. Qualified humans retain clinical judgement.</h2><p>The distinction is deliberate: immediacy and reflection can be supported by AI; diagnosis and consequential clinical decisions stay with qualified professionals.</p></div>
    <div class="mm-boundary-grid">
      <article class="mm-boundary-panel mm-boundary-panel--ai">
        <span class="mm-card__icon">{% include mm-icon.html name="sparkles" %}</span>
        <h3>LIVA can support</h3>
        <ul class="mm-check-list">
          <li>Listening and reflective conversation</li>
          <li>One-question-at-a-time exploration</li>
          <li>Approved low-risk wellbeing tools</li>
          <li>Check-ins and approved continuity</li>
          <li>Drafting bounded summaries where configured</li>
          <li>Guiding you toward human care</li>
        </ul>
      </article>
      <article class="mm-boundary-panel mm-boundary-panel--human">
        <span class="mm-card__icon">{% include mm-icon.html name="users" %}</span>
        <h3>Qualified professionals handle</h3>
        <ul class="mm-check-list">
          <li>Diagnosis and clinical conclusions</li>
          <li>Medication and treatment decisions</li>
          <li>Complex or high-risk clinical care</li>
          <li>Restricted personalised interventions</li>
          <li>Safeguarding and critical professional judgement</li>
          <li>Approval of client-facing reports where required</li>
        </ul>
      </article>
    </div>
  </div>
</section>

<section class="mm-section mm-section--soft" id="memory">
  <div class="mm-container">
    <div class="mm-section-heading mm-section-heading--center"><span class="mm-eyebrow">Continuity without a hidden profile</span><h2>What LIVA may remember—and what it should not.</h2><p>Returning sessions are designed to use the smallest relevant amount of approved context rather than replaying your history or turning AI guesses into facts.</p></div>
    <div class="mm-memory-grid">
      <article><span>{% include mm-icon.html name="check" %}</span><div><strong>Useful continuity</strong><p>Approved summaries, goals, preferences and tools you have tried may be used when relevant and permitted.</p></div></article>
      <article><span>{% include mm-icon.html name="brain" %}</span><div><strong>No durable hidden psychology</strong><p>AI hypotheses, inferred motives, personality labels and theory-derived conclusions are not meant to become ordinary long-term memory.</p></div></article>
      <article><span>{% include mm-icon.html name="edit" %}</span><div><strong>Your current words matter most</strong><p>If something has changed, your current account should take precedence over stale context. Disputed information should not be treated as settled fact.</p></div></article>
      <article><span>{% include mm-icon.html name="settings" %}</span><div><strong>Control follows consent</strong><p>Eligible information can be corrected or excluded, and revoking an optional consent should stop future use within that scope.</p></div></article>
    </div>
    <div class="mm-actions mm-actions--center"><a class="mm-text-link" href="{{ '/about/safety-privacy/' | relative_url }}">See privacy, consent and memory controls →</a></div>
  </div>
</section>

<section class="mm-section" id="after-session">
  <div class="mm-container">
    <div class="mm-section-heading mm-section-heading--center"><span class="mm-eyebrow">After a session</span><h2>Facts, professional interpretation and your summary stay separate.</h2><p>Where the post-session report workflow is enabled, Mente Mirror is designed to keep three information layers distinct so an AI-generated interpretation does not silently become a client fact.</p></div>
    <div class="mm-report-grid">
      <article class="mm-report-card"><span class="mm-report-card__number">01</span><h3>Factual session history</h3><p>What you actually shared: chronology, context, strengths, goals and selected exact wording, with missing information left as missing.</p><small>Grounded first · reviewed before approved longitudinal use</small></article>
      <article class="mm-report-card"><span class="mm-report-card__number">02</span><h3>Clinician-facing formulation</h3><p>Tentative psychological hypotheses remain separate from facts, include uncertainty and are restricted to authorised clinical review.</p><small>AI draft is tentative · formal diagnosis stays human-controlled</small></article>
      <article class="mm-report-card mm-report-card--client"><span class="mm-report-card__number">03</span><h3>Client-safe post-session summary</h3><p>A concise summary can include important themes, strengths, approved tools, reflective questions and next steps.</p><small>Human approval before release where this workflow applies</small></article>
    </div>
    <div class="mm-safety-callout" role="note"><span>{% include mm-icon.html name="shield" %}</span><p><strong>Private clinical material stays private.</strong> Clinician-only notes, hidden hypotheses and detailed safety records are not intended to appear in an ordinary client-facing report or conversational memory.</p></div>
  </div>
</section>

{% include mm-next-steps.html %}

<section class="mm-section mm-section--tight mm-assessment-back-section"><div class="mm-container"><div class="mm-actions"><a class="mm-text-link" href="{{ '/ai-wellness/' | relative_url }}">← Back to AI Wellness</a></div></div></section>
