// components/MobileTokenTable.tsx

import React from "react";
import { cn } from "@/lib/utils";
import type { TokenCardProps } from "@/lib/types";
import { MobileTokenCard } from "@/components/MobileTokenCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface MobileTokenTableProps {
  title: string;
  tokens: TokenCardProps[];
  actions?: React.ReactNode;
  className?: string;
}

export const MobileTokenTable = React.memo(
  ({ title, tokens, actions, className }: MobileTokenTableProps) => {
    return (
      <Card
        className={cn(
          "w-full bg-black border-[#2a2a2a] flex flex-col h-[calc(100vh-8rem)]",
          className
        )}
      >
        <CardHeader className="flex flex-row items-center justify-between text-gray-300 flex-shrink-0 m-2">
          <CardTitle className="text-white text-sm font-medium">
            {title}
          </CardTitle>
          {actions && <div className="flex items-center gap-1">{actions}</div>}
        </CardHeader>

        <CardContent className="flex-grow overflow-hidden px-1">
          <div className="overflow-y-auto overflow-x-hidden h-full custom-scrollbar">
            <div className="flex flex-col w-full">
              {tokens.map((token) => (
                <MobileTokenCard key={token.address} {...token} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
);

MobileTokenTable.displayName = "MobileTokenTable";
