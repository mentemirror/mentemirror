---
layout: mm-default
title: Stress Self-Assessment (PSS-10)
description: Take the PSS-10 perceived stress questionnaire and review your total score and stress-level interpretation.
permalink: /understand-yourself/wellness-assessment/stress/
body_class: mm-assessment-page mm-pss10-assessment-page
---

<section class="mm-page-hero"><div class="mm-container"><span class="mm-eyebrow">Understand Yourself · Wellness Assessment</span><h1>Stress Self-Assessment</h1><p><strong>Use the PSS-10 to reflect on how stressful situations have felt during the past month.</strong></p></div></section>

<section class="mm-section mm-section--tight"><div class="mm-container"><div id="pss10-assessment" class="mm-sa" aria-live="polite">
<section class="mm-sa-shell" id="sa-intro">
  <div class="mm-sa-eyebrow">Wellness Assessment · PSS-10</div>
  <div class="mm-sa-intro-grid">
    <div>
      <h2>Take a short perceived-stress check-in.</h2>
      <p class="mm-sa-lead">The PSS-10 contains 10 questions about how unpredictable, uncontrollable and overloaded life has felt during the past month.</p>
      <div class="mm-sa-facts"><span>10 questions</span><span>Past month</span><span>No login required</span></div>
    </div>
    <div class="mm-sa-mini-card"><strong>Your responses stay in this page.</strong><p>This version does not send or store your answers. The result is calculated in your browser.</p></div>
  </div>
  <div class="mm-sa-note"><strong>This is a wellness reflection, not a diagnosis.</strong> The PSS-10 result is a non-diagnostic indicator of perceived stress and does not replace psychological or medical evaluation.</div>
  <button type="button" class="mm-sa-btn mm-sa-btn-primary" id="sa-start">Start Stress Assessment</button>
</section>

<section class="mm-sa-shell" id="sa-quiz" hidden>
  <div class="mm-sa-quiz-head"><div><div class="mm-sa-eyebrow">PSS-10 Stress Check</div><div id="sa-progress-text" class="mm-sa-progress-label">Question 1 of 10</div></div><button type="button" class="mm-sa-reset-link" id="sa-reset-top">Start over</button></div>
  <div class="mm-sa-progress"><div id="sa-progress-bar"></div></div>
  <div class="mm-sa-question-card"><div class="mm-sa-dimension" id="sa-dimension">PSS-10</div><h2 id="sa-question"></h2><div id="sa-options" class="mm-sa-options"></div></div>
  <div class="mm-sa-nav"><button type="button" class="mm-sa-btn mm-sa-btn-secondary" id="sa-back">Back</button><button type="button" class="mm-sa-btn mm-sa-btn-primary" id="sa-next">Continue</button></div>
</section>

<section class="mm-sa-shell" id="sa-results" hidden>
  <div class="mm-sa-eyebrow">Your PSS-10 Result</div>
  <div class="mm-sa-result-hero">
    <div><h2>Your perceived stress score</h2><div class="mm-sa-score-line"><strong id="sa-total-score">0</strong><span>/ 40</span></div><div class="mm-sa-status-large" id="sa-overall-status"></div><p id="sa-overall-description"></p></div>
    <div class="mm-sa-mini-card"><strong>About this result</strong><p>The PSS-10 describes perceived stress. The score is non-diagnostic and should be considered alongside your broader wellbeing and circumstances.</p></div>
  </div>
  <div class="mm-sa-clinical-action"><h3>Reporting guidance from the assessment sheet</h3><p id="sa-guidance"></p></div>
  <div class="mm-sa-next-steps"><div><div class="mm-sa-eyebrow">Choose a next step</div><h3>Use this result as a starting point, not a diagnosis.</h3><p>You can continue with Mjuzi wellness tools or seek professional support when appropriate.</p></div><div class="mm-sa-actions"><button type="button" class="mm-sa-btn mm-sa-btn-secondary" id="sa-retake">Retake assessment</button><a class="mm-sa-btn mm-sa-btn-primary" href="{{ '/human-care/psychologists/' | relative_url }}">Find professional support</a></div></div>
</section>
</div></div></section>


<script>
(function(){
const options=[['Never',0],['Almost never',1],['Sometimes',2],['Fairly often',3],['Very often',4]];
const questions=[
{id:'q1',text:'In the past month, how often have you been upset because of something that happened unexpectedly?'},
{id:'q2',text:'In the past month, how often have you felt that you were unable to control the important things in your life?'},
{id:'q3',text:'In the past month, how often have you felt nervous and “stressed”?'},
{id:'q4',text:'In the past month, how often have you felt confident about your ability to handle your personal problems?',reverse:true},
{id:'q5',text:'In the past month, how often have you felt that things were going your way?',reverse:true},
{id:'q6',text:'In the past month, how often have you found that you could not cope with all the things that you had to do?'},
{id:'q7',text:'In the past month, how often have you been able to control irritations in your life?',reverse:true},
{id:'q8',text:'In the past month, how often have you felt that you were on top of things?',reverse:true},
{id:'q9',text:'In the past month, how often have you been angered because of things that happened that were outside of your control?'},
{id:'q10',text:'In the past month, how often have you felt difficulties were piling up so high that you could not overcome them?'}
];
const bands=[
{max:13,status:'Low perceived stress',description:'Low stress level.',guidance:'Low stress level. Report as non-clinical score alongside numerical result.'},
{max:26,status:'Moderate perceived stress',description:'Moderate stress level.',guidance:'Moderate stress level. Common range; non-diagnostic indicator of felt stress.'},
{max:40,status:'High perceived stress',description:'High perceived stress level.',guidance:'High stress level. High perceived overload; non-diagnostic rating.'}
];
let current=0,answers={};const $=id=>document.getElementById(id),intro=$('sa-intro'),quiz=$('sa-quiz'),results=$('sa-results');
function show(s){[intro,quiz,results].forEach(x=>x.hidden=x!==s);document.body.classList.toggle('mm-sa-quiz-active',s===quiz);window.scrollTo({top:Math.max(0,document.querySelector('.mm-sa').offsetTop-95),behavior:'smooth'})}
function render(){const q=questions[current];$('sa-progress-text').textContent=`Question ${current+1} of ${questions.length}`;$('sa-progress-bar').style.width=`${((current+1)/questions.length)*100}%`;$('sa-dimension').textContent='PSS-10';$('sa-question').textContent=q.text;$('sa-back').disabled=current===0;const o=$('sa-options');o.innerHTML='';options.forEach(([label,value])=>{const sel=answers[q.id]===value;const el=document.createElement('label');el.className='mm-sa-option'+(sel?' is-selected':'');el.innerHTML=`<input type="radio" name="${q.id}" ${sel?'checked':''}><span class="mm-sa-radio"></span><span>${label}</span>`;el.onclick=()=>{answers[q.id]=value;render()};o.appendChild(el)});$('sa-next').disabled=answers[q.id]===undefined;$('sa-next').textContent=current===questions.length-1?'See my result':'Continue'}
function result(){const total=questions.reduce((sum,q)=>{const raw=answers[q.id]||0;return sum+(q.reverse?(4-raw):raw)},0);const b=bands.find(x=>total<=x.max);$('sa-total-score').textContent=total;$('sa-overall-status').textContent=b.status;$('sa-overall-description').textContent=b.description;$('sa-guidance').textContent=b.guidance;show(results)}
function reset(){current=0;answers={};show(intro)}
$('sa-start').onclick=()=>{render();show(quiz)};$('sa-back').onclick=()=>{if(current>0){current--;render()}};$('sa-next').onclick=()=>{if(answers[questions[current].id]===undefined)return;if(current<questions.length-1){current++;render()}else result()};$('sa-reset-top').onclick=reset;$('sa-retake').onclick=()=>{current=0;answers={};render();show(quiz)};
})();
</script>

<section class="mm-section mm-section--tight mm-assessment-back-section"><div class="mm-container"><div class="mm-actions"><a class="mm-text-link" href="{{ '/understand-yourself/wellness-assessment/' | relative_url }}">← Back to Wellness Assessment</a></div></div></section>
