"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function Cake() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const handleOpenCake = () => {
    setIsOpen(true);
    setTimeout(() => {
      setShowPopup(true);
      triggerConfetti();
    }, 2000);
  };

  const handleChoiceSelect = (choice: string) => {
    setSelectedChoice(choice);
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
    <section className="relative py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? "#8b5cf6" : "#d946ef",
              opacity: 0.1,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() * 0.5 + 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-4xl font-bold text-center text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600"
        >
          Kue Surprise
        </motion.h2>

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
                    className="w-full h-full"
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
                    className="absolute bottom-0 px-8 py-3 text-lg font-bold text-white transition-all transform -translate-x-1/2 bg-purple-600 rounded-full shadow-lg left-1/2 hover:bg-purple-700 hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Klik untuk melihat
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
                    className="w-full h-full"
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="relative max-w-lg p-8 bg-white shadow-2xl rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute text-gray-500 right-4 top-4 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
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

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`p-4 rounded-lg transition-all ${
                        selectedChoice === "A"
                          ? "bg-purple-600 text-white scale-110"
                          : selectedChoice
                          ? "bg-gray-100 opacity-50 cursor-not-allowed"
                          : "bg-white hover:bg-purple-100 cursor-pointer"
                      } shadow-lg`}
                      onClick={() => !selectedChoice && handleChoiceSelect("A")}
                    >
                      <h4 className="mb-2 text-xl font-bold">Paket A</h4>
                      <p className="text-sm">Tas</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`p-4 rounded-lg transition-all ${
                        selectedChoice === "B"
                          ? "bg-purple-600 text-white scale-110"
                          : selectedChoice
                          ? "bg-gray-100 opacity-50 cursor-not-allowed"
                          : "bg-white hover:bg-purple-100 cursor-pointer"
                      } shadow-lg`}
                      onClick={() => !selectedChoice && handleChoiceSelect("B")}
                    >
                      <h4 className="mb-2 text-xl font-bold">Paket B</h4>
                      <p className="text-sm">Gelang Dan Kalung</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`p-4 rounded-lg transition-all ${
                        selectedChoice === "C"
                          ? "bg-purple-600 text-white scale-110"
                          : selectedChoice
                          ? "bg-gray-100 opacity-50 cursor-not-allowed"
                          : "bg-white hover:bg-purple-100 cursor-pointer"
                      } shadow-lg`}
                      onClick={() => !selectedChoice && handleChoiceSelect("C")}
                    >
                      <h4 className="mb-2 text-xl font-bold">Paket C</h4>
                      <p className="text-sm">Sepatu dan Topi</p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {selectedChoice && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 italic text-gray-600"
                  >
                    Pilihan apapun yang dipilih tidak akan merubah value barang.
                    Pilih yang diinginkan dan dibutuhkan, choose wisely.
                  </motion.p>
                )}

                <div className="flex justify-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 text-white transition-all bg-purple-600 rounded-full shadow-lg hover:bg-purple-700"
                    onClick={() => {
                      setSelectedChoice(null);
                      setShowPopup(false);
                    }}
                  >
                    {selectedChoice ? "Kembali" : "Terima Kasih"}
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
