---
layout: mm-default
title: Depression Self-Assessment (PHQ-9)
description: Take the PHQ-9 depression screening questionnaire and review the score, severity classification and interpretation.
permalink: /understand-yourself/wellness-assessment/depression/
body_class: mm-assessment-page mm-phq9-assessment-page
---

<section class="mm-page-hero">
  <div class="mm-container">
    <span class="mm-eyebrow">Understand Yourself · Wellness Assessment</span>
    <h1>Depression Self-Assessment</h1>
    <p><strong>Use the PHQ-9 to reflect on depressive symptoms over the recent period.</strong></p>
  </div>
</section>

<section class="mm-section mm-section--tight">
  <div class="mm-container">
    <div id="phq9-assessment" class="mm-sa" aria-live="polite">
      <section class="mm-sa-shell" id="sa-intro">
        <div class="mm-sa-eyebrow">Wellness Assessment · PHQ-9</div>
        <div class="mm-sa-intro-grid">
          <div>
            <h2>Take a short depression screening check-in.</h2>
            <p class="mm-sa-lead">The PHQ-9 contains 9 symptom questions plus one functional-difficulty question. Your score is calculated from the 9 symptom items.</p>
            <div class="mm-sa-facts"><span>9 scored questions</span><span>1 impact question</span><span>No login required</span></div>
          </div>
          <div class="mm-sa-mini-card"><strong>Your responses stay in this page.</strong><p>This version does not send or store your answers. The result is calculated in your browser.</p></div>
        </div>
        <div class="mm-sa-note"><strong>This is a screening tool, not a diagnosis.</strong> A score can help you reflect on symptoms, but it does not replace evaluation by a qualified mental-health professional.</div>
        <button type="button" class="mm-sa-btn mm-sa-btn-primary" id="sa-start">Start Depression Assessment</button>
      </section>

      <section class="mm-sa-shell" id="sa-quiz" hidden>
        <div class="mm-sa-quiz-head"><div><div class="mm-sa-eyebrow">PHQ-9 Depression Check</div><div id="sa-progress-text" class="mm-sa-progress-label">Question 1 of 10</div></div><button type="button" class="mm-sa-reset-link" id="sa-reset-top">Start over</button></div>
        <div class="mm-sa-progress" aria-hidden="true"><div id="sa-progress-bar"></div></div>
        <div class="mm-sa-question-card">
          <div class="mm-sa-dimension" id="sa-dimension">PHQ-9</div>
          <h2 id="sa-question"></h2>
          <div id="sa-options" class="mm-sa-options"></div>
        </div>
        <div class="mm-sa-nav"><button type="button" class="mm-sa-btn mm-sa-btn-secondary" id="sa-back">Back</button><button type="button" class="mm-sa-btn mm-sa-btn-primary" id="sa-next">Continue</button></div>
      </section>

      <section class="mm-sa-shell" id="sa-results" hidden>
        <div class="mm-sa-eyebrow">Your PHQ-9 Result</div>
        <div class="mm-sa-result-hero">
          <div><h2>Your depression screening score</h2><div class="mm-sa-score-line"><strong id="sa-total-score">0</strong><span>/ 27</span></div><div class="mm-sa-status-large" id="sa-overall-status"></div><p id="sa-overall-description"></p></div>
          <div class="mm-sa-mini-card"><strong>Functional difficulty</strong><p id="sa-impact"></p></div>
        </div>
        <div class="mm-sa-clinical-action"><h3>Recommended action from the assessment sheet</h3><p id="sa-action"></p></div>
        <div class="mm-sa-alert" id="sa-safety-alert" hidden><strong>Your response to the self-harm question needs attention.</strong><p>If you may act on thoughts of hurting yourself, or feel you are in immediate danger, use the <a href="{{ '/urgent-help/' | relative_url }}">urgent-help resources</a> now. Even without immediate danger, consider contacting a qualified mental-health professional promptly.</p></div>
        <div class="mm-sa-next-steps"><div><div class="mm-sa-eyebrow">Choose a next step</div><h3>Use this result as a starting point, not a diagnosis.</h3><p>You can continue with Mjuzi wellness tools or seek professional support when appropriate.</p></div><div class="mm-sa-actions"><button type="button" class="mm-sa-btn mm-sa-btn-secondary" id="sa-retake">Retake assessment</button><a class="mm-sa-btn mm-sa-btn-primary" href="{{ '/human-care/psychologists/' | relative_url }}">Find professional support</a></div></div>
      </section>
    </div>
  </div>
</section>


<script>
(function(){
const symptomOptions=[['Not at all',0],['Several days',1],['More than half the days',2],['Nearly every day',3]];
const questions=[
{id:'q1',text:'Little interest or pleasure in doing things',options:symptomOptions},
{id:'q2',text:'Feeling down, depressed, or hopeless',options:symptomOptions},
{id:'q3',text:'Trouble falling or staying asleep, or sleeping too much',options:symptomOptions},
{id:'q4',text:'Feeling tired or having little energy',options:symptomOptions},
{id:'q5',text:'Poor appetite or overeating',options:symptomOptions},
{id:'q6',text:'Feeling bad about yourself—or that you are a failure or have let yourself or your family down',options:symptomOptions},
{id:'q7',text:'Trouble concentrating on things, such as reading the newspaper or watching television',options:symptomOptions},
{id:'q8',text:'Moving or speaking so slowly that other people could have noticed? Or the opposite—being so fidgety or restless that you have been moving around a lot more than usual',options:symptomOptions},
{id:'q9',text:'Thoughts that you would be better off dead, or of hurting yourself in some way',options:symptomOptions},
{id:'impact',dimension:'Functional Difficulty',text:'If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?',options:[['Not difficult at all','Not difficult at all'],['Somewhat difficult','Somewhat difficult'],['Very difficult','Very difficult'],['Extremely difficult','Extremely difficult']]}
];
const bands=[
{max:4,status:'Minimal',description:'Minimal or no depression symptoms; no intervention required.',action:'No treatment required; monitor if needed'},
{max:9,status:'Mild',description:'Mild depressive symptoms; recommend education, lifestyle changes, and re-evaluation.',action:'Psychoeducation, lifestyle changes, follow-up'},
{max:14,status:'Moderate',description:'Moderate depression; consider counseling/psychotherapy and further assessment.',action:'Consider psychotherapy/counseling and monitoring'},
{max:19,status:'Moderately Severe',description:'Moderately severe depression; active treatment indicated (psychotherapy ± medication).',action:'Active treatment (psychotherapy ± pharmacotherapy)'},
{max:27,status:'Severe',description:'Severe depression; immediate clinical evaluation and comprehensive treatment required.',action:'Immediate clinical evaluation and active treatment'}
];
let current=0,answers={}; const $=id=>document.getElementById(id),intro=$('sa-intro'),quiz=$('sa-quiz'),results=$('sa-results');
function show(s){[intro,quiz,results].forEach(x=>x.hidden=x!==s);document.body.classList.toggle('mm-sa-quiz-active',s===quiz);window.scrollTo({top:Math.max(0,document.querySelector('.mm-sa').offsetTop-95),behavior:'smooth'});} 
function render(){const q=questions[current];$('sa-progress-text').textContent=`Question ${current+1} of ${questions.length}`;$('sa-progress-bar').style.width=`${((current+1)/questions.length)*100}%`;$('sa-dimension').textContent=q.dimension||'PHQ-9';$('sa-question').textContent=q.text;$('sa-back').disabled=current===0;const o=$('sa-options');o.innerHTML='';q.options.forEach(([label,value])=>{const sel=answers[q.id]===value;const el=document.createElement('label');el.className='mm-sa-option'+(sel?' is-selected':'');el.innerHTML=`<input type="radio" name="${q.id}" ${sel?'checked':''}><span class="mm-sa-radio"></span><span>${label}</span>`;el.onclick=()=>{answers[q.id]=value;render();};o.appendChild(el);});$('sa-next').disabled=answers[q.id]===undefined;$('sa-next').textContent=current===questions.length-1?'See my result':'Continue';}
function result(){const total=['q1','q2','q3','q4','q5','q6','q7','q8','q9'].reduce((s,k)=>s+(answers[k]||0),0);const b=bands.find(x=>total<=x.max);$('sa-total-score').textContent=total;$('sa-overall-status').textContent=b.status;$('sa-overall-description').textContent=b.description;$('sa-action').textContent=b.action;$('sa-impact').textContent=answers.impact;$('sa-safety-alert').hidden=!(answers.q9>0);show(results);}
function reset(){current=0;answers={};show(intro);} $('sa-start').onclick=()=>{render();show(quiz)};$('sa-back').onclick=()=>{if(current>0){current--;render()}};$('sa-next').onclick=()=>{if(answers[questions[current].id]===undefined)return;if(current<questions.length-1){current++;render()}else result()};$('sa-reset-top').onclick=reset;$('sa-retake').onclick=()=>{current=0;answers={};render();show(quiz)};
})();
</script>

<section class="mm-section mm-section--tight mm-assessment-back-section"><div class="mm-container"><div class="mm-actions"><a class="mm-text-link" href="{{ '/understand-yourself/wellness-assessment/' | relative_url }}">← Back to Wellness Assessment</a></div></div></section>
