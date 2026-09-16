---
layout: mm-default
title: Personality Self-Assessment (OCEAN)
description: Take the 50-item Big Five OCEAN personality questionnaire and review your trait scores for openness, conscientiousness, extraversion, agreeableness and neuroticism.
permalink: /understand-yourself/wellness-assessment/personality/
body_class: mm-assessment-page mm-ocean-assessment-page
---

<section class="mm-page-hero"><div class="mm-container"><span class="mm-eyebrow">Understand Yourself · Wellness Assessment</span><h1>Personality Self-Assessment</h1><p><strong>Reflect on five broad personality traits using the 50-item OCEAN questionnaire.</strong></p></div></section>

<section class="mm-section mm-section--tight"><div class="mm-container"><div id="ocean-assessment" class="mm-sa" aria-live="polite">
<section class="mm-sa-shell" id="sa-intro">
  <div class="mm-sa-eyebrow">Wellness Assessment · Big Five (OCEAN)</div>
  <div class="mm-sa-intro-grid">
    <div>
      <h2>Explore your Big Five personality profile.</h2>
      <p class="mm-sa-lead">This questionnaire contains 50 statements across Openness to Experience, Conscientiousness, Extraversion, Agreeableness and Neuroticism.</p>
      <div class="mm-sa-facts"><span>50 questions</span><span>5 personality traits</span><span>No login required</span></div>
    </div>
    <div class="mm-sa-mini-card"><strong>Your responses stay in this page.</strong><p>This version does not send or store your answers. Your five trait scores are calculated in your browser.</p></div>
  </div>
  <div class="mm-sa-note"><strong>This is a personality reflection, not a diagnosis.</strong> The result describes broad trait tendencies based on your responses and should not be treated as a clinical or fixed label.</div>
  <button type="button" class="mm-sa-btn mm-sa-btn-primary" id="sa-start">Start Personality Assessment</button>
</section>

<section class="mm-sa-shell" id="sa-quiz" hidden>
  <div class="mm-sa-quiz-head"><div><div class="mm-sa-eyebrow">OCEAN Personality Check</div><div id="sa-progress-text" class="mm-sa-progress-label">Question 1 of 50</div></div><button type="button" class="mm-sa-reset-link" id="sa-reset-top">Start over</button></div>
  <div class="mm-sa-progress"><div id="sa-progress-bar"></div></div>
  <div class="mm-sa-question-card"><div class="mm-sa-dimension" id="sa-dimension">Openness to Experience</div><h2 id="sa-question"></h2><div id="sa-options" class="mm-sa-options"></div></div>
  <div class="mm-sa-nav"><button type="button" class="mm-sa-btn mm-sa-btn-secondary" id="sa-back">Back</button><button type="button" class="mm-sa-btn mm-sa-btn-primary" id="sa-next">Continue</button></div>
</section>

<section class="mm-sa-shell" id="sa-results" hidden>
  <div class="mm-sa-eyebrow">Your OCEAN Personality Result</div>
  <div class="mm-sa-result-hero">
    <div><h2>Your Big Five profile</h2><p class="mm-sa-lead">Each trait is scored from 10 to 50. The labels below follow the interpretation bands in the assessment workbook.</p></div>
    <div class="mm-sa-mini-card"><strong>How to read this result</strong><p>There is no single overall personality score. Review each trait separately; higher and lower scores describe different tendencies rather than “good” or “bad” outcomes.</p></div>
  </div>
  <div class="mm-sa-traits" id="sa-traits"></div>
  <div class="mm-sa-next-steps"><div><div class="mm-sa-eyebrow">Choose a next step</div><h3>Use this profile as a starting point for reflection.</h3><p>You can retake the questionnaire later or continue exploring your wellbeing through MenteMirror.</p></div><div class="mm-sa-actions"><button type="button" class="mm-sa-btn mm-sa-btn-secondary" id="sa-retake">Retake assessment</button><a class="mm-sa-btn mm-sa-btn-primary" href="{{ '/understand-yourself/' | relative_url }}">Explore Understand Yourself</a></div></div>
</section>
</div></div></section>


<script>
(function(){
const options=[['Strongly agree',5],['Agree',4],['Neutral',3],['Disagree',2],['Strongly disagree',1]];
const questions=[
['Openness to Experience','I enjoy trying new and different activities.'],
['Openness to Experience','I have a vivid imagination'],
['Openness to Experience','I enjoy exploring new ideas'],
['Openness to Experience','I appreciate art, music, or literature.'],
['Openness to Experience','I am curious about many different things.'],
['Openness to Experience','I enjoy learning about different cultures.'],
['Openness to Experience','I like to think about abstract concepts.'],
['Openness to Experience','I enjoy creative hobbies.'],
['Openness to Experience','I prefer variety over routine.'],
['Openness to Experience','I am open to new experiences.'],
['Conscientiousness','I complete tasks on time.'],
['Conscientiousness','I am organized in my daily life.'],
['Conscientiousness','I pay attention to details.'],
['Conscientiousness','I follow a schedule.'],
['Conscientiousness','I set goals and work toward them.'],
['Conscientiousness','I keep my belongings neat.'],
['Conscientiousness','I am reliable.'],
['Conscientiousness','I plan ahead before acting.'],
['Conscientiousness','I take responsibility seriously.'],
['Conscientiousness','I finish what I start.'],
['Extraversion','I enjoy being around people.'],
['Extraversion','I feel energized in social settings.'],
['Extraversion','I start conversations easily.'],
['Extraversion','I enjoy group activities.'],
['Extraversion','I am talkative.'],
['Extraversion','I like being the center of attention.'],
['Extraversion','I make friends quickly.'],
['Extraversion','I feel comfortable meeting new people.'],
['Extraversion','I enjoy social gatherings.'],
['Extraversion','I am outgoing.'],
['Agreeableness','I am kind to others.'],
['Agreeableness','I trust people easily.'],
['Agreeableness','I help others when they need support.'],
['Agreeableness','I avoid conflicts.'],
['Agreeableness','I am considerate of others’ feelings.'],
['Agreeableness','I cooperate well with others.'],
['Agreeableness','I forgive people easily.'],
['Agreeableness','I am sympathetic toward others.'],
['Agreeableness','I try to maintain harmony.'],
['Agreeableness','I respect others’ opinions.'],
['Neuroticism','I feel anxious easily.'],
['Neuroticism','I worry about many things.'],
['Neuroticism','I feel stressed frequently.'],
['Neuroticism','I get upset easily.'],
['Neuroticism','I feel emotionally unstable at times.'],
['Neuroticism','I have difficulty relaxing.'],
['Neuroticism','I feel nervous in stressful situations.'],
['Neuroticism','I experience mood swings.'],
['Neuroticism','I feel overwhelmed by problems.'],
['Neuroticism','I feel insecure about myself.']
].map((q,i)=>({id:`q${i+1}`,trait:q[0],text:q[1]}));
const interpretations={
'Openness to Experience':{high:'Very High — Creative, curious, imaginative',moderate:'Moderate — Balanced openness',low:'Low — Prefers routine and familiarity'},
'Conscientiousness':{high:'Very High — Disciplined, organized, responsible',moderate:'Moderate — Reasonably structured',low:'Low — Disorganized, impulsive'},
'Extraversion':{high:'Very High — Highly social and energetic',moderate:'Moderate — Socially comfortable',low:'Low — Reserved or introverted'},
'Agreeableness':{high:'Very High — Cooperative, compassionate',moderate:'Moderate — Balanced interpersonal style',low:'Low — Competitive, critical'},
'Neuroticism':{high:'Very High — Emotionally reactive, anxious',moderate:'Moderate — Occasional stress',low:'Low — Emotionally stable'}
};
let current=0,answers={};const $=id=>document.getElementById(id),intro=$('sa-intro'),quiz=$('sa-quiz'),results=$('sa-results');
function show(s){[intro,quiz,results].forEach(x=>x.hidden=x!==s);document.body.classList.toggle('mm-sa-quiz-active',s===quiz);window.scrollTo({top:Math.max(0,document.querySelector('.mm-sa').offsetTop-95),behavior:'smooth'})}
function render(){const q=questions[current];$('sa-progress-text').textContent=`Question ${current+1} of ${questions.length}`;$('sa-progress-bar').style.width=`${((current+1)/questions.length)*100}%`;$('sa-dimension').textContent=q.trait;$('sa-question').textContent=q.text;$('sa-back').disabled=current===0;const o=$('sa-options');o.innerHTML='';options.forEach(([label,value])=>{const sel=answers[q.id]===value;const el=document.createElement('label');el.className='mm-sa-option'+(sel?' is-selected':'');el.innerHTML=`<input type="radio" name="${q.id}" ${sel?'checked':''}><span class="mm-sa-radio"></span><span>${label}</span>`;el.onclick=()=>{answers[q.id]=value;render()};o.appendChild(el)});$('sa-next').disabled=answers[q.id]===undefined;$('sa-next').textContent=current===questions.length-1?'See my profile':'Continue'}
function result(){const scores={};questions.forEach(q=>{scores[q.trait]=(scores[q.trait]||0)+(answers[q.id]||0)});const wrap=$('sa-traits');wrap.innerHTML='';Object.keys(interpretations).forEach(trait=>{const score=scores[trait];const level=score>=40?'high':(score>=30?'moderate':'low');const full=interpretations[trait][level];const dash=full.indexOf(' — ');const label=dash>=0?full.slice(0,dash):full;const description=dash>=0?full.slice(dash+3):'';const card=document.createElement('article');card.className='mm-sa-trait-card';card.innerHTML=`<div class="mm-sa-trait-head"><h3>${trait}</h3><div class="mm-sa-trait-score">${score} / 50</div></div><div class="mm-sa-trait-label">${label}</div><p>${description}</p>`;wrap.appendChild(card)});show(results)}
function reset(){current=0;answers={};show(intro)}
$('sa-start').onclick=()=>{render();show(quiz)};$('sa-back').onclick=()=>{if(current>0){current--;render()}};$('sa-next').onclick=()=>{if(answers[questions[current].id]===undefined)return;if(current<questions.length-1){current++;render()}else result()};$('sa-reset-top').onclick=reset;$('sa-retake').onclick=()=>{current=0;answers={};render();show(quiz)};
})();
</script>

<section class="mm-section mm-section--tight mm-assessment-back-section"><div class="mm-container"><div class="mm-actions"><a class="mm-text-link" href="{{ '/understand-yourself/wellness-assessment/' | relative_url }}">← Back to Wellness Assessment</a></div></div></section>
