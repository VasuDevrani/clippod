"use client";

import { motion } from "framer-motion";
import { Zap, Scissors, Download, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const features = [
  {
    icon: Zap,
    title: "AI-Powered Processing",
    description: "Advanced AI automatically identifies the best moments in your podcast for maximum engagement.",
  },
  {
    icon: Scissors,
    title: "Smart Clip Generation",
    description: "Get multiple high-quality clips from a single podcast episode, perfectly sized for social media.",
  },
  {
    icon: Download,
    title: "Instant Downloads",
    description: "Download your clips immediately after processing in high quality formats ready for sharing.",
  },
  {
    icon: Clock,
    title: "Lightning Fast",
    description: "Process hours of content in minutes with our optimized AI processing pipeline.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Powerful Features for Content Creators
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your long-form podcast content into engaging short clips
            that drive growth and engagement across all platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit"
                  >
                    <feature.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground">
            Join thousands of creators who are already growing their audience with AI-powered clips
          </p>
        </motion.div>
      </div>
    </section>
  );
}