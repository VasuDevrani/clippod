"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

const plans = [
  {
    title: "Small Pack",
    price: "$9.99",
    credits: "50 credits",
    description: "Perfect for occasional podcast creators",
    features: ["50 processing credits", "No expiration", "HD quality clips", "Instant download"],
    popular: false,
  },
  {
    title: "Medium Pack",
    price: "$24.99",
    credits: "150 credits",
    description: "Best value for regular podcasters",
    features: ["150 processing credits", "No expiration", "HD quality clips", "Priority processing"],
    popular: true,
    badge: "Most Popular",
  },
  {
    title: "Large Pack",
    price: "$69.99",
    credits: "500 credits",
    description: "Ideal for podcast studios and agencies",
    features: ["500 processing credits", "No expiration", "HD quality clips", "Priority support"],
    popular: false,
  },
];

export function PricingPreviewSection() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pay only for what you use. No subscriptions, no hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`relative h-full ${plan.popular ? 'border-primary border-2' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="text-4xl font-bold">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            <strong>1 credit = 1 minute</strong> of podcast processing • Credits never expire
          </p>
        </motion.div>
      </div>
    </section>
  );
}