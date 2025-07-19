"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Navigation } from "~/components/landing/navigation";
import { Hero3D } from "~/components/landing/hero-3d";
import { FeaturesSection } from "~/components/landing/features-section";
import { HowItWorksSection } from "~/components/landing/how-it-works";
import { PricingPreviewSection } from "~/components/landing/pricing-preview";
import { Footer } from "~/components/landing/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Turn Your{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    Podcasts
                  </span>{" "}
                  Into Viral Clips
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  AI-powered podcast clipper that automatically finds the best moments 
                  in your content and creates engaging short clips for social media.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/signup">
                    Start Creating Clips
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                  <Link href="/login">
                    Sign In
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>No subscription required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Credits never expire</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Hero3D />
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">10k+</div>
              <div className="text-muted-foreground">Clips Generated</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">1000+</div>
              <div className="text-muted-foreground">Happy Creators</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">5min</div>
              <div className="text-muted-foreground">Average Processing</div>
            </div>
          </div>
        </div>
      </main>

      <FeaturesSection />

      <HowItWorksSection />

      <PricingPreviewSection />

      <section className="py-24 bg-gradient-to-r from-purple-600/10 to-blue-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Viral Clips?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are growing their audience with AI-powered podcast clips.
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <Link href="/signup">Get Started for Free</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
