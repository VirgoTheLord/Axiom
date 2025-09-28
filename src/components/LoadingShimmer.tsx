// components/LoadingShimmer.tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";

// Base shimmer component
export const Shimmer: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("shimmer rounded", className)} />
);

// Skeleton for TokenCard (Desktop/Tablet version) - matches exact structure
export const TokenCardSkeleton: React.FC<{ className?: string }> = ({
  className,
}) => (
  <div
    className={cn(
      "bg-black text-gray-300 p-2.25 border border-[#2a2a2a] font-sans w-full max-w-lg mx-auto",
      className
    )}
  >
    <div className="flex space-x-3">
      {/* Left side - Image and address */}
      <div className="flex flex-col flex-shrink-0 items-center justify-start">
        <div className="relative h-[88px] w-[88px]">
          <div className="p-0.5 bg-[#2a2a2a] rounded-lg h-full w-full">
            <Shimmer className="rounded-md h-full w-full" />
          </div>
        </div>
        <Shimmer className="h-3 w-16 mt-1" />
      </div>

      {/* Right side content */}
      <div className="flex flex-col justify-between flex-grow min-w-0">
        <div className="flex justify-between min-w-0">
          {/* Left content */}
          <div className="flex flex-col justify-start flex-grow min-w-0">
            <div className="flex items-center space-x-2">
              <Shimmer className="h-5 w-20" />
              <Shimmer className="h-4 w-24" />
              <Shimmer className="h-4 w-4" />
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <Shimmer className="h-3 w-12" />
              {/* Stat icons */}
              {Array.from({ length: 6 }).map((_, i) => (
                <Shimmer key={i} className="h-4 w-4" />
              ))}
            </div>
          </div>

          {/* Right content - MC and Volume */}
          <div className="flex flex-col items-end justify-start flex-shrink-0 pl-2">
            <div className="text-right">
              <div className="flex items-center justify-end space-x-1.5 mb-1">
                <Shimmer className="h-3 w-6" />
                <Shimmer className="h-4 w-16" />
              </div>
              <div className="flex items-center justify-end space-x-1.5">
                <Shimmer className="h-3 w-3" />
                <Shimmer className="h-4 w-14" />
              </div>
            </div>
            <div className="flex items-center space-x-1.5 mt-0.5">
              <Shimmer className="h-3 w-3" />
              <Shimmer className="h-2 w-2 rounded-full" />
              <Shimmer className="h-3 w-8" />
              <Shimmer className="h-3 w-6" />
              <Shimmer className="h-1 w-6 rounded-full" />
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex justify-between items-end">
          <div className="flex items-center space-x-2">
            {/* Badge skeletons */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-0.5">
                <Shimmer className="h-3 w-3" />
                <Shimmer className="h-3 w-4" />
              </div>
            ))}
          </div>
          <Shimmer className="h-8 w-16 rounded" />
        </div>
      </div>
    </div>
  </div>
);

// Skeleton for MobileTokenCard - matches exact mobile structure
export const MobileTokenCardSkeleton: React.FC<{ className?: string }> = ({
  className,
}) => (
  <div
    className={cn(
      "bg-black text-gray-300 p-3 border border-[#2a2a2a] font-sans w-full",
      className
    )}
  >
    {/* Top section */}
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-start space-x-2 flex-grow min-w-0">
        {/* Image */}
        <div className="relative h-12 w-12 flex-shrink-0">
          <div className="p-0.5 bg-[#2a2a2a] rounded-md h-full w-full">
            <Shimmer className="rounded h-full w-full" />
          </div>
        </div>

        {/* Name and description */}
        <div className="flex flex-col flex-grow min-w-0">
          <div className="flex items-center space-x-1.5 mb-1">
            <Shimmer className="h-4 w-16" />
            <Shimmer className="h-3 w-20" />
            <Shimmer className="h-3 w-3" />
          </div>
          <div className="flex items-center space-x-1">
            <Shimmer className="h-3 w-8" />
            {/* Stat icons */}
            {Array.from({ length: 6 }).map((_, i) => (
              <Shimmer key={i} className="h-3 w-3" />
            ))}
          </div>
        </div>
      </div>

      {/* Right side MC/V */}
      <div className="flex flex-col items-end text-right flex-shrink-0 ml-2">
        <div className="flex items-center space-x-1 mb-0.5">
          <Shimmer className="h-3 w-4" />
          <Shimmer className="h-3 w-12" />
        </div>
        <div className="flex items-center space-x-1">
          <Shimmer className="h-3 w-3" />
          <Shimmer className="h-3 w-10" />
        </div>
      </div>
    </div>

    {/* Middle section - 4 columns */}
    <div className="grid grid-cols-4 gap-1 text-xs mb-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="text-center">
          <Shimmer className="h-3 w-8 mx-auto mb-1" />
          <Shimmer className="h-3 w-10 mx-auto" />
        </div>
      ))}
    </div>

    {/* Bottom section */}
    <div className="flex justify-between items-center pt-2 border-t border-[#2a2a2a]">
      <div className="flex items-center space-x-1">
        {/* Badge skeletons */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-0.5">
            <Shimmer className="h-3 w-3" />
            <Shimmer className="h-2 w-3" />
          </div>
        ))}
      </div>
      <Shimmer className="h-6 w-12 rounded" />
    </div>

    {/* Address */}
    <div className="mt-2 text-center">
      <Shimmer className="h-2 w-24 mx-auto" />
    </div>
  </div>
);

// Skeleton for TokenTable component
export const TokenTableSkeleton: React.FC<{
  title: string;
  className?: string;
}> = ({ title, className }) => (
  <div
    className={cn(
      "w-full max-w-none lg:max-w-md xl:max-w-lg bg-black border-[#2a2a2a] flex flex-col h-[calc(100vh-11rem)] border",
      className
    )}
  >
    {/* Header */}
    <div className="flex flex-row items-center justify-between text-gray-300 flex-shrink-0 m-3">
      <h3 className="text-white text-md font-medium">{title}</h3>
      <div className="flex items-center gap-2">
        <Shimmer className="w-8 h-8 rounded" />
        <Shimmer className="w-8 h-8 rounded" />
      </div>
    </div>

    {/* Content */}
    <div className="flex-grow overflow-hidden">
      <div className="overflow-y-auto h-full custom-scrollbar">
        <div className="flex flex-col">
          {Array.from({ length: 8 }).map((_, index) => (
            <TokenCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Skeleton for MobileTokenView
export const MobileTokenViewSkeleton: React.FC = () => (
  <div className="flex flex-col h-full">
    {/* Mobile Tab Navigation */}
    <div className="flex bg-black rounded-lg p-0.5 mb-4 w-fit">
      {Array.from({ length: 3 }).map((_, i) => (
        <Shimmer key={i} className="w-20 h-7 mx-0.5 rounded-md" />
      ))}
    </div>

    {/* Mobile Cards */}
    <div className="flex-1 overflow-y-auto">
      <div className="flex flex-col w-full">
        {Array.from({ length: 6 }).map((_, index) => (
          <MobileTokenCardSkeleton key={index} className="w-full mb-3" />
        ))}
      </div>
    </div>
  </div>
);

// Skeleton for TabletTokenView
export const TabletTokenViewSkeleton: React.FC = () => (
  <div className="flex flex-col h-full">
    {/* Tab Navigation */}
    <div className="flex bg-[#1a1a1a] border-b border-[#333] mb-4 overflow-x-auto">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="px-6 py-4">
          <Shimmer className="w-24 h-5" />
        </div>
      ))}
    </div>

    {/* Tablet Cards */}
    <div className="flex-1 overflow-y-auto">
      <div className="flex flex-col w-full">
        {Array.from({ length: 8 }).map((_, index) => (
          <TokenCardSkeleton
            key={index}
            className="w-full max-w-none mx-0 mb-3"
          />
        ))}
      </div>
    </div>
  </div>
);

// Skeleton for PulseHeader
export const PulseHeaderSkeleton: React.FC = () => (
  <div className="hidden md:block mb-4">
    <div className="flex items-center justify-between p-4">
      <Shimmer className="h-8 w-32" />
      <div className="flex items-center gap-4">
        <Shimmer className="h-6 w-24" />
        <Shimmer className="h-8 w-20 rounded" />
      </div>
    </div>
  </div>
);

// Main loading component that matches the exact page structure
export const MainLoadingShimmer: React.FC = () => (
  <div className="bg-black min-h-screen w-full flex flex-col p-2 md:p-3 lg:p-4">
    {/* Header on tablet and desktop */}
    <div className="hidden md:block">
      <PulseHeaderSkeleton />
    </div>

    {/* Desktop Layout - Hidden on tablet and mobile */}
    <div className="hidden lg:flex flex-grow gap-4">
      <TokenTableSkeleton title="New Pairs" className="flex-1 min-w-0" />
      <TokenTableSkeleton title="Final Stretch" className="flex-1 min-w-0" />
      <TokenTableSkeleton title="Migrated" className="flex-1 min-w-0" />
    </div>

    {/* Tablet Layout - Visible on tablet only */}
    <div className="hidden md:block lg:hidden h-full">
      <TabletTokenViewSkeleton />
    </div>

    {/* Mobile Layout - Hidden on tablet and desktop */}
    <div className="md:hidden h-full">
      <MobileTokenViewSkeleton />
    </div>
  </div>
);
