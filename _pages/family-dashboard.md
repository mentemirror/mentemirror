---
layout: mm-default
title: Family Dashboard
description: A family command centre for connected wellbeing across teens, adults and seniors.
permalink: /family-wellness/family-dashboard/
body_class: mm-family-detail-page
---

<section class="mm-page-hero mm-family-wellness-hero">
  <div class="mm-container">
    <span class="mm-eyebrow">Family Wellness</span>
    <h1>Family Dashboard</h1>
    <p><strong>Family Command Centre by the adult: One family. Different needs. Connected support.</strong></p>
  </div>
</section>

<style>
.mm-family-dashboard-intro {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(340px, .85fr);
  gap: 38px;
  align-items: stretch;
  padding: 34px;
  border: 1px solid var(--mm-border);
  border-radius: 22px;
  background: linear-gradient(135deg, #fff 0%, #fff8fb 58%, #f7f3fb 100%);
  box-shadow: var(--mm-shadow-soft);
}

.mm-family-dashboard-intro__copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mm-family-dashboard-intro__copy h2 {
  margin: 10px 0 16px;
  max-width: none;
  font-size: clamp(1.9rem, 3vw, 2.7rem);
  line-height: 1.15;
}

.mm-family-dashboard-intro__copy p {
  margin: 0 0 14px;
  max-width: 760px;
  color: var(--mm-muted);
  line-height: 1.7;
}

.mm-family-dashboard-intro__copy p:last-child {
  margin-bottom: 0;
}

.mm-family-dashboard-intro__visual {
  position: relative;
  min-height: 340px;
  overflow: hidden;
  border-radius: 18px;
  background: #fff;
  border: 1px solid #eadde6;
}

.mm-family-dashboard-intro__visual::before {
  content: "";
  position: absolute;
  inset: 0;
  border-top: 5px solid var(--mm-primary);
  pointer-events: none;
  z-index: 2;
}

.mm-family-dashboard-intro__visual img {
  width: 100%;
  height: 100%;
  min-height: 340px;
  display: block;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 900px) {
  .mm-family-dashboard-intro {
    grid-template-columns: 1fr;
    padding: 26px;
  }

  .mm-family-dashboard-intro__visual,
  .mm-family-dashboard-intro__visual img {
    min-height: 290px;
  }
}

@media (max-width: 640px) {
  .mm-family-dashboard-intro {
    padding: 20px;
    gap: 24px;
    border-radius: 16px;
  }

  .mm-family-dashboard-intro__visual,
  .mm-family-dashboard-intro__visual img {
    min-height: 235px;
  }
}
</style>

<section class="mm-section mm-section--tight">
  <div class="mm-container">
    <div class="mm-family-dashboard-intro">
      <div class="mm-family-dashboard-intro__copy">
        <span class="mm-eyebrow">At a glance</span>
        <h2>A shared view of family wellbeing.</h2>
        <p>The Family Dashboard is designed as an adult-managed overview of the family wellness ecosystem. It can bring together high-level wellbeing information, routines and support needs across different generations so that the family can notice changes earlier and respond more thoughtfully.</p>
        <p>It is not intended to turn private conversations into surveillance. The useful role of a family dashboard is to make agreed, relevant information easier to understand and coordinate.</p>
      </div>

      <div class="mm-family-dashboard-intro__visual">
        <img
          src="{{ './assets/images/family-wellness/FAMILY DASHBOARD.png' | relative_url }}"
          alt="Family Dashboard"
          loading="lazy"
        >
      </div>
    </div>
  </div>
</section>

<section class="mm-section mm-section--soft">
  <div class="mm-container">
    <div class="mm-section-heading">
      <span class="mm-eyebrow">What the dashboard can bring together</span>
      <h2>Useful context without unnecessary complexity</h2>
    </div>
    <div class="mm-card-grid mm-card-grid--3">
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="user" %}</span><h3>Family profiles</h3><p>Age-appropriate profiles for family members, reflecting different wellness priorities and support needs.</p></article>
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="check" %}</span><h3>Check-in overview</h3><p>A simple view of agreed check-ins and changes that may deserve attention over time.</p></article>
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="moon" %}</span><h3>Daily routines</h3><p>High-level context around sleep, activity and other routines where those signals are available and shared.</p></article>
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="chart" %}</span><h3>Wellbeing trends</h3><p>Patterns can be easier to understand when viewed over time rather than reacting to a single difficult day.</p></article>
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="bell" %}</span><h3>Family alerts</h3><p>Meaningful notifications can help the responsible adult know when a family member may need a conversation or additional support.</p></article>
      <article class="mm-card"><span class="mm-card__icon">{% include mm-icon.html name="handshake" %}</span><h3>Support coordination</h3><p>Keep wellness actions, caregiver responsibilities and relevant human support easier to coordinate.</p></article>
    </div>
  </div>
</section>

<section class="mm-section">
  <div class="mm-container">
    <div class="mm-family-privacy-note">
      <strong>Privacy principle</strong>
      <p>A family dashboard should surface only the information appropriate to the role, age and consent of the family member. Private journaling, therapy conversations and sensitive personal content should remain private unless explicitly shared.</p>
    </div>

    <div class="mm-actions"><a class="mm-text-link" href="{{ '/family-wellness/' | relative_url }}">← Back to Family Wellness</a></div>
  </div>
</section>
