// components/TokenTable.tsx

import React from "react";
import { cn } from "@/lib/utils";
import type { TokenCardProps } from "@/lib/types";
import { TokenCard } from "@/components/TokenCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface TokenTableProps {
  title: string;
  tokens: TokenCardProps[];
  actions?: React.ReactNode;
  className?: string;
}

export const TokenTable = React.memo(
  ({ title, tokens, actions, className }: TokenTableProps) => {
    return (
      <Card
        className={cn(
          // Responsive width - shrinks and grows smoothly with container
          "w-full max-w-none lg:max-w-md xl:max-w-lg bg-black border-[#2a2a2a] flex flex-col h-[calc(100vh-11rem)]",
          className
        )}
      >
        <CardHeader className="flex flex-row items-center justify-between text-gray-300 flex-shrink-0 m-3">
          <CardTitle className="text-white text-md font-medium">
            {title}
          </CardTitle>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </CardHeader>

        <CardContent className="flex-grow overflow-hidden">
          <div className="overflow-y-auto h-full custom-scrollbar">
            <div className="flex flex-col">
              {tokens.map((token) => (
                <TokenCard key={token.address} {...token} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
);

TokenTable.displayName = "TokenTable";
