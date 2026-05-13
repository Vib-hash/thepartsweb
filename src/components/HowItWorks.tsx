"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: 1,
    title: "Workshop raises spare part request.",
    description: "Submit a part request with details — make, model, year, and quantity.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "AI intelligently routes request to relevant vendors.",
    description: "Our matching engine finds the best-fit vendors by location, availability, and price.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Vendors respond live with price and ETA.",
    description: "Real-time quotes appear instantly — compare prices and estimated delivery times.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Workshop chooses pickup or delivery.",
    description: "Select how to receive the part — pick up from store or get doorstep delivery.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

function FlowConnector({ inView, index }: { inView: boolean; index: number }) {
  return (
    <>
      {/* Desktop — horizontal connector */}
      <div className="relative hidden items-center lg:flex" style={{ width: 80 }}>
        <svg className="h-8 w-full" viewBox="0 0 80 32" fill="none">
          <line x1="0" y1="16" x2="80" y2="16" stroke="#404040" strokeWidth="2" strokeDasharray="6 4" />
        </svg>
        <motion.div
          className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-orange-500"
          initial={{ x: 0, opacity: 0 }}
          animate={inView ? { x: [0, 72, 0], opacity: [0, 1, 0] } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5 + index * 0.3,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Mobile — vertical connector */}
      <div className="relative flex justify-center lg:hidden" style={{ height: 48 }}>
        <svg className="h-full w-8" viewBox="0 0 32 48" fill="none">
          <line x1="16" y1="0" x2="16" y2="48" stroke="#404040" strokeWidth="2" strokeDasharray="6 4" />
        </svg>
        <motion.div
          className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-orange-500"
          initial={{ y: 0, opacity: 0 }}
          animate={inView ? { y: [0, 40, 0], opacity: [0, 1, 0] } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5 + index * 0.3,
            ease: "easeInOut",
          }}
        />
      </div>
    </>
  );
}

function StepCard({
  step,
  index,
  inView,
}: {
  step: (typeof steps)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.25, duration: 0.6, ease: [0.25, 0.4, 0, 1] }}
      className="group relative flex w-full max-w-xs flex-col items-center text-center"
    >
      {/* Number + Icon circle */}
      <div className="relative mb-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-800 text-orange-400 transition-colors group-hover:border-orange-500/50 group-hover:bg-neutral-700">
          {step.icon}
        </div>
        <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white shadow-lg">
          {step.number}
        </div>
      </div>

      <h3 className="mb-2 text-base font-semibold leading-snug text-white">
        {step.title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-400">{step.description}</p>
    </motion.div>
  );
}

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          How It <span className="text-orange-500">Works</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-16 max-w-xl text-center text-gray-400"
        >
          From request to delivery in four simple steps — powered by AI routing.
        </motion.p>

        {/* Desktop horizontal flow */}
        <div className="hidden items-start justify-center lg:flex">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start">
              <StepCard step={step} index={i} inView={inView} />
              {i < steps.length - 1 && (
                <div className="mt-8">
                  <FlowConnector inView={inView} index={i} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile vertical flow */}
        <div className="flex flex-col items-center lg:hidden">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <StepCard step={step} index={i} inView={inView} />
              {i < steps.length - 1 && <FlowConnector inView={inView} index={i} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
