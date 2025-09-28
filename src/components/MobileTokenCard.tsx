// components/MobileTokenCard.tsx

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { TokenCardProps, StatItemProps } from "@/lib/types";
import {
  Copy,
  Search,
  Users,
  Flag,
  Trophy,
  Shield,
  PenTool,
  CircleStop,
  Zap,
  User,
  ChefHat,
  Crosshair,
  Ghost,
  Sprout,
} from "lucide-react";

const BADGE_SCHEMA = [
  { icon: User, color: "green" },
  { icon: ChefHat, color: "green" },
  { icon: Crosshair, color: "red" },
  { icon: Ghost, color: "green" },
  { icon: Sprout, color: "green" },
];

const MobileStatItem = ({ icon: Icon, text }: StatItemProps) => (
  <div className="flex items-center space-x-0.5 text-gray-500 hover:text-gray-300 transition-colors">
    <Icon className="h-3 w-3" />
    {text && <span className="text-[10px] font-medium">{text}</span>}
  </div>
);

export const MobileTokenCard = React.memo(
  ({
    imageUrl,
    imageAlt,
    address,
    showStatusIcon = true,
    name,
    description,
    age,
    userCount,
    flagCount,
    trophyCount,
    shieldStatus,
    marketCap,
    volume,
    fee,
    txCount,
    badgeValues,
    solAmount,
    onSolButtonClick,
    className,
  }: TokenCardProps) => {
    return (
      <div
        className={cn(
          "bg-black text-gray-300 font-sans w-full border border-[#2a2a2a] p-4 overflow-hidden min-h-[120px]",
          className
        )}
      >
        <div className="flex space-x-5 w-full overflow-hidden">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <div className="relative h-[70px] w-[70px]">
              <div className="p-0.5 bg-red-500 rounded-lg h-full w-full">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="rounded-md object-cover border-2 border-red-700"
                />
              </div>
              {showStatusIcon && (
                <div className="absolute -bottom-1 -right-1">
                  <CircleStop className="h-3 w-3 text-red-500 bg-[#1A1B26] rounded-full p-0.5" />
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-grow min-w-0 flex flex-col justify-between">
            {/* Top Row: Name, Description, Icons and Market Data */}
            <div className="flex justify-between items-start">
              {/* Left: Name, Description, Stats */}
              <div className="flex-grow min-w-0 mr-2">
                {/* Name and Description Row */}
                <div className="flex items-center space-x-2 mb-2">
                  <h2 className="text-base font-bold text-white flex-shrink-0">
                    {name}
                  </h2>
                  <p className="text-sm text-gray-400 truncate flex-shrink min-w-0">
                    {description}
                  </p>
                  <Copy className="h-4 w-4 text-gray-500 hover:text-white cursor-pointer flex-shrink-0" />
                </div>

                {/* Age and Address Row */}
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-xs text-gray-400">{age}</span>
                  <span className="text-[10px] text-gray-500 font-mono">
                    {address.slice(0, 4)}...{address.slice(-2)}
                  </span>
                </div>

                {/* Stats Row */}
                <div className="flex items-center space-x-1">
                  <MobileStatItem icon={PenTool} />
                  <MobileStatItem icon={Search} />
                  <MobileStatItem icon={Users} text={userCount} />
                  <MobileStatItem icon={Flag} text={flagCount} />
                  <MobileStatItem icon={Trophy} text={trophyCount} />
                  <MobileStatItem icon={Shield} text={shieldStatus} />
                </div>
              </div>

              {/* Right: Market Data */}
              <div className="flex flex-col items-end justify-start flex-shrink-0">
                <div className="text-right mb-1">
                  <div className="flex items-center justify-end space-x-1">
                    <span className="text-[10px] text-gray-500">MC</span>
                    <span className="text-xs font-bold text-[#55E3C3]">
                      {marketCap}
                    </span>
                  </div>
                  <div className="flex items-center justify-end space-x-1">
                    <span className="text-[10px] text-gray-500">V</span>
                    <span className="text-xs font-bold text-white">
                      {volume}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-[10px] text-gray-500">
                  <span>F</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                  <span className="text-white font-medium">{fee}</span>
                  <span>TX</span>
                  <span className="text-white font-medium">{txCount}</span>
                  <div className="w-4 h-0.5 rounded-full bg-gradient-to-r from-green-400 to-red-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Badges and SOL Button - Full Width, Not Constrained by Image */}
        <div className="flex justify-between items-center w-full mt-3">
          {/* All Badges - positioned at bottom left */}
          <div className="flex items-center space-x-1 flex-wrap">
            {BADGE_SCHEMA.map((badge, index) => {
              const BadgeIcon = badge.icon;
              const value = badgeValues[index];
              return (
                <Badge
                  key={index}
                  className={cn(
                    "bg-transparent font-medium p-0 text-[10px]",
                    badge.color === "red" ? "text-red-400" : "text-green-400"
                  )}
                >
                  <BadgeIcon className="h-2.5 w-2.5 mr-0.5" />
                  {value}
                </Badge>
              );
            })}
          </div>

          {/* SOL Button - positioned at bottom right */}
          <Button
            onClick={onSolButtonClick}
            className="bg-[#526fff] hover:bg-[#526fff]/90 text-black font-bold rounded-2xl h-5 text-[10px] px-2 flex-shrink-0"
          >
            <Zap className="h-2.5 w-2.5 text-black mr-1" /> {solAmount} SOL
          </Button>
        </div>
      </div>
    );
  }
);

MobileTokenCard.displayName = "MobileTokenCard";
