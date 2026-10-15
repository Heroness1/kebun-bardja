"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Leaf, Sprout } from "lucide-react";

const orchardPhoto =
  "https://images.unsplash.com/photo-1726177551991-270f9e79b65e?auto=format&fit=crop&w=1600&q=85";

export default function TrustSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="trust-section gallery-slide"
      id="kepercayaan"
      data-gallery-slide
      aria-labelledby="trust-title"
    >
      <div className="trust-story">
        <motion.div
          className="trust-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="trust-eyebrow">
            <span className="trust-eyebrow-line" />
            02 <span> CERITA KEBUN · MALANGBONG</span>
          </span>

          <h2 id="trust-title">
            Sebuah cerita
            <br />
            yang tumbuh
            <br />
            <em>dari kebun.</em>
          </h2>

          <p className="trust-lead">
            Berawal dari Malangbong, Kebun Alpukat Rancamaya punya cerita
            sederhana tentang tanaman, musim, dan hasil yang tumbuh seiring
            waktu.
          </p>

          <p className="trust-description">
            Kami ingin mengajak Anda mengenal kebun ini lebih dekat—bukan
            hanya lewat buah yang dihasilkan, tetapi juga lewat tempat dan
            perjalanan di baliknya.
          </p>

          <a className="trust-link" href="#hasil-kebun">
            <span>Jelajahi hasil kebun</span>
            <ArrowDownRight size={17} strokeWidth={1.6} />
          </a>

          <div className="trust-signature" aria-label="Kebun Alpukat Rancamaya">
            <Sprout size={18} strokeWidth={1.4} />
            <span>KEBUN ALPUKAT RANCAMAYA</span>
          </div>
        </motion.div>

        <div className="trust-visual">
          <motion.div
            className="trust-frame-back"
            aria-hidden="true"
            initial={reduceMotion ? false : { opacity: 0, rotate: 7, scale: 0.94 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, rotate: 4, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.figure
            className="trust-photo-frame"
            initial={reduceMotion ? false : { opacity: 0, y: 30, rotate: -3 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: -1.5 }}
            whileHover={reduceMotion ? undefined : { y: -6, rotate: 0, scale: 1.012 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="trust-photo-wrap">
              <img
                src={orchardPhoto}
                alt="Ilustrasi foto stok alpukat yang tumbuh di antara dedaunan pohon"
                loading="lazy"
                decoding="async"
              />
              <span className="trust-photo-stamp">
                <Leaf size={14} strokeWidth={1.5} />
                <span>GROWN WITH CARE</span>
              </span>
            </div>
            <figcaption>
              <span>SEBUAH CERITA DARI KEBUN</span>
              <span>01 / 03</span>
            </figcaption>
          </motion.figure>

          <motion.div
            className="trust-floating-note"
            initial={reduceMotion ? false : { opacity: 0, x: 16, y: 8 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.35 }}
          >
            <span className="trust-note-dot" />
            <span>Catatan kecil dari Malangbong</span>
          </motion.div>

          <span className="trust-visual-doodle" aria-hidden="true">✳</span>
        </div>
      </div>

      <style jsx>{`
        .trust-section {
          position: relative;
          min-height: 100svh;
          height: auto;
          justify-content: center;
          overflow: visible;
          padding: clamp(54px, 8vh, 90px) 10.1%;
          background: #edf2e8;
          color: #203326;
        }

        .trust-story {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
          align-items: center;
          gap: clamp(42px, 7vw, 104px);
        }

        .trust-copy {
          position: relative;
          z-index: 1;
          padding: 12px 0;
        }

        .trust-eyebrow {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: clamp(23px, 4vh, 38px);
          color: #62775c;
          font-family: var(--sans);
          font-size: 9px;
          letter-spacing: .18em;
          line-height: 1.6;
        }

        .trust-eyebrow-line {
          width: 26px;
          height: 1px;
          background: #82977a;
          flex-shrink: 0;
        }

        h2 {
          margin: 0;
          color: #203326;
          font-family: var(--serif);
          font-size: clamp(42px, 5vw, 70px);
          font-weight: 400;
          letter-spacing: -.055em;
          line-height: 1.02;
        }

        h2 em {
          color: #71866a;
          font-weight: 400;
        }

        .trust-lead,
        .trust-description {
          max-width: 430px;
          font-family: var(--sans);
          font-size: 13px;
          line-height: 1.9;
        }

        .trust-lead {
          margin: clamp(24px, 4vh, 35px) 0 12px;
          color: #384a39;
        }

        .trust-description {
          margin: 0;
          color: #687364;
        }

        .trust-link {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          margin-top: clamp(25px, 4vh, 38px);
          padding: 0 0 9px;
          border-bottom: 1px solid #a8b7a0;
          color: #294a31;
          font-family: var(--sans);
          font-size: 11px;
          font-weight: 600;
          transition: gap .22s ease, color .22s ease;
        }

        .trust-link:hover {
          gap: 27px;
          color: #587653;
        }

        .trust-signature {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: clamp(36px, 6vh, 56px);
          color: #82917a;
        }

        .trust-signature span {
          font-family: var(--sans);
          font-size: 8px;
          letter-spacing: .16em;
        }

        .trust-visual {
          position: relative;
          width: 100%;
          max-width: 570px;
          justify-self: end;
          padding: 18px 18px 28px 0;
        }

        .trust-frame-back {
          position: absolute;
          inset: 15px 3px 25px 23px;
          background: #d8e3d0;
          border: 1px solid rgba(63, 87, 58, .08);
          transform: rotate(4deg);
        }

        .trust-photo-frame {
          position: relative;
          z-index: 1;
          margin: 0;
          padding: 12px 12px 0;
          background: #fbfaf5;
          box-shadow: 0 22px 65px rgba(32, 51, 38, .12);
          transform-origin: 50% 60%;
        }

        .trust-photo-wrap {
          position: relative;
          aspect-ratio: 0.94;
          overflow: hidden;
          background: #dce7d5;
        }

        .trust-photo-wrap::after {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(16, 45, 34, .02), rgba(16, 45, 34, .13));
          content: "";
          pointer-events: none;
        }

        .trust-photo-wrap img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform .8s cubic-bezier(.22, 1, .36, 1);
        }

        .trust-photo-frame:hover .trust-photo-wrap img {
          transform: scale(1.035);
        }

        .trust-photo-stamp {
          position: absolute;
          z-index: 1;
          right: 14px;
          bottom: 14px;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px 12px;
          background: rgba(251, 250, 245, .94);
          color: #36513a;
          backdrop-filter: blur(8px);
        }

        .trust-photo-stamp span {
          font-family: var(--sans);
          font-size: 7px;
          letter-spacing: .14em;
        }

        .trust-photo-frame figcaption {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 15px 2px 14px;
          color: #788572;
          font-family: var(--sans);
          font-size: 7px;
          letter-spacing: .14em;
        }

        .trust-floating-note {
          position: absolute;
          z-index: 2;
          left: -36px;
          bottom: 72px;
          display: flex;
          align-items: center;
          gap: 9px;
          max-width: calc(100% - 16px);
          padding: 13px 16px;
          background: #fbfaf5;
          box-shadow: 0 10px 28px rgba(32, 51, 38, .09);
          color: #52634d;
          font-family: var(--sans);
          font-size: 9px;
          letter-spacing: .02em;
        }

        .trust-note-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #8aa17d;
          flex-shrink: 0;
        }

        .trust-visual-doodle {
          position: absolute;
          z-index: 2;
          top: -7px;
          right: -8px;
          color: #8ca17e;
          font-size: 36px;
          line-height: 1;
          transform: rotate(12deg);
        }

        @media (max-width: 900px) {
          .trust-section {
            padding-left: 7%;
            padding-right: 7%;
          }

          .trust-story {
            gap: clamp(28px, 5vw, 48px);
            grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr);
          }

          h2 {
            font-size: clamp(38px, 5.3vw, 54px);
          }

          .trust-floating-note {
            left: -15px;
          }
        }

        @media (max-width: 760px) {
          .trust-section {
            min-height: 100svh;
            padding: 58px 6% 68px;
          }

          .trust-story {
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .trust-copy {
            padding: 0;
          }

          .trust-eyebrow {
            margin-bottom: 23px;
            font-size: 8px;
          }

          h2 {
            font-size: clamp(39px, 11vw, 54px);
            letter-spacing: -.045em;
            line-height: 1.04;
          }

          .trust-lead {
            margin-top: 23px;
          }

          .trust-lead,
          .trust-description {
            font-size: 12px;
            line-height: 1.8;
          }

          .trust-link {
            margin-top: 24px;
          }

          .trust-signature {
            margin-top: 29px;
          }

          .trust-visual {
            width: calc(100% - 8px);
            max-width: 460px;
            justify-self: center;
            padding: 12px 12px 22px 0;
          }

          .trust-frame-back {
            inset: 10px 0 19px 15px;
          }

          .trust-photo-frame {
            padding: 8px 8px 0;
          }

          .trust-photo-wrap {
            aspect-ratio: 1.08;
          }

          .trust-floating-note {
            left: -8px;
            bottom: 50px;
            padding: 11px 12px;
            font-size: 8px;
          }

          .trust-visual-doodle {
            top: -5px;
            right: -4px;
            font-size: 29px;
          }

          .trust-photo-frame figcaption {
            padding: 12px 1px 12px;
            font-size: 6px;
          }
        }

        @media (max-width: 380px) {
          .trust-section {
            padding-top: 46px;
          }

          h2 {
            font-size: 36px;
          }

          .trust-story {
            gap: 28px;
          }

          .trust-floating-note {
            left: -3px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .trust-link,
          .trust-photo-wrap img {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
