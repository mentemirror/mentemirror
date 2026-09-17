---
layout: mm-default
title: Parent Support
description: Practical parent support for adolescent wellbeing, communication, routines, study stress, digital balance and emotional development.
permalink: /family-wellness/parent-support/
body_class: mm-family-detail-page
---

<section class="mm-page-hero mm-family-wellness-hero">
  <div class="mm-container">
    <span class="mm-eyebrow">Family Wellness</span>
    <h1>Parent Support</h1>
    <p><strong>Understand what your child may be experiencing, strengthen everyday communication and know when more support may be useful.</strong></p>
  </div>
</section>

<style>
.mm-parent-support-intro {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, .85fr);
  gap: 38px;
  align-items: stretch;
  padding: 34px;
  border: 1px solid var(--mm-border);
  border-radius: 22px;
  background: linear-gradient(135deg, #fff 0%, #fff8fb 58%, #f7f2fb 100%);
  box-shadow: var(--mm-shadow-soft);
}

.mm-parent-support-intro__copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mm-parent-support-intro__copy h2 {
  margin: 10px 0 16px;
  max-width: none;
  font-size: clamp(1.9rem, 3vw, 2.7rem);
  line-height: 1.15;
}

.mm-parent-support-intro__copy p {
  margin: 0 0 14px;
  max-width: 760px;
  color: var(--mm-muted);
  line-height: 1.7;
}

.mm-parent-support-intro__copy p:last-child {
  margin-bottom: 0;
}

.mm-parent-support-intro__visual {
  position: relative;
  min-height: 330px;
  overflow: hidden;
  border-radius: 18px;
  background: #fff;
  border: 1px solid #eadde6;
}

.mm-parent-support-intro__visual::before {
  content: "";
  position: absolute;
  inset: 0;
  border-top: 5px solid var(--mm-primary);
  pointer-events: none;
  z-index: 2;
}

.mm-parent-support-intro__visual img {
  width: 100%;
  height: 100%;
  min-height: 330px;
  display: block;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 900px) {
  .mm-parent-support-intro {
    grid-template-columns: 1fr;
    padding: 26px;
  }

  .mm-parent-support-intro__visual,
  .mm-parent-support-intro__visual img {
    min-height: 280px;
  }
}

@media (max-width: 640px) {
  .mm-parent-support-intro {
    padding: 20px;
    gap: 24px;
    border-radius: 16px;
  }

  .mm-parent-support-intro__visual,
  .mm-parent-support-intro__visual img {
    min-height: 230px;
  }
}
</style>

<section class="mm-section mm-section--tight">
  <div class="mm-container">
    <div class="mm-parent-support-intro">
      <div class="mm-parent-support-intro__copy">
        <span class="mm-eyebrow">Support the person, not just the problem</span>
        <h2>Parenting through changing emotional, academic and social needs.</h2>
        <p>Children and adolescents are learning how to manage emotions, relationships, attention, academic pressure, sleep, independence and digital life at the same time. Parent support is designed to help adults respond with greater awareness instead of relying only on correction or crisis response.</p>
        <p>The aim is not to monitor every behaviour. It is to make it easier to recognise patterns, have constructive conversations and create routines that support wellbeing and development.</p>
      </div>

      <div class="mm-parent-support-intro__visual">
        <img
          src="{{ './assets/images/family-wellness/father son.png' | relative_url }}"
          alt="Father supporting his son"
          loading="lazy"
        >
      </div>
    </div>
  </div>
</section>

<section class="mm-section mm-section--soft">
  <div class="mm-container">
    <div class="mm-section-heading"><span class="mm-eyebrow">Common areas of support</span><h2>What parents can help nurture</h2></div>
    <div class="mm-support-grid">
      <article class="mm-support-card"><span class="mm-support-card__icon">{% include mm-icon.html name="chat" %}</span><h3>Open communication</h3><p>Create space for a child or teen to talk about emotions, friendships, school and worries without feeling immediately judged or corrected.</p></article>
      <article class="mm-support-card"><span class="mm-support-card__icon">{% include mm-icon.html name="book" %}</span><h3>Academic stress</h3><p>Recognise pressure around exams, performance and expectations while keeping learning, rest and self-worth in balance.</p></article>
      <article class="mm-support-card"><span class="mm-support-card__icon">{% include mm-icon.html name="target" %}</span><h3>Focus & digital distraction</h3><p>Support attention and healthier technology routines through realistic boundaries, breaks and consistent expectations.</p></article>
      <article class="mm-support-card"><span class="mm-support-card__icon">{% include mm-icon.html name="moon" %}</span><h3>Sleep & recovery</h3><p>Encourage regular sleep routines and recovery, especially during periods of academic or emotional stress.</p></article>
      <article class="mm-support-card"><span class="mm-support-card__icon">{% include mm-icon.html name="brain" %}</span><h3>Emotional skills</h3><p>Help young people name emotions, reflect on reactions and gradually develop healthier coping strategies.</p></article>
      <article class="mm-support-card"><span class="mm-support-card__icon">{% include mm-icon.html name="leaf" %}</span><h3>Growing independence</h3><p>Balance guidance with age-appropriate autonomy so that responsibility and confidence can develop over time.</p></article>
    </div>
  </div>
</section>

<section class="mm-section">
  <div class="mm-container">
    <div class="mm-family-privacy-note">
      <strong>Parent support is not surveillance.</strong>
      <p>Trust matters. Shared family wellness information should be age-appropriate and used to support conversation and safety, while preserving reasonable privacy and independence.</p>
    </div>

    <div class="mm-actions"><a class="mm-text-link" href="{{ '/family-wellness/' | relative_url }}">← Back to Family Wellness</a></div>
  </div>
</section>
