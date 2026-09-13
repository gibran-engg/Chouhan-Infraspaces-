"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function SiteLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const complete = () => window.setTimeout(() => setIsVisible(false), reduceMotion ? 0 : 650);
    if (document.readyState === "complete") complete();
    else window.addEventListener("load", complete, { once: true });
    return () => window.removeEventListener("load", complete);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-cream"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease: "easeInOut" }}
          role="status"
          aria-label="Loading Chouhan Infraspaces"
        >
          <div className="flex flex-col items-center gap-5">
            <div className="relative grid h-16 w-16 place-items-center border border-gold bg-white shadow-[0_12px_30px_rgba(60,41,33,0.12)]">
              <span className="font-display text-2xl font-semibold text-gold">C</span>
              {!reduceMotion && <motion.span className="absolute -inset-1 border border-gold/50" animate={{ rotate: 360 }} transition={{ duration: 2.4, ease: "linear", repeat: Infinity }} />}
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-muted">Chouhan Infraspaces</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
