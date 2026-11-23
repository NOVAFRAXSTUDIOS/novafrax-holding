(()=>{const b=document.querySelector('.hdr-burger'),m=document.getElementById('menu');if(!b||!m)return;
const set=o=>{b.setAttribute('aria-expanded',String(o));b.setAttribute('aria-label',o?'Close navigation':'Open navigation');m.classList.toggle('open',o);document.body.style.overflow=o?'hidden':''};
b.addEventListener('click',()=>set(b.getAttribute('aria-expanded')!=='true'));
m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>set(false)));
addEventListener('keydown',e=>{if(e.key==='Escape')set(false)});
addEventListener('resize',()=>{if(innerWidth>760)set(false)},{passive:true});})();
