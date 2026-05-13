"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Relevant Requests Only",
    description:
      "Receive requests based on categories, brands and parts you actually deal in.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
  },
  {
    title: "Voice Inventory Management",
    description:
      "Simply speak inventory updates naturally in Hindi or English.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    ),
  },
  {
    title: "Fast Response Advantage",
    description:
      "Respond within minutes to improve your chances of getting orders.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Realtime Operational Dashboard",
    description:
      "Track requests, margins, stock movement and dead inventory.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
        <path d="M13 15l2-2 2 2" />
        <path d="M13 11.5l2 2 2-2" />
      </svg>
    ),
  },
  {
    title: "Built for Traditional Markets",
    description:
      "Simple workflows without complicated ERP systems.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
        <path d="M9 9v.01" />
        <path d="M9 12v.01" />
        <path d="M9 15v.01" />
        <path d="M9 18v.01" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function VendorSection() {
  return (
    <section id="vendors" className="relative bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      {/* Top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Visual Classifier Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-gray-900 rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-orange-500"
            >
              <path d="M3 21h18" />
              <path d="M5 21V7l8-4v18" />
              <path d="M19 21V11l-6-4" />
              <path d="M9 9v.01" />
              <path d="M9 12v.01" />
              <path d="M9 15v.01" />
              <path d="M9 18v.01" />
            </svg>
            <span className="text-white font-bold text-sm tracking-wider uppercase">
              For Vendors
            </span>
          </div>
        </motion.div>

        {/* Headlines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Your Inventory Shouldn&apos;t Live Inside WhatsApp Chats.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Receive relevant part requests and manage inventory using simple
            AI-powered voice commands.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="max-w-sm w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]
                         group relative bg-white border border-gray-200 rounded-xl p-6
                         border-l-4 border-l-gray-900 shadow-sm
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-500">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* App Mockup Showcase */}
        <div className="relative mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center gap-6 sm:gap-10"
          >
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative -rotate-3 hover:rotate-0 transition-transform duration-500"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/mockups/vendor-part-requests-live.png"
                  alt="Live requests view"
                  width={280}
                  height={560}
                  unoptimized
                  className="w-48 sm:w-56 md:w-64 h-auto"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Live Requests
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative rotate-3 hover:rotate-0 transition-transform duration-500"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/mockups/vendor-part-requests-replied.png"
                  alt="Replied requests view"
                  width={280}
                  height={560}
                  unoptimized
                  className="w-48 sm:w-56 md:w-64 h-auto"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Replied Requests
              </p>
            </motion.div>
          </motion.div>

          {/* Orange glow behind mockups */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <div className="w-96 h-96 rounded-full bg-orange-400/10 blur-3xl" />
          </div>
        </div>

        {/* CTA Sub-section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Manage Inventory Without Typing Everything.
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#join-vendor"
              className="px-8 py-3.5 bg-orange-500 text-white font-semibold rounded-full
                         hover:bg-orange-600 transition-colors duration-200
                         shadow-lg shadow-orange-500/25"
            >
              Join as Vendor
            </a>
            <a
              href="#explore-inventory-ai"
              className="px-8 py-3.5 border-2 border-orange-500 text-orange-500 font-semibold rounded-full
                         hover:bg-orange-50 transition-colors duration-200"
            >
              Explore Inventory AI
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
