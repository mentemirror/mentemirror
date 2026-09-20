---
layout: mm-default
title: Personal Insights
description: Mjuzi brings together your check-ins and available wellness signals to help you notice patterns over time.
permalink: /ai-wellness/personal-insights/
---
<style>
/* Personal Insights: present the product image clearly and keep it readable */
.mm-personal-insights-layout {
  display: grid;
  grid-template-columns: minmax(0, .9fr) minmax(420px, 1.1fr);
  gap: 54px;
  align-items: start;
  margin-top: 34px;
}

/* Let the hero copy use the full available width */
.mm-ai-detail-hero .mm-container > p {
  width: 100%;
  max-width: none;
}

.mm-personal-insights-visual {
  align-self: start;
}

.mm-personal-insights-image {
  margin: 0;
  padding: 0;
}

.mm-personal-insights-image img {
  display: block;
  width: 100%;
  max-width: 560px;
  height: auto;
  margin: 0 auto;
  object-fit: contain;
}

@media (max-width: 920px) {
  .mm-personal-insights-layout {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .mm-personal-insights-image img {
    max-width: 460px;
  }
}

@media (max-width: 640px) {
  .mm-personal-insights-image img {
    max-width: 100%;
  }
}
</style>

<section class="mm-page-hero mm-ai-detail-hero">
  <div class="mm-container"><span class="mm-eyebrow">AI Wellness · Mjuzi</span><h1>Personal Insights</h1><p>Wellness data becomes more useful when it helps you understand yourself. Personal insights translate the user’s data into simple, meaningful patterns about their wellbeing. They should be presented as personalised observations—not diagnoses—showing connections across mood, sleep, activity, stress, HR/HRV, and behaviour. The aim is to help users understand themselves, recognise changes early, reflect on patterns, and take appropriate preventive action.</p></div>
</section>
<section class="mm-section">
  <div class="mm-container">
    <div class="mm-section-head"><span class="mm-eyebrow">Your pattern, over time</span><h2>From separate signals to a clearer picture.</h2></div>
    <div class="mm-ai-insight-flow">
      <div><span>01</span><strong>Check-ins</strong><small>Your own experience</small></div>
      <div><span>02</span><strong>Wearable context</strong><small>Available body signals</small></div>
      <div><span>03</span><strong>Cognitive & behavioural context</strong><small>Patterns relevant to your journey</small></div>
      <div class="mm-ai-insight-flow__result"><span>04</span><strong>Personal Insight</strong><small>A pattern to understand and act on</small></div>
    </div>
    <div class="mm-personal-insights-layout">
      <div class="mm-card-grid mm-card-grid--3 mm-ai-insight-cards">
        <article class="mm-card"><h2>Notice changes</h2><p>See whether mood, sleep, energy, focus or routine are shifting over time.</p></article>
        <article class="mm-card"><h2>Connect patterns</h2><p>Explore possible relationships—for example, how sleep and recovery coincide with energy or concentration—without treating correlation as a diagnosis.</p></article>
        <article class="mm-card"><h2>Reflect with context</h2><p>Use AI conversation to turn a pattern into a useful question, journal prompt or next step.</p></article>
      </div>

      <aside class="mm-ai-explainer mm-personal-insights-visual">
        <span aria-hidden="true">{% include mm-icon.html name="sparkles" %}</span>
        <h3>Your insights, in context</h3>

        <figure class="mm-personal-insights-image">
          <img
            src="{{ './assets/images/mjuzi/insights.png' | relative_url }}"
            alt="Mjuzi personal insights screen showing stress, anxiety and depression-risk trends"
            loading="lazy"
          >
        </figure>

        <p>Mjuzi brings together available signals and your own check-ins to surface patterns worth reflecting on, without presenting them as diagnoses.</p>
      </aside>
    </div>
    <div class="mm-ai-safety-note"><strong>Insights are prompts for reflection.</strong><p>They should be presented as supportive observations, not definitive explanations of why you feel a certain way. When complexity or clinical need exceeds the role of technology, human care should remain available.</p></div>
  </div>
</section>

<section class="mm-section mm-section--tight mm-assessment-back-section"><div class="mm-container"><div class="mm-actions"><a class="mm-text-link" href="{{ '/ai-wellness/' | relative_url }}">← Back to AI Wellness</a></div></div></section>
