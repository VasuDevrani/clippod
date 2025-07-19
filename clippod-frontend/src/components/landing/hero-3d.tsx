"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export function Hero3D() {
  const barHeights = useRef([...Array(20)].map(() => Math.random() * 160 + 40));

  return (
    <div className="relative h-[600px] w-[80%] overflow-hidden">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
      >
          <div className="flex items-end space-x-2">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-t from-purple-600 to-blue-400 rounded-sm"
                style={{
                  width: "16px",
                  height: `${barHeights.current[i]}px`,
                  transformOrigin: "bottom",
                  transform: `translateZ(${Math.sin(i * 0.5) * 40}px)`,
                }}
                animate={{
                  scaleY: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
    </div>
  );
}