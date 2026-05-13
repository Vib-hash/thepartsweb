"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const logos = [
  { src: "/logos/maruti-suzuki.png", alt: "Maruti Suzuki" },
  { src: "/logos/hyundai.png", alt: "Hyundai" },
  { src: "/logos/tata-motors.png", alt: "Tata Motors" },
  { src: "/logos/mahindra.png", alt: "Mahindra" },
];

export default function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 sm:py-32">
      <div ref={ref} className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
        >
          Built Around How The Indian Aftermarket{" "}
          <span className="text-orange-500">Actually Works.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600"
        >
          Most vendors don&apos;t maintain digital inventory systems. Most workshops
          still rely on calls and WhatsApp.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600"
        >
          PartWeb bridges this operational gap with realtime procurement and
          AI-powered inventory workflows.
        </motion.p>

        {/* OEM Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          {/* Divider + qualifier */}
          <div className="mx-auto mb-2 flex max-w-sm items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="whitespace-nowrap text-xs tracking-wide text-gray-400">
              in discussions with
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <p className="mb-8 text-sm font-semibold tracking-wider text-gray-900 uppercase">
            Verified OEM Vendor Partnerships
          </p>

          {/* Logo pills */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {logos.map((logo, i) => (
              <motion.div
                key={logo.alt}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
                className="relative overflow-hidden rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm sm:px-6 sm:py-3"
              >
                {/* Shimmer overlay */}
                <motion.div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(120deg, transparent 30%, rgba(249,115,22,0.08) 50%, transparent 70%)",
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
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={48}
                  unoptimized
                  className="relative h-8 w-auto object-contain sm:h-12"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
