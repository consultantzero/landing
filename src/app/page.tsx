"use client";

import { ComingSoon } from "@/components/ComingSoon";

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <main className="flex h-full w-full">
          <ComingSoon 
            title="Join the waitlist" 
            subtitle="Inc."
            tagLine="Comming soon"
            siteUrl="http://issuesolved.ca/"
            logoUrl="/logo.svg"
            confirmationMsg="Thanks for interest! We'll be in touch soon."
            />
      </main>
    </div>
  );
}
