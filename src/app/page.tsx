// app/page.tsx

"use client";

import { allTokensData } from "@/lib/data";
import { TokenTable } from "@/components/TokenTable";
// 👇 Import the two new components
import { ActionGroup, FilterButton } from "@/components/TokenTableActions";

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full flex justify-center p-4 lg:p-12">
      <TokenTable
        title="New Pairs"
        tokens={allTokensData}
        // 👇 Pass both components to the actions prop
        actions={
          <>
            <ActionGroup />
            <FilterButton />
          </>
        }
      />
    </div>
  );
}
