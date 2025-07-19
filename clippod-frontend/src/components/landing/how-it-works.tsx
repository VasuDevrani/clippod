"use client";

import { motion } from "framer-motion";
import { Upload, Cpu, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Podcast",
    description: "Simply drag and drop your podcast file (MP4 up to 500MB). We support high-quality video podcasts.",
    step: "01",
  },
  {
    icon: Cpu,
    title: "AI Processing Magic",
    description: "Our advanced AI analyzes your content and identifies the most engaging moments for clip creation.",
    step: "02",
  },
  {
    icon: Download,
    title: "Download & Share",
    description: "Get multiple ready-to-share clips instantly. Perfect for TikTok, Instagram, YouTube Shorts, and more.",
    step: "03",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your podcast into viral clips in just 3 simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <div className="relative mb-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mx-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4"
                >
                  <step.icon className="h-10 w-10 text-primary-foreground" />
                </motion.div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-accent-foreground">
                    {step.step}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connection line to next step */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-12 h-0.5 bg-border transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}