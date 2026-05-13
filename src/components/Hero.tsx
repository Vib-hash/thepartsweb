"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.25, 0.4, 0, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle top orange gradient wash */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Light grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-16 text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-50 px-4 py-1.5 text-sm text-orange-600"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
          </span>
          Real-Time Automotive Procurement
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-7xl"
        >
          India&apos;s Real-Time{" "}
          <span className="text-orange-500">Spare Parts</span> Network.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600"
        >
          PartWeb helps workshops instantly find spare parts from verified
          vendors while enabling vendors to increase their reach and manage
          inventory through AI-powered voice workflows.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="#workshops"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-orange-600"
          >
            I&apos;m a Workshop
          </motion.a>

          <motion.a
            href="#vendors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-orange-500 bg-white px-8 py-4 text-base font-semibold text-orange-500 transition-colors hover:bg-orange-50"
          >
            I&apos;m a Vendor
          </motion.a>
        </motion.div>

        {/* App Mockup Screenshots */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative mt-16 flex items-center justify-center"
        >
          {/* Orange glow behind mockups */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)",
            }}
          />

          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
              className="relative z-10 -mr-4 rotate-[-4deg]"
            >
              <div className="rounded-[2rem] bg-gray-900 p-2 shadow-2xl">
                <div className="rounded-[1.5rem] overflow-hidden bg-white">
                  <Image
                    src="/mockups/workshop-requests.png"
                    alt="Workshop requests interface"
                    width={240}
                    height={480}
                    unoptimized
                    className="block"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
              className="relative z-20 -ml-4 rotate-[4deg]"
            >
              <div className="rounded-[2rem] bg-gray-900 p-2 shadow-2xl">
                <div className="rounded-[1.5rem] overflow-hidden bg-white">
                  <Image
                    src="/mockups/vendor-part-requests-live.png"
                    alt="Vendor live part requests"
                    width={240}
                    height={480}
                    unoptimized
                    className="block"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Marquee */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 overflow-hidden"
        >
          <div className="flex w-max animate-marquee gap-12 text-sm text-gray-400">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <span className="h-1 w-1 rounded-full bg-orange-500/40" />
                Built for real aftermarket businesses.
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
