"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-muted/30 border-t py-12"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="font-sans text-xl font-medium tracking-tight">
                <span className="text-foreground">podcast</span>
                <span className="font-light text-muted-foreground">/</span>
                <span className="text-foreground font-light">clipper</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mt-2">
              Transform your podcasts into viral clips with AI
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © 2025 Podcast Clipper. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}