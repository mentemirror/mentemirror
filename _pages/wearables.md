---
layout: mm-default
title: Smart Wearable Insights
description: See how wearable signals can add useful context to your mental wellness journey with Mjuzi.
permalink: /ai-wellness/wearables/
---
<section class="mm-page-hero mm-ai-detail-hero">
  <div class="mm-container">
    <span class="mm-eyebrow">AI Wellness · Mjuzi</span>
    <h1>Smart Wearable Insights</h1>
    <p>Your body can provide context to your mind. Mjuzi brings selected wearable signals together with your check-ins and other wellness information to help you notice patterns over time.</p>
  </div>
</section>

<section class="mm-section">
  <div class="mm-container">
    <div class="mm-section-head">
      <span class="mm-eyebrow">How it connects</span>
      <h2>From wearable signals to useful wellness context.</h2>
      <p>The pathway is intentionally simple: wearable signals add context, Mente Mirror AI looks for useful patterns, and the result is presented as a wellness insight you can reflect on.</p>
    </div>

    <div class="mm-signal-flow" aria-label="Wearable to wellness insight flow">
      <article class="mm-signal-flow__stage">
        <span class="mm-signal-flow__icon" aria-hidden="true">{% include mm-icon.html name="watch" %}</span>
        <h3>Wearable</h3>
        <p>Connected device signals</p>
      </article>
      <span class="mm-signal-flow__arrow" aria-hidden="true">→</span>
      <article class="mm-signal-flow__stage mm-signal-flow__stage--signals">
        <span class="mm-signal-flow__icon" aria-hidden="true">{% include mm-icon.html name="activity" %}</span>
        <h3>Signals</h3>
        <p>Sleep · HRV · Heart Rate · Stress context · Activity · Recovery</p>
      </article>
      <span class="mm-signal-flow__arrow" aria-hidden="true">→</span>
      <article class="mm-signal-flow__stage">
        <span class="mm-signal-flow__icon" aria-hidden="true">{% include mm-icon.html name="sparkles" %}</span>
        <h3>Mente Mirror AI</h3>
        <p>Patterns considered alongside your wellness journey</p>
      </article>
      <span class="mm-signal-flow__arrow" aria-hidden="true">→</span>
      <article class="mm-signal-flow__stage mm-signal-flow__stage--result">
        <span class="mm-signal-flow__icon" aria-hidden="true">{% include mm-icon.html name="target" %}</span>
        <h3>Wellness Insight</h3>
        <p>Context for learning readiness, energy and wellbeing</p>
      </article>
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
      <a class="mm-card mm-ai-link-card" href="{{ '/ai-wellness/wearables/sleep/' | relative_url }}">
        <span class="mm-ai-link-card__icon" aria-hidden="true">{% include mm-icon.html name="moon" %}</span>
        <h2>Sleep</h2>
        <p>Look at sleep patterns and how they may relate to energy, focus and recovery.</p>
        <span class="mm-text-link">Explore Sleep →</span>
      </a>
      <a class="mm-card mm-ai-link-card" href="{{ '/ai-wellness/wearables/hrv/' | relative_url }}">
        <span class="mm-ai-link-card__icon" aria-hidden="true">{% include mm-icon.html name="activity" %}</span>
        <h2>HRV</h2>
        <p>Use heart-rate-variability trends as one source of context for recovery and physiological load.</p>
        <span class="mm-text-link">Explore HRV →</span>
      </a>
      <a class="mm-card mm-ai-link-card" href="{{ '/ai-wellness/wearables/stress/' | relative_url }}">
        <span class="mm-ai-link-card__icon" aria-hidden="true">{% include mm-icon.html name="thought" %}</span>
        <h2>Stress</h2>
        <p>Bring wearable patterns and self-reported experience together to reflect on periods of higher load.</p>
        <span class="mm-text-link">Explore Stress →</span>
      </a>
      <a class="mm-card mm-ai-link-card" href="{{ '/ai-wellness/wearables/recovery/' | relative_url }}">
        <span class="mm-ai-link-card__icon" aria-hidden="true">{% include mm-icon.html name="leaf" %}</span>
        <h2>Recovery</h2>
        <p>See recovery in the context of sleep, activity and other available signals rather than as a single number.</p>
        <span class="mm-text-link">Explore Recovery →</span>
      </a>
      <a class="mm-card mm-ai-link-card" href="{{ '/ai-wellness/wearables/activity/' | relative_url }}">
        <span class="mm-ai-link-card__icon" aria-hidden="true">{% include mm-icon.html name="activity" %}</span>
        <h2>Activity</h2>
        <p>Notice movement patterns and how active or quieter days align with mood, energy and routine.</p>
        <span class="mm-text-link">Explore Activity →</span>
      </a>
      <article class="mm-card mm-ai-link-card mm-ai-link-card--context">
        <span class="mm-ai-link-card__icon" aria-hidden="true">{% include mm-icon.html name="heart" %}</span>
        <h2>Heart Rate</h2>
        <p>Heart-rate trends may provide additional physiological context when available from a connected device.</p>
        <span class="mm-ai-card-note">Used as additional physiological context when available from the connected device.</span>
      </article>
    </div>

    <div class="mm-ai-safety-note">
      <strong>Wellness context, not diagnosis.</strong>
      <p>Wearable measurements can vary by device and circumstance. Mjuzi uses them as supportive wellness context, not as medical diagnosis or emergency monitoring.</p>
    </div>

    <p class="mm-capability-note">Signal availability depends on the connected wearable, supported sensors and current app integration. Confirm support for a specific device or signal before relying on it.</p>
  </div>
</section>

{% include mm-next-steps.html %}
