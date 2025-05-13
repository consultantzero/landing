import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

interface Props {
  title?: string,
  subtitle?: string,
  tagLine?: string,
  className?: string,
}

export function Simple({title, subtitle, tagLine, className}: Props) {

  return (
    <BackgroundBeamsWithCollision className={`flex flex-col min-h-full ${className}`}>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-4xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-orange-500 via-blue-500 to-gray-800 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">{title}</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-orange-500 via-blue-500 to-gray-800 py-4">
            <span className="">{title}</span>
            <span className="ml-1 font-light text-base">{subtitle}</span>
          </div>
        </div>
        <br /> <label className="text-xl font-medium text-neutral-600">{tagLine}</label>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}
