import { ComingSoon } from "@/components/ComingSoon";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <main className="flex h-full w-full">
        <ComingSoon />
      </main>
    </div>
  );
}
