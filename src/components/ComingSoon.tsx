"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BackgroundBeams } from "./ui/background-beams";
import { ConfirmationMessage } from "./ConfirmationMessage";
import { submitForm } from "@/lib/form";

export function ComingSoon() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = await submitForm(e.currentTarget);
    if (success) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="h-full w-full rounded-none bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base min-h-30 sm:min-h-36 px-4 sm:px-5 sm:w-auto"
            href="https://issuesolved.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/logo.svg"
              alt="Website logo"
              width={200}
              height={200}
            />
            <span className="font-bold mt-4 text-base">Inc.</span>
          </a>
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center relative z-10">
          Coming soon
        </p>
        {!isSubmitted ? (
          <form 
            name="waitlist" 
            method="POST" 
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="relative z-10 mt-4"
          >
            <input type="hidden" name="form-name" value="waitlist" />
            <input type="hidden" name="bot-field" />
            <input
              type="email"
              name="email"
              placeholder="email@mycompany.com"
              className="rounded-lg border text-lg p-2 text-neutral-50 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full bg-neutral-950 placeholder:text-neutral-400"
              required
            />
          </form>
        ) : (
          <ConfirmationMessage />
        )}
      </div>
      <BackgroundBeams />
    </div>
  );
}
