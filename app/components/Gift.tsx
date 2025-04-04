"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function Cake() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenCake = () => {
    setIsOpen(true);
    setTimeout(() => {
      setShowPopup(true);
      triggerConfetti();
    }, 2000);
  };

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-5xl font-black uppercase text-purple-900">
          Kue Spesial
        </h2>

        <div className="flex flex-col items-center justify-center">
          <div className="relative h-[400px] w-[400px]">
            <AnimatePresence>
              {!isOpen ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="absolute inset-0"
                >
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full"
                  >
                    {/* Base cake */}
                    <motion.rect
                      x="50"
                      y="120"
                      width="100"
                      height="30"
                      rx="5"
                      fill="#f472b6"
                      stroke="#db2777"
                      strokeWidth="2"
                    />

                    {/* Middle layer */}
                    <motion.rect
                      x="40"
                      y="90"
                      width="120"
                      height="30"
                      rx="5"
                      fill="#f9a8d4"
                      stroke="#db2777"
                      strokeWidth="2"
                    />

                    {/* Top layer */}
                    <motion.rect
                      x="60"
                      y="60"
                      width="80"
                      height="30"
                      rx="5"
                      fill="#fce7f3"
                      stroke="#db2777"
                      strokeWidth="2"
                    />

                    {/* Candle */}
                    <motion.rect
                      x="95"
                      y="30"
                      width="10"
                      height="30"
                      fill="#fbbf24"
                      stroke="#d97706"
                      strokeWidth="1"
                    />

                    {/* Flame */}
                    <motion.path
                      d="M100 20 Q105 10 110 20 Q105 15 100 20"
                      fill="#f59e0b"
                      stroke="#d97706"
                      strokeWidth="1"
                    />

                    {/* Question mark */}
                    <motion.path
                      d="M85 110 Q100 100 115 110 Q100 120 85 110"
                      fill="none"
                      stroke="#db2777"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <motion.circle cx="100" cy="105" r="3" fill="#db2777" />
                  </svg>
                  <motion.button
                    onClick={handleOpenCake}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 transform rounded-full bg-purple-600 px-8 py-3 text-lg font-bold text-white shadow-lg transition-all hover:bg-purple-700 hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Lihat Kue
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="absolute inset-0"
                >
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full"
                  >
                    {/* Base cake */}
                    <motion.rect
                      x="50"
                      y="120"
                      width="100"
                      height="30"
                      rx="5"
                      fill="#f472b6"
                      stroke="#db2777"
                      strokeWidth="2"
                    />

                    {/* Middle layer */}
                    <motion.rect
                      x="40"
                      y="90"
                      width="120"
                      height="30"
                      rx="5"
                      fill="#f9a8d4"
                      stroke="#db2777"
                      strokeWidth="2"
                    />

                    {/* Top layer */}
                    <motion.rect
                      x="60"
                      y="60"
                      width="80"
                      height="30"
                      rx="5"
                      fill="#fce7f3"
                      stroke="#db2777"
                      strokeWidth="2"
                    />

                    {/* Candle */}
                    <motion.rect
                      x="95"
                      y="30"
                      width="10"
                      height="30"
                      fill="#fbbf24"
                      stroke="#d97706"
                      strokeWidth="1"
                    />

                    {/* Flame */}
                    <motion.path
                      d="M100 20 Q105 10 110 20 Q105 15 100 20"
                      fill="#f59e0b"
                      stroke="#d97706"
                      strokeWidth="1"
                    />

                    {/* Happy text */}
                    <motion.text
                      x="100"
                      y="110"
                      textAnchor="middle"
                      fill="#db2777"
                      fontSize="12"
                      fontWeight="bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      HAPPY
                    </motion.text>

                    {/* Birthday text */}
                    <motion.text
                      x="100"
                      y="125"
                      textAnchor="middle"
                      fill="#db2777"
                      fontSize="12"
                      fontWeight="bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      BIRTHDAY
                    </motion.text>

                    {/* Decorative elements */}
                    <motion.circle
                      cx="70"
                      cy="75"
                      r="3"
                      fill="#f472b6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    />
                    <motion.circle
                      cx="130"
                      cy="75"
                      r="3"
                      fill="#f472b6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    />
                    <motion.circle
                      cx="100"
                      cy="85"
                      r="3"
                      fill="#f472b6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="relative max-w-lg rounded-2xl bg-white p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="text-center">
                <h3 className="mb-4 text-3xl font-bold text-purple-900">
                  Selamat Ulang Tahun!
                </h3>
                <p className="mb-6 text-lg text-gray-700">
                  Semoga tahun ini membawa kebahagiaan, kesuksesan, dan semua
                  impianmu menjadi kenyataan. Terima kasih telah menjadi bagian
                  dari hidupku.
                </p>
                <div className="flex justify-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full bg-purple-600 px-6 py-2 text-white shadow-lg transition-all hover:bg-purple-700"
                  >
                    Terima Kasih
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
