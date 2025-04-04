"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const wishes = [
  {
    id: 1,
    name: "Keluarga",
    message:
      "Selamat ulang tahun! Semoga selalu diberkahi kebahagiaan dan kesehatan.",
    emoji: "👨‍👩‍👧‍👦",
    date: "2025-01-01",
  },
  {
    id: 2,
    name: "Teman Sekolah",
    message:
      "Happy Birthday! Semoga tahun ini membawa banyak keberhasilan dan kebahagiaan.",
    emoji: "🎓",
    date: "2025-01-02",
  },
  {
    id: 3,
    name: "Teman Kerja",
    message:
      "Selamat ulang tahun! Terima kasih telah menjadi rekan kerja yang luar biasa.",
    emoji: "💼",
    date: "2025-01-03",
  },
  {
    id: 4,
    name: "Teman Lama",
    message:
      "Selamat ulang tahun! Semoga selalu dikelilingi kebahagiaan dan keceriaan.",
    emoji: "👯‍♀️",
    date: "2025-01-04",
  },
  {
    id: 5,
    name: "Guru",
    message:
      "Selamat ulang tahun! Semoga sukses dalam segala hal yang diimpikan.",
    emoji: "👩‍🏫",
    date: "2025-01-05",
  },
  {
    id: 6,
    name: "Tetangga",
    message:
      "Selamat ulang tahun! Semoga selalu diberkahi kesehatan dan kebahagiaan.",
    emoji: "🏠",
    date: "2025-01-06",
  },
];

export default function Wishes() {
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
              key={`bg-heart-${i}`}
              className="absolute text-pink-400"
              style={{
                fontSize: Math.random() * 20 + 10,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              ❤️
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
          Ucapan dari Orang Terkasih 💝
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-lg text-purple-600 mb-12 max-w-2xl mx-auto"
        >
          Ucapan dan doa dari orang-orang yang mencintaimu.
        </motion.p>

        {/* Wishes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{wish.emoji}</span>
                <div>
                  <h3 className="text-xl font-bold text-purple-700">
                    {wish.name}
                  </h3>
                  <p className="text-sm text-gray-500">{wish.date}</p>
                </div>
              </div>
              <p className="text-gray-700">{wish.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
