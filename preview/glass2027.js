(function(){
if(/[?&]v=b/.test(location.search))document.documentElement.classList.add('vb');
var NI={'⌂':'<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>','▤':'<path d="M5 4h14v16H5zM9 9h6M9 13h6"/>','▦':'<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8M12 8v8"/>','▣':'<path d="M4 6h16M4 12h16M4 18h10"/>','✓':'<path d="M5 12l5 5 9-10"/>','☷':'<rect x="5" y="3" width="14" height="18" rx="3"/><path d="M9 8h6M9 12h6"/>','✧':'<path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z"/>','?':'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 115 .5c0 1.6-2.5 2-2.5 3.5"/>'};
document.querySelectorAll('.sidebar .nav').forEach(function(a){var t=a.textContent.trim(),g=t.charAt(0);if(NI[g]){a.innerHTML='<span class="ni"><svg viewBox="0 0 24 24">'+NI[g]+'</svg></span><span>'+t.slice(1).trim()+'</span>'}});
var sg=document.getElementById('sgo');if(sg)sg.innerHTML='Мой следующий шаг <svg class="arw" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

var ic={home:'<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',next:'<path d="M5 12h14M13 6l6 6-6 6"/>',proj:'<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8M12 8v8"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 115 .5c0 1.6-2.5 2-2.5 3.5M12 17h0"/>',up:'<path d="M6 14l6-6 6 6"/>',back:'<path d="M19 12H5M11 6l-6 6 6 6"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>'};
function b(c,i,t,h,id){return '<a class="gb '+c+'" '+(id?'id="'+id+'" ':'')+'aria-label="'+t+'" href="'+h+'">'+'<svg viewBox="0 0 24 24">'+ic[i]+'</svg><span>'+t+'</span></a>'}
var idx=/index\.html$|\/$/.test(location.pathname)||!/kimi|konstr/.test(location.pathname);
var d=document.createElement('nav');d.className='gdock';d.setAttribute('aria-label','Быстрая навигация');
d.innerHTML=idx?b('e','home','Главная','#home')+b('o','next','Мой шаг','#z1','gnext')+b('b','proj','Проект','konstruktor.html')+b('e','help','Помощь','#help')+'<a class="gb b" href="#" id="gup" aria-label="Наверх"><svg viewBox="0 0 24 24">'+ic.up+'</svg></a>'
 :b('o','back','К программе','index.html#home')+b('e','proj','Проект','konstruktor.html')+'<a class="gb b" href="#" id="gup" aria-label="Наверх"><svg viewBox="0 0 24 24">'+ic.up+'</svg></a>';
document.body.appendChild(d);
document.getElementById('gup').onclick=function(e){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})};
var s=document.getElementById('hgo'),g=document.getElementById('gnext');if(g&&s)g.onclick=function(e){e.preventDefault();s.click()};
var P={'→':['A','<path d="M5 12h14M13 6l6 6-6 6"/>'],'←':['A','<path d="M19 12H5M11 6l-6 6 6 6"/>'],'›':['A','<path d="M9 6l6 6-6 6"/>'],'‹':['A','<path d="M15 6l-6 6 6 6"/>'],'↗':['A','<path d="M7 17L17 7M9 7h8v8"/>'],'☰':['A','<path d="M4 7h16M4 12h16M4 17h16"/>'],'✕':['A','<path d="M6 6l12 12M18 6L6 18"/>'],
'▶':['G o','<path d="M8 5l11 7-11 7z" style="fill:currentColor"/>'],'✓':['G o','<path d="M5 12l5 5 9-10"/>'],'✅':['G o','<path d="M5 12l5 5 9-10"/>'],'🔒':['G','<rect x="5" y="11" width="14" height="9" rx="3"/><path d="M8 11V8a4 4 0 018 0v3"/>'],'❗':['G','<path d="M12 5v9M12 19h0"/>'],'🔁':['G b','<path d="M4 11a7 7 0 0112-4l3 3M20 13a7 7 0 01-12 4l-3-3M19 5v5h-5M5 19v-5h5"/>'],'📊':['G b','<path d="M6 20V11M12 20V5M18 20v-7"/>']};
var RX=/[→←›‹↗☰✕▶✓✅🔒❗🔁📊]/gu;
function sw(root){var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(n){var p=n.parentNode;if(!p||/^(SCRIPT|STYLE|TEXTAREA|OPTION|SELECT|TITLE|svg|path)$/i.test(p.nodeName)||p.closest('.gic,.ar2'))return NodeFilter.FILTER_REJECT;RX.lastIndex=0;var ok=RX.test(n.nodeValue);RX.lastIndex=0;return ok?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),L=[],n;while(n=w.nextNode())L.push(n);
L.forEach(function(n){var f=document.createDocumentFragment(),t=n.nodeValue,last=0,m;RX.lastIndex=0;while(m=RX.exec(t)){f.appendChild(document.createTextNode(t.slice(last,m.index)));var d=P[m[0]],e=document.createElement('span');e.className=d[0]=='A'?'ar2w':'gic '+d[0].slice(2);e.setAttribute('aria-hidden','true');e.innerHTML='<svg class="'+(d[0]=='A'?'ar2':'')+'" viewBox="0 0 24 24">'+d[1]+'</svg>';if(d[0]=='A'){e.style.display='contents';f.appendChild(e)}else f.appendChild(e);last=m.index+m[0].length}
f.appendChild(document.createTextNode(t.slice(last)));n.parentNode.replaceChild(f,n)})}
sw(document.body);setTimeout(function(){sw(document.body)},700);
var arrow='<svg class="arw" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
document.querySelectorAll('a,button,b,span').forEach(function(el){if(el.children.length==0&&/\s→\s*$/.test(el.textContent)){el.innerHTML=el.textContent.replace(/\s→\s*$/,'')+arrow}});
})();
