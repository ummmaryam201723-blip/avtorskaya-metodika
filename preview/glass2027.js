(function(){
var ic={home:'<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',next:'<path d="M5 12h14M13 6l6 6-6 6"/>',proj:'<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8M12 8v8"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 115 .5c0 1.6-2.5 2-2.5 3.5M12 17h0"/>',up:'<path d="M6 14l6-6 6 6"/>',back:'<path d="M19 12H5M11 6l-6 6 6 6"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>'};
function b(c,i,t,h,id){return '<a class="gb '+c+'" '+(id?'id="'+id+'" ':'')+'href="'+h+'">'+'<svg viewBox="0 0 24 24">'+ic[i]+'</svg><span>'+t+'</span></a>'}
var idx=/index\.html$|\/$/.test(location.pathname)||!/kimi|konstr/.test(location.pathname);
var d=document.createElement('nav');d.className='gdock';d.setAttribute('aria-label','Быстрая навигация');
d.innerHTML=idx?b('e','home','Главная','#home')+b('o','next','Мой шаг','#z1','gnext')+b('b','proj','Проект','konstruktor.html')+b('e','help','Помощь','#help')+'<a class="gb b" href="#" id="gup" aria-label="Наверх"><svg viewBox="0 0 24 24">'+ic.up+'</svg></a>'
 :b('o','back','К программе','index.html#home')+b('e','proj','Проект','konstruktor.html')+'<a class="gb b" href="#" id="gup" aria-label="Наверх"><svg viewBox="0 0 24 24">'+ic.up+'</svg></a>';
document.body.appendChild(d);
document.getElementById('gup').onclick=function(e){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})};
var s=document.getElementById('hgo'),g=document.getElementById('gnext');if(g&&s)g.onclick=function(e){e.preventDefault();s.click()};
var arrow='<svg class="ar" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
document.querySelectorAll('a,button,b,span').forEach(function(el){if(el.children.length==0&&/\s→\s*$/.test(el.textContent)){el.innerHTML=el.textContent.replace(/\s→\s*$/,'')+arrow}});
})();
