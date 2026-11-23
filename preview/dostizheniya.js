(function(){
var DONE=['Отправлено','На проверке','Требуется доработка','Принято'];
function st(n){try{return localStorage.getItem('dfk_st'+n)||''}catch(e){return ''}}
function ok(n){return DONE.indexOf(st(n))>=0}
var I={star:'<path d="M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6L12 16.8 6.7 19.6l1.1-6L3.4 9.4l6-.8z"/>',book:'<path d="M5 4h10a4 4 0 014 4v12H9a4 4 0 01-4-4zM9 8h6"/>',slides:'<rect x="3" y="5" width="18" height="12" rx="3"/><path d="M8 21h8M12 17v4"/>',doc:'<path d="M7 3h7l4 4v14H7zM14 3v4h4M10 12h5M10 16h5"/>',flag:'<path d="M6 21V4M6 5h11l-2 4 2 4H6"/>',check:'<path d="M5 12l5 5 9-10"/>'};
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
