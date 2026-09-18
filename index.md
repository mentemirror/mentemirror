---
layout: mm-default
title: Mente Mirror
description: Preventive and personalised mental wellness combining psychological science, behavioural insights, wearables, AI support and human care.
permalink: /
body_class: mm-home
og_image: /assets/images/home/consulings.png
---

<style>
.mm-home-hero-redesign {
  padding: 62px 0 58px;
  background:
    radial-gradient(circle at 88% 22%, rgba(235,63,122,.10), transparent 26%),
    radial-gradient(circle at 72% 82%, rgba(139,79,166,.08), transparent 24%),
    linear-gradient(110deg,#fff 0%,#fff9fb 58%,#f8f5fb 100%);
  border-bottom: 1px solid #eee9ef;
}

.mm-home-hero-redesign__grid {
  display: grid;
  grid-template-columns: minmax(0,1.06fr) minmax(360px,.94fr);
  gap: 50px;
  align-items: center;
}

.mm-home-hero-redesign__copy h1 {
  margin: 14px 0 22px;
  max-width: 680px;
  font-size: clamp(2.7rem,4.6vw,4.25rem);
  line-height: 1.04;
  letter-spacing: -.025em;
  text-wrap: balance;
}

.mm-home-hero-redesign__intro {
  max-width: 690px;
  margin-top: 20px;
  padding-left: 18px;
  border-left: 3px solid rgba(220,39,104,.38);
}

.mm-home-hero-redesign__lead {
  margin: 0 0 12px;
  font-size: 1.18rem;
  line-height: 1.48;
  font-weight: 700;
  color: var(--mm-text);
}

.mm-home-hero-redesign__support {
  margin: 0;
  color: var(--mm-muted);
  line-height: 1.7;
}

.mm-home-hero-redesign .mm-actions--hero {
  margin-top: 28px;
}

.mm-home-hero-redesign__tertiary {
  margin-top: 20px;
}

.mm-home-hero-redesign__visual {
  position: relative;
  min-height: 470px;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid var(--mm-border);
  background: #fff;
  box-shadow: var(--mm-shadow-soft);
}

.mm-home-hero-redesign__visual::before {
  content: "";
  position: absolute;
  inset: 0;
  border-top: 6px solid var(--mm-primary);
  pointer-events: none;
  z-index: 2;
}

.mm-home-hero-redesign__visual img {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 470px;
  object-fit: cover;
  object-position: center bottom;
}

@media (max-width: 980px) {
  .mm-home-hero-redesign__grid {
    grid-template-columns: 1fr;
    gap: 34px;
  }

  .mm-home-hero-redesign__copy h1 {
    max-width: 820px;
  }

  .mm-home-hero-redesign__visual,
  .mm-home-hero-redesign__visual img {
    min-height: 360px;
  }
}

@media (max-width: 640px) {
  .mm-home-hero-redesign {
    padding: 44px 0 42px;
  }

  .mm-home-hero-redesign__copy h1 {
    font-size: clamp(2.45rem,11vw,3.5rem);
    text-wrap: wrap;
  }

  .mm-home-hero-redesign__intro {
    padding-left: 14px;
  }

  .mm-home-hero-redesign .mm-actions--hero {
    display: grid;
    grid-template-columns: 1fr;
  }

  .mm-home-hero-redesign .mm-actions--hero .mm-btn {
    width: 100%;
    justify-content: center;
  }

  .mm-home-hero-redesign__visual,
  .mm-home-hero-redesign__visual img {
    min-height: 280px;
  }
}

.mm-home-wearable {
  padding: 64px 0;
  background: #fff;
}

.mm-home-wearable__panel {
  display: grid;
  grid-template-columns: minmax(360px,.95fr) minmax(0,1.05fr);
  gap: 54px;
  align-items: center;
  padding: 34px;
  border: 1px solid var(--mm-border);
  border-radius: 28px;
  background:
    radial-gradient(circle at 18% 22%, rgba(235,63,122,.07), transparent 24%),
    radial-gradient(circle at 82% 78%, rgba(139,79,166,.06), transparent 26%),
    linear-gradient(135deg,#fff 0%,#fffafd 58%,#f8f5fb 100%);
  box-shadow: var(--mm-shadow-soft);
}

.mm-home-wearable__visual {
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 22px;
  background: #fff;
  border: 1px solid #eee7ed;
}

.mm-home-wearable__visual::before {
  content: "";
  position: absolute;
  inset: 0;
  border-top: 5px solid var(--mm-primary);
  pointer-events: none;
  z-index: 2;
}

.mm-home-wearable__visual img {
  width: 100%;
  height: 100%;
  max-height: 470px;
  object-fit: contain;
  display: block;
}

.mm-home-wearable__copy h2 {
  margin: 10px 0 18px;
  max-width: 720px;
  font-size: clamp(2.15rem,4vw,3.7rem);
  line-height: 1.05;
  letter-spacing: -.02em;
}

.mm-home-wearable__copy p {
  margin: 0;
  max-width: 720px;
  color: var(--mm-muted);
  font-size: 1.08rem;
  line-height: 1.75;
}

.mm-home-wearable__signals {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.mm-home-wearable__signals span {
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid var(--mm-border);
  background: rgba(255,255,255,.86);
  font-weight: 700;
  font-size: .92rem;
}

@media (max-width: 900px) {
  .mm-home-wearable__panel {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 26px;
  }

  .mm-home-wearable__visual {
    min-height: 330px;
  }
}

@media (max-width: 640px) {
  .mm-home-wearable {
    padding: 44px 0;
  }

  .mm-home-wearable__panel {
    padding: 20px;
    border-radius: 18px;
  }

  .mm-home-wearable__visual {
    min-height: 260px;
  }

  .mm-home-wearable__copy h2 {
    font-size: clamp(2rem,10vw,3rem);
  }
}


/* ===== Homepage visual refinement ===== */

/* Hero: calmer hierarchy and softer secondary action */
.mm-home-hero-redesign__copy h1 {
  max-width: 620px;
  font-size: clamp(2.65rem,4.25vw,4rem);
  line-height: 1.06;
}
.mm-home-hero-redesign .mm-btn--secondary {
  background: transparent;
  color: var(--mm-primary);
  border: 1px solid rgba(177,17,101,.34);
  box-shadow: none;
}

/* Ring: flagship product story, not another card */
.mm-home-wearable {
  padding: 76px 0;
  background:
    radial-gradient(circle at 18% 45%, rgba(235,63,122,.075), transparent 24%),
    radial-gradient(circle at 83% 62%, rgba(111,56,204,.065), transparent 24%),
    linear-gradient(180deg,#fff 0%,#fffafd 100%);
}
.mm-home-wearable__panel {
  grid-template-columns: minmax(360px,.92fr) minmax(0,1.08fr);
  gap: clamp(42px,6vw,80px);
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}
.mm-home-wearable__visual {
  min-height: 430px;
  border: 0;
  border-radius: 0;
  overflow: visible;
  background: radial-gradient(circle at 50% 52%, rgba(235,63,122,.10), transparent 44%);
}
.mm-home-wearable__visual::before { display: none; }
.mm-home-wearable__visual img {
  max-height: 500px;
  filter: drop-shadow(0 24px 40px rgba(64,38,77,.10));
}
.mm-home-wearable__copy { max-width: 680px; }
.mm-home-wearable__copy h2 {
  font-size: clamp(2.25rem,3.6vw,3.45rem);
  line-height: 1.08;
}
.mm-home-wearable__bridge {
  margin-top: 18px !important;
  font-weight: 600;
  color: var(--mm-text) !important;
}
.mm-home-wearable__link {
  display: inline-flex;
  margin-top: 24px;
}

/* Audience cards: same system, stronger recognition */
.mm-home-audience .mm-card-grid--4 { gap: 18px; }
.mm-home-audience .mm-audience-card {
  position: relative;
  overflow: hidden;
  border-top: 4px solid transparent;
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}
.mm-home-audience .mm-audience-card:hover { transform: translateY(-3px); }
.mm-home-audience .mm-audience-card:nth-child(1) { border-top-color: #e83b78; }
.mm-home-audience .mm-audience-card:nth-child(2) { border-top-color: #7442b5; }
.mm-home-audience .mm-audience-card:nth-child(3) { border-top-color: #169b91; }
.mm-home-audience .mm-audience-card:nth-child(4) { border-top-color: #ee942f; }
.mm-home-audience .mm-audience-card:nth-child(1) .mm-card__icon { background: #fff0f5; }
.mm-home-audience .mm-audience-card:nth-child(2) .mm-card__icon { background: #f3edfb; }
.mm-home-audience .mm-audience-card:nth-child(3) .mm-card__icon { background: #e9f8f6; }
.mm-home-audience .mm-audience-card:nth-child(4) .mm-card__icon { background: #fff5e8; }

/* Choice guide: cleaner two-column decision rows */
.mm-choice-grid {
  grid-template-columns: repeat(2,minmax(0,1fr));
  gap: 14px;
}
.mm-choice-card {
  min-height: 104px;
  padding: 20px 22px;
  border-radius: 16px;
}
.mm-choice-card > span { flex: 0 0 auto; }
.mm-choice-card small {
  display: block;
  margin-top: 5px;
  line-height: 1.45;
}

/* How it works: connected journey */
.mm-home-journey { background: #fff; }
.mm-home-journey .mm-section-heading h2 { margin-top: 8px; }
.mm-home-journey .mm-journey {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5,minmax(0,1fr));
  gap: 0;
  margin-top: 38px;
  padding: 0;
  list-style: none;
}
.mm-home-journey .mm-journey::before {
  content: "";
  position: absolute;
  top: 29px;
  left: 10%;
  right: 10%;
  height: 2px;
  background: linear-gradient(90deg,#df2d70,#8f4bb4,#1a9f95,#ee942f);
  opacity: .28;
}
.mm-home-journey .mm-journey li {
  position: relative;
  z-index: 1;
  padding: 0 18px;
  text-align: center;
  background: transparent;
  border: 0;
  box-shadow: none;
}
.mm-home-journey .mm-journey__number {
  width: 58px;
  height: 58px;
  margin: 0 auto 18px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #fff;
  border: 2px solid rgba(177,17,101,.24);
  box-shadow: 0 8px 24px rgba(45,24,58,.07);
  font-weight: 700;
}
.mm-home-journey .mm-journey li:nth-child(2) .mm-journey__number { border-color: rgba(116,66,181,.34); }
.mm-home-journey .mm-journey li:nth-child(3) .mm-journey__number { border-color: rgba(26,159,149,.34); }
.mm-home-journey .mm-journey li:nth-child(4) .mm-journey__number { border-color: rgba(238,148,47,.40); }
.mm-home-journey .mm-journey li:nth-child(5) .mm-journey__number { border-color: rgba(177,17,101,.30); }
.mm-home-journey .mm-journey h3 { margin: 0 0 8px; }
.mm-home-journey .mm-journey p {
  margin: 0;
  color: var(--mm-muted);
  line-height: 1.55;
}

/* Deliberate section rhythm */
.mm-home-audience { background: #faf7fb; }
.mm-section--choice-guide { background: #fff; }

@media (max-width: 900px) {
  .mm-home-wearable__panel { grid-template-columns: 1fr; }
  .mm-home-wearable__copy { max-width: none; }
  .mm-home-journey .mm-journey {
    grid-template-columns: 1fr;
    gap: 22px;
  }
  .mm-home-journey .mm-journey::before {
    top: 28px;
    bottom: 28px;
    left: 29px;
    right: auto;
    width: 2px;
    height: auto;
  }
  .mm-home-journey .mm-journey li {
    display: grid;
    grid-template-columns: 58px 1fr;
    column-gap: 18px;
    text-align: left;
    padding: 0;
  }
  .mm-home-journey .mm-journey__number {
    grid-row: 1 / span 2;
    margin: 0;
  }
  .mm-home-journey .mm-journey h3 { align-self: end; }
}

@media (max-width: 720px) {
  .mm-choice-grid { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .mm-home-wearable { padding: 50px 0; }
  .mm-home-wearable__visual { min-height: 280px; }
}

</style>

<section class="mm-home-hero-redesign">
  <div class="mm-container mm-home-hero-redesign__grid">
    <div class="mm-home-hero-redesign__copy">
      <span class="mm-eyebrow">Preventive • Personalised • Human-centred</span>

      <h1>Your mind deserves more than a crisis response.</h1>

      <div class="mm-home-hero-redesign__intro">
        <p class="mm-home-hero-redesign__lead">Understand your mind. Strengthen your wellbeing. Stay ahead of mental health challenges.</p>
        <p class="mm-home-hero-redesign__support">Mente Mirror brings together psychological science, AI-supported wellness, wearable context and human care to help you understand patterns, build healthier habits and choose the right support.</p>
      </div>

      <div class="mm-actions mm-actions--hero">
        <a class="mm-btn mm-btn--primary" data-cta="hero-wellness-check" href="{{ '/understand-yourself/wellness-assessment/' | relative_url }}">Explore Wellness Check</a>
        <a class="mm-btn mm-btn--secondary" data-cta="hero-psychologist" href="{{ '/human-care/psychologists/' | relative_url }}">Explore Human Care</a>
      </div>

      <div class="mm-home-hero-redesign__tertiary">
        <a class="mm-hero__tertiary" data-cta="hero-mjuzi" href="{{ '/ai-wellness/' | relative_url }}">Meet Mjuzi AI Wellness <span aria-hidden="true">→</span></a>
      </div>
    </div>

    <div class="mm-home-hero-redesign__visual">
      <img src="{{ './assets/images/home/home.png' | relative_url }}" alt="Home" fetchpriority="high">
    </div>
  </div>
</section>


<section class="mm-home-wearable">
  <div class="mm-container">
    <div class="mm-home-wearable__panel">
      <div class="mm-home-wearable__visual">
        <img
          src="{{ './assets/images/home/ring2.png' | relative_url }}"
          alt="Mjuzi Smart Ring"
          loading="lazy"
        >
      </div>

      <div class="mm-home-wearable__copy">
        <span class="mm-eyebrow">Mjuzi Smart Ring</span>
        <h2>A wearable that listens to your body and analyses patterns.</h2>
        <p>It starts with a smart ring that reads your body's signals — sleep, HRV, stress, and recovery — day and night.</p>
        <p class="mm-home-wearable__bridge">The ring provides the signals. Mjuzi helps turn them into reflection, patterns and practical wellness actions.</p>


        <div class="mm-home-wearable__signals" aria-label="Signals tracked by the Mjuzi Smart Ring">
          <span>Sleep</span>
          <span>HRV</span>
          <span>Stress</span>
          <span>Recovery</span>
        </div>

        <a class="mm-text-link mm-home-wearable__link" href="{{ '/ai-wellness/' | relative_url }}">Explore Mjuzi AI Wellness →</a>

      </div>
    </div>
  </div>
</section>

<section class="mm-section mm-section--soft mm-home-audience">
  <div class="mm-container">
    <div class="mm-section-heading mm-section-heading--center">
      <span class="mm-eyebrow">Choose your journey</span>
      <h2>Who would you like to support today?</h2>
      <p>Choose the pathway that best matches the life-stage of the person needing support.</p>
    </div>
    <div class="mm-card-grid mm-card-grid--4">
      <a class="mm-card mm-audience-card" href="{{ '/for-you/students-teens/' | relative_url }}">
        <span class="mm-card__icon">{% include mm-icon.html name="student" %}</span><h3>I’m a student</h3><p>Focus, academic stress, sleep, emotional wellbeing and parent-supported wellness.</p><span class="mm-card__link">Explore student wellness</span>
      </a>
      <a class="mm-card mm-audience-card" href="{{ '/for-you/adults/' | relative_url }}">
        <span class="mm-card__icon">{% include mm-icon.html name="briefcase" %}</span><h3>I’m an adult</h3><p>Stress, burnout, work-life balance, emotional regulation, resilience and productivity.</p><span class="mm-card__link">Explore adult wellness</span>
      </a>
      <a class="mm-card mm-audience-card" href="{{ '/for-you/seniors/' | relative_url }}">
        <span class="mm-card__icon">{% include mm-icon.html name="senior" %}</span><h3>I’m supporting a senior</h3><p>Memory, mood, connection, activity, sleep and caregiver-oriented support.</p><span class="mm-card__link">Explore senior wellness</span>
      </a>
      <a class="mm-card mm-audience-card" href="{{ '/family-wellness/' | relative_url }}">
        <span class="mm-card__icon">{% include mm-icon.html name="family" %}</span><h3>I’m supporting my family</h3><p>Connected pathways for teens, adults, seniors, parents and caregivers.</p><span class="mm-card__link">Explore family wellness</span>
      </a>
    </div>
  </div>
</section>

<section class="mm-section mm-section--choice-guide">
  <div class="mm-container">
    <div class="mm-section-heading mm-section-heading--center">
      <span class="mm-eyebrow">Not sure where to start?</span>
      <h2>Choose by what you need—not by product name.</h2>
      <p>There is no single right entry point. Start with the option that best matches what you want help with today.</p>
    </div>
    <div class="mm-choice-grid">
      <a class="mm-choice-card" data-cta="choice-wellness" href="{{ '/understand-yourself/wellness-assessment/' | relative_url }}"><span>{% include mm-icon.html name="clipboard" %}</span><div><strong>I want to understand how I’m doing</strong><small>Start with a self-guided Wellness Check.</small></div><b aria-hidden="true">→</b></a>
      <a class="mm-choice-card" data-cta="choice-testing" href="{{ '/understand-yourself/psychological-tests/' | relative_url }}"><span>{% include mm-icon.html name="brain" %}</span><div><strong>I want structured psychological testing</strong><small>Explore psychologist-supported tests and interpretation.</small></div><b aria-hidden="true">→</b></a>
      <a class="mm-choice-card" data-cta="choice-psychologist" href="{{ '/human-care/psychologists/' | relative_url }}"><span>{% include mm-icon.html name="chat" %}</span><div><strong>I want someone to talk to</strong><small>Explore counselling with a psychologist with post session reports and assistance.</small></div><b aria-hidden="true">→</b></a>
      <a class="mm-choice-card" data-cta="choice-psychiatrist" href="{{ '/human-care/psychiatrists/' | relative_url }}"><span>{% include mm-icon.html name="medical" %}</span><div><strong>I may need medical or psychiatric care</strong><small>Explore psychiatric evaluation and medical support.</small></div><b aria-hidden="true">→</b></a>
      <a class="mm-choice-card" data-cta="choice-mjuzi" href="{{ '/ai-wellness/' | relative_url }}"><span>{% include mm-icon.html name="sparkles" %}</span><div><strong>I want everyday AI-supported wellness</strong><small>Explore Mjuzi, daily check-ins, Wearable Smart Ring real time monitoring 24x7 and growth tools.</small></div><b aria-hidden="true">→</b></a>
      <a class="mm-choice-card" data-cta="choice-family" href="{{ '/family-wellness/' | relative_url }}"><span>{% include mm-icon.html name="family" %}</span><div><strong>I’m supporting someone else</strong><small>Explore family, parent, senior and caregiver pathways.</small></div><b aria-hidden="true">→</b></a>
    </div>
    <div class="mm-actions mm-actions--center mm-choice-guide__start"><a class="mm-text-link" data-cta="choice-get-started" href="{{ '/get-started/' | relative_url }}">New to Mente Mirror? Start here →</a></div>
  </div>
</section>

<section class="mm-section mm-home-journey">
  <div class="mm-container">
    <div class="mm-section-heading mm-section-heading--center">
      <span class="mm-eyebrow">How Mente Mirror works</span>
      <h2>Understand. Track. Notice patterns. Act. Get support.</h2>
      <p>One journey that combines awareness, everyday signals, personalised tools and human support when appropriate.</p>
    </div>
    <ol class="mm-journey">
      <li><span class="mm-journey__number">01</span><h3>Understand</h3><p>Reflect through assessment and conversation.</p></li>
      <li><span class="mm-journey__number">02</span><h3>Track</h3><p>Add available behavioural and wearable context.</p></li>
      <li><span class="mm-journey__number">03</span><h3>Notice patterns</h3><p>See trends and changes worth reflecting on.</p></li>
      <li><span class="mm-journey__number">04</span><h3>Act</h3><p>Use personalised wellness tools and exercises.</p></li>
      <li><span class="mm-journey__number">05</span><h3>Get support</h3><p>Track progress and connect with human care when needed.</p></li>
    </ol>
  </div>
</section>

<section class="mm-section mm-section--dark mm-home-ecosystem">
  <div class="mm-container">
    <div class="mm-section-heading mm-section-heading--center">
      <span class="mm-eyebrow">One ecosystem, two kinds of support</span>
      <h2>Mjuzi for everyday wellness. Human care for context and complexity.</h2>
      <p>Technology can help you reflect and recognise patterns. Psychologists and psychiatrists add professional judgement, empathy and clinical care where appropriate.</p>
    </div>
    <div class="mm-home-duo">
      <article class="mm-home-duo__card">
        <span class="mm-card__icon">{% include mm-icon.html name="sparkles" %}</span>
        <h3>Mjuzi AI Wellness</h3>
        <p>Mjuzi is a preventive, personalised and context-aware AI wellness platform designed to help you notice changes, reflect on patterns and take practical wellbeing actions.</p>
        <a class="mm-btn mm-btn--secondary" data-cta="home-mjuzi" href="{{ '/ai-wellness/' | relative_url }}">Meet Mjuzi</a>
      </article>
      <article class="mm-home-duo__card">
        <span class="mm-card__icon">{% include mm-icon.html name="heart" %}</span>
        <h3>Human Care</h3>
        <p>Psychological assessment, counselling and psychiatric consultation or medication when your needs benefit from human understanding and professional care.</p>
        <a class="mm-btn mm-btn--secondary" data-cta="home-human-care" href="{{ '/human-care/' | relative_url }}">Explore Human Care</a>
      </article>
    </div>
  </div>
</section>

<section class="mm-section mm-section--soft">
  <div class="mm-container mm-split mm-split--wells">
    <div>
      <span class="mm-eyebrow">Mente Mirror Intelligence</span>
      <h2>The Five Wells of Happiness</h2>
      <p>Lasting wellbeing rarely comes from one part of life alone. The Five Wells framework helps you check and consciously replenish the physical, emotional, cognitive, social and purpose-related dimensions of wellbeing.</p>
      <p class="mm-wells-tagline"><strong>Check. Reflect. Replenish.</strong></p>
      <a class="mm-text-link" href="{{ '/understand-yourself/mente-mirror-intelligence/' | relative_url }}">Explore the Five Wells framework →</a>
    </div>
    <div class="mm-wells" aria-label="Five Wells of Happiness">
      <div><span>{% include mm-icon.html name="heart" %}</span><strong>Emotional</strong></div>
      <div><span>{% include mm-icon.html name="brain" %}</span><strong>Cognitive</strong></div>
      <div><span>{% include mm-icon.html name="activity" %}</span><strong>Physical</strong></div>
      <div><span>{% include mm-icon.html name="family" %}</span><strong>Social</strong></div>
      <div><span>{% include mm-icon.html name="leaf" %}</span><strong>Spiritual / Purpose</strong></div>
    </div>
  </div>
</section>

<section class="mm-section mm-section--trust mm-home-proof">
  <div class="mm-container">
    <div class="mm-section-heading mm-section-heading--center">
      <span class="mm-eyebrow">Built around responsible support</span>
      <h2>Clear boundaries. Human options. Support across generations.</h2>
    </div>
    <div class="mm-trust-grid mm-trust-grid--compact">
      <article class="mm-trust-item"><span>{% include mm-icon.html name="users" %}</span><div><h3>Human care, Online and offline sessions if needed</h3><p>Psychologists and psychiatrists remain part of the care pathway.</p></div></article>
      <article class="mm-trust-item"><span>{% include mm-icon.html name="clipboard" %}</span><div><h3>Your choice of Wellness or Diagnosis </h3><p>Self-assessment and wellness programs are separated from diagnosis and medical care.</p></div></article>
      <article class="mm-trust-item"><span>{% include mm-icon.html name="shield" %}</span><div><h3>Privacy &amp; safety information</h3><p>Dedicated data safety and privacy terms with encrypted data.</p></div></article>
      <article class="mm-trust-item"><span>{% include mm-icon.html name="family" %}</span><div><h3>Multi-generational</h3><p>Custom pathways for students, adults, seniors, families and caregivers.</p></div></article>
    </div>
  </div>
</section>

<section class="mm-section mm-section--soft mm-home-testimonials">
  <div class="mm-container">
    <div class="mm-section-heading mm-section-heading--center">
      <span class="mm-eyebrow">Client experiences</span>
      <h2>Different journeys. Different kinds of support.</h2>
      <p>Individual experiences vary, but the stories show how clients and families describe their relationship with Mente Mirror.</p>
    </div>
    <div class="mm-testimonial-grid mm-testimonial-grid--home">
      <a class="mm-testimonial-card mm-testimonial-card--link" href="{{ '/resources/testimonials/dr-b-bharathi/' | relative_url }}">
        <span class="mm-testimonial-card__type">Parent &amp; Family</span><p>A parent describes stronger emotional skills, more open communication and better family interaction after counselling.</p><footer><strong>Dr B. Bharathi</strong><span>Parent · Tamil Nadu</span></footer>
      </a>
      <a class="mm-testimonial-card mm-testimonial-card--link" href="{{ '/resources/testimonials/m-sivvani/' | relative_url }}">
        <span class="mm-testimonial-card__type">Student</span><p>During JEE preparation, counselling helped her work through self-doubt, peer pressure and intense stress while building confidence and resilience.</p><footer><strong>M Sivvani</strong><span>Student · NIT Trichy</span></footer>
      </a>
      <a class="mm-testimonial-card mm-testimonial-card--link" href="{{ '/resources/testimonials/puja-bhatnagar/' | relative_url }}">
        <span class="mm-testimonial-card__type">Parent</span><p>A mother says her daughter received patient, practical guidance during a stressful period and gradually returned to her happier self.</p><footer><strong>Puja Bhatnagar</strong><span>Parent · Gurugram</span></footer>
      </a>
    </div>
    <div class="mm-actions mm-actions--center"><a class="mm-text-link" href="{{ '/resources/testimonials/' | relative_url }}">Read more client experiences →</a></div>
  </div>
</section>

<section class="mm-section mm-section--cta">
  <div class="mm-container mm-cta-panel">
    <div><span class="mm-eyebrow">Choose where to begin</span><h2>Start with awareness—or speak directly with a human.</h2><p>You do not need to know exactly what kind of support you need before taking the first step.</p></div>
    <div class="mm-actions"><a class="mm-btn mm-btn--primary" data-cta="final-wellness-check" href="{{ '/understand-yourself/wellness-assessment/' | relative_url }}">Start My Wellness Check</a><a class="mm-btn mm-btn--ghost" data-cta="final-psychologist" href="{{ '/human-care/psychologists/' | relative_url }}">Talk to a Psychologist</a></div>
  </div>
</section>
