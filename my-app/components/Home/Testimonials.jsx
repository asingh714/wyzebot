"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div className="h-screen rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-6xl font-semibold text-white text-center my-20">
        What Our Users Say
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "WyzeBot transformed our development process with its intuitive AI-driven coding. It's like having an extra team member who works flawlessly around the clock!",
    name: "Alex Johnson",
    title: "CTO at Innovatech",
  },
  {
    quote:
      "The real-time code preview feature is a game-changer for our design team, allowing us to see and adjust our work instantly. WyzeBot has significantly boosted our productivity.",
    name: "Samantha Lee",
    title: "Lead Designer at Creative Solutions",
  },
  {
    quote:
      "Thanks to WyzeBot, error handling has become a breeze. It spots issues early, saving us countless hours of debugging.",
    name: "Michael Brown",
    title: "Senior Developer at TechGiant",
  },
  {
    quote:
      "WyzeBot's effortless customization capabilities have allowed us to tailor our projects precisely to our needs without any hassle.",
    name: "Emily Clark",
    title: "Project Manager at BuildRight",
  },
  {
    quote:
      "Collaborating on code has never been smoother. WyzeBot's seamless integration with our existing tools has enhanced our team's efficiency.",
    name: "David Smith",
    title: "Software Architect at NextGen Developers",
  },
];
