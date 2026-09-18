---
layout: mm-default
title: Adults
description: Adult wellness support for stress, burnout, sleep, work-life balance, emotional regulation, resilience and human counselling.
permalink: /for-you/adults/
body_class: mm-audience-page
---

<style>
.mm-adults-hero{padding:56px 0 54px;background:radial-gradient(circle at 84% 28%,rgba(235,63,122,.10),transparent 25%),radial-gradient(circle at 72% 80%,rgba(139,79,166,.08),transparent 22%),linear-gradient(110deg,#fff 0%,#fff8fb 62%,#faf7fc 100%);border-bottom:1px solid #eee9ef}
.mm-adults-hero__grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(320px,.85fr);gap:42px;align-items:center}
.mm-adults-hero__copy h1{width:100%;max-width:none;margin:12px 0 14px;font-size:clamp(2.6rem,5vw,4.5rem);line-height:1.05;text-wrap:wrap}
.mm-adults-hero__copy p{margin:0;font-size:1.08rem;color:var(--mm-muted)}
.mm-adults-hero__visual{position:relative;min-height:320px;overflow:hidden;border-radius:22px;border:1px solid var(--mm-border);background:#fff;box-shadow:var(--mm-shadow-soft)}
.mm-adults-hero__visual::before{content:"";position:absolute;inset:0;border-top:5px solid var(--mm-primary);pointer-events:none;z-index:2}
.mm-adults-hero__visual img{display:block;width:100%;height:100%;min-height:320px;object-fit:cover;object-position:center}
.mm-adults-pathways{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}
.mm-adults-pathway{padding:28px;background:#fff;border:1px solid var(--mm-border);border-top:4px solid var(--mm-primary);box-shadow:var(--mm-shadow-soft)}
.mm-adults-pathway:nth-child(2){border-top-color:var(--mm-purple)}
.mm-adults-pathway .mm-card__icon{display:inline-flex;margin-bottom:10px}
.mm-adults-pathway h2{margin:0 0 16px;font-size:1.35rem}
.mm-adults-pathway .mm-check-list{margin:0;grid-template-columns:1fr}
.mm-adults-support-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px}
.mm-adults-support-grid .mm-card{min-height:150px;display:flex;flex-direction:column;justify-content:center;text-align:left}
.mm-adults-support-grid .mm-card__icon{margin-bottom:8px}
.mm-adults-support-grid h3{margin:0}
@media(max-width:1020px){.mm-adults-support-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:860px){.mm-adults-hero__grid,.mm-adults-pathways{grid-template-columns:1fr}.mm-adults-hero__visual,.mm-adults-hero__visual img{min-height:280px}}
@media(max-width:640px){.mm-adults-hero{padding:42px 0}.mm-adults-support-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.mm-adults-pathway{padding:22px}.mm-adults-hero__visual,.mm-adults-hero__visual img{min-height:230px}}
@media(max-width:440px){.mm-adults-support-grid{grid-template-columns:1fr}}
</style>

<section class="mm-adults-hero">
  <div class="mm-container">
    <div class="mm-adults-hero__grid">
      <div class="mm-adults-hero__copy">
        <span class="mm-eyebrow">For You</span>
        <h1>Adults</h1>
        <p><strong>Perform without burning out.</strong></p>
      </div>
      <div class="mm-adults-hero__visual">
        <img
          src="{{ './assets/images/foryou/adult.png' | relative_url }}"
          alt="Adult"
          loading="lazy"
        >
      </div>
    </div>
  </div>
</section>

<section class="mm-section mm-section--tight">
  <div class="mm-container">
    <div class="mm-adults-pathways">
      <article class="mm-adults-pathway">
        <span class="mm-card__icon">{% include mm-icon.html name="compass" %}</span>
        <h2>When Mente Mirror can help</h2>
        <ul class="mm-check-list">
          <li>Stress or burnout is beginning to affect work, relationships or recovery.</li>
          <li>Sleep, focus or emotional regulation feels harder than usual.</li>
          <li>You want to understand recurring patterns before they become bigger problems.</li>
          <li>You want self-guided wellness support with a clear path to human counselling.</li>
        </ul>
      </article>

      <article class="mm-adults-pathway">
        <span class="mm-card__icon">{% include mm-icon.html name="sparkles" %}</span>
        <h2>What your journey can include</h2>
        <ul class="mm-check-list">
          <li>Identify behavioural pattern and strengthen coping mechanisms and compatibly in different relationships.</li>
          <li>Mjuzi Smart Rings for stress, sleep, focus, journaling and daily wellness actions.</li>
          <li>Find the Purpose of Life and continue the journey towards it.</li>
          <li>Psychological counselling or psychiatric consultation when appropriate.</li>
        </ul>
      </article>
    </div>
  </div>
</section>

<section class="mm-section mm-section--soft">
  <div class="mm-container">
    <div class="mm-section-heading mm-section-heading--center">
      <span class="mm-eyebrow">Areas of support</span>
      <h2>Explore the wellbeing areas most relevant to you</h2>
    </div>

    <div class="mm-adults-support-grid">
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="meditation" %}</span><h3>Stress &amp Burn Out</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="flame" %}</span><h3>Relationship Dynamics</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="moon" %}</span><h3>Sleep</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="balance" %}</span><h3>Work-life balance</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="heart" %}</span><h3>Emotional regulation</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="target" %}</span><h3>Productivity</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="leaf" %}</span><h3>Resilience</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="sparkles" %}</span><h3>24x7 AI wellness companion to vent out</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="watch" %}</span><h3>Wearable insights</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="medical" %}</span><h3>Human counselling</h3></article>
    </div>
  </div>
</section>

{% include mm-next-steps.html %}
