// components/TabletTokenView.tsx
"use client";

import { useState } from "react";
import { TokenCard } from "@/components/TokenCard";
import { newPairsData, finalStretchData, migratedTokensData } from "@/lib/data";

const tabs = [
  { id: "new", label: "New Pairs", tokens: newPairsData },
  { id: "final", label: "Final Stretch", tokens: finalStretchData },
  { id: "migrated", label: "Migrated", tokens: migratedTokensData },
];

export const TabletTokenView = () => {
  const [activeTab, setActiveTab] = useState("new");
  const activeTabData = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <div className="flex flex-col h-full">
      {/* Tab Navigation - Desktop style horizontal tabs */}
      <div className="flex bg-[#1a1a1a] border-b border-[#333] mb-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-shrink-0 px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap border-b-2 ${
              activeTab === tab.id
                ? "text-white border-white"
                : "text-gray-400 border-transparent hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Full width cards for tablet */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col w-full">
          {activeTabData.tokens.map((token, index) => (
            <TokenCard
              key={index}
              {...token}
              className="w-full max-w-none mx-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
