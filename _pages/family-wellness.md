---
layout: mm-default
title: Family Wellness
description: Connected family wellness for teens, parents, seniors and caregivers through a shared family dashboard, parent support, senior care and caregiver support.
permalink: /family-wellness/
body_class: mm-family-wellness-page
---

<style>
/* Family Wellness hero: use the full available content width. */
.mm-family-wellness-page .mm-family-wellness-hero .mm-container {
  width: min(calc(100% - 40px), var(--mm-container)) !important;
}

.mm-family-wellness-page .mm-family-wellness-hero h1,
.mm-family-wellness-page .mm-family-wellness-hero p {
  width: 100% !important;
  max-width: none !important;
  inline-size: 100% !important;
  text-wrap: wrap !important;
  text-wrap-style: auto !important;
}

@media (max-width: 640px) {
  .mm-family-wellness-page .mm-family-wellness-hero .mm-container {
    width: min(calc(100% - 28px), var(--mm-container)) !important;
  }
}
</style>


<style>
/* Family Wellness: balanced three-card layout after removing Caregiver Support. */
.mm-family-wellness-page .mm-family-area-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  align-items: stretch;
}

.mm-family-wellness-page .mm-family-area-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.mm-family-wellness-page .mm-family-area-card .mm-text-link {
  margin-top: auto;
  padding-top: 18px;
}

@media (max-width: 980px) {
  .mm-family-wellness-page .mm-family-area-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .mm-family-wellness-page .mm-family-area-grid {
    grid-template-columns: 1fr;
  }
}

/* Keep the closing family-principles section visually separate from the footer. */
.mm-family-wellness-page .mm-family-principles-section {
  background: linear-gradient(180deg, #fff7fb 0%, #f7f3ff 100%) !important;
  color: var(--mm-text) !important;
  border-top: 1px solid rgba(201, 40, 97, .10);
}

.mm-family-wellness-page .mm-family-principles-section .mm-eyebrow {
  color: var(--mm-primary) !important;
}

.mm-family-wellness-page .mm-family-principles-section h2,
.mm-family-wellness-page .mm-family-principles-section strong {
  color: var(--mm-text) !important;
}

.mm-family-wellness-page .mm-family-principles-section p {
  color: var(--mm-muted) !important;
}

.mm-family-wellness-page .mm-family-principles-section .mm-family-principles__grid article {
  background: rgba(255, 255, 255, .86);
  border-color: rgba(37, 36, 45, .10);
  box-shadow: 0 12px 28px rgba(37, 36, 45, .06);
}
</style>

<section class="mm-page-hero mm-family-wellness-hero">
  <div class="mm-container">
    <span class="mm-eyebrow">Family Wellness</span>
    <h1>One family. Different needs. Connected support.</h1>
    <p><strong>A multi-generational wellness ecosystem designed to help families understand, monitor, connect and support one another while respecting each person’s privacy and independence.</strong></p>
  </div>
</section>

<section class="mm-page-hero">
      <div class="mm-psychologists-intro-image">
      <img
        src="{{ './assets/images/family-wellness/family.png' | relative_url }}"
        alt="Wellness Assessment"
        loading="lazy"
      >
    </div>
</section>

<section class="mm-section mm-section--tight">
  <div class="mm-container">
    <div class="mm-section-heading mm-section-heading--center">
      <span class="mm-eyebrow">Across generations</span>
      
      <p>Family wellbeing changes across life stages. Mente Mirror brings those different needs into one connected ecosystem without treating every family member in the same way.</p>
    </div>

    <div class="mm-family-flow" aria-label="Teen to Parent to Grandparent">
      <div class="mm-family-flow__item"><span class="mm-family-flow__icon" aria-hidden="true">{% include mm-icon.html name="student" %}</span><strong>Teen</strong><small>Learning, emotions, focus and healthy routines</small></div>
      <span class="mm-family-flow__arrow" aria-hidden="true">→</span>
      <div class="mm-family-flow__item"><span class="mm-family-flow__icon" aria-hidden="true">{% include mm-icon.html name="user" %}</span><strong>Parent</strong><small>Guidance, balance, communication and support</small></div>
      <span class="mm-family-flow__arrow" aria-hidden="true">→</span>
      <div class="mm-family-flow__item"><span class="mm-family-flow__icon" aria-hidden="true">{% include mm-icon.html name="senior" %}</span><strong>Grandparent</strong><small>Connection, cognition, activity and independence</small></div>
    </div>
  </div>
</section>

<section class="mm-section mm-section--soft">
  <div class="mm-container">
    <div class="mm-section-heading">
      <span class="mm-eyebrow">Family Wellness</span>
      <h2>Three ways to support the whole family</h2>
      <p>The Family Wellness section brings together a family command centre for the leading adult, practical parental support for children, senior wellbeing and support.</p>
    </div>

    <div class="mm-family-area-grid">
      <a class="mm-family-area-card" href="{{ '/family-wellness/family-dashboard/' | relative_url }}">
        <span class="mm-family-area-card__icon" aria-hidden="true">{% include mm-icon.html name="chart" %}</span>
        <span class="mm-family-area-card__kicker">Family Command Centre</span>
        <h2>Family Dashboard</h2>
        <p>A shared family overview that helps the adult keep track of routines, wellbeing signals, support needs and meaningful changes across the household.</p>
        <span class="mm-text-link">Explore Family Dashboard →</span>
      </a>

      <a class="mm-family-area-card" href="{{ '/family-wellness/parent-support/' | relative_url }}">
        <span class="mm-family-area-card__icon" aria-hidden="true">{% include mm-icon.html name="family" %}</span>
        <span class="mm-family-area-card__kicker">Guide without overwhelming</span>
        <h2>Parental Support</h2>
        <p>Practical support for understanding a child or adolescent’s emotional, academic, behavioural and lifestyle needs while strengthening communication at home.</p>
        <span class="mm-text-link">Explore Parent Support →</span>
      </a>

      <a class="mm-family-area-card" href="{{ '/family-wellness/senior-care/' | relative_url }}">
        <span class="mm-family-area-card__icon" aria-hidden="true">{% include mm-icon.html name="senior" %}</span>
        <span class="mm-family-area-card__kicker">Connected and independent</span>
        <h2>Senior Care</h2>
        <p>Support for cognitive activity, memory, mood, connection, sleep, movement and everyday wellbeing, with family awareness where appropriate.</p>
        <span class="mm-text-link">Explore Senior Care →</span>
      </a>

      
    </div>
  </div>
</section>

<section class="mm-section">
  <div class="mm-container">
    <div class="mm-section-heading mm-section-heading--center">
      <span class="mm-eyebrow">Connected support</span>
      
      <p>A simple family wellness journey that moves from information to action.</p>
    </div>

    <div class="mm-family-steps mm-family-steps--center" aria-label="Learn, Monitor, Connect and Support">
      <div class="mm-family-steps__item"><span>01</span><strong>Be informed</strong><p>Understand wellbeing needs, patterns and life-stage challenges for members.</p></div>
      <span class="mm-family-steps__arrow" aria-hidden="true">→</span>
      <div class="mm-family-steps__item"><span>02</span><strong>Monitor</strong><p>Notice meaningful changes in routines, check-ins and wellbeing signals.</p></div>
      <span class="mm-family-steps__arrow" aria-hidden="true">→</span>
      <div class="mm-family-steps__item"><span>03</span><strong>Connect</strong><p>Encourage healthier conversations and coordinated family support.</p></div>
      <span class="mm-family-steps__arrow" aria-hidden="true">→</span>
      <div class="mm-family-steps__item"><span>04</span><strong>Intervention</strong><p>Use wellness tools and involve human care when more support is needed.</p></div>
    </div>
  </div>
</section>

<section class="mm-section mm-family-principles-section">
  <div class="mm-container">
    <div class="mm-family-principles">
      <div>
        <span class="mm-eyebrow">Designed for families</span>
        <h2>Connection should not mean loss of privacy.</h2>
      </div>
      <div class="mm-family-principles__grid">
        <article><strong>Age-appropriate</strong><p>Support should reflect the needs of adolescents, adults and seniors rather than using a one-size-fits-all experience.</p></article>
        <article><strong>Respectful</strong><p>Family awareness should focus on useful wellbeing context, not unnecessary access to another person’s private reflections.</p></article>
        <article><strong>Human when needed</strong><p>Technology can support awareness and routines; psychologists and other qualified professionals provide human context when concerns need deeper attention.</p></article>
      </div>
    </div>
  </div>
</section>
