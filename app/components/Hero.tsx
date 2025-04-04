"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Confetti from "react-confetti";

export default function Hero() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const photos = ["/img/11.jpg", "/img/13.jpg", "/img/14.jpg"];

  useEffect(() => {
    setIsClient(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    setShowConfetti(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [photos.length]);

  const floatingEmojis = ["🎂", "🎉", "🎈", "🎁", "✨", "💖", "🌟", "🎊"];

  // 3D background elements
  const backgroundElements = [
    { type: "cake", emoji: "🎂", size: 80, delay: 0 },
    { type: "balloon", emoji: "🎈", size: 60, delay: 0.2 },
    { type: "gift", emoji: "🎁", size: 70, delay: 0.4 },
    { type: "star", emoji: "⭐", size: 50, delay: 0.6 },
    { type: "heart", emoji: "💖", size: 40, delay: 0.8 },
    { type: "sparkle", emoji: "✨", size: 30, delay: 1 },
  ];

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-200 via-purple-200 to-fuchsia-200">
        {/* Animated circles for depth effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`circle-${i}`}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* 3D floating elements */}
        {isClient &&
          backgroundElements.map((element, index) => (
            <motion.div
              key={`bg-element-${index}`}
              className="absolute"
              style={{
                fontSize: element.size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                zIndex: 1,
              }}
              initial={{
                y: windowSize.height + 100,
                x: Math.random() * windowSize.width,
                rotate: 0,
                scale: 0.5,
              }}
              animate={{
                y: -100,
                x: Math.random() * windowSize.width,
                rotate: 360,
                scale: 1,
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: element.delay,
                ease: "easeInOut",
              }}
            >
              {element.emoji}
            </motion.div>
          ))}

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-violet-300/30 to-fuchsia-300/30"
          animate={{
            background: [
              "linear-gradient(to bottom right, rgba(139, 92, 246, 0.3), rgba(217, 70, 239, 0.3))",
              "linear-gradient(to bottom right, rgba(217, 70, 239, 0.3), rgba(139, 92, 246, 0.3))",
              "linear-gradient(to bottom right, rgba(139, 92, 246, 0.3), rgba(217, 70, 239, 0.3))",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {isClient && showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={300}
          recycle={true}
          gravity={0.2}
          initialVelocityY={20}
        />
      )}

      {/* Floating emojis */}
      {isClient &&
        floatingEmojis.map((emoji, index) => (
          <motion.div
            key={index}
            initial={{
              x: Math.random() * windowSize.width,
              y: windowSize.height + 100,
              scale: 0.5 + Math.random() * 0.5,
            }}
            animate={{
              y: -100,
              x: Math.random() * windowSize.width,
              rotate: 360,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute z-10 text-4xl md:text-6xl"
          >
            {emoji}
          </motion.div>
        ))}

      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-5xl font-bold text-transparent md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 drop-shadow-lg"
          >
            Selamat Ulang Tahun!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-4 text-xl text-purple-600 md:text-2xl drop-shadow-md"
          >
            🎉 Scroll untuk melihat kejutan! 🎉
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-4 md:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 text-white transition-all rounded-full shadow-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700"
            >
              Mulai Petualangan
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative z-10 w-64 h-64 md:w-80 md:h-80"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhotoIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 overflow-hidden border-4 border-purple-500 rounded-full shadow-xl"
            >
              <Image
                src={photos[currentPhotoIndex]}
                alt="Birthday photo"
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute p-3 text-2xl text-purple-800 bg-yellow-400 rounded-full shadow-lg -top-6 -right-6"
          >
            🎂
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-10 text-purple-700 transform -translate-x-1/2 bottom-10 left-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
