"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type StatBlockProps = {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
  className?: string;
  index?: number;
};

function useCountUp(
  target: number,
  inView: boolean,
  duration = 2000
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return count;
}

export function StatBlock({
  icon: Icon,
  value,
  suffix = "",
  label,
  className,
  index = 0,
}: StatBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCountUp(value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={cn("flex flex-col items-center text-center", className)}
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40">
        <Icon className="h-6 w-6 text-gold" />
      </div>
      <p className="font-display text-4xl font-bold text-ink md:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </motion.div>
  );
}
