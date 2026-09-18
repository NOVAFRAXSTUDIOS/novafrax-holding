const nav=document.querySelector('.nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>35),{passive:true});

const reveals=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}
  }),{threshold:.12});
  reveals.forEach(element=>observer.observe(element));
}else reveals.forEach(element=>element.classList.add('visible'));

const button=document.querySelector('.menu');
const links=document.querySelector('.links');
function setMenu(open){
  button.setAttribute('aria-expanded',String(open));
  button.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  button.textContent=open?'×':'☰';
  links.classList.toggle('open',open);
  document.body.style.overflow=open?'hidden':'';
}
button.addEventListener('click',()=>setMenu(button.getAttribute('aria-expanded')!=='true'));
links.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
addEventListener('keydown',event=>{if(event.key==='Escape')setMenu(false)});
addEventListener('resize',()=>{if(innerWidth>960)setMenu(false)},{passive:true});
