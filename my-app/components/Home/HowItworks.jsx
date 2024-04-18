"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/StickyScroll";
import Image from "next/image";

import Prompt from "@/app/assets/prompt.png";
import Result from "@/app/assets/result.png";
import Code from "@/app/assets/code.png";

const content = [
  {
    title: "AI-Powered Requests",
    description:
      "Simply state your design needs and let our AI interpret your vision. Step 1 involves providing your request or prompt to our AI, whether you need a hero section, a responsive layout, or dynamic elements. Our platform understands and prepares to bring your concept to life.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={Prompt}
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="code generation visualization"
        />
      </div>
    ),
  },
  {
    title: "Instant Code Generation",
    description:
      "Watch as our AI processes your request and instantly delivers the necessary HTML, CSS, and JavaScript. In Step 2, you receive clean, optimized code that's ready to integrate into your project, bypassing the need for manual coding.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Code}
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="code generation visualization"
        />
      </div>
    ),
  },
  {
    title: "Real-Time Preview & Editing",
    description:
      "Once the AI generates your code, Step 3 allows you to see a live preview directly from the integrated code editor. This seamless display ensures you can review and edit in real time, making immediate improvements and customizations to perfect your design.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={Result}
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="code generation visualization"
        />
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <div className="flex flex-col bg-black">
      <h2 className="text-6xl font-semibold text-white text-center py-10">
        How it works
      </h2>
      <StickyScroll content={content} />
    </div>
  );
}
