"use client";
import { useEffect, useRef, useState } from "react";
import "./GalleryFooter.css";

const rand = (n) => { const x = Math.sin(n * 12.9898) * 43758.5453; return x - Math.floor(x); };
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  x: Math.round(rand(i + 3) * 100), size: 2 + Math.round(rand(i + 13) * 28) / 10,
  delay: Number((rand(i + 23) * 3).toFixed(2)), dur: Number((6 + rand(i + 33) * 5).toFixed(2)),
  drift: Math.round((rand(i + 43) - 0.5) * 90), warm: rand(i + 53) > 0.65,
}));
const RINGS = [70, 110, 160, 215, 275, 340, 390];
const WORDS = ["kebun", "alpukat", "rancamaya"];

export default function GalleryFooter() {
  const ref = useRef(null);
  const [armed, setArmed] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setArmed(true);
    const io = new IntersectionObserver(([entry]) => {
      const root = entry.rootBounds, box = entry.boundingClientRect, hit = entry.intersectionRect;
      const vw = root ? root.width : window.innerWidth, vh = root ? root.height : window.innerHeight;
      const share = box.width && box.height ? (hit.width / Math.min(box.width, vw)) * (hit.height / Math.min(box.height, vh)) : 0;
      if (entry.isIntersecting && share >= 0.35) setInView(true);
      else if (!entry.isIntersecting || share <= 0.05) setInView(false);
    }, { threshold: Array.from({ length: 21 }, (_, i) => i / 20) });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let raf = 0;
    const onMove = (event) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        if (!r.width || !r.height) return;
        el.style.setProperty("--mx", ((event.clientX - r.left) / r.width - 0.5).toFixed(3));
        el.style.setProperty("--my", ((event.clientY - r.top) / r.height - 0.5).toFixed(3));
      });
    };
    const onLeave = () => { el.style.setProperty("--mx", "0"); el.style.setProperty("--my", "0"); };
    el.addEventListener("pointermove", onMove); el.addEventListener("pointerleave", onLeave);
    return () => { cancelAnimationFrame(raf); el.removeEventListener("pointermove", onMove); el.removeEventListener("pointerleave", onLeave); };
  }, []);

  return (
    <footer ref={ref} className={"kr-footer gallery-slide" + (armed ? " is-armed" : "") + (inView ? " is-inview" : "")} data-gallery-slide aria-label="Penutup Kebun Alpukat Rancamaya">
      <div className="kr-particles kr-deco" aria-hidden="true">
        {PARTICLES.map((p, i) => <span key={i} className={"kr-particle" + (p.warm ? " kr-particle--warm" : "")} style={{ "--x": p.x + "%", "--s": p.size + "px", "--d": p.delay + "s", "--t": p.dur + "s", "--dx": p.drift + "px" }} />)}
      </div>
      <div className="kr-stage">
        <div className="kr-brand" aria-label="Kebun Alpukat Rancamaya">
          <span className="kr-mark" aria-hidden="true">
            <span className="kr-rings kr-anim"><svg viewBox="0 0 800 800" fill="none">{RINGS.map((r, i) => <circle key={r} cx="400" cy="400" r={r} pathLength="1" style={{ "--i": i }} />)}</svg></span>
            <span className="kr-glow kr-anim" /><span className="kr-ripple kr-deco" />
            <svg className="kr-mark__svg" viewBox="0 0 120 120" fill="none">
              <defs><linearGradient id="kr-leaf-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" className="kr-stop-a" /><stop offset="1" className="kr-stop-b" /></linearGradient></defs>
              <circle className="kr-mark__ring kr-anim" cx="60" cy="60" r="56" pathLength="1" />
              <circle className="kr-mark__ring kr-mark__ring--inner kr-anim" cx="60" cy="60" r="50" pathLength="1" />
              <path className="kr-mark__soil kr-anim" d="M40 92 H80" pathLength="1" /><path className="kr-mark__stem kr-anim" d="M60 92 C59 76 61 62 60 44" pathLength="1" />
              <g className="kr-mark__leaf kr-mark__leaf--l kr-anim"><path className="kr-mark__blade" fill="url(#kr-leaf-grad)" d="M60 62 C46 62 36 54 33 40 C47 39 58 47 60 62 Z" /><path className="kr-mark__vein kr-anim" d="M60 62 C51 57 42 50 37 43" pathLength="1" /></g>
              <g className="kr-mark__leaf kr-mark__leaf--r kr-anim"><path className="kr-mark__blade" fill="url(#kr-leaf-grad)" d="M60 50 C62 34 74 24 90 24 C90 40 78 52 60 50 Z" /><path className="kr-mark__vein kr-anim" d="M60 50 C68 41 78 33 87 27" pathLength="1" /></g>
            </svg>
            <span className="kr-flare kr-deco" />
          </span>
          <span className="kr-wordmark">{WORDS.map((word, i) => <span className="kr-word" key={word}><span className={"kr-word__inner" + (i === 1 ? " kr-word__inner--accent" : "")} style={{ "--w": i }}>{word}</span></span>)}</span>
        </div>
        <div className="kr-tag kr-anim"><i className="kr-anim" aria-hidden="true" /><span>GROWN WITH CARE</span><i className="kr-anim" aria-hidden="true" /></div>
        <p className="kr-line kr-anim"><span>Dirawat dengan hati.</span><span>Tumbuh bersama alam.</span></p>
      </div>
      <div className="kr-meta"><span className="kr-copyright">© {new Date().getFullYear()} KEBUN ALPUKAT RANCAMAYA</span><span className="kr-credit">DESIGNED BY <strong>LURE</strong></span></div>
    </footer>
  );
}
