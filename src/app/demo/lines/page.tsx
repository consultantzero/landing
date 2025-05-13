 "use client";

 import React from "react";

import { Lines } from "@/components/Lines";

export default function Page() {
  return (
    <div className="flex h-screen w-screen">
      <main className="flex h-full w-full">
        <Lines 
          title="IssueSolved" 
          subtitle="Inc." 
          tagLine="Cloud and AI Consulting"
          className="bg-black" />
      </main>
    </div>
  );
} 