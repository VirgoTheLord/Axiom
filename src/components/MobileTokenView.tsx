// components/MobileTokenView.tsx
"use client";

import { useState } from "react";
import { MobileTokenTable } from "@/components/MobileTokenTable";
import { newTokensData, winnersTokensData, losersTokensData } from "@/lib/data";

interface TabData {
  id: string;
  label: string;
  tokens: any[];
}

const tabs: TabData[] = [
  { id: "new", label: "New", tokens: newTokensData },
  { id: "winners", label: "Winners", tokens: winnersTokensData },
  { id: "losers", label: "Losers", tokens: losersTokensData },
];

export const MobileTokenView = () => {
  const [activeTab, setActiveTab] = useState("new");

  const activeTabData = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <div className="flex flex-col h-full">
      {/* Mobile Tab Navigation - Inverted colors */}
      <div className="flex bg-black rounded-2xl p-1 mb-1 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex-shrink-0 px-4 py-2 rounded-2xl text-sm font-medium transition-colors whitespace-nowrap
              ${
                activeTab === tab.id
                  ? "bg-[#2a2a2a] text-white"
                  : "text-gray-400 hover:text-white"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Tab Content - No title since tab shows the name */}
      <div className="flex-1 -mt-1">
        <MobileTokenTable
          title="" // Remove title since tab selector shows it
          tokens={activeTabData.tokens}
          actions={undefined} // No actions on mobile
          className="h-full"
        />
      </div>
    </div>
  );
};
