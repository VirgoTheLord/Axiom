// app/page.tsx

"use client";

import { allTokensData } from "@/lib/data";
import { TokenTable } from "@/components/TokenTable";
import { ActionGroup, FilterButton } from "@/components/TokenTableActions";
import { PulseHeader } from "@/components/PulseHeader"; // 👈 Import the new header

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col p-3">
      <PulseHeader /> {/* 👈 Use the new header here */}
      <div className="flex flex-grow">
        <TokenTable
          title="New Pairs"
          tokens={allTokensData}
          actions={
            <>
              <ActionGroup />
              <FilterButton />
            </>
          }
          className="flex-1"
        />
        <TokenTable
          title="Final Stretch"
          tokens={allTokensData}
          actions={
            <>
              <ActionGroup />
              <FilterButton />
            </>
          }
          className="flex-1"
        />
        <TokenTable
          title="Migrated"
          tokens={allTokensData}
          actions={
            <>
              <ActionGroup />
              <FilterButton />
            </>
          }
          className="flex-1"
        />
      </div>
    </div>
  );
}
