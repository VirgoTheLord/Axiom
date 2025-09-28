// components/PulseHeader.tsx

import { Button } from "@/components/ui/button";
import {
  Bookmark,
  ChevronDown,
  Folder,
  Layers3,
  List,
  RefreshCw,
  Volume2,
} from "lucide-react";
import React from "react";

export const PulseHeader = () => {
  return (
    <header className="flex h-16 flex-shrink-0 items-center justify-between mb-4">
      {/* Left Side: Title */}
      <h1 className="text-xl font-medium text-white tracking-wide">Pulse</h1>

      {/* Right Side: Control Groups */}
      <div className="flex h-8 items-center gap-2 md:gap-4">
        {/* Group 1: Display Button - Hidden on small screens */}
        <Button className="hidden sm:flex items-center gap-2 rounded-2xl bg-zinc-800 px-4 text-sm font-bold tracking-wide text-gray-300 hover:bg-zinc-700 hover:text-white border border-zinc-700 h-full">
          <List size={18} />
          <span className="hidden md:inline">Display</span>
          <ChevronDown size={16} />
        </Button>

        {/* Group 2: Ghost Icon Buttons - Reduced on mobile */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-lg text-gray-400 hover:bg-zinc-800 hover:text-white"
          >
            <Bookmark size={18} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex h-9 w-9 rounded-lg text-gray-400 hover:bg-zinc-800 hover:text-white"
          >
            <Volume2 size={18} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-lg text-gray-400 hover:bg-zinc-800 hover:text-white"
          >
            <RefreshCw size={18} />
          </Button>
        </div>

        {/* Group 3: Final Status Group - Simplified on mobile */}
        <div className="flex h-full items-center gap-2 md:gap-2.5 rounded-2xl border border-zinc-700 px-2 md:px-3 text-sm">
          <Folder size={16} className="text-gray-400" />
          <span className="font-semibold text-white text-xs md:text-sm">1</span>

          {/* IMPORTANT: Placeholder for the custom gradient icon */}
          <Layers3 size={16} className="text-blue-400" />

          <span className="font-semibold text-white text-xs md:text-sm">0</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>
      </div>
    </header>
  );
};
