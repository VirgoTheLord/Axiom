// components/TokenCard.tsx

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { TokenCardProps, StatItemProps } from "@/lib/types"; // Import types
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

const StatItem = ({ icon: Icon, text }: StatItemProps) => (
  <div className="flex items-center space-x-1 text-gray-500 hover:text-gray-300 transition-colors">
    <Icon className="h-4 w-4" />
    {text && <span className="text-xs font-medium">{text}</span>}
  </div>
);

export const TokenCard = React.memo(
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
          "bg-black text-gray-300 p-2.25 border border-[#2a2a2a] font-sans w-full max-w-lg mx-auto",
          className
        )}
      >
        <div className="flex space-x-3">
          <div className="flex flex-col flex-shrink-0 items-center justify-start">
            <div className="relative h-[88px] w-[88px]">
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
                  <CircleStop className="h-5 w-5 text-red-500 bg-[#1A1B26] rounded-full p-0.5" />
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500 font-mono mt-1">{address}</p>
          </div>

          <div className="flex flex-col justify-between flex-grow min-w-0">
            <div className="flex justify-between min-w-0">
              <div className="flex flex-col justify-start flex-grow min-w-0">
                <div className="flex items-center space-x-2">
                  <h2 className="text-lg font-bold text-white">{name}</h2>
                  <p className="text-base text-gray-400 truncate">
                    {description}
                  </p>
                  <Copy className="h-4 w-4 text-gray-500 hover:text-white cursor-pointer flex-shrink-0" />
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-gray-400">{age}</span>
                  <StatItem icon={PenTool} />
                  <StatItem icon={Search} />
                  <StatItem icon={Users} text={userCount} />
                  <StatItem icon={Flag} text={flagCount} />
                  <StatItem icon={Trophy} text={trophyCount} />
                  <StatItem icon={Shield} text={shieldStatus} />
                </div>
              </div>
              <div className="flex flex-col items-end justify-start flex-shrink-0 pl-2">
                <div className="text-right">
                  <div className="flex items-center justify-end space-x-1.5">
                    <span className="text-xs text-gray-500">MC</span>
                    <span className="text-base font-bold text-[#55E3C3]">
                      {marketCap}
                    </span>
                  </div>
                  <div className="flex items-center justify-end space-x-1.5">
                    <span className="text-xs text-gray-500">V</span>
                    <span className="text-base font-bold text-white">
                      {volume}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-gray-500 mt-0.5">
                  <span>F</span>
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span className="text-white font-medium">{fee}</span>
                  <span>TX</span>
                  <span className="text-white font-medium">{txCount}</span>
                  <div className="w-6 h-1 rounded-full bg-gradient-to-r from-green-400 to-red-500"></div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div className="flex items-center space-x-2">
                {BADGE_SCHEMA.map((badge, index) => {
                  const BadgeIcon = badge.icon;
                  const value = badgeValues[index];
                  return (
                    <Badge
                      key={index}
                      className={cn(
                        "bg-transparent text-xs font-medium p-0",
                        badge.color === "red"
                          ? "text-red-400"
                          : "text-green-400"
                      )}
                    >
                      <BadgeIcon className="h-3 w-3 mr-1" />
                      {value}
                    </Badge>
                  );
                })}
              </div>

              <Button
                onClick={onSolButtonClick}
                className="bg-[#526fff] hover:bg-[#526fff]/90 text-black font-bold h-6 text-sm px-1 rounded-2xl"
              >
                <Zap className="h-3.5 w-3.5 text-black" /> {solAmount} SOL
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

TokenCard.displayName = "TokenCard";
