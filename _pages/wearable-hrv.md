---
layout: mm-default
title: HRV Insights
description: Learn how HRV trends can provide additional context for recovery and wellbeing in Mjuzi.
permalink: /ai-wellness/wearables/hrv/
---
<style>
/* HR/HRV detail page: keep the product image large enough to read */
.mm-ai-detail-layout {
  grid-template-columns: minmax(0, .9fr) minmax(420px, 1.1fr);
  gap: 54px;
  align-items: start;
}

.mm-hrv-visual {
  align-self: start;
}

.mm-hrv-image {
  margin: 20px 0 18px;
  padding: 0;
}

.mm-hrv-image img {
  display: block;
  width: 100%;
  max-width: 560px;
  height: auto;
  margin: 0 auto;
  object-fit: contain;
}

@media (max-width: 920px) {
  .mm-ai-detail-layout {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .mm-hrv-image img {
    max-width: 460px;
  }
}

@media (max-width: 640px) {
  .mm-hrv-image img {
    max-width: 100%;
  }
}

/* HR/HRV hero copy: use the full available container width */
.mm-ai-detail-hero .mm-container > p {
  width: 100%;
  max-width: none;
}

</style>

<section class="mm-page-hero mm-ai-detail-hero">
  <div class="mm-container"><span class="mm-eyebrow">Smart Wearable Insights</span><h1>HR and HRV</h1><p>Heart Rate Variability (HRV) describes variation in the time between heartbeats. Heart rate (HR) and heart-rate variability (HRV) provide physiological signals that can complement a client’s psychological and behavioural information. HR can reflect changes in physiological activation, while HRV can provide insight into patterns of autonomic nervous regulation. Tracking these signals over time helps Mjuzi identify changes in stress, resilience, recovery, and overall wellbeing, supporting more personalised and preventive interventions.</p></div>
</section>
<section class="mm-section">
  <div class="mm-container mm-ai-detail-layout">
    <div><div class="mm-section-head"><span class="mm-eyebrow">Use the trend</span><h2>One signal within a bigger picture.</h2></div>
      <div class="mm-ai-point-grid">
        <article><h3>Personal baseline</h3><p>HRV differs substantially from person to person, so your personalised long-term pattern matters more than comparison with others.</p></article>
        <article><h3>Recovery context</h3><p>Changes may be viewed alongside sleep, activity and how recovered you feel.</p></article>
        <article><h3>Reflects your autonomous nervous system</h3><p>Higher HR reflects sympathetic activation or your response to an event. HRV is influenced by both sympathetic and parasympathetic nervous system to bring back to normal state.</p></article>
        <article><h3>Check-ins</h3><p>Pair wearable trends with your own report, reflecting on periods of higher physiological or emotional load.</p></article>
      </div>
    </div>
    <aside class="mm-ai-explainer mm-hrv-visual">
      <span aria-hidden="true">{% include mm-icon.html name="sparkles" %}</span>
      <h3>Mjuzi's role</h3>

      <figure class="mm-hrv-image">
        <img
          src="{{ './assets/images/mjuzi/HRV.png' | relative_url }}"
          alt="Mjuzi heart rate and heart rate variability insights showing daily HR and HRV trends"
          loading="lazy"
        >
      </figure>

      <p>Mjuzi can help place HR and HRV trends beside other available wellness signals so they become part of a conversation rather than isolated scores.</p>
    </aside>
  </div>
  <div class="mm-container"><div class="mm-ai-safety-note"><strong>Important:</strong><p>Wearable HRV varies with device quality, measurement conditions and many everyday factors. It should not be presented as a diagnostic or treatment metric.</p></div><div class="mm-ai-detail-back"><a class="mm-text-link" href="{{ '/ai-wellness/wearables/' | relative_url }}">← Back to Smart Wearable Insights</a></div></div>
</section>
