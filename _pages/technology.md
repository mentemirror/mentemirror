---
layout: mm-default
title: Technology
permalink: /about/technology/
body_class: mm-technology-page
---

<section class="mm-page-hero">
  <div class="mm-container">
    <span class="mm-eyebrow">About · Technology</span>
    <h1>Technology that connects wellness context to useful support.</h1>
    <p>A simple view for everyone first, then a closer look at how Mente Mirror keeps the AI inside defined safety, consent and human-review boundaries.</p>
  </div>
</section>

<section class="mm-section mm-section--tight">
  <div class="mm-container">
    <div class="mm-section-heading mm-section-heading--center">
      <span class="mm-eyebrow">For everyone</span>
      <h2>How the Mente Mirror experience fits together</h2>
      <p>Your own check-ins remain central. Technology can add context, surface possible patterns and connect you with the next useful step.</p>
    </div>

    <div class="mm-tech-flow" aria-label="Mente Mirror technology flow">
      <article><span>{% include mm-icon.html name="user" %}</span><h3>You</h3><p>Check-ins, conversation and assessments</p></article>
      <i aria-hidden="true">→</i>
      <article><span>{% include mm-icon.html name="watch" %}</span><h3>App &amp; Wearables</h3><p>Permitted behavioural and body-signal context</p></article>
      <i aria-hidden="true">→</i>
      <article><span>{% include mm-icon.html name="settings" %}</span><h3>Platform Services</h3><p>Consent, quality, access and workflow controls</p></article>
      <i aria-hidden="true">→</i>
      <article><span>{% include mm-icon.html name="brain" %}</span><h3>Mente Mirror Intelligence</h3><p>Bring eligible context together without turning it into diagnosis</p></article>
      <i aria-hidden="true">→</i>
      <article><span>{% include mm-icon.html name="sparkles" %}</span><h3>Personalised Support</h3><p>Reflection and approved wellness options</p></article>
      <i aria-hidden="true">→</i>
      <article><span>{% include mm-icon.html name="users" %}</span><h3>Human Care</h3><p>Professional judgement when appropriate</p></article>
    </div>

    <div class="mm-tech-boundary"><span class="mm-card__icon" aria-hidden="true">{% include mm-icon.html name="shield" %}</span><p><strong>Designed for wellness support.</strong> AI and wearable signals provide context and are not presented as medical diagnosis, autonomous clinical judgement or emergency monitoring.</p></div>
  </div>
</section>

<section class="mm-section mm-section--soft">
  <div class="mm-container">
    <div class="mm-section-heading mm-section-heading--center"><span class="mm-eyebrow">How the AI is governed</span><h2>The language model is a bounded component—not the system's authority.</h2><p>Important permissions and consequential decisions are designed to be owned by deterministic services and human workflows outside the conversational model.</p></div>
    <div class="mm-governance-grid">
      <article><span>{% include mm-icon.html name="user" %}</span><h3>Identity &amp; consent</h3><p>Authentication, eligibility and consent gates decide what the service may access or do. The AI can explain status; it cannot override it.</p></article>
      <article><span>{% include mm-icon.html name="shield" %}</span><h3>Safety overrides</h3><p>Crisis, safeguarding and medical-urgency rules can pre-empt ordinary conversation and route to the approved pathway.</p></article>
      <article><span>{% include mm-icon.html name="brain" %}</span><h3>Bounded memory</h3><p>A separate memory policy controls what approved context can be retrieved or persisted; private notes are not ordinary AI memory.</p></article>
      <article><span>{% include mm-icon.html name="check" %}</span><h3>Tool eligibility</h3><p>The AI may guide only tools that pass the independent registry, consent, risk, contraindication and review rules.</p></article>
      <article><span>{% include mm-icon.html name="users" %}</span><h3>Human handoff &amp; reports</h3><p>The AI may draft or describe confirmed workflow status, but it should not invent a handoff, approve a report or make a formal diagnosis.</p></article>
    </div>
    <div class="mm-safety-callout" role="note"><span>{% include mm-icon.html name="settings" %}</span><p><strong>Why this matters:</strong> user messages, memory, sensor readings and reports are treated as information to work with—not as instructions that can silently change the product's safety or privacy rules.</p></div>
  </div>
</section>

<section class="mm-section">
  <div class="mm-container mm-technology-container">
    <div class="mm-section-heading"><span class="mm-eyebrow">For technical readers</span><h2>Architecture overview</h2><p>Open the high-resolution view to inspect the platform layers, integrations and data flow in more detail.</p></div>
    <div class="mm-architecture-actions"><a class="mm-btn mm-btn--primary" href="{{ '/assets/images/about/mente-mirror-simplified-architecture.png' | relative_url }}" target="_blank" rel="noopener">Open full-resolution architecture</a></div>
    <div class="mm-architecture-scroll" aria-label="Scrollable architecture diagram">
      <figure class="mm-architecture-figure"><a href="{{ '/assets/images/about/mente-mirror-simplified-architecture.png' | relative_url }}" target="_blank" rel="noopener" title="Open full-resolution architecture"><img src="{{ '/assets/images/about/mente-mirror-simplified-architecture.png' | relative_url }}" alt="Mente Mirror simplified architecture" loading="eager"></a><figcaption>High-resolution architecture. Scroll horizontally on smaller screens, or open the full-resolution image.</figcaption></figure>
    </div>
  </div>
</section>
