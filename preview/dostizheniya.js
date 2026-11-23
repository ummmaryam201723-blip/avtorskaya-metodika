(function(){
var DONE=['Отправлено','На проверке','Требуется доработка','Принято'];
function st(n){try{return localStorage.getItem('dfk_st'+n)||''}catch(e){return ''}}
function ok(n){return DONE.indexOf(st(n))>=0}
var I={star:'<path d="M12 4l2 4 4 .6-3 3 .8 4.4L12 14l-3.8 2 .8-4.4-3-3 4-.6z"/>',book:'<path d="M4 6c3-1.5 5-1.5 8 0 3-1.5 5-1.5 8 0v12c-3-1.5-5-1.5-8 0-3-1.5-5-1.5-8 0zM12 6v12"/>',slides:'<path d="M12 3l8 5v8l-8 5-8-5V8zM12 8v8M8.5 10l7 4"/>',doc:'<path d="M7 4h8l3 3v13H7zM10 10h5M10 14h5M10 17h3"/><path d="M15 4v3h3"/>',flag:'<path d="M12 3l2.4 4.3 4.8.9-3.4 3.5.6 4.9L12 14.2 7.6 16.6l.6-4.9L4.8 8.2l4.8-.9zM9 20h6"/>',check:'<path d="M5 12l5 5 9-10"/>'};
var M=[
['Программа курса готова',4,'book',''],
['Вводный урок готов',5,'star',''],
['Первый содержательный урок готов',6,'star',''],
['Продолжающийся урок готов',7,'star',''],
['Завершающий урок готов',8,'star',''],
['Презентация вводного урока сдана',14,'slides','pr'],
['Презентация первого урока сдана',15,'slides','pr'],
['Презентация продолжающегося урока сдана',16,'slides','pr'],
['Презентация завершающего урока сдана',17,'slides','pr'],
['Пояснительная записка и защитная презентация сданы',19,'doc','pr'],
['Итоговая защита',20,'flag','']];
var home=document.getElementById('page-home'),step=home&&home.querySelector('.step');if(!step)return;
var box=document.createElement('section');box.className='ach';box.id='ach';
step.parentNode.insertBefore(box,step.nextSibling);
function draw(){var n=0,dots='';for(var i=1;i<=20;i++){var o=ok(i);if(o)n++;dots+='<i class="'+(o?'on':'')+'" title="Урок '+i+'">'+(o?'<svg viewBox="0 0 24 24">'+I.check+'</svg>':i)+'</i>'}
var g='';M.forEach(function(m){var o=ok(m[1]);g+='<div class="achb '+m[3]+(o?' on':'')+'"><span class="ic"><svg viewBox="0 0 24 24">'+I[m[2]]+'</svg></span><div><b>'+m[0]+'</b><small>'+(o?'Готово':'Урок '+('0'+m[1]).slice(-2))+'</small></div></div>'});
var all=M.filter(function(m){return ok(m[1])}).length;
box.innerHTML='<h2>Мои достижения</h2><p class="sub">Домашних заданий выполнено: <b>'+n+' из 20</b>. Отметки появляются, когда вы ставите статус «Отправлено» у урока.</p><div class="achn">'+dots+'</div><div class="achg">'+g+'</div>'+(n==20?'<div class="achc"><span>Все задания выполнены. Сертификат о прохождении выдаёт куратор после защиты.</span></div>':'')}
draw();document.addEventListener('change',function(e){if(e.target.classList&&e.target.classList.contains('sts'))setTimeout(draw,0)});
})();
