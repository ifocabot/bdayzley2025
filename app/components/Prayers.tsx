"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const prayers = [
  {
    id: 1,
    title: "Kesehatan & Kesejahteraan",
    text: "Semoga selalu diberikan kesehatan yang prima, kesejahteraan yang berlimpah, dan semangat yang tak pernah padam.",
    emoji: "💫",
  },
  {
    id: 2,
    title: "Keluarga & Kebahagiaan",
    text: "Semoga keluarga selalu harmonis, penuh kebahagiaan, dan dikelilingi keceriaan dalam setiap langkah.",
    emoji: "👨‍👩‍👧‍👦",
  },
  {
    id: 3,
    title: "Kesuksesan & Pencapaian",
    text: "Semoga semua impian dan cita-cita dapat terwujud dengan gemilang, serta selalu diberkahi kesuksesan.",
    emoji: "⭐",
  },
  {
    id: 4,
    title: "Persahabatan & Kebersamaan",
    text: "Semoga selalu dikelilingi teman-teman yang baik hati dan kebersamaan yang penuh makna.",
    emoji: "🤝",
  },
  {
    id: 5,
    title: "Kebijaksanaan & Inspirasi",
    text: "Semoga selalu diberkahi kebijaksanaan dalam mengambil keputusan dan menjadi inspirasi bagi orang lain.",
    emoji: "🌟",
  },
  {
    id: 6,
    title: "Masa Depan & Harapan",
    text: "Semoga masa depan membawa kebahagiaan yang lebih besar dan semua harapan menjadi kenyataan.",
    emoji: "✨",
  },
];

export default function Prayers() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isClient &&
          [...Array(15)].map((_, i) => (
            <motion.div
              key={`bg-element-${i}`}
              className="absolute"
              style={{
                fontSize: Math.random() * 30 + 20,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                color: i % 2 === 0 ? "#8b5cf6" : "#d946ef",
                opacity: 0.1,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {i % 3 === 0 ? "✧" : i % 3 === 1 ? "❀" : "✦"}
            </motion.div>
          ))}
      </div>

      <div className="relative z-10 max-w-6xl px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.h2
            className="mb-4 text-5xl font-bold text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Doa & Harapan
          </motion.h2>
          <motion.div
            className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {prayers.map((prayer, index) => (
            <motion.div
              key={prayer.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-2xl group-hover:opacity-100" />
              <div className="relative p-6 transition-transform duration-300 transform shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl group-hover:-translate-y-2">
                <motion.div
                  className="flex flex-col items-center text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="mb-4 text-5xl"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {prayer.emoji}
                  </motion.div>
                  <h3 className="mb-3 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                    {prayer.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">{prayer.text}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
