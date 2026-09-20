---
layout: mm-default
title: Mjuzi AI Wellness
description: Discover Mjuzi, Mente Mirror's preventive, personalised and context-aware AI wellness platform using self-report, behavioural patterns, available wearable context and conversational reflection.
permalink: /ai-wellness/
body_class: mm-ai-wellness-page
og_image: /assets/images/mjuzi/liva-product-screen.jpeg
---
<style>
/* Mjuzi hero: keep the copy and brand artwork visually balanced on desktop. */
.mm-ai-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(320px, .82fr);
  gap: clamp(42px, 6vw, 82px);
  align-items: center;
}

.mm-ai-hero__copy {
  min-width: 0;
}

.mm-ai-hero .mm-psychologists-intro-image {
  width: min(100%, 420px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mm-ai-hero .mm-psychologists-intro-image img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 330px;
  object-fit: contain;
}

.mm-ai-hero__below {
  margin-top: 30px;
}

@media (max-width: 920px) {
  .mm-ai-hero__grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .mm-ai-hero .mm-psychologists-intro-image {
    width: min(78vw, 360px);
  }
}

@media (max-width: 640px) {
  .mm-ai-hero .mm-psychologists-intro-image {
    width: min(82vw, 300px);
  }

  .mm-ai-hero .mm-psychologists-intro-image img {
    max-height: 250px;
  }

  .mm-ai-hero__below {
    margin-top: 22px;
  }
}
</style>
<section class="mm-page-hero mm-ai-hero">
  <div class="mm-container">
    <div class="mm-ai-hero__grid">
      <div class="mm-ai-hero__copy">
        <span class="mm-eyebrow">Mjuzi AI Wellness</span>
        <h1>Everyday signals. More useful reflection.</h1>
        <p>Mjuzi moves beyond reactive therapy and generic chatbots — combining AI voice conversations, wearable biometrics, behavioural signals, and psychological insights to deliver personalized support for adolescents, adults, and seniors. Mjuzi is a predictive-preventive, personalised and context-aware AI wellness platform designed to help you notice changes, reflect on patterns and take practical wellbeing actions.</p>
      </div>

      <div class="mm-psychologists-intro-image">
        <img
          src="{{ './assets/images/mjuzi/Mjuzi Logo - V1 Transparent background.png' | relative_url }}"
          alt="Mjuzi Wellness Companion"
          loading="lazy"
        >
      </div>
    </div>

    <div class="mm-ai-hero__below">
      <div class="mm-safety-callout mm-safety-callout--hero" role="note"><span>{% include mm-icon.html name="bulb" %}</span><p><strong>Pattern awareness—not prediction or diagnosis.</strong> Mjuzi uses approved wellness signals and self-reported context to surface changes worth noticing. It does not predict, diagnose or confirm a clinical episode or mental-health condition.</p></div>
      <div class="mm-actions"><a class="mm-btn mm-btn--primary" data-cta="mjuzi-companion" href="{{ '/ai-wellness/mjuzi/' | relative_url }}">Explore AI Companion</a><a class="mm-btn mm-btn--secondary" data-cta="mjuzi-wearables" href="{{ '/ai-wellness/wearables/' | relative_url }}">Explore Wearable Insights</a></div>
    </div>
  </div>
</section>

<section class="mm-section mm-section--soft mm-ai-process-section">
  <div class="mm-container">
    <div class="mm-section-heading mm-section-heading--center mm-ai-process-heading"><span class="mm-eyebrow">How Mjuzi works</span><h2>Changes in mental wellbeing begin long before someone seeks professional help. Mjuzi converts daily context to a more useful next step.</h2><p>Mjuzi can bring together what you report, approved behavioural or wearable context, cognitive performance and AI conversation—while keeping uncertainty, consent and human-care boundaries visible.</p></div>
    <div class="mm-ai-flow" aria-label="Mjuzi wellness insight process">
      <article class="mm-ai-flow__step mm-ai-flow__step--pink"><span class="mm-ai-flow__number">01</span><span class="mm-ai-flow__icon">{% include mm-icon.html name="edit" %}</span><h3>Self-report</h3></article>
      <article class="mm-ai-flow__step mm-ai-flow__step--purple"><span class="mm-ai-flow__number">02</span><span class="mm-ai-flow__icon">{% include mm-icon.html name="activity" %}</span><h3>Behavioural context</h3></article>
      <article class="mm-ai-flow__step mm-ai-flow__step--orange"><span class="mm-ai-flow__number">03</span><span class="mm-ai-flow__icon">{% include mm-icon.html name="watch" %}</span><h3>Wearable context</h3></article>
      <article class="mm-ai-flow__step mm-ai-flow__step--green"><span class="mm-ai-flow__number">04</span><span class="mm-ai-flow__icon">{% include mm-icon.html name="brain" %}</span><h3>Cognitive context</h3></article>
      <article class="mm-ai-flow__step mm-ai-flow__step--purple"><span class="mm-ai-flow__number">05</span><span class="mm-ai-flow__icon">{% include mm-icon.html name="chat" %}</span><h3>Conversation</h3></article>
      <article class="mm-ai-flow__step mm-ai-flow__step--result"><span class="mm-ai-flow__number">06</span><span class="mm-ai-flow__icon">{% include mm-icon.html name="sparkles" %}</span><h3>Wellness reflection</h3></article>
    </div>
    <p class="mm-capability-note">Features availability can vary by app release, selected wearable device, supported sensors and account configuration. The website describes the intended experience; confirm a specific feature before relying on it.</p>
  </div>
</section>

<section class="mm-section mm-real-product-section">
  <div class="mm-container mm-real-product">
    <div class="mm-real-product__copy">
      <span class="mm-eyebrow">Real product screen</span>
      <h2>Meet Liva.</h2>
      <p>This is a real Mente Mirror product interface for an AI-supported session. The screen keeps the experience deliberately simple: choose text or audio, see the remaining session time, and return to previous sessions when continuity is available.</p>
      <ul class="mm-check-list mm-check-list--product">
        <li>Text-based Chat Session</li>
        <li>Voice-based Audio Session</li>
        <li>Visible remaining session time</li>
        <li>Session history for continuity</li>
        <li>An on-screen reminder that AI is not medical or emergency care</li>
      </ul>
      <p class="mm-capability-note"><strong>Product availability:</strong> Specific capabilities can vary by app release and account configuration. The screen shown here is a real product image; it is not a diagnostic result.</p>
      <div class="mm-actions"><a class="mm-btn mm-btn--primary" data-cta="real-product-companion" href="{{ '/ai-wellness/mjuzi/' | relative_url }}">Explore the AI Companion</a><a class="mm-btn mm-btn--ghost" data-cta="real-product-start" href="{{ '/get-started/' | relative_url }}">How to get started</a></div>
    </div>
    <figure class="mm-device-shot">
      <div class="mm-device-shot__frame"><img src="{{ '/assets/images/mjuzi/liva-product-screen.jpeg' | relative_url }}" width="591" height="1280" alt="Real Mente Mirror Liva product screen showing chat and audio session options, remaining session time and a safety notice" loading="lazy"></div>
      <figcaption><strong>Liva</strong> · Real product screen supplied by Mente Mirror</figcaption>
    </figure>
  </div>
</section>

<section class="mm-section mm-section--soft">
  <div class="mm-container">
    <div class="mm-section-heading mm-section-heading--center"><span class="mm-eyebrow">Explore Mjuzi</span><h2>Choose the part of the wellness ecosystem you want to understand.</h2></div>
    <div class="mm-card-grid mm-card-grid--3">
      <a class="mm-card" href="{{ '/ai-wellness/mjuzi/' | relative_url }}"><h3>AI Companion</h3><p>Conversational reflection with clear AI boundaries, controlled continuity and human-care pathways.</p><span class="mm-card__link">Explore AI Companion</span></a>
      <a class="mm-card" href="{{ '/ai-wellness/wearables/' | relative_url }}"><h3>Wearable Insights</h3><p>Supported sleep, HRV, stress, recovery and activity signals can add context—subject to consent, quality and device support.</p><span class="mm-card__link">Explore wearable insights</span></a>
      <a class="mm-card" href="{{ '/ai-wellness/daily-check-ins/' | relative_url }}"><h3>Daily Check-ins</h3><p>Short recurring reflections that capture how you feel and what has changed.</p><span class="mm-card__link">Explore daily check-ins</span></a>
      <a class="mm-card" href="{{ '/ai-wellness/personal-insights/' | relative_url }}"><h3>Personal Insights</h3><p>Bring check-ins and available context together to notice patterns worth reflecting on over time.</p><span class="mm-card__link">Explore personal insights</span></a>
      <a class="mm-card" href="{{ '/ai-wellness/wellness-recommendations/' | relative_url }}"><h3>Wellness Recommendations</h3><p>Turn reflection into small, practical wellness actions within approved support boundaries.</p><span class="mm-card__link">Explore recommendations</span></a>
      <a class="mm-card" href="{{ '/ai-wellness/wellness-tools/' | relative_url }}"><h3>Wellness Tools</h3><p>Approved breathing, meditation, journaling, sleep, focus and cognitive wellness tools.</p><span class="mm-card__link">Explore wellness tools</span></a>
    </div>
  </div>
</section>

{% include mm-next-steps.html %}
