---
layout: mm-default
title: Sleep Wellbeing Assessment
description: Take a focused 10-question sleep wellbeing self-assessment covering sleep routine, pre-sleep habits, sleep quality and restoration.
permalink: /understand-yourself/wellness-assessment/sleep/
body_class: mm-assessment-page mm-sleep-assessment-page
---

<section class="mm-page-hero">
  <div class="mm-container">
    <span class="mm-eyebrow">Understand Yourself · Wellness Assessment</span>
    <h1>Sleep Wellbeing Assessment</h1>
    <p><strong>Reflect on your sleep routine, pre-sleep habits and how restorative your sleep currently feels.</strong></p>
  </div>
</section>

<section class="mm-section mm-section--tight">
  <div class="mm-container">
<div id="sleep-assessment" class="mm-sa" aria-live="polite">
  <section class="mm-sa-shell" id="sa-intro">
    <div class="mm-sa-eyebrow">Wellness Assessment · Sleep</div>
    <div class="mm-sa-intro-grid">
      <div>
        <h2>Take a short check-in on your sleep wellbeing.</h2>
        <p class="mm-sa-lead">This 10-question reflection looks at three areas: your sleep routine and environment, your pre-sleep habits, and how restorative your sleep feels.</p>
        <div class="mm-sa-facts"><span>10 questions</span><span>About 2 minutes</span><span>No login required</span></div>
      </div>
      <div class="mm-sa-mini-card">
        <strong>Your responses stay in this page.</strong>
        <p>This version does not send or store your answers. The result is calculated in your browser.</p>
      </div>
    </div>
    <div class="mm-sa-note"><strong>This is a wellness reflection, not a diagnosis.</strong> It is designed to help you notice patterns and consider next steps. Persistent sleep difficulty, severe daytime sleepiness or other health concerns may warrant professional evaluation.</div>
    <button type="button" class="mm-sa-btn mm-sa-btn-primary" id="sa-start">Start Sleep Assessment</button>
  </section>

  <section class="mm-sa-shell" id="sa-quiz" hidden>
    <div class="mm-sa-quiz-head">
      <div>
        <div class="mm-sa-eyebrow">Sleep Wellbeing Check</div>
        <div id="sa-progress-text" class="mm-sa-progress-label">Question 1 of 10</div>
      </div>
      <button type="button" class="mm-sa-reset-link" id="sa-reset-top">Start over</button>
    </div>
    <div class="mm-sa-progress" aria-hidden="true"><div id="sa-progress-bar"></div></div>
    <div class="mm-sa-question-card">
      <div class="mm-sa-dimension" id="sa-dimension"></div>
      <h2 id="sa-question"></h2>
      <div id="sa-options" class="mm-sa-options" role="radiogroup" aria-labelledby="sa-question"></div>
    </div>
    <div class="mm-sa-nav">
      <button type="button" class="mm-sa-btn mm-sa-btn-secondary" id="sa-back">Back</button>
      <button type="button" class="mm-sa-btn mm-sa-btn-primary" id="sa-next" disabled>Continue</button>
    </div>
  </section>

  <section class="mm-sa-shell" id="sa-results" hidden>
    <div class="mm-sa-eyebrow">Your Sleep Hygiene Result</div>
    <div class="mm-sa-result-hero">
      <div class="mm-sa-score-ring" id="sa-score-ring"><span id="sa-total-score">0</span><small>/ 20</small></div>
      <div>
        <h2 id="sa-overall-status"></h2>
        <p id="sa-overall-description" class="mm-sa-lead"></p>
      </div>
    </div>

    <h3 class="mm-sa-section-title">Parameter results</h3>
    <div class="mm-sa-results-grid" id="sa-dimension-results"></div>

    <div class="mm-sa-next-steps">
      <div>
        <div class="mm-sa-eyebrow">Choose a next step</div>
        <h3>Use the result as a starting point, not an endpoint.</h3>
        <p>You can explore practical wellness support in Mjuzi, repeat the check later to reflect on change, or speak with a psychologist when you want human support.</p>
      </div>
      <div class="mm-sa-actions">
        <a class="mm-sa-btn mm-sa-btn-primary" href="{{ '/ai-wellness/' | relative_url }}">Meet Mjuzi</a>
        <button type="button" class="mm-sa-btn mm-sa-btn-secondary" id="sa-retake">Retake assessment</button>
        <a class="mm-sa-btn mm-sa-btn-secondary" href="{{ '/human-care/psychologists/' | relative_url }}">Talk to a Psychologist</a>
      </div>
    </div>

    <div class="mm-sa-note mm-sa-note-bottom">A wellness check is not a diagnosis and does not replace psychological or medical evaluation. If you are in immediate danger or need urgent mental-health support, use the <a href="{{ '/urgent-help/' | relative_url }}">urgent-help resources</a>.</div>
  </section>
</div>


<script>
(function(){
  // The scoring and result labels below follow the workbook's
  // "Formulas & Interpretation" tab.
  // For negatively worded items, the UI stores the raw ordinal response
  // Never=0, Sometimes=1, Often=2 and the result applies (2 - Q), exactly
  // as specified by the workbook formula tab.
  const questions = [
    {id:'q1', dimension:'P1: Sleep Routine & Environment', text:'Do you maintain a consistent sleep schedule (going to bed and waking up at similar times daily)?', options:[['Always / Usually',2],['Sometimes',1],['Rarely',0]]},
    {id:'q2', dimension:'P2: Lifestyle & Pre-Sleep Habits', text:'Do you consume caffeine, heavy meals, or alcohol close to bedtime?', options:[['Never',0],['Sometimes',1],['Often',2]]},
    {id:'q3', dimension:'P2: Lifestyle & Pre-Sleep Habits', text:'Do you engage in screen time or stimulating activities right before sleeping?', options:[['Never',0],['Sometimes',1],['Often',2]]},
    {id:'q4', dimension:'P3: Sleep Quality & Restoration', text:'How often do you feel rested and refreshed upon waking?', options:[['Always / Usually',2],['Sometimes',1],['Rarely',0]]},
    {id:'q5', dimension:'P3: Sleep Quality & Restoration', text:'How often do you experience difficulty falling or staying asleep?', options:[['Never',0],['Sometimes',1],['Often',2]]},
    {id:'q6', dimension:'P3: Sleep Quality & Restoration', text:'Do you experience daytime sleepiness or fatigue that affects your routine?', options:[['Never',0],['Sometimes',1],['Often',2]]},
    {id:'q7', dimension:'P1: Sleep Routine & Environment', text:'Is your sleep environment quiet, dark, and comfortable for sleep?', options:[['Always / Usually',2],['Sometimes',1],['Rarely',0]]},
    {id:'q8', dimension:'P2: Lifestyle & Pre-Sleep Habits', text:'Do you use your bed for work, studying, or non-sleep activities?', options:[['Never',0],['Sometimes',1],['Often',2]]},
    {id:'q9', dimension:'P2: Lifestyle & Pre-Sleep Habits', text:'Do you engage in relaxing pre-bedtime routines (e.g., reading, light stretching, calming music)?', options:[['Always / Usually',2],['Sometimes',1],['Rarely',0]]},
    {id:'q10', dimension:'P3: Sleep Quality & Restoration', text:'Do thoughts, stress, or worry disrupt your ability to sleep well?', options:[['Never',0],['Sometimes',1],['Often',2]]}
  ];

  const dimensions = [
    {
      name:'Sleep Routine & Environment', max:4,
      score:a => a.q1 + a.q7,
      bands:[
        {test:s=>s===4,status:'Good routine/environment',description:'Optimal sleep environment and consistent schedule.'},
        {test:s=>s>=2,status:'Needs improvement',description:'Moderate inconsistencies in routine or environmental factors.'},
        {test:s=>s>=0,status:'Poor',description:'Significant irregularities in schedule or environment.'}
      ]
    },
    {
      name:'Lifestyle & Pre-Sleep Habits', max:8,
      score:a => (2-a.q2) + (2-a.q3) + (2-a.q8) + a.q9,
      bands:[
        {test:s=>s>=7,status:'Good habits',description:'Supportive pre-sleep practices and minimal disruptive habits.'},
        {test:s=>s>=4,status:'Needs improvement',description:'Some habits (screens, caffeine, bed use) interfering with sleep preparation.'},
        {test:s=>s>=0,status:'Poor',description:'Multiple lifestyle factors interfering with sleep readiness.'}
      ]
    },
    {
      name:'Sleep Quality & Restoration', max:8,
      score:a => a.q4 + (2-a.q5) + (2-a.q6) + (2-a.q10),
      bands:[
        {test:s=>s>=7,status:'Good sleep quality',description:'Restorative sleep with minimal nighttime or daytime disturbance.'},
        {test:s=>s>=4,status:'Some concerns',description:'Occasional sleep disruption, non-restorative sleep, or daytime fatigue.'},
        {test:s=>s>=0,status:'Significant concerns',description:'Persistent sleep disruption/fatigue. Note: Non-diagnostic indicator.'}
      ]
    }
  ];

  const overallBands = [
    {test:s=>s>=16,status:'Healthy sleep hygiene',description:'Generally supportive sleep habits and adequate restoration.'},
    {test:s=>s>=10,status:'Needs attention',description:'Some habits or sleep-related difficulties may be affecting wellbeing.'},
    {test:s=>s>=0,status:'Poor sleep hygiene',description:'Multiple areas may be interfering with sleep and daytime functioning.'}
  ];

  let current=0;
  let answers={};
  const $=id=>document.getElementById(id);
  const intro=$('sa-intro'), quiz=$('sa-quiz'), results=$('sa-results');
  function getBand(score,bands){ return bands.find(b=>b.test(score)); }
  function show(section){
    [intro,quiz,results].forEach(s=>s.hidden=s!==section);
    document.body.classList.toggle('mm-sa-quiz-active',section===quiz);
    const root=document.querySelector('.mm-sa');
    if(root) window.scrollTo({top:Math.max(0,root.offsetTop-95),behavior:'smooth'});
  }
  function renderQuestion(){
    const q=questions[current];
    $('sa-progress-text').textContent=`Question ${current+1} of ${questions.length}`;
    $('sa-progress-bar').style.width=`${((current+1)/questions.length)*100}%`;
    $('sa-dimension').textContent=q.dimension;
    $('sa-question').textContent=q.text;
    $('sa-back').disabled=current===0;
    const options=$('sa-options');
    options.innerHTML='';
    q.options.forEach(([label,value])=>{
      const selected=answers[q.id]===value;
      const option=document.createElement('label');
      option.className='mm-sa-option'+(selected?' is-selected':'');
      option.innerHTML=`<input type="radio" name="${q.id}" value="${value}" ${selected?'checked':''}><span class="mm-sa-radio" aria-hidden="true"></span><span class="mm-sa-option-label">${label}</span>`;
      option.addEventListener('click',()=>{answers[q.id]=value;renderQuestion();});
      options.appendChild(option);
    });
    $('sa-next').disabled=answers[q.id]===undefined;
    $('sa-next').textContent=current===questions.length-1?'See my result':'Continue';
  }
  function renderResults(){
    const computed=dimensions.map(d=>({def:d,score:d.score(answers)}));
    const total=computed.reduce((sum,x)=>sum+x.score,0);
    const overall=getBand(total,overallBands);
    $('sa-total-score').textContent=total;
    $('sa-overall-status').textContent=overall.status;
    $('sa-overall-description').textContent=overall.description;
    $('sa-score-ring').style.borderColor=total>=16?'#e4bad0':total>=10?'#efd3df':'#eadde4';

    const grid=$('sa-dimension-results');
    grid.innerHTML='';
    computed.forEach(({def,score})=>{
      const band=getBand(score,def.bands);
      const pct=Math.round((score/def.max)*100);
      const card=document.createElement('article');
      card.className='mm-sa-dim-card';
      card.innerHTML=`<h4>${def.name}</h4><div class="mm-sa-dim-score"><strong>${score}</strong><span>/ ${def.max}</span></div><div class="mm-sa-meter"><div style="width:${pct}%"></div></div><div class="mm-sa-status">${band.status}</div><p>${band.description}</p>`;
      grid.appendChild(card);
    });
    show(results);
  }
  function reset(){answers={};current=0;show(intro);}
  $('sa-start').addEventListener('click',()=>{current=0;renderQuestion();show(quiz);});
  $('sa-back').addEventListener('click',()=>{if(current>0){current--;renderQuestion();}});
  $('sa-next').addEventListener('click',()=>{if(answers[questions[current].id]===undefined)return;if(current<questions.length-1){current++;renderQuestion();}else{renderResults();}});
  $('sa-reset-top').addEventListener('click',reset);
  $('sa-retake').addEventListener('click',()=>{answers={};current=0;renderQuestion();show(quiz);});
})();
</script>

  </div>
</section>

<section class="mm-section mm-section--tight mm-assessment-back-section">
  <div class="mm-container">
    <div class="mm-actions">
      <a class="mm-text-link" href="{{ '/understand-yourself/wellness-assessment/' | relative_url }}">← Back to Wellness Assessment</a>
    </div>
  </div>
</section>
