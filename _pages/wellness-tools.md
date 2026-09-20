---
layout: mm-default
title: Wellness Tools
description: Explore approved breathing, meditation, journaling, sleep, focus, memory and emotional wellbeing tools within Mjuzi.
permalink: /ai-wellness/wellness-tools/
---
<style>
/* Wellness Tools: present the product image clearly and keep it readable */
.mm-wellness-tools-visual {
  align-self: start;
}

.mm-wellness-tools-image {
  margin: 20px 0 18px;
  padding: 0;
}

.mm-wellness-tools-image img {
  display: block;
  width: 100%;
  max-width: 640px;
  height: auto;
  margin: 0 auto;
  object-fit: contain;
}

/* Let the hero copy use the full available width */
.mm-ai-detail-hero .mm-container > p {
  width: 100%;
  max-width: none;
}

/* Use a balanced two-column layout for intro copy + product visual */
.mm-wellness-tools-showcase {
  display: grid;
  grid-template-columns: minmax(0, .9fr) minmax(460px, 1.1fr);
  gap: 54px;
  align-items: start;
  margin-top: 34px;
}

@media (max-width: 920px) {
  .mm-wellness-tools-showcase {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .mm-wellness-tools-image img {
    max-width: 520px;
  }
}

@media (max-width: 640px) {
  .mm-wellness-tools-image img {
    max-width: 100%;
  }
}
</style>

<section class="mm-page-hero mm-ai-detail-hero">
  <div class="mm-container"><span class="mm-eyebrow">AI Wellness · Mjuzi</span><h1>Wellness Tools</h1><p>A practical toolkit for reflection, relaxation, attention, cognitive practice and healthy routines—offered within a governed Mjuzi wellness journey rather than generated as an open-ended treatment plan.</p></div>
</section>

<section class="mm-section mm-section--tight">
  <div class="mm-container">
    <div class="mm-wellness-tools-showcase">
      <div class="mm-section-heading">
        <span class="mm-eyebrow">How a tool is chosen</span>
        <h2>Mjuzi is designed to offer approved tools only when they fit the current goal, the person wants to try them and relevant eligibility or review checks have passed.</h2>
        <p>Unlike standalone wellness apps that provide individual tools or activities, Mente Mirror connects tools into a holistic improvement plan across all five wellness dimensions—Emotional, Cognitive, Physical, Social, and Spiritual/Purpose. AI supports the user throughout the journey, helping them understand their insights, choose relevant interventions, build healthy habits, and stay engaged. Recommendations are continuously personalised and adapted based on changing needs, responses, behaviours, and wellbeing patterns. Rather than simply giving users tools and leaving them to use independently, Mente Mirror holds their hand and guides through each step of the journey, creating an evolving pathway from self-awareness to sustained, preventive wellbeing.</p>
      </div>

      <aside class="mm-ai-explainer mm-wellness-tools-visual">
        <span aria-hidden="true">{% include mm-icon.html name="sparkles" %}</span>
        <h3>Guided wellness tools</h3>

        <figure class="mm-wellness-tools-image">
          <img
            src="{{ './assets/images/mjuzi/tool.png' | relative_url }}"
            alt="Mjuzi wellness tools showing a grounding exercise and a cognitive training game"
            loading="lazy"
          >
        </figure>

        <p>Mjuzi can guide users through approved wellbeing practices such as grounding, breathing, attention and cognitive exercises within the broader wellness journey.</p>
      </aside>
    </div>
    <div class="mm-tool-principles">
      <article><span>{% include mm-icon.html name="target" %}</span><strong>Start with the need</strong><p>A clear goal or current concern should come before a tool.</p></article>
      <article><span>{% include mm-icon.html name="check" %}</span><strong>Ask permission</strong><p>The user can accept, decline or stop; tools should not be pushed.</p></article>
      <article><span>{% include mm-icon.html name="shield" %}</span><strong>Check suitability</strong><p>Age, risk, contraindications, consent and any human-review requirement should be considered independently of the language model.</p></article>
      <article><span>{% include mm-icon.html name="sparkles" %}</span><strong>Keep it manageable</strong><p>Prefer one small, understandable practice rather than an overwhelming list.</p></article>
      <article><span>{% include mm-icon.html name="chat" %}</span><strong>Learn from the result</strong><p>Ask what happened, what helped and what got in the way—without treating non-use as failure.</p></article>
    </div>
    <div class="mm-ai-safety-note"><strong>A toolkit, not a treatment plan.</strong><p>Low-risk tools can support everyday wellbeing. Diagnosis-driven treatment, medication advice, trauma processing and other restricted interventions require an appropriate professional pathway.</p></div>
  </div>
</section>

<section class="mm-section mm-section--soft">
  <div class="mm-container mm-disclosure-stack">
    <div class="mm-section-heading"><span class="mm-eyebrow">Tool library</span><h2>See the types of tools in the wellness toolkit.</h2><p>Breathing, meditation, journaling, sleep, focus, memory, emotional exercises and more. Download Mjuzi App for a full list and practice.</p></div>
    <details class="mm-disclosure mm-disclosure--table">
      <summary><span><strong>Explore the wellness tool list</strong></span><i aria-hidden="true"></i></summary>
      <div class="mm-disclosure__body">
        <div class="mm-tool-table-wrap">
          <table class="mm-tool-table">
            <thead><tr><th>Tool</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td><span class="mm-inline-icon">{% include mm-icon.html name="wind" %}</span><strong>Breathing</strong></td><td>Acute stress regulation</td></tr>
              <tr><td><span class="mm-inline-icon">{% include mm-icon.html name="meditation" %}</span><strong>Meditation</strong></td><td>Relaxation / mindfulness</td></tr>
              <tr><td><span class="mm-inline-icon">{% include mm-icon.html name="edit" %}</span><strong>Journaling</strong></td><td>Reflection</td></tr>
              <tr><td><span class="mm-inline-icon">{% include mm-icon.html name="moon" %}</span><strong>Sleep tools</strong></td><td>Sleep hygiene / CBT-I-oriented support</td></tr>
              <tr><td><span class="mm-inline-icon">{% include mm-icon.html name="target" %}</span><strong>Focus training</strong></td><td>Attention</td></tr>
              <tr><td><span>{% include mm-icon.html name="brain" %}</span><strong>Memory games</strong></td><td>Working memory</td></tr>
              <tr><td><span class="mm-inline-icon">{% include mm-icon.html name="bolt" %}</span><strong>Processing-speed games</strong></td><td>Cognitive performance</td></tr>
              <tr><td><span class="mm-inline-icon">{% include mm-icon.html name="puzzle" %}</span><strong>Emotional exercises</strong></td><td>Emotional awareness / regulation</td></tr>
              <tr><td><span class="mm-inline-icon">{% include mm-icon.html name="meditation" %}</span><strong>PMRT</strong></td><td>Relaxation</td></tr>
              <tr><td><span class="mm-inline-icon">{% include mm-icon.html name="chart" %}</span><strong>Progress tracking</strong></td><td>Behavioural reinforcement</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </details>
    <div class="mm-ai-detail-back"><a class="mm-text-link" href="{{ '/ai-wellness/' | relative_url }}">← Back to AI Wellness</a></div>
  </div>
</section>
