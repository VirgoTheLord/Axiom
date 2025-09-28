// app/page.tsx

"use client";

import { useState, useEffect } from "react";
import { newPairsData, finalStretchData, migratedTokensData } from "@/lib/data";
import { TokenTable } from "@/components/TokenTable";
import { ActionGroup, FilterButton } from "@/components/TokenTableActions";
import { PulseHeader } from "@/components/PulseHeader";
import { MobileTokenView } from "@/components/MobileTokenView";
import { TabletTokenView } from "@/components/TabletTokenView";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 second loading state

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen w-full flex flex-col p-2 md:p-3 lg:p-4">
      {/* Header on tablet and desktop */}
      <div className="hidden md:block">
        <PulseHeader />
      </div>

      {/* Desktop Layout - Hidden on tablet and mobile */}
      <div className="hidden lg:flex flex-grow">
        <TokenTable
          title="New Pairs"
          tokens={newPairsData}
          isLoading={isLoading}
          actions={
            <>
              <ActionGroup />
              <FilterButton />
            </>
          }
          className="flex-1 min-w-0"
        />
        <TokenTable
          title="Final Stretch"
          tokens={finalStretchData}
          isLoading={isLoading}
          actions={
            <>
              <ActionGroup />
              <FilterButton />
            </>
          }
          className="flex-1 min-w-0"
        />
        <TokenTable
          title="Migrated"
          tokens={migratedTokensData}
          isLoading={isLoading}
          actions={
            <>
              <ActionGroup />
              <FilterButton />
            </>
          }
          className="flex-1 min-w-0"
        />
      </div>

      {/* Tablet Layout - Visible on tablet only */}
      <div className="hidden md:block lg:hidden h-full">
        <TabletTokenView isLoading={isLoading} />
      </div>

      {/* Mobile Layout - Hidden on tablet and desktop */}
      <div className="md:hidden h-full">
        <MobileTokenView isLoading={isLoading} />
      </div>
    </div>
  );
}
