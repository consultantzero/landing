import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

interface Props {
  title?: string,
  subtitle?: string,
  tagLine?: string,
  className?: string,
}

export function Lines({title, subtitle, tagLine, className}: Props) {

  return (
    <BackgroundLines className={`flex items-center justify-center w-full flex-col px-4 ${className}`}>
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-400 dark:from-neutral-400 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        {title} <span className="font-semibold text-base">{subtitle}</span>
      </h2>
      { tagLine ? (
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 dark:text-neutral-400 text-center">
        {tagLine}
      </p>
      ): null }
      
    </BackgroundLines>
  );
}
