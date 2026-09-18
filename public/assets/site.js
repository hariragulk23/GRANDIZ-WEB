(() => {
  const root = document.documentElement;
  const reducedQuery = matchMedia('(prefers-reduced-motion: reduce)');
  const desktopQuery = matchMedia('(min-width: 901px) and (min-height: 690px)');
  let storedMotion = null;
  try { storedMotion = localStorage.getItem('grandiz-motion'); } catch {}
  let reduced = reducedQuery.matches || storedMotion === 'reduced';
  let revealObserver;
  const motionButton = document.querySelector('.motion-toggle');
  const journey = document.querySelector('.journey');
  const stages = [...document.querySelectorAll('.journey-stage')];
  const photos = [...document.querySelectorAll('.journey-photo')];
  const dots = [...document.querySelectorAll('.journey-dots i')];
  const video = document.querySelector('#craft-video');
  const film = document.querySelector('.craft-film');
  const filmButton = document.querySelector('.film-toggle');
  let manualPause = false;
  let videoInView = false;
  const saveData = navigator.connection?.saveData === true;

  function applyMotion() {
    root.classList.toggle('reduced-motion', reduced);
    root.classList.toggle('motion-ready', !reduced && desktopQuery.matches);
    if (motionButton) { motionButton.textContent = reduced ? 'Enable motion' : 'Reduce motion'; motionButton.setAttribute('aria-pressed', String(reduced)); }
    revealObserver?.disconnect();
    document.querySelectorAll('[data-reveal]').forEach(el => el.classList.remove('will-reveal'));
    if (!reduced && 'IntersectionObserver' in window) {
      revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
      }), {threshold: .08, rootMargin: '0px 0px -25px 0px'});
      document.querySelectorAll('[data-reveal]').forEach(el => { el.classList.add('will-reveal'); revealObserver.observe(el); });
    }
    if (reduced) video?.pause();
    updateScroll();
  }
  motionButton?.addEventListener('click', () => {
    reduced = !reduced;
    storedMotion = reduced ? 'reduced' : 'full';
    try { localStorage.setItem('grandiz-motion', storedMotion); } catch {}
    applyMotion();
    if (!reduced && videoInView && !manualPause && !saveData) playVideo();
  });
  reducedQuery.addEventListener('change', () => { reduced = reducedQuery.matches || storedMotion === 'reduced'; applyMotion(); });
  desktopQuery.addEventListener('change', applyMotion);

  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  function setMenu(open) {
    if (!menu || !menuButton) return;
    menu.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.querySelector('span').textContent = open ? 'Close' : 'Menu';
    document.body.classList.toggle('menu-open', open);
  }
  menuButton?.addEventListener('click', () => setMenu(menu.hidden));
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (!menu || menu.hidden) return;
    if (event.key === 'Escape') { setMenu(false); menuButton.focus(); }
    if (event.key === 'Tab') {
      const focusables = [menuButton, ...menu.querySelectorAll('a')];
      const first = focusables[0], last = focusables.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  matchMedia('(min-width: 901px)').addEventListener('change', event => { if(event.matches) setMenu(false); });

  const progressBar = document.querySelector('.reading-progress');
  const heroImage = document.querySelector('.hero-image');
  let ticking = false;
  function updateScroll() {
    const range = root.scrollHeight - innerHeight;
    if(progressBar) progressBar.style.transform = `scaleX(${range > 0 ? Math.min(1, scrollY / range) : 0})`;
    if(heroImage) heroImage.style.transform = reduced ? '' : `translateY(${Math.min(scrollY * .13, 120)}px) scale(1.04)`;
    if(journey) {
      const enhanced = !reduced && desktopQuery.matches;
      const rect = journey.getBoundingClientRect();
      const progress = enhanced ? Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height-innerHeight))) : 0;
      const stage = Math.min(2, Math.floor(progress * 3));
      stages.forEach((el,i) => { el.classList.toggle('is-active',i===stage); if(enhanced) el.setAttribute('aria-hidden',String(i!==stage)); else el.removeAttribute('aria-hidden'); });
      photos.forEach((el,i) => el.classList.toggle('is-active',i===stage));
      dots.forEach((el,i) => el.classList.toggle('is-active',i===stage));
      const number = document.querySelector('.journey-large-number');
      if(number) number.textContent = `0${stage+1}`;
      const line = document.querySelector('.route-line i');
      if(line) line.style.transform = `scaleX(${enhanced ? Math.max(.05,progress) : 1})`;
    }
    ticking = false;
  }
  function requestScrollUpdate() { if(!ticking) { ticking=true; requestAnimationFrame(updateScroll); } }
  addEventListener('scroll', requestScrollUpdate, {passive:true});
  addEventListener('resize', requestScrollUpdate, {passive:true});
  document.fonts?.ready.then(requestScrollUpdate);

  async function playVideo() {
    if(!video) return;
    if(!video.src) video.src=video.dataset.src;
    video.muted=true;
    try { await video.play(); } catch { if(filmButton) filmButton.textContent='Play film ▷'; }
  }
  if(video) {
    video.addEventListener('playing',()=>{film.classList.add('is-playing');filmButton.textContent='Pause film Ⅱ';filmButton.setAttribute('aria-pressed','true');});
    video.addEventListener('pause',()=>{filmButton.textContent='Play film ▷';filmButton.setAttribute('aria-pressed','false');});
    video.addEventListener('error',()=>{film.classList.remove('is-playing');filmButton.textContent='Film unavailable';filmButton.disabled=true;});
    filmButton?.addEventListener('click',()=>{
      if(video.paused){manualPause=false;playVideo();}else{manualPause=true;video.pause();}
    });
    if('IntersectionObserver' in window){
      new IntersectionObserver(entries=>entries.forEach(entry=>{
        videoInView=entry.isIntersecting;
        if(videoInView&&!reduced&&!saveData&&!manualPause&&!document.hidden) playVideo();
        else video.pause();
      }),{threshold:.25}).observe(film);
    }
    document.addEventListener('visibilitychange',()=>{if(document.hidden) video.pause();else if(videoInView&&!reduced&&!saveData&&!manualPause) playVideo();});
  }

  const form=document.querySelector('#enquiry-form');
  if(form) {
    const params=new URLSearchParams(location.search);
    const type=params.get('type');
    if(type==='business'||type==='personal') form.querySelector(`input[name="customer-type"][value="${type}"]`).checked=true;
    const product=params.get('product');
    const select=form.querySelector('select[name="product"]');
    if(product&&[...select.options].some(o=>o.value===product)) select.value=product;
    form.addEventListener('submit',async event=>{
      event.preventDefault();
      const status=form.querySelector('.form-status');
      status.classList.remove('error');
      if(!form.reportValidity()) return;
      if(['localhost','127.0.0.1',''].includes(location.hostname)) {
        status.classList.add('error');status.textContent='This preview cannot send enquiries yet. Please use the form once the website is live.';return;
      }
      const submit=form.querySelector('button[type="submit"]');
      submit.disabled=true;status.textContent='Sending your enquiry…';
      try {
        const response=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(form)).toString()});
        if(!response.ok) throw new Error('Submission failed');
        location.assign('/thank-you/');
      } catch {
        status.classList.add('error');status.textContent='Your enquiry could not be sent. Your details are still here; please try again.';
        submit.disabled=false;
      }
    });
  }
  applyMotion();
})();
