---
layout: mm-default
title: Seniors
description: Senior wellness support for cognitive exercises, memory, mood, connection, activity, sleep and caregiver-oriented support.
permalink: /for-you/seniors/
body_class: mm-audience-page
---

<style>
.mm-seniors-hero{padding:56px 0 54px;background:radial-gradient(circle at 84% 28%,rgba(235,63,122,.10),transparent 25%),radial-gradient(circle at 72% 80%,rgba(139,79,166,.08),transparent 22%),linear-gradient(110deg,#fff 0%,#fff8fb 62%,#faf7fc 100%);border-bottom:1px solid #eee9ef}
.mm-seniors-hero__grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(320px,.85fr);gap:42px;align-items:center}
.mm-seniors-hero__copy h1{width:100%;max-width:none;margin:12px 0 14px;font-size:clamp(2.6rem,5vw,4.5rem);line-height:1.05;text-wrap:wrap}
.mm-seniors-hero__copy p{margin:0;font-size:1.08rem;color:var(--mm-muted)}
.mm-seniors-hero__visual{position:relative;min-height:320px;overflow:hidden;border-radius:22px;border:1px solid var(--mm-border);background:#fff;box-shadow:var(--mm-shadow-soft)}
.mm-seniors-hero__visual::before{content:"";position:absolute;inset:0;border-top:5px solid var(--mm-primary);pointer-events:none;z-index:2}
.mm-seniors-hero__visual img{display:block;width:100%;height:100%;min-height:320px;object-fit:cover;object-position:center}
.mm-seniors-pathways{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}
.mm-seniors-pathway{padding:28px;background:#fff;border:1px solid var(--mm-border);border-top:4px solid var(--mm-primary);box-shadow:var(--mm-shadow-soft)}
.mm-seniors-pathway:nth-child(2){border-top-color:var(--mm-purple)}
.mm-seniors-pathway .mm-card__icon{display:inline-flex;margin-bottom:10px}
.mm-seniors-pathway h2{margin:0 0 16px;font-size:1.35rem}
.mm-seniors-pathway .mm-check-list{margin:0;grid-template-columns:1fr}
.mm-seniors-support-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px}
.mm-seniors-support-grid .mm-card{min-height:150px;display:flex;flex-direction:column;justify-content:center;text-align:left}
.mm-seniors-support-grid .mm-card__icon{margin-bottom:8px}
.mm-seniors-support-grid h3{margin:0}
@media(max-width:1020px){.mm-seniors-support-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:860px){.mm-seniors-hero__grid,.mm-seniors-pathways{grid-template-columns:1fr}.mm-seniors-hero__visual,.mm-seniors-hero__visual img{min-height:280px}}
@media(max-width:640px){.mm-seniors-hero{padding:42px 0}.mm-seniors-support-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.mm-seniors-pathway{padding:22px}.mm-seniors-hero__visual,.mm-seniors-hero__visual img{min-height:230px}}
@media(max-width:440px){.mm-seniors-support-grid{grid-template-columns:1fr}}
</style>

<section class="mm-seniors-hero">
  <div class="mm-container">
    <div class="mm-seniors-hero__grid">
      <div class="mm-seniors-hero__copy">
        <span class="mm-eyebrow">For You</span>
        <h1>Seniors</h1>
        <p><strong>Stay connected. Stay mentally active. Stay independent.</strong></p>
      </div>

      <div class="mm-seniors-hero__visual">
        <img
          src="{{ './assets/images/foryou/senior.png' | relative_url }}"
          alt="Adult"
          loading="lazy"
        >
      </div>
    </div>
  </div>
</section>

<section class="mm-section mm-section--tight">
  <div class="mm-container">
    <div class="mm-seniors-pathways">
      <article class="mm-seniors-pathway">
        <span class="mm-card__icon">{% include mm-icon.html name="compass" %}</span>
        <h2>When Mente Mirror can help</h2>
        <ul class="mm-check-list">
          <li>Changes in mood, connection, sleep or daily activity.</li>
          <li>Memory or cognitive wellbeing is a concern.</li>
          <li>A senior needs simpler voice-led companion.</li>
          <li>Family members want a simpler way to track and support wellbeing without replacing professional care.</li>
        </ul>
      </article>

      <article class="mm-seniors-pathway">
        <span class="mm-card__icon">{% include mm-icon.html name="sparkles" %}</span>
        <h2>What your journey can include</h2>
        <ul class="mm-check-list">
          <li>Cognitive and emotional wellness activities suited to the senior journey.</li>
          <li>Daily Check-ins. Activity, sleep remote tracking by caregivers through wearables .</li>
          <li>24x7 AI assisted communication to improve social interactions</li>
          <li>Human counselling or medical consultation when the situation calls for it.</li>
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

    <div class="mm-seniors-support-grid">
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="brain" %}</span><h3>Cognitive exercises</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="thought" %}</span><h3>Memory</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="smile" %}</span><h3>Mood</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="handshake" %}</span><h3>Connection & loneliness</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="activity" %}</span><h3>Activity</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="moon" %}</span><h3>Sleep</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="accessibility" %}</span><h3>Mobility-related context</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="microphone" %}</span><h3>Voice interaction</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="family" %}</span><h3>Family support</h3></article>
      <article class="mm-card mm-card--compact"><span class="mm-card__icon">{% include mm-icon.html name="heart" %}</span><h3>Caregiver support</h3></article>
    </div>
  </div>
</section>

{% include mm-next-steps.html %}
