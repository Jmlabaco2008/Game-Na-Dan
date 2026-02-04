import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logoImg from "@assets/Screenshot_2026-02-04-22-22-57-99_a23b203fd3aafc6dcb84e438dda6_1770217270598.jpg";

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Allow fade out to finish
    }, 4000); // 4 seconds display

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              filter: "blur(0px)",
              transition: { duration: 1.5, ease: "easeOut" } 
            }}
            exit={{ scale: 1.1, opacity: 0, filter: "blur(20px)", transition: { duration: 0.8 } }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
            <img 
              src={logoImg} 
              alt="Game Na Dan Logo" 
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-primary/50 shadow-[0_0_50px_rgba(168,85,247,0.6)] relative z-10"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-8 text-3xl md:text-5xl font-display font-bold text-center text-white tracking-widest text-shadow-neon"
            >
              GAME NA DAN
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
