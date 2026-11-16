// Everything that touches the DOM directly after a page is on screen: the reveal engine,
// scroll planes, the loose paper sheets and the "seen" entry moments.
// startPage() is called after each page change and returns a function that undoes it.

const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function planes() {
  const items = [...document.querySelectorAll("[data-plane]")].map((el) => ({ el, rate: parseFloat(el.dataset.plane) || 0 }));
  if (!items.length) return () => {};
  let ticking = false;
  const paint = () => {
    ticking = false;
    const y = Math.min(window.scrollY, window.innerHeight * 1.2);
    for (const it of items) it.el.style.transform = reduce() ? "" : `translate3d(0,${(y * it.rate).toFixed(1)}px,0)`;
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(paint); } };
  window.addEventListener("scroll", onScroll, { passive: true });
  paint();
  return () => window.removeEventListener("scroll", onScroll);
}

/** Each sheet leans toward the pointer on its own. The stacking order never changes. */
function looseSheets(box) {
  if (!fine() || reduce()) return () => {};
  const items = [...box.children].map((el) => ({ el, x: 0, y: 0, s: 1, rx: 0, ry: 0, tx: 0, ty: 0, ts: 1, trx: 0, tryy: 0 }));
  let px = 0, py = 0, inside = false, raf = 0, alive = true;
  const aim = () => {
    const r = box.getBoundingClientRect();
    for (const it of items) {
      const cx = r.left + it.el.offsetLeft + it.el.offsetWidth / 2, cy = r.top + it.el.offsetTop + it.el.offsetHeight / 2;
      const dx = px - cx, dy = py - cy, R = it.el.offsetWidth * 0.95;
      let w = inside ? Math.max(0, 1 - Math.hypot(dx, dy) / R) : 0;
      w = w * w * (3 - 2 * w);
      it.tx = dx * 0.07 * w; it.ty = dy * 0.07 * w - 12 * w; it.ts = 1 + 0.045 * w;
      it.tryy = (dx / R) * 7 * w; it.trx = -(dy / R) * 7 * w;
    }
  };
  const tick = () => {
    let moving = false;
    for (const it of items) {
      it.x += (it.tx - it.x) * 0.14; it.y += (it.ty - it.y) * 0.14; it.s += (it.ts - it.s) * 0.14;
      it.rx += (it.trx - it.rx) * 0.14; it.ry += (it.tryy - it.ry) * 0.14;
      if (Math.abs(it.tx - it.x) + Math.abs(it.ty - it.y) + Math.abs(it.trx - it.rx) + Math.abs(it.tryy - it.ry) > 0.02) moving = true;
      it.el.style.transform = `perspective(900px) translate3d(${it.x.toFixed(2)}px,${it.y.toFixed(2)}px,0) rotateX(${it.rx.toFixed(2)}deg) rotateY(${it.ry.toFixed(2)}deg) scale(${it.s.toFixed(4)})`;
    }
    raf = moving && alive ? requestAnimationFrame(tick) : 0;
  };
  const kick = () => { aim(); if (!raf) raf = requestAnimationFrame(tick); };
  const move = (e) => { px = e.clientX; py = e.clientY; inside = true; kick(); };
  const leave = () => { inside = false; kick(); };
  box.addEventListener("pointermove", move);
  box.addEventListener("pointerleave", leave);
  return () => { alive = false; box.removeEventListener("pointermove", move); box.removeEventListener("pointerleave", leave); };
}

function seen() {
  const els = [...document.querySelectorAll("[data-seen]")];
  if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-in")); return () => {}; }
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
  }, { threshold: 0.35 });
  els.forEach((e) => io.observe(e));
  return () => io.disconnect();
}

export function startPage() {
  const undo = [];
  if (window.ScrollCraft) { const inst = window.ScrollCraft.mount(document.body); undo.push(() => inst.destroy()); }
  undo.push(planes(), seen());
  document.querySelectorAll("[data-loose]").forEach((box) => undo.push(looseSheets(box)));
  return () => undo.forEach((f) => { try { f(); } catch (e) { /* element already gone */ } });
}

/** Fade out the words that are about to change, top to bottom. Returns a function that fades them back in. */
export function fadeWords(willChange) {
  if (reduce()) return { wait: 0, back: () => {} };
  const vh = window.innerHeight, jobs = [];
  const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const seenEls = new Set();
  for (let n = walk.nextNode(); n; n = walk.nextNode()) {
    const text = n.nodeValue.trim(), el = n.parentElement;
    if (!text || !el || seenEls.has(el) || el.closest("svg, script, style, noscript, .skip")) continue;
    if (!willChange(text)) continue;
    const r = el.getBoundingClientRect();
    if (r.bottom < -40 || r.top > vh + 40 || !r.width) continue;
    seenEls.add(el);
    jobs.push(el);
  }
  // a wave runs down the page: each line lifts away and blurs, then its translation rises into place
  const step = Math.min(24, 260 / Math.max(1, jobs.length));
  const OUT = 190, IN = 460;
  const anims = jobs.map((el, i) => {
    const solid = el.matches(".cta, .store, .store *");            // buttons keep their shape: only the label changes
    const inline = getComputedStyle(el).display.startsWith("inline");   // inline text cannot be moved, so it only blurs
    let rest, gone, enter;
    if (solid) { rest = { color: getComputedStyle(el).color }; gone = { color: "transparent" }; enter = gone; }
    else {
      rest = { opacity: 1, filter: "blur(0px)", ...(inline ? {} : { transform: "translateY(0)" }) };
      gone = { opacity: 0, filter: "blur(5px)", ...(inline ? {} : { transform: "translateY(-0.4em)" }) };
      enter = { opacity: 0, filter: "blur(5px)", ...(inline ? {} : { transform: "translateY(0.55em)" }) };
    }
    const out = el.animate([rest, gone], { duration: OUT, delay: i * step, easing: "cubic-bezier(0.4,0,1,1)", fill: "forwards" });
    return { el, out, rest, enter, delay: i * step };
  });
  return {
    wait: OUT + (jobs.length ? (jobs.length - 1) * step : 0),
    back: () => anims.forEach((a) => {
      const inn = a.el.animate([a.enter, a.rest], { duration: IN, delay: a.delay, easing: "cubic-bezier(0.16,1,0.3,1)", fill: "backwards" });
      a.out.cancel();
      inn.onfinish = () => inn.cancel();
    }),
  };
}
