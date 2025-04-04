import React, { useState } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound("/birthday-song.mp3", { loop: true });

  const togglePlay = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={togglePlay}
      className="fixed bottom-8 right-8 bg-purple-600 text-white p-4 rounded-full shadow-lg z-50"
    >
      {isPlaying ? "🔊" : "🔈"}
    </motion.button>
  );
}
