"use client";

import { Lines } from "@/components/Lines";

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <main className="flex h-full w-full">
          <Lines 
            title="ConsultantZero" 
            subtitle="" 
            tagLine=""
            className="bg-black" 
            />
      </main>
    </div>
  );
}
