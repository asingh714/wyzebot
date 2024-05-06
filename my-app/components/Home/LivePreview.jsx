"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

import Preview from "@/app/assets/preview.png";

export default function LivePreview() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-5xl font-semibold text-black ">
              Unleash the power of <br />
              <span className="text-6xl md:text-[10rem] font-bold mt-1 leading-none">
                WyzeBot
              </span>
            </h1>
          </>
        }
      >
        <div className="relative w-full h-full">
          <Image
            src={Preview}
            alt="hero"
            layout="fill"
            className="rounded-2xl"
            draggable={false}
          />
        </div>
      </ContainerScroll>
    </div>
  );
}
