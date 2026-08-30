---
layout: mm-default
title: Technology
permalink: /about/technology/
body_class: mm-technology-page
---

<section class="mm-page-hero">
  <div class="mm-container">
    <span class="mm-eyebrow">About · Technology</span>
    <h1>Technology that connects wellness signals to useful support.</h1>
    <p>A simple view for everyone first, followed by the architecture view for technical readers.</p>
  </div>
</section>

<section class="mm-section mm-section--tight">
  <div class="mm-container">
    <div class="mm-section-heading mm-section-heading--center">
      <span class="mm-eyebrow">For everyone</span>
      <h2>How the Mente Mirror experience fits together</h2>
      <p>Your own check-ins remain central. Technology can add context, identify patterns and connect you with the next useful step.</p>
    </div>

    <div class="mm-tech-flow" aria-label="Mente Mirror technology flow">
      <article><span>{% include mm-icon.html name="user" %}</span><h3>You</h3><p>Check-ins, conversation and assessments</p></article>
      <i aria-hidden="true">→</i>
      <article><span>{% include mm-icon.html name="watch" %}</span><h3>App &amp; Wearables</h3><p>Available behavioural and body-signal context</p></article>
      <i aria-hidden="true">→</i>
      <article><span>{% include mm-icon.html name="settings" %}</span><h3>Platform Services</h3><p>Connect and organise relevant wellness information</p></article>
      <i aria-hidden="true">→</i>
      <article><span>{% include mm-icon.html name="brain" %}</span><h3>Mente Mirror Intelligence</h3><p>Bring information together to recognise patterns</p></article>
      <i aria-hidden="true">→</i>
      <article><span>{% include mm-icon.html name="sparkles" %}</span><h3>Personalised Insight</h3><p>Reflection, recommendations and wellness tools</p></article>
      <i aria-hidden="true">→</i>
      <article><span>{% include mm-icon.html name="users" %}</span><h3>Human Care</h3><p>Psychologists or psychiatrists when appropriate</p></article>
    </div>

    <div class="mm-tech-boundary">
      <span class="mm-card__icon" aria-hidden="true">{% include mm-icon.html name="shield" %}</span>
      <p><strong>Designed for wellness support.</strong> AI and wearable signals provide context and are not presented as medical diagnosis or emergency monitoring.</p>
    </div>
  </div>
</section>

<section class="mm-section mm-section--soft">
  <div class="mm-container mm-technology-container">
    <div class="mm-section-heading">
      <span class="mm-eyebrow">For technical readers</span>
      <h2>Architecture overview</h2>
      <p>Open the high-resolution view to inspect the platform layers, integrations and data flow in more detail.</p>
    </div>
    <div class="mm-architecture-actions">
      <a class="mm-btn mm-btn--primary" href="{{ '/assets/images/about/mente-mirror-simplified-architecture.png' | relative_url }}" target="_blank" rel="noopener">Open full-resolution architecture</a>
    </div>
    <div class="mm-architecture-scroll" aria-label="Scrollable architecture diagram">
      <figure class="mm-architecture-figure">
        <a href="{{ '/assets/images/about/mente-mirror-simplified-architecture.png' | relative_url }}" target="_blank" rel="noopener" title="Open full-resolution architecture">
          <img src="{{ '/assets/images/about/mente-mirror-simplified-architecture.png' | relative_url }}" alt="Mente Mirror simplified architecture" loading="eager">
        </a>
        <figcaption>High-resolution architecture. Scroll horizontally on smaller screens, or open the full-resolution image.</figcaption>
      </figure>
    </div>
  </div>
</section>
