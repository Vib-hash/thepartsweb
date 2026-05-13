"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const brands = [
  "Maruti Suzuki",
  "Hyundai",
  "Tata Motors",
  "Mahindra",
];

export default function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32">
      {/* Orange gradient accent behind headline */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: "80%",
          height: "60%",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.08) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Built Around How The Indian Aftermarket{" "}
          <span className="text-orange-500">Actually Works.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
        >
          Most vendors don&apos;t maintain digital inventory systems. Most workshops
          still rely on calls and WhatsApp.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-300"
        >
          PartWeb bridges this operational gap with realtime procurement and
          AI-powered inventory workflows.
        </motion.p>

        {/* OEM Brands Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          {/* Divider + Label */}
          <div className="mx-auto mb-8 flex max-w-sm items-center gap-4">
            <div className="h-px flex-1 bg-neutral-700" />
            <span className="whitespace-nowrap text-xs font-medium tracking-widest text-neutral-500 uppercase">
              OEM Vendors in Discussion
            </span>
            <div className="h-px flex-1 bg-neutral-700" />
          </div>

          {/* Logo pills with shimmer */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {brands.map((brand, i) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
                  className="relative overflow-hidden rounded-full border border-neutral-700 bg-neutral-800/60 px-6 py-3 backdrop-blur-sm"
                >
                  {/* Shimmer overlay */}
                  <motion.div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 30%, rgba(249,115,22,0.12) 50%, transparent 70%)",
                    }}
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut",
                      repeatDelay: 2,
                    }}
                  />
                  <span className="relative text-sm font-semibold tracking-wide text-neutral-300">
                    {brand}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
