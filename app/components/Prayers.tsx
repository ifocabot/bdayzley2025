"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const prayers = [
  {
    id: 1,
    title: "Kesehatan",
    text: "Semoga selalu diberikan kesehatan yang prima dan semangat yang tak pernah padam.",
    emoji: "💪",
  },
  {
    id: 2,
    title: "Kebahagiaan",
    text: "Semoga selalu dikelilingi kebahagiaan dan keceriaan dalam setiap langkah.",
    emoji: "😊",
  },
  {
    id: 3,
    title: "Kesuksesan",
    text: "Semoga semua impian dan cita-cita dapat terwujud dengan gemilang.",
    emoji: "⭐",
  },
  {
    id: 4,
    title: "Keluarga",
    text: "Semoga keluarga selalu harmonis dan penuh dengan kebahagiaan.",
    emoji: "👨‍👩‍👧‍👦",
  },
  {
    id: 5,
    title: "Kesejahteraan",
    text: "Semoga selalu diberkahi rezeki yang berlimpah dan berkah.",
    emoji: "💰",
  },
  {
    id: 6,
    title: "Masa Depan",
    text: "Semoga masa depan membawa kebahagiaan dan kesuksesan yang lebih besar.",
    emoji: "🌟",
  },
];

export default function Prayers() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isClient &&
          [...Array(20)].map((_, i) => (
            <motion.div
              key={`bg-star-${i}`}
              className="absolute text-yellow-400"
              style={{
                fontSize: Math.random() * 20 + 10,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              ✨
            </motion.div>
          ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-purple-800"
        >
          Doa & Harapan 🙏
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-lg text-purple-600 mb-12 max-w-2xl mx-auto"
        >
          Doa dan harapan terbaik untuk hari spesialmu.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prayers.map((prayer, index) => (
            <motion.div
              key={prayer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{prayer.emoji}</span>
                <h3 className="text-xl font-bold text-purple-700">
                  {prayer.title}
                </h3>
              </div>
              <p className="text-gray-700">{prayer.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
