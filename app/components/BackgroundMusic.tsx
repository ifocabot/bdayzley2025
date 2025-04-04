"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasInteracted = useRef(false);

  useEffect(() => {
    // Buat elemen audio baru
    const audio = new Audio();
    audio.src = "/music/1.mp3";
    audio.loop = true;
    audio.volume = 0.5;
    audio.muted = true;

    // Simpan referensi
    audioRef.current = audio;

    // Set up event listeners
    audio.addEventListener("loadedmetadata", () => {
      console.log("Audio metadata loaded");
      setDuration(audio.duration || 0);
    });

    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime || 0);
    });

    audio.addEventListener("error", (e) => {
      console.error("Audio error:", e);
      setError(
        "Gagal memuat file audio. Pastikan file ada di folder public/music/"
      );
    });

    // Coba autoplay
    const tryAutoplay = async () => {
      try {
        console.log("Mencoba autoplay...");
        await audio.play();
        console.log("Autoplay berhasil!");
        setIsPlaying(true);

        // Unmute setelah berhasil diputar
        setTimeout(() => {
          if (audioRef.current) {
            audioRef.current.muted = false;
            setIsMuted(false);
            console.log("Audio unmuted");
          }
        }, 100);
      } catch (err) {
        console.error("Autoplay gagal:", err);
        setError(
          "Autoplay tidak diizinkan oleh browser. Silakan klik untuk memutar musik."
        );
      }
    };

    // Coba autoplay segera
    tryAutoplay();

    // Tambahkan event listener untuk interaksi pengguna
    const handleInteraction = () => {
      if (!hasInteracted.current) {
        console.log("User interaction detected");
        hasInteracted.current = true;
        tryAutoplay();
      }
    };

    // Tambahkan event listeners untuk berbagai jenis interaksi
    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);
    document.addEventListener("keydown", handleInteraction);

    // Cleanup
    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          // Pastikan tidak muted saat play manual
          audioRef.current.muted = false;
          setIsMuted(false);
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        console.error("Error toggling music:", err);
        setError("Gagal memutar musik. Silakan coba lagi.");
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4"
    >
      <div className="flex items-center w-full max-w-2xl gap-4 p-4 border rounded-full shadow-lg bg-white/5 backdrop-blur-sm border-white/10">
        {/* Album Art */}
        <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-full">
          <img
            src="/img/album.jpeg"
            alt="Album Cover"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Song Info */}
        <div className="flex-grow">
          <h3 className="font-bold text-white">3:03 PM</h3>
          <p className="text-sm text-white/70">しゃろう Sharou</p>
          {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMusic}
            className="text-white transition-colors hover:text-purple-300"
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.svg
                  key="pause"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
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
                    d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="play"
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -180 }}
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
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>

          {/* Progress Bar */}
          <div className="flex items-center w-48 gap-2">
            <span className="text-sm text-white">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-purple-200/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-600"
            />
            <span className="text-sm text-white">{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
