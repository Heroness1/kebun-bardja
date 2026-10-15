"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./CinematicIntro.css";

const EXIT_MS = 700;
const EXIT_REDUCED_MS = 200;

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const rand = (n) => {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

// Sparse, deterministic dust: atmospheric rather than firefly-like.
const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  x: Math.round(rand(i + 1) * 100),
  size: 1 + Math.round(rand(i + 11) * 12) / 10,
  delay: Number((rand(i + 21) * 2.4).toFixed(2)),
  dur: Number((5 + rand(i + 31) * 4).toFixed(2)),
  drift: Math.round((rand(i + 41) - 0.5) * 50),
}));

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function CinematicIntro({
  title = "KEBUN ALPUKAT RANCAMAYA",
  eyebrow = "",
  tagline = "",
  duration = 3400,
  storageKey = "kb-intro-seen",
}) {
  const [phase, setPhase] = useState("idle");
  const rootRef = useRef(null);
  const countRef = useRef(null);
  const previousFocusRef = useRef(null);

  const words = useMemo(() => {
    let n = 0;
    return title
      .split(" ")
      .filter(Boolean)
      .map((word) => Array.from(word).map((ch) => ({ ch, i: n++ })));
  }, [title]);

  const active = phase === "playing" || phase === "leaving";

  const leave = useCallback(() => {
    setPhase((current) => (current === "playing" ? "leaving" : current));
  }, []);

  // Decide before paint so returning visitors do not see an intro flash.
  useIsoLayoutEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(storageKey) === "1";
    } catch {
      // Continue gracefully when sessionStorage is blocked.
    }
    setPhase(seen ? "done" : "playing");
  }, [storageKey]);

  // Progress is updated directly in the DOM to avoid a render on every frame.
  useEffect(() => {
    if (phase !== "playing") return;

    const paint = (progress) => {
      rootRef.current?.style.setProperty("--kb-progress", progress.toFixed(4));
      if (countRef.current) {
        countRef.current.textContent = String(Math.round(progress * 100)).padStart(2, "0");
      }
    };

    const reduced = prefersReducedMotion();
    const total = reduced ? 600 : Math.max(1800, duration);
    let raf = 0;

    if (reduced) {
      paint(1);
    } else {
      const startedAt = performance.now();
      const tick = (now) => {
        // Finish just before the end, leaving a brief intentional hold at 100%.
        const progress = Math.min((now - startedAt) / (total * 0.96), 1);
        paint(easeInOutCubic(progress));
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }

    const timer = window.setTimeout(leave, total);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, [phase, duration, leave]);

  // Persist only once the exit starts, so the intro is not marked seen on mount.
  useEffect(() => {
    if (phase !== "leaving") return;

    try {
      sessionStorage.setItem(storageKey, "1");
    } catch {
      // Ignore storage failures.
    }

    const timer = window.setTimeout(
      () => setPhase("done"),
      prefersReducedMotion() ? EXIT_REDUCED_MS : EXIT_MS,
    );
    return () => window.clearTimeout(timer);
  }, [phase, storageKey]);

  // Lock background scrolling while the intro is visible; it cannot be skipped.
  useEffect(() => {
    if (!active) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    root.style.overflow = "hidden";

    return () => {
      root.style.overflow = previousOverflow;
      if (previousFocusRef.current?.isConnected) {
        previousFocusRef.current.focus({ preventScroll: true });
      }
    };
  }, [active]);

  if (phase === "idle" || phase === "done") return null;

  return (
    <div
      ref={rootRef}
      className={`kb-intro${phase === "leaving" ? " kb-intro--out" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} intro`}
    >
      <div className="kb-intro__bg" aria-hidden="true" />
      <div className="kb-intro__rays" aria-hidden="true" />

      <div className="kb-intro__particles" aria-hidden="true">
        {PARTICLES.map((particle, index) => (
          <span
            key={index}
            className="kb-intro__particle"
            style={{
              "--x": `${particle.x}%`,
              "--s": `${particle.size}px`,
              "--d": `${particle.delay}s`,
              "--t": `${particle.dur}s`,
              "--dx": `${particle.drift}px`,
            }}
          />
        ))}
      </div>

      <div className="kb-intro__grain" aria-hidden="true" />
      <div className="kb-intro__vignette" aria-hidden="true" />

      <div className="kb-intro__center">
        <div className="kb-intro__light" aria-hidden="true" />

        {eyebrow && (
          <p className="kb-intro__eyebrow">
            <i aria-hidden="true" />
            <span>{eyebrow}</span>
            <i aria-hidden="true" />
          </p>
        )}

        <p className="kb-intro__title">
          <span className="kb-intro__sr">{title}</span>
          {words.map((characters, wordIndex) => (
            <span className="kb-intro__word" key={wordIndex} aria-hidden="true">
              {characters.map(({ ch, i }) => (
                <span
                  key={i}
                  className="kb-intro__char"
                  style={{ "--i": i }}
                >
                  {ch}
                </span>
              ))}
            </span>
          ))}
        </p>

        {(eyebrow || tagline) && (
          <>
            <div className="kb-intro__divider" aria-hidden="true" />
            {tagline && <p className="kb-intro__tagline">{tagline}</p>}
          </>
        )}
      </div>

      <div className="kb-intro__seam" aria-hidden="true" />

      <div className="kb-intro__footer">
        <span className="kb-intro__count" aria-hidden="true">
          <span ref={countRef}>00</span>%
        </span>
        <span className="kb-intro__progress" aria-hidden="true">
          <i />
        </span>
      </div>
    </div>
  );
}
