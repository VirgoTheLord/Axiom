// app/page.tsx

"use client";

import { allTokensData } from "@/lib/data";
import { TokenTable } from "@/components/TokenTable";
import { ActionGroup, FilterButton } from "@/components/TokenTableActions";
import { PulseHeader } from "@/components/PulseHeader";
import { MobileTokenView } from "@/components/MobileTokenView";

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col p-3">
      {/* Header only on desktop */}
      <div className="hidden md:block">
        <PulseHeader />
      </div>

      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden md:flex flex-grow">
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

      {/* Mobile Layout - Hidden on desktop, no separate header */}
      <div className="md:hidden h-full">
        <MobileTokenView />
      </div>
    </div>
  );
}
