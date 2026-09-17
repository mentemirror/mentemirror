---
layout: mm-default
title: Senior Care
description: Connected senior wellness support for cognition, memory, mood, loneliness, activity, sleep, mobility and family awareness.
permalink: /family-wellness/senior-care/
body_class: mm-family-detail-page
---

<section class="mm-page-hero mm-family-wellness-hero">
  <div class="mm-container">
    <span class="mm-eyebrow">Family Wellness</span>
    <h1>Caring your Senior</h1>
    <p><strong>Stay connected. Stay mentally active. Stay independent.</strong></p>
  </div>
</section>

<style>
.mm-senior-care-intro {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(340px, .85fr);
  gap: 40px;
  align-items: stretch;
  padding: 36px;
  border: 1px solid var(--mm-border);
  border-radius: 22px;
  background: linear-gradient(135deg, #fff 0%, #fff9fb 56%, #f6f7fb 100%);
  box-shadow: var(--mm-shadow-soft);
}

.mm-senior-care-intro__copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mm-senior-care-intro__copy h2 {
  margin: 10px 0 16px;
  max-width: none;
  font-size: clamp(1.9rem, 3vw, 2.7rem);
  line-height: 1.15;
}

.mm-senior-care-intro__copy p {
  margin: 0 0 14px;
  max-width: 760px;
  color: var(--mm-muted);
  line-height: 1.7;
}

.mm-senior-care-intro__copy p:last-child { margin-bottom: 0; }

.mm-senior-care-intro__visual {
  position: relative;
  min-height: 340px;
  overflow: hidden;
  border-radius: 18px;
  background: #fff;
  border: 1px solid #eadde6;
}

.mm-senior-care-intro__visual::before {
  content: "";
  position: absolute;
  inset: 0;
  border-top: 5px solid var(--mm-primary);
  pointer-events: none;
  z-index: 2;
}

.mm-senior-care-intro__visual img {
  width: 100%;
  height: 100%;
  min-height: 340px;
  display: block;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 900px) {
  .mm-senior-care-intro {
    grid-template-columns: 1fr;
    padding: 26px;
  }
  .mm-senior-care-intro__visual,
  .mm-senior-care-intro__visual img { min-height: 285px; }
}

@media (max-width: 640px) {
  .mm-senior-care-intro {
    padding: 20px;
    gap: 24px;
    border-radius: 16px;
  }
  .mm-senior-care-intro__visual,
  .mm-senior-care-intro__visual img { min-height: 235px; }
}
</style>

<section class="mm-section mm-section--tight">
  <div class="mm-container">
    <div class="mm-senior-care-intro">
      <div class="mm-senior-care-intro__copy">
        <span class="mm-eyebrow">Wellbeing across later life</span>
        <h2>Support independence while staying connected.</h2>
        <p>Senior wellbeing is shaped by more than physical health alone. Cognitive engagement, memory, mood, social connection, sleep, activity and a sense of purpose all contribute to quality of life.</p>
        <p>Within Family Wellness, Senior Care is designed to help older adults stay engaged with their own wellbeing while giving family members appropriate context when support may be useful.</p>
      </div>

      <div class="mm-senior-care-intro__visual">
        <img
          src="{{ './assets/images/family-wellness/father father.png' | relative_url }}"
          alt="Older adult receiving supportive family connection"
          loading="lazy"
        >
      </div>
    </div>
  </div>
</section>

<section class="mm-section mm-section--soft">
  <div class="mm-container">
    <div class="mm-section-heading"><span class="mm-eyebrow">Senior wellbeing</span><h2>Areas of everyday support</h2></div>
    <div class="mm-card-grid mm-card-grid--3">
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="brain" %}</span><h3>Cognitive exercises</h3><p>Activities that encourage attention, thinking and continued mental engagement.</p></article>
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="thought" %}</span><h3>Memory</h3><p>Simple memory-oriented activities and awareness of meaningful changes over time.</p></article>
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="smile" %}</span><h3>Mood</h3><p>Regular reflection and check-ins can help make changes in emotional wellbeing more visible.</p></article>
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="handshake" %}</span><h3>Loneliness & connection</h3><p>Encourage social contact, family connection and participation in meaningful relationships.</p></article>
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="activity" %}</span><h3>Activity</h3><p>Support everyday movement and routines appropriate to the individual’s abilities and circumstances.</p></article>
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="moon" %}</span><h3>Sleep</h3><p>Help recognise changes in sleep routines that may affect energy, mood and day-to-day wellbeing.</p></article>
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="accessibility" %}</span><h3>Mobility awareness</h3><p>Family awareness around mobility and activity can help make practical support easier to coordinate.</p></article>
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="microphone" %}</span><h3>Voice interaction</h3><p>Voice-based interaction can make digital wellness support more accessible and natural for some seniors.</p></article>
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="bell" %}</span><h3>Family alerts</h3><p>Appropriate notifications can help families respond to meaningful changes without constant checking.</p></article>
    </div>
  </div>
</section>

<section class="mm-section">
  <div class="mm-container">
    <div class="mm-family-privacy-note"><strong>Important</strong><p>Wellness tools and family observations do not diagnose cognitive, psychiatric or medical conditions. New, persistent or concerning changes should be discussed with an appropriate qualified professional.</p></div>
    <div class="mm-actions"><a class="mm-text-link" href="{{ '/family-wellness/' | relative_url }}">← Back to Family Wellness</a></div>
  </div>
</section>
