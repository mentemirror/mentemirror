---
layout: mm-default
title: Wellness Recommendations
description: Practical, personalised Mjuzi suggestions informed by your wellness context and goals.
permalink: /ai-wellness/wellness-recommendations/
---
<style>
/* Wellness Recommendations: keep the product image large enough to read */
.mm-wellness-visual {
  align-self: start;
}

.mm-wellness-image {
  margin: 20px 0 18px;
  padding: 0;
}

.mm-wellness-image img {
  display: block;
  width: 100%;
  max-width: 560px;
  height: auto;
  margin: 0 auto;
  object-fit: contain;
}

/* Let the hero copy use the full available width */
.mm-ai-detail-hero .mm-container > p {
  width: 100%;
  max-width: none;
}

@media (max-width: 920px) {
  .mm-ai-benefit-split {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .mm-wellness-image img {
    max-width: 460px;
  }
}

@media (max-width: 640px) {
  .mm-wellness-image img {
    max-width: 100%;
  }
}
</style>

<section class="mm-page-hero mm-ai-detail-hero">
  <div class="mm-container"><span class="mm-eyebrow">AI Wellness · Mjuzi</span><h1>Wellness Recommendations</h1><p>The five happiness dimensions of Emotional, Cognitive, Physical, Social, and Spiritual : provide a holistic view of wellbeing. Insights from each dimension will guide personalised wellness recommendations, helping users identify areas needing attention and choose relevant actions. Recommendations therefore move beyond symptoms to support balanced, preventive, whole-person wellbeing. It provides a practical next step—while keeping the boundary between everyday wellness support and professional care clear. </p></div>
</section>
<section class="mm-section">
  <div class="mm-container">
    <div class="mm-section-head"><span class="mm-eyebrow">Personalised support</span><h2>Relevant to the moment. Practical for everyday life.</h2><p>Recommendations can be informed by your goals, check-ins, recent patterns and permitted wellness context. Mjuzi is designed to use approved options only after relevant eligibility, consent, risk and review checks.</p></div>
    <div class="mm-ai-recommendation-grid">
      <article><span class="mm-inline-icon">{% include mm-icon.html name="wind" %}</span><h3>Regulate</h3><p>Breathing or relaxation when you want a brief reset.</p></article>
      <article><span class="mm-inline-icon">{% include mm-icon.html name="meditation" %}</span><h3>Unwind</h3><p>Meditation, mindfulness or PMRT to support relaxation.</p></article>
      <article><span class="mm-inline-icon">{% include mm-icon.html name="edit" %}</span><h3>Reflect</h3><p>Journaling prompts that help you organise thoughts and emotions.</p></article>
      <article><span class="mm-inline-icon">{% include mm-icon.html name="moon" %}</span><h3>Restore</h3><p>Sleep-hygiene-oriented suggestions when rest is part of the pattern.</p></article>
      <article><span class="mm-inline-icon">{% include mm-icon.html name="target" %}</span><h3>Focus</h3><p>Attention or focus exercises when concentration is the goal.</p></article>
      <article><span>{% include mm-icon.html name="brain" %}</span><h3>Train</h3><p>Memory, processing-speed or cognitive exercises where appropriate.</p></article>
    </div>
    <div class="mm-split mm-ai-benefit-split">
      <div><span class="mm-eyebrow">A feedback loop</span><h2>Mjuzi Recommends : You practise : You provide feedback : Mjuzi learns.</h2><p>A recommendation becomes more useful when you can choose whether to try it, reflect on the result and build a better understanding of what works for you over time. A tool is not forced or repeated, simply to chase a score.</p></div>
      <aside class="mm-ai-explainer mm-wellness-visual">
        <span aria-hidden="true">{% include mm-icon.html name="sparkles" %}</span>
        <h3>Your wellness picture</h3>

        <figure class="mm-wellness-image">
          <img
            src="{{ './assets/images/mjuzi/Wellness.png' | relative_url }}"
            alt="Mjuzi wellness dashboard showing quality of life, wellbeing dimensions and resilience score"
            loading="lazy"
          >
        </figure>

        <p>Recommendations are informed by your broader wellness picture across emotional, physical, spiritual and cognitive dimensions, together with other permitted context.</p>

        <div class="mm-ai-safety-note" style="margin-top:18px;">
          <strong>Human escalation</strong>
          <p>Technology alone does not provide the one stop solution. When needs are complex, persistent or clinically significant, the experience guides the person toward appropriate psychologists, psychiatrists or other professional support.</p>
        </div>
      </aside>
    </div>
    <div class="mm-ai-safety-note"><strong>Not medical advice.</strong><p>Wellness recommendations are general supportive actions. They should not replace diagnosis, treatment, medication advice or emergency care.</p></div>
  </div>
</section>

<section class="mm-section mm-section--tight mm-assessment-back-section"><div class="mm-container"><div class="mm-actions"><a class="mm-text-link" href="{{ '/ai-wellness/' | relative_url }}">← Back to AI Wellness</a></div></div></section>
