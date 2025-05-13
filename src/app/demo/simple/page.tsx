 "use client";

 import React from "react";

import { Simple } from "@/components/Simple";

export default function Page() {
  return (
    <div className="flex h-screen w-screen">
      <main className="flex h-full w-full">
        <Simple 
          title="IssueSolved" 
          subtitle="Inc." 
          tagLine="Cloud and AI Consulting"
          className="bg-white text-black" />
      </main>
    </div>
  );
} 