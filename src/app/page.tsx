// app/page.tsx

"use client";

import { TokenCard } from "@/components/TokenCard";
import { allTokensData } from "@/lib/data";

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center justify-center p-4 lg:p-12">
      <div className="flex flex-col gap-4">
        {allTokensData.map((tokenData) => (
          <TokenCard key={tokenData.name} {...tokenData} />
        ))}
      </div>
    </div>
  );
}
