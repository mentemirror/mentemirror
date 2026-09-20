---
layout: mm-default
title: Daily Check-ins
description: Short Mjuzi check-ins that help you pause, reflect and build a picture of wellbeing over time.
permalink: /ai-wellness/daily-check-ins/
---
<style>
/* Daily Check-ins: keep the product image large enough to read */
.mm-daily-checkins-visual {
  align-self: start;
}

.mm-daily-checkins-image {
  margin: 20px 0 18px;
  padding: 0;
}

.mm-daily-checkins-image img {
  display: block;
  width: 100%;
  max-width: 560px;
  height: auto;
  margin: 0 auto;
  object-fit: contain;
}

/* Let the hero copy use the full available width */
.mm-ai-detail-hero .mm-container > p {
  width: 100%;
  max-width: none;
}

@media (max-width: 920px) {
  .mm-ai-benefit-split {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .mm-daily-checkins-image img {
    max-width: 460px;
  }
}

@media (max-width: 640px) {
  .mm-daily-checkins-image img {
    max-width: 100%;
  }
}
</style>

<section class="mm-page-hero mm-ai-detail-hero">
  <div class="mm-container"><span class="mm-eyebrow">AI Wellness · Mjuzi</span><h1>Daily Check-ins</h1><p>A small daily pause can make patterns easier to notice. Mjuzi check-ins are designed to capture how you are doing in the moment and add your own voice to the wellness picture.</p></div>
</section>
<section class="mm-section">
  <div class="mm-container">
    <div class="mm-section-head"><span class="mm-eyebrow">A simple rhythm</span><h2>Check. Reflect. Continue.</h2><p>Daily check-ins provide a brief, consistent way for users to reflect on their mood, emotions, stress, energy, sleep, behaviour, and overall wellbeing. By capturing these experiences regularly, the platform can identify changes and emerging patterns over time. Combined with physiological and behavioural data, daily check-ins help create a more continuous, personalised understanding of the individual.</p></div>
    <div class="mm-ai-point-grid mm-ai-point-grid--5">
      <article><span class="mm-ai-mini-icon" aria-hidden="true">{% include mm-icon.html name="heart" %}</span><h3>Mood</h3><p>How are you feeling today?</p></article>
      <article><span class="mm-ai-mini-icon" aria-hidden="true">{% include mm-icon.html name="meditation" %}</span><h3>Stress</h3><p>How stretched or settled do you feel?</p></article>
      <article><span class="mm-ai-mini-icon" aria-hidden="true">{% include mm-icon.html name="moon" %}</span><h3>Sleep</h3><p>How rested do you feel?</p></article>
      <article><span class="mm-ai-mini-icon" aria-hidden="true">{% include mm-icon.html name="bolt" %}</span><h3>Energy</h3><p>What is your energy like right now?</p></article>
      <article><span class="mm-ai-mini-icon" aria-hidden="true">{% include mm-icon.html name="target" %}</span><h3>Focus</h3><p>How ready do you feel to concentrate?</p></article>
    </div>
    <div class="mm-split mm-ai-benefit-split">
      <div><span class="mm-eyebrow">Why it matters</span><h2>Your experience is a core signal.</h2><p>Wearables and algorithms can add context, but they do not replace self-report. Regular check-ins help Mjuzi compare objective-looking signals with how you actually feel and can make changes over time easier to see.</p></div>
      <div class="mm-ai-explainer mm-daily-checkins-visual">
        <span aria-hidden="true">{% include mm-icon.html name="check" %}</span>
        <h3>Daily check-in experience</h3>

        <figure class="mm-daily-checkins-image">
          <img
            src="{{ './assets/images/mjuzi/check-in.png' | relative_url }}"
            alt="Mjuzi daily check-in screen combining sleep information with a mood and emotion check-in"
            loading="lazy"
          >
        </figure>

        <p>Short check-ins add your current mood and experience to the broader wellbeing picture, helping Mjuzi compare self-report with available contextual signals over time.</p>
      </div>
    </div>
    <p class="mm-capability-note">Check-in features and prompts may evolve with the product release. They are intended for wellness reflection, not diagnosis.</p>
  </div>
</section>

{% include mm-next-steps.html %}
