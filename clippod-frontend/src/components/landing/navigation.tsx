"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="font-sans text-xl font-medium tracking-tight">
            <span className="text-foreground">podcast</span>
            <span className="font-light text-muted-foreground">/</span>
            <span className="text-foreground font-light">clipper</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            How it works
          </Link>
          <Link
            href="#pricing"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
        </nav>

        <Button asChild>
          <Link href="/login">Get Started</Link>
        </Button>
      </div>
    </motion.header>
  );
}