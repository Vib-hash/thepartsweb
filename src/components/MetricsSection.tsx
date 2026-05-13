"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Metric {
  value: string;
  numericValue?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const metrics: Metric[] = [
  { value: "500+", numericValue: 500, suffix: "+", label: "Realtime Procurement Requests" },
  { value: "AI-Powered", label: "Inventory Workflows" },
  { value: "50+", numericValue: 50, suffix: "+", label: "Vendor Network" },
  { value: "< 5 min", label: "Operational Speed" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

function MetricCard({ metric, index, inView }: { metric: Metric; index: number; inView: boolean }) {
  const count = useCountUp(metric.numericValue ?? 0, 1800, inView);

  const displayValue = metric.numericValue != null
    ? `${metric.prefix ?? ""}${count}${metric.suffix ?? ""}`
    : metric.value;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.15 + index * 0.12, duration: 0.5, ease: [0.25, 0.4, 0, 1] }}
      className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
    >
      {/* Orange top border accent */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400" />

      <div className="px-6 py-8 text-center sm:py-10">
        <p className="text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl">
          {displayValue}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{metric.label}</p>
      </div>
    </motion.div>
  );
}

export default function MetricsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div ref={ref} className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <MetricCard key={i} metric={metric} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
