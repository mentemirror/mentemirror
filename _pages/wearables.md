---
layout: mm-default
title: Smart Wearable Insights
description: See how consented wearable signals can add cautious, quality-aware context to your mental wellness journey with Mjuzi.
permalink: /ai-wellness/wearables/
body_class: mm-wearables-page
---
<style>
/* Smart Wearable Insights hero: let the intro paragraph use the full container width */
.mm-wearables-page .mm-ai-detail-hero > .mm-container > p {
  width: 100%;
  max-width: none;
}

/* Redesigned wearable insight flow */
.mm-wearables-page .mm-signal-flow--trust {
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 16px;
  margin: 42px 0 34px;
  padding: 0;
  overflow: visible;
}

.mm-wearables-page .mm-signal-flow--trust::before {
  content: "";
  position: absolute;
  top: 38px;
  left: 7%;
  right: 7%;
  height: 2px;
  background: linear-gradient(90deg, #eb3f7a 0%, #8b4fa6 48%, #4f846d 100%);
  opacity: .25;
  z-index: 0;
}

.mm-wearables-page .mm-signal-flow--trust .mm-signal-flow__stage {
  position: relative;
  z-index: 1;
  min-width: 0;
  min-height: 190px;
  padding: 24px 18px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  background: #fff;
  border: 1px solid var(--mm-border);
  border-top: 4px solid var(--mm-primary);
  border-radius: 16px;
  box-shadow: 0 10px 28px rgba(37,36,45,.06);
}

.mm-wearables-page .mm-signal-flow--trust .mm-signal-flow__stage:nth-of-type(2) {
  border-top-color: var(--mm-purple);
}
.mm-wearables-page .mm-signal-flow--trust .mm-signal-flow__stage:nth-of-type(3) {
  border-top-color: var(--mm-orange);
}
.mm-wearables-page .mm-signal-flow--trust .mm-signal-flow__stage:nth-of-type(4) {
  border-top-color: #d35d82;
}
.mm-wearables-page .mm-signal-flow--trust .mm-signal-flow__stage:nth-of-type(5) {
  border-top-color: #8b4fa6;
}
.mm-wearables-page .mm-signal-flow--trust .mm-signal-flow__stage--result {
  border-top-color: var(--mm-green);
  background: linear-gradient(180deg,#fff 0%,#f5faf7 100%);
}

.mm-wearables-page .mm-signal-flow--trust .mm-signal-flow__icon {
  width: 42px;
  height: 42px;
  margin: 0 0 18px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: var(--mm-primary-soft);
  color: var(--mm-primary-deep);
  border: 1px solid rgba(201,40,97,.13);
  flex: 0 0 auto;
}

.mm-wearables-page .mm-signal-flow--trust .mm-signal-flow__stage--result .mm-signal-flow__icon {
  background: #eef7f2;
  color: var(--mm-green);
  border-color: rgba(79,132,109,.16);
}

.mm-wearables-page .mm-signal-flow--trust h3 {
  margin: 0 0 9px;
  font-size: 1rem;
  line-height: 1.3;
}

.mm-wearables-page .mm-signal-flow--trust p {
  margin: 0;
  color: var(--mm-muted);
  font-size: .86rem;
  line-height: 1.55;
}

.mm-wearables-page .mm-signal-flow--trust .mm-signal-flow__stage:not(:last-of-type)::after {
  content: "→";
  position: absolute;
  top: 27px;
  right: -22px;
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  color: var(--mm-primary);
  background: #fff;
  font-size: 1rem;
  font-weight: 700;
  z-index: 3;
}

/* Old standalone arrows are no longer needed. */
.mm-wearables-page .mm-signal-flow--trust > .mm-signal-flow__arrow {
  display: none;
}

@media (max-width: 1050px) {
  .mm-wearables-page .mm-signal-flow--trust {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
  }

  .mm-wearables-page .mm-signal-flow--trust::before {
    display: none;
  }

  .mm-wearables-page .mm-signal-flow--trust .mm-signal-flow__stage:nth-of-type(3)::after {
    display: none;
  }
}

@media (max-width: 680px) {
  .mm-wearables-page .mm-signal-flow--trust {
    grid-template-columns: 1fr;
    gap: 14px;
    margin-top: 28px;
  }

  .mm-wearables-page .mm-signal-flow--trust .mm-signal-flow__stage {
    min-height: 0;
    display: grid;
    grid-template-columns: 46px 1fr;
    column-gap: 15px;
    padding: 18px;
  }

  .mm-wearables-page .mm-signal-flow--trust .mm-signal-flow__icon {
    grid-row: 1 / span 2;
    margin: 0;
  }

  .mm-wearables-page .mm-signal-flow--trust h3 {
    align-self: end;
  }

  .mm-wearables-page .mm-signal-flow--trust .mm-signal-flow__stage::after {
    display: none !important;
  }
}

/* Wearables hero: keep copy left and push insights artwork to the right */
.mm-wearables-page .mm-wearables-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, .72fr);
  gap: clamp(36px, 6vw, 80px);
  align-items: center;
}

.mm-wearables-page .mm-wearables-hero-copy {
  min-width: 0;
}

.mm-wearables-page .mm-wearables-hero-copy > p {
  width: 100%;
  max-width: none;
}

.mm-wearables-page .mm-wearables-hero-image {
  width: 100%;
  max-width: 520px;
  margin: 0 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.mm-wearables-page .mm-wearables-hero-image img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}

@media (max-width: 920px) {
  .mm-wearables-page .mm-wearables-hero-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .mm-wearables-page .mm-wearables-hero-image {
    max-width: 430px;
    margin: 0 auto;
    justify-content: center;
  }
}


/* ===== Wearables page visual polish ===== */

/* Make the hero feel intentional rather than like two unrelated blocks. */
.mm-wearables-page .mm-ai-detail-hero {
  padding: 54px 0 58px;
}

.mm-wearables-page .mm-wearables-hero-grid {
  grid-template-columns: minmax(0, 1.08fr) minmax(330px, .92fr);
  gap: clamp(42px, 6vw, 76px);
  align-items: center;
}

.mm-wearables-page .mm-wearables-hero-copy {
  max-width: 690px;
}

.mm-wearables-page .mm-wearables-hero-copy h1 {
  margin-bottom: 14px;
}

.mm-wearables-page .mm-wearables-hero-copy > p {
  font-size: 1rem;
  line-height: 1.7;
  max-width: 650px;
}

.mm-wearables-page .mm-wearables-hero-image {
  max-width: 455px;
  margin-left: auto;
  padding: 14px;
  border-radius: 26px;
  background:
    radial-gradient(circle at 76% 20%, rgba(235,63,122,.08), transparent 30%),
    linear-gradient(145deg,#fff 0%,#fff9fc 100%);
}

.mm-wearables-page .mm-wearables-hero-image img {
  max-height: 430px;
  object-fit: contain;
}

/* Give the process section a clearer transition from the hero. */
.mm-wearables-page .mm-section:first-of-type {
  padding-top: 66px;
}

.mm-wearables-page .mm-section:first-of-type .mm-section-heading {
  max-width: 900px;
  margin-bottom: 32px;
}

.mm-wearables-page .mm-section:first-of-type .mm-section-heading h2 {
  font-size: clamp(2rem, 3.1vw, 3rem);
  line-height: 1.08;
  max-width: 820px;
  margin-left: auto;
  margin-right: auto;
}

.mm-wearables-page .mm-section:first-of-type .mm-section-heading p {
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
}

/* Refine the six-step cards so the sequence reads faster. */
.mm-wearables-page .mm-signal-flow--trust {
  gap: 14px;
  margin-top: 34px;
}

.mm-wearables-page .mm-signal-flow--trust .mm-signal-flow__stage {
  min-height: 176px;
  padding: 22px 16px 18px;
  border-radius: 14px;
}

.mm-wearables-page .mm-signal-flow--trust .mm-signal-flow__icon {
  width: 40px;
  height: 40px;
  margin-bottom: 15px;
}

.mm-wearables-page .mm-signal-flow--trust h3 {
  font-size: .94rem;
  margin-bottom: 7px;
}

.mm-wearables-page .mm-signal-flow--trust p {
  font-size: .80rem;
  line-height: 1.48;
}

/* Keep arrows visually centered in the gap rather than floating above cards. */
.mm-wearables-page .mm-signal-flow--trust .mm-signal-flow__stage:not(:last-of-type)::after {
  top: 31px;
  right: -21px;
  width: 28px;
  height: 24px;
  font-size: .92rem;
}

/* Add breathing room after the process before the principle cards. */
.mm-wearables-page .mm-wearable-principles {
  margin-top: 34px;
}

@media (max-width: 1050px) {
  .mm-wearables-page .mm-ai-detail-hero {
    padding: 46px 0 50px;
  }

  .mm-wearables-page .mm-wearables-hero-image {
    max-width: 410px;
  }
}

@media (max-width: 920px) {
  .mm-wearables-page .mm-wearables-hero-grid {
    gap: 24px;
  }

  .mm-wearables-page .mm-wearables-hero-copy {
    max-width: none;
  }

  .mm-wearables-page .mm-wearables-hero-image {
    max-width: 390px;
    margin: 0 auto;
  }

  .mm-wearables-page .mm-wearables-hero-image img {
    max-height: 360px;
  }
}

@media (max-width: 680px) {
  .mm-wearables-page .mm-ai-detail-hero {
    padding: 38px 0 42px;
  }

  .mm-wearables-page .mm-wearables-hero-image {
    max-width: 320px;
    padding: 8px;
  }

  .mm-wearables-page .mm-section:first-of-type {
    padding-top: 52px;
  }
}


/* ===== Alternate hero treatment: readable artwork, aligned with page grid ===== */
.mm-wearables-page .mm-ai-detail-hero {
  padding: 52px 0 56px;
  background:
    radial-gradient(circle at 88% 42%, rgba(235,63,122,.06), transparent 24%),
    linear-gradient(110deg,#fff 0%,#fff 66%,#fff9fc 100%);
}

.mm-wearables-page .mm-wearables-hero-grid {
  grid-template-columns: minmax(0, 1fr) 420px;
  gap: 56px;
  align-items: center;
}

.mm-wearables-page .mm-wearables-hero-copy {
  max-width: 690px;
}

.mm-wearables-page .mm-wearables-hero-copy > p {
  max-width: 660px;
  line-height: 1.7;
}

.mm-wearables-page .mm-wearables-hero-image {
  width: 420px;
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

.mm-wearables-page .mm-wearables-hero-image img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
}

@media (max-width: 1050px) {
  .mm-wearables-page .mm-wearables-hero-grid {
    grid-template-columns: minmax(0, 1fr) 360px;
    gap: 40px;
  }

  .mm-wearables-page .mm-wearables-hero-image {
    width: 360px;
  }

  .mm-wearables-page .mm-wearables-hero-image img {
    max-height: 440px;
  }
}

@media (max-width: 920px) {
  .mm-wearables-page .mm-wearables-hero-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .mm-wearables-page .mm-wearables-hero-image {
    width: min(100%, 420px);
    margin: 0 auto;
    justify-content: center;
  }

  .mm-wearables-page .mm-wearables-hero-image img {
    max-height: 420px;
  }
}

@media (max-width: 680px) {
  .mm-wearables-page .mm-ai-detail-hero {
    padding: 38px 0 42px;
  }

  .mm-wearables-page .mm-wearables-hero-image {
    width: min(100%, 340px);
  }

  .mm-wearables-page .mm-wearables-hero-image img {
    max-height: 360px;
  }
}

</style>

<section class="mm-page-hero mm-ai-detail-hero">
  <div class="mm-container mm-wearables-hero-grid">
    <div class="mm-wearables-hero-copy">
      <span class="mm-eyebrow">AI Wellness · Mjuzi</span>
      <h1>Smart Wearable Insights</h1>
      <p>Body signals can add context to your wellness journey. Mjuzi is designed to consider supported wearable trends alongside your check-ins and other approved information—not as a shortcut to diagnosis.</p>
    </div>
    <div class="mm-psychologists-intro-image mm-wearables-hero-image">
      <img
        src="{{ './assets/images/mjuzi/ring1.png' | relative_url }}"
        alt="Mjuzi Wellness Companion"
        loading="lazy"
      >
    </div>
  </div>
</section>

<section class="mm-section">
  <div class="mm-container">
    <div class="mm-section-heading mm-section-heading--center">
      <span class="mm-eyebrow">How an insight should be formed</span>
      <p>A number on a wearable is not psychological truth. Useful interpretation requires permission, a meaningful baseline, usable data and confirmation of what was happening in your life.</p>
    </div>

    <div class="mm-signal-flow mm-signal-flow--trust" aria-label="Wearable insight trust process">
      <article class="mm-signal-flow__stage"><span class="mm-signal-flow__icon" aria-hidden="true">{% include mm-icon.html name="shield" %}</span><h3>Consent</h3><p>Only approved data sources and purposes</p></article>
      <span class="mm-signal-flow__arrow" aria-hidden="true">→</span>
      <article class="mm-signal-flow__stage"><span class="mm-signal-flow__icon" aria-hidden="true">{% include mm-icon.html name="activity" %}</span><h3>Your baseline</h3><p>Understand your usual pattern before personalising</p></article>
      <span class="mm-signal-flow__arrow" aria-hidden="true">→</span>
      <article class="mm-signal-flow__stage"><span class="mm-signal-flow__icon" aria-hidden="true">{% include mm-icon.html name="check" %}</span><h3>Quality check</h3><p>Freshness, missingness and device quality matter</p></article>
      <span class="mm-signal-flow__arrow" aria-hidden="true">→</span>
      <article class="mm-signal-flow__stage"><span class="mm-signal-flow__icon" aria-hidden="true">{% include mm-icon.html name="watch" %}</span><h3>Notice a change</h3><p>Surface a deviation without deciding what it means</p></article>
      <span class="mm-signal-flow__arrow" aria-hidden="true">→</span>
      <article class="mm-signal-flow__stage"><span class="mm-signal-flow__icon" aria-hidden="true">{% include mm-icon.html name="chat" %}</span><h3>Ask you</h3><p>Reconfirm the real-world context</p></article>
      <span class="mm-signal-flow__arrow" aria-hidden="true">→</span>
      <article class="mm-signal-flow__stage mm-signal-flow__stage--result"><span class="mm-signal-flow__icon" aria-hidden="true">{% include mm-icon.html name="sparkles" %}</span><h3>Wellness reflection</h3><p>A cautious next question or supported action</p></article>
    </div>

    <div class="mm-wearable-principles">
      <article><strong>Low-quality data lowers confidence</strong><p>Missing, stale, partial or conflicting data should reduce confidence or suppress an insight rather than being silently filled in.</p></article>
      <article><strong>Different metrics stay different</strong><p>Signals with different physiological definitions should not be blended as though they were interchangeable unless an approved method explicitly maps them.</p></article>
      <article><strong>Your report remains primary</strong><p>A sensor trend should not overrule what you say about how you feel or be used as proof of truthfulness, anxiety, depression, trauma or personality.</p></article>
    </div>
  </div>
</section>

<section class="mm-section mm-section--soft">
  <div class="mm-container">
    <div class="mm-section-head">
      <span class="mm-eyebrow">Explore signals</span>
      <h2>Understand the signals Mjuzi can use as context.</h2>
      <p>Wearable information is most useful as a pattern over time and should be interpreted together with how you actually feel.</p>
    </div>

    <div class="mm-card-grid mm-card-grid--3">
      <a class="mm-card mm-ai-link-card" href="{{ '/ai-wellness/wearables/sleep/' | relative_url }}"><span class="mm-ai-link-card__icon" aria-hidden="true">{% include mm-icon.html name="moon" %}</span><h2>Sleep</h2><p>Look at sleep patterns and how they may relate to energy, focus and recovery.</p><span class="mm-text-link">Explore Sleep →</span></a>
      <a class="mm-card mm-ai-link-card" href="{{ '/ai-wellness/wearables/hrv/' | relative_url }}"><span class="mm-ai-link-card__icon" aria-hidden="true">{% include mm-icon.html name="activity" %}</span><h2>HRV</h2><p>Use heart-rate-variability trends as one source of context for recovery and physiological load.</p><span class="mm-text-link">Explore HRV →</span></a>
      <a class="mm-card mm-ai-link-card" href="{{ '/ai-wellness/wearables/stress/' | relative_url }}"><span class="mm-ai-link-card__icon" aria-hidden="true">{% include mm-icon.html name="thought" %}</span><h2>Stress</h2><p>Bring wearable patterns and self-reported experience together to reflect on periods of higher load.</p><span class="mm-text-link">Explore Stress →</span></a>
      <a class="mm-card mm-ai-link-card" href="{{ '/ai-wellness/wearables/recovery/' | relative_url }}"><span class="mm-ai-link-card__icon" aria-hidden="true">{% include mm-icon.html name="leaf" %}</span><h2>Recovery</h2><p>See recovery in the context of sleep, activity and other available signals rather than as a single number.</p><span class="mm-text-link">Explore Recovery →</span></a>
      <a class="mm-card mm-ai-link-card" href="{{ '/ai-wellness/wearables/activity/' | relative_url }}"><span class="mm-ai-link-card__icon" aria-hidden="true">{% include mm-icon.html name="activity" %}</span><h2>Activity</h2><p>Notice movement patterns and how active or quieter days align with mood, energy and routine.</p><span class="mm-text-link">Explore Activity →</span></a>
      <article class="mm-card mm-ai-link-card mm-ai-link-card--context"><span class="mm-ai-link-card__icon" aria-hidden="true">{% include mm-icon.html name="heart" %}</span><h2>Heart Rate</h2><p>Heart-rate trends may provide additional physiological context when available from a connected device.</p><span class="mm-ai-card-note">Used as additional physiological context when available from the connected device.</span></article>
    </div>

    <div class="mm-ai-safety-note"><strong>Context, not diagnosis or crisis proof.</strong><p>Wearable measurements can vary by device and circumstance. They should not diagnose a mental-health condition, prove a crisis or reassure against an explicit safety concern.</p></div>
    <p class="mm-capability-note">Signal availability depends on the connected wearable, supported sensors and current app integration. Confirm support for a specific device or signal before relying on it.</p>
  </div>
</section>

{% include mm-next-steps.html %}

<section class="mm-section mm-section--tight mm-assessment-back-section"><div class="mm-container"><div class="mm-actions"><a class="mm-text-link" href="{{ '/ai-wellness/' | relative_url }}">← Back to AI Wellness</a></div></div></section>
