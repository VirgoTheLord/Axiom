// components/MobileTokenView.tsx
"use client";

import { useState } from "react";
import { MobileTokenCard } from "@/components/MobileTokenCard";
import { MobileTokenCardSkeleton } from "@/components/LoadingShimmer";
import { newPairsData, finalStretchData, migratedTokensData } from "@/lib/data";
import type { TokenCardProps } from "@/lib/types";

interface TabData {
  id: string;
  label: string;
  tokens: TokenCardProps[];
}

const tabs: TabData[] = [
  { id: "new", label: "New Pairs", tokens: newPairsData },
  { id: "final", label: "Final Stretch", tokens: finalStretchData },
  { id: "migrated", label: "Migrated", tokens: migratedTokensData },
];

interface MobileTokenViewProps {
  isLoading?: boolean;
}

export const MobileTokenView = ({
  isLoading = false,
}: MobileTokenViewProps) => {
  const [activeTab, setActiveTab] = useState("new");

  const activeTabData = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <div className="flex flex-col h-full">
      {/* Mobile Tab Navigation - Small and clean at top left */}
      <div className="flex bg-black rounded-lg p-0.5 mb-4 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-[#2a2a2a] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Tab Content - Full width cards */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col w-full">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <MobileTokenCardSkeleton key={index} className="w-full mb-3" />
              ))
            : activeTabData.tokens.map((token, index) => (
                <MobileTokenCard key={index} {...token} className="w-full" />
              ))}
        </div>
      </div>
    </div>
  );
};
