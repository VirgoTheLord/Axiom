// lib/types.ts

import type { ElementType } from "react";

export interface StatItemProps {
  icon: ElementType;
  text?: string | number;
}

export interface TokenBadge {
  icon: ElementType;
  value: string;
  color: "green" | "red";
}

export interface TokenCardProps {
  imageUrl: string;
  imageAlt: string;
  address: string;
  showStatusIcon?: boolean;
  name: string;
  description: string;
  age: string;
  userCount: number;
  flagCount: number;
  trophyCount: number;
  shieldStatus: string;
  marketCap: string;
  volume: string;
  fee: number | string;
  txCount: number;
  badgeValues: [string, string, string, string, string];
  solAmount: number;
  onSolButtonClick?: () => void;
  className?: string;
}
