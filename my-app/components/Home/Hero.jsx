"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 "
      >
        <h1 className="text-6xl md:text-9xl font-bold dark:text-white text-center">
          Instantly Transform Ideas into Code
        </h1>
        <div className="font-extralight text-3xl md:text-4xl dark:text-neutral-200 text-center py-4">
          Experience the next generation of coding—where your instructions
          become beautiful web components.
        </div>

        <Link href="/dashboard">
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-6 py-4 mt-16">
            Start Creating
          </button>
        </Link>
      </motion.div>
    </AuroraBackground>
  );
}
