"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sprout, Leaf } from "lucide-react";
import styles from "./CinematicFooter.module.css";

export default function CinematicFooter() {
  const reduceMotion = useReducedMotion();
  const rise = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 26, filter: reduceMotion ? "blur(0px)" : "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
  };

  return (
    <footer className={styles.footer} data-gallery-slide aria-label="Penutup Kebun Alpukat Rancamaya">
      <div className={styles.atmosphere} aria-hidden="true" />
      <motion.div
        className={styles.content}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
        transition={{ staggerChildren: reduceMotion ? 0 : 0.16, delayChildren: reduceMotion ? 0 : 0.12 }}
      >
        <motion.div className={styles.logo} variants={rise} transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}>
          <span className={styles.logoMark}><Sprout size={42} strokeWidth={1.1} /></span>
        </motion.div>
        <motion.span className={styles.kicker} variants={rise} transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}>
          SEBUAH PERJALANAN YANG TERUS TUMBUH
        </motion.span>
        <motion.h2 className={styles.title} variants={rise} transition={{ duration: reduceMotion ? 0 : 1.15, ease: [0.22, 1, 0.36, 1] }}>
          Kebun Alpukat<br /><em>Rancamaya</em>
        </motion.h2>
        <motion.div className={styles.rule} variants={rise} transition={{ duration: reduceMotion ? 0 : 0.8 }} aria-hidden="true">
          <span /><Leaf size={17} strokeWidth={1.2} /><span />
        </motion.div>
        <motion.p className={styles.tagline} variants={rise} transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}>
          Dirawat dengan hati. Tumbuh bersama alam.
        </motion.p>
        <motion.span className={styles.credit} variants={rise} transition={{ duration: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}>
          DESIGNED BY <strong>LURE</strong>
        </motion.span>
        <motion.span className={styles.copyright} variants={rise} transition={{ duration: reduceMotion ? 0 : 0.9 }}>
          © {new Date().getFullYear()} KEBUN ALPUKAT RANCAMAYA
        </motion.span>
      </motion.div>
    </footer>
  );
}
