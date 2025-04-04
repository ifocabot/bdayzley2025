"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const wishes = [
  {
    id: 1,
    name: "Mama Ifoc",
    message:
      "Selamat ulang tahun! Semoga selalu diberkahi kebahagiaan dan kesehatan.",
    emoji: "👨‍👩‍👧‍👦",
    date: "2025-04-05",
  },
  {
    id: 2,
    name: "Baba Iqbal",
    message:
      "Happy Birthday! Semoga tahun ini membawa banyak keberhasilan dan kebahagiaan.",
    emoji: "🎓",
    date: "2025-04-05",
  },
  {
    id: 3,
    name: "Temen BCA",
    message:
      "Selamat ulang tahun! Sukses Terus karirnya di BCA, cepet lulus dari trainee",
    emoji: "💼",
    date: "2025-04-05",
  },
  {
    id: 4,
    name: "Nisa",
    message:
      "met ultah zhley, semoga yg disemogakan, tersemogakan, semoga bahagia sehat selalu, semoga lebih baik dari sebelumnya, n cepat tobat yh jan pakara mancaruk 🤪",
    emoji: "👯‍♀️",
    date: "2025-04-05",
  },
  {
    id: 5,
    name: "Guru Zley",
    message:
      "Selamat ulang tahun! Semoga sukses dalam segala hal yang diimpikan. Amituofo",
    emoji: "👩‍🏫",
    date: "2025-04-05",
  },
  {
    id: 6,
    name: "Ambon",
    message:
      "Selamat ulang tahun! Semoga selalu diberkahi kesehatan dan kebahagiaan.",
    emoji: "🧒",
    date: "2025-04-06",
  },
  {
    id: 7,
    name: "Vivian",
    message:
      "Selamat ulang tahun! Semoga persahabatan kita selalu abadi dan penuh kebahagiaan.",
    emoji: "🤗",
    date: "2025-04-07",
  },
  {
    id: 8,
    name: "Irfa",
    message: "Selamat ulang tahun! Semoga sukses selalu menyertai langkahmu.",
    emoji: "🎉",
    date: "2025-04-05",
  },
  {
    id: 9,
    name: "Angel",
    message:
      "Selamat ulang tahun! Semoga selalu diberkahi cinta dan kebahagiaan.",
    emoji: "❤️",
    date: "2025-04-05",
  },
  {
    id: 10,
    name: "Tata",
    message: "Selamat ulang tahun ka sherly, jangan lupa traktir mixuee.",
    emoji: "🥳",
    date: "2025-04-05",
  },
  {
    id: 11,
    name: "JNE",
    message:
      "Selamat ulang Zleyyy, semoga sukses selalu dalam karirnya, meski mahal ingat tetap krim pakai JNE.",
    emoji: "🥳",
    date: "2025-04-05",
  },
  {
    id: 12,
    name: "Ifoc",
    message: "Semoga. Kamu. Bahagia. Selalu",
    emoji: "🥳",
    date: "2025-04-05",
  },
];

export default function Wishes() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isClient &&
          [...Array(20)].map((_, i) => (
            <motion.div
              key={`bg-heart-${i}`}
              className="absolute"
              style={{
                fontSize: Math.random() * 20 + 10,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                color: i % 2 === 0 ? "#8b5cf6" : "#d946ef",
                opacity: 0.1,
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

      <div className="relative z-10 max-w-6xl px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 text-4xl font-bold text-center text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600"
        >
          Ucapan dari Orang Terkasih 💝
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12 text-lg text-center text-purple-600"
        >
          Ucapan dan doa dari orang-orang yang mencintaimu.
        </motion.p>

        {/* Wishes grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {wishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-xl group-hover:opacity-100" />
              <div className="relative p-6 transition-transform duration-300 transform shadow-lg bg-white/90 backdrop-blur-sm rounded-xl group-hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{wish.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                      {wish.name}
                    </h3>
                    <p className="text-sm text-gray-500">{wish.date}</p>
                  </div>
                </div>
                <p className="text-gray-700">{wish.message}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
