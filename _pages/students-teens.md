---
layout: mm-default
title: Students & Teens
description: Wellness support for students and teens covering focus, academic stress, exam anxiety, sleep, emotional wellbeing and parent-supported wellness.
permalink: /for-you/students-teens/
body_class: mm-audience-page
---

<style>
.mm-students-hero{padding:56px 0 54px;background:radial-gradient(circle at 84% 28%,rgba(235,63,122,.10),transparent 25%),radial-gradient(circle at 72% 80%,rgba(139,79,166,.08),transparent 22%),linear-gradient(110deg,#fff 0%,#fff8fb 62%,#faf7fc 100%);border-bottom:1px solid #eee9ef}
.mm-students-hero__grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(320px,.85fr);gap:42px;align-items:center}
.mm-students-hero__copy h1{width:100%;max-width:none;margin:12px 0 14px;font-size:clamp(2.6rem,5vw,4.5rem);line-height:1.05;text-wrap:wrap}
.mm-students-hero__copy p{margin:0;font-size:1.08rem;color:var(--mm-muted)}
.mm-students-hero__visual{position:relative;min-height:320px;overflow:hidden;border-radius:22px;border:1px solid var(--mm-border);background:#fff;box-shadow:var(--mm-shadow-soft)}
.mm-students-hero__visual::before{content:"";position:absolute;inset:0;border-top:5px solid var(--mm-primary);pointer-events:none;z-index:2}
.mm-students-hero__visual img{display:block;width:100%;height:100%;min-height:320px;object-fit:cover;object-position:center}
.mm-students-pathways{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}
.mm-students-pathway{padding:28px;background:#fff;border:1px solid var(--mm-border);border-top:4px solid var(--mm-primary);box-shadow:var(--mm-shadow-soft)}
.mm-students-pathway:nth-child(2){border-top-color:var(--mm-purple)}
.mm-students-pathway .mm-card__icon{display:inline-flex;margin-bottom:10px}
.mm-students-pathway h2{margin:0 0 16px;font-size:1.35rem}
.mm-students-pathway .mm-check-list{margin:0;grid-template-columns:1fr}
.mm-students-support-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px}
.mm-students-support-grid .mm-card{min-height:150px;display:flex;flex-direction:column;justify-content:center;text-align:left}
.mm-students-support-grid .mm-card__icon{margin-bottom:8px}
.mm-students-support-grid h3{margin:0}
@media(max-width:1020px){.mm-students-support-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:860px){.mm-students-hero__grid,.mm-students-pathways{grid-template-columns:1fr}.mm-students-hero__visual,.mm-students-hero__visual img{min-height:280px}}
@media(max-width:640px){.mm-students-hero{padding:42px 0}.mm-students-support-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.mm-students-pathway{padding:22px}.mm-students-hero__visual,.mm-students-hero__visual img{min-height:230px}}
@media(max-width:440px){.mm-students-support-grid{grid-template-columns:1fr}}
</style>

<section class="mm-students-hero">
  <div class="mm-container">
    <div class="mm-students-hero__grid">
      <div class="mm-students-hero__copy">
        <span class="mm-eyebrow">For You</span>
        <h1>Students & Teens</h1>
        <p><strong>Study better. Think better. Feel better.</strong></p>
      </div>
      <div class="mm-students-hero__visual">
      <img
        src="{{ './assets/images/foryou/students-teen.png' | relative_url }}"
        alt="Student"
        loading="lazy"
      >
    </div>
    </div>
  </div>
</section>

<section class="mm-section mm-section--tight">
  <div class="mm-container">
    <div class="mm-students-pathways">
      <article class="mm-students-pathway">
        <span class="mm-card__icon">{% include mm-icon.html name="compass" %}</span>
        <h2>When Mente Mirror can help</h2>
        <ul class="mm-check-list">
          <li>Academic pressure, exam anxiety or difficulty switching off.</li>
          <li>Trouble with focus, digital distraction or study routines.</li>
          <li>Sleep, emotional wellbeing or stress affecting day-to-day functioning.</li>
          <li>A need for structured reflection with parent-supported options where appropriate.</li>
        </ul>
      </article>
      <article class="mm-students-pathway">
        <span class="mm-card__icon">{% include mm-icon.html name="sparkles" %}</span>
        <h2>What your journey can include</h2>
        <ul class="mm-check-list">
          <li>A focused wellness check, Aptitude and Interest Assessment.</li>
          <li>Mjuzi Smart Rings for monitoring sleep and stress, tools for reflection, focus and memory.</li>
          <li>Parental skill assessment and guidance.</li>
          <li>Access to a psychologist when human support would be more useful.</li>
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
    <div class="mm-students-support-grid">
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="target" %}</span><h3>Focus & concentration</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="book" %}</span><h3>Academic stress</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="clipboard" %}</span><h3>Exam anxiety</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="phone" %}</span><h3>Digital distraction</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="puzzle" %}</span><h3>Cognitive games</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="brain" %}</span><h3>Memory training</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="moon" %}</span><h3>Sleep & recovery</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="heart" %}</span><h3>Emotional wellbeing</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="sparkles" %}</span><h3>24x7 AI wellness companion</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="family" %}</span><h3>Parent-supported wellness</h3></article>
    </div>
  </div>
</section>

{% include mm-next-steps.html %}
