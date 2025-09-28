// components/TokenTableActions.tsx

import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { List, SlidersHorizontal, Zap } from "lucide-react"; // Added 'List' for the icon
import React from "react";

/**
 * The main, fully-rounded group for the primary actions.
 */
export const ActionGroup = () => {
  return (
    <div className="flex h-7 items-center gap-2 rounded-full bg-[#1A1B26] border border-[#2a2a2a]">
      {/* Zap Button */}
      <Button
        variant="ghost"
        className="flex items-center gap-1.5 h-full rounded-full px-2 text-white hover:bg-transparent hover:text-white"
      >
        <Zap size={16} className="text-gray-400" />
        <span className="text-xs font-semibold tracking-tighter">0</span>
      </Button>

      {/* Icon Placeholder - non-interactive */}
      <div className="flex items-center justify-center h-5 w-5 pointer-events-none">
        <List size={18} className="text-gray-400" />
      </div>

      {/* Separator */}
      <div className="h-4 w-px bg-gray-700" />

      {/* Priority Toggle Group */}
      <ToggleGroup type="single" defaultValue="p1" className="gap-0.5">
        <ToggleGroupItem
          value="p1"
          aria-label="Priority 1"
          className="h-full rounded-full px-2.5 text-xs tracking-tighter font-semibold text-gray-400 data-[state=on]:text-[#3667E8] hover:bg-transparent data-[state=on]:bg-transparent"
        >
          P1
        </ToggleGroupItem>
        <ToggleGroupItem
          value="p2"
          aria-label="Priority 2"
          className="h-full rounded-full px-2.5 text-xs tracking-tighter font-semibold text-gray-400 data-[state=on]:text-[#3667E8] hover:bg-transparent data-[state=on]:bg-transparent"
        >
          P2
        </ToggleGroupItem>
        <ToggleGroupItem
          value="p3"
          aria-label="Priority 3"
          className="h-full rounded-full px-2.5 text-xs tracking-tighter font-semibold text-gray-400 data-[state=on]:text-[#3667E8] hover:bg-transparent data-[state=on]:bg-transparent"
        >
          P3
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

/**
 * The separate, circular button for the filter action.
 */
export const FilterButton = () => {
  return (
    <Button
      variant="ghost"
      className="h-7 w-7 rounded-full p-0 text-gray-400 hover:bg-zinc-900 hover:text-white"
    >
      <SlidersHorizontal size={14} />
    </Button>
  );
};
