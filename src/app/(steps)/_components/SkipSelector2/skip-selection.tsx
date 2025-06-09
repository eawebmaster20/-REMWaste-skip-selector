"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useGetSkipsQuery } from "../../_hooks/useGetSkipsQuery";
import Image from "next/image";
import { SkipType } from "@/types/skip.types";
import { Calendar, Truck, Weight, Info } from "lucide-react";
import SecondFormNavigationPopup from "../SecondFormNavigationPopup";

export default function SkipSelection() {
  const { data: skips, isError: skipsError } = useGetSkipsQuery();
  const [selectedSkip, setSelectedSkip] = useState<SkipType | null>(null);
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const handleTabChange = (value: SkipType) => {
    console.log("Tab changed to:", value);
    setSelectedSkip(value);
    const skip = skips?.find((s) => s === value);
    if (skip) {
      setSelectedTab(skip.size.toString());
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex mb-4 p-2 w-full justify-center border-b border-gray-200 pb-2 overflow-x-auto scrollbar-hide space-x-5">
        {skips?.map((skip) => (
          <div
            key={skip.size}
            className={`relative min-w-[60px] sm:min-w-[60px] md:min-w-[60px] h-16 bg-white rounded-sm bg-gray-200 cursor-pointer flex-shrink-0
      ${
        selectedTab === skip.size.toString()
          ? "ring-2 ring-orange-500 ring-offset-2"
          : ""
      }`}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${skip?.size}-yarder-skip.jpg`}
              alt={`${skip?.size} yarder skip`}
              fill
              className="object-cover rounded-sm w-full h-full transition-all duration-300 ease-in-out"
              priority={true}
              onClick={() => handleTabChange(skip)}
            />
            <span className="absolute bottom-1 left-1 right-1 text-center text-xs font-semibold bg-black/40 text-white rounded px-1 py-0.5 pointer-events-none">
              {skip.size} YRD
            </span>
          </div>
        ))}
      </div>
      <div className="conianer grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex h-70 gap-4 ">
          <div className="bg-white rounded-lg shadow-md w-full">
            <div className="relative w-full h-full">
              {selectedSkip ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${selectedSkip?.size}-yarder-skip.jpg`}
                  alt={`${selectedSkip?.size} yarder skip`}
                  fill
                  className="object-cover rounded-lg w-full h-full transition-all duration-300 ease-in-out"
                  priority={true}
                />
              ) : (
                <div className="w-full h-full bg-gray-300 animate-pulse rounded-lg" />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold mb-9">
            {selectedSkip && (
              <span className="flex gap-3">
                <span>£{selectedSkip.price_before_vat}</span>
                <span>
                  <small className="text-lg text-gray-500">
                    {"( " + selectedSkip?.size + "Yard Skip )"}
                  </small>
                </span>
              </span>
            )}
          </h2>
          {/* Skip Details */}
          {selectedSkip ? (
            <div className="mb-6 space-y-4">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium">Hire Period</h4>
                  <p className="text-sm text-gray-500">
                    {selectedSkip?.hire_period_days} days standard hire included
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Truck className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium">Allowed on Road</h4>
                  <p className="text-sm text-gray-500">
                    {selectedSkip?.allowed_on_road ? "Yes." : "No"}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Weight className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium">Waste Types</h4>
                  <p className="text-sm text-gray-500">
                    {selectedSkip?.allows_heavy_waste
                      ? "Heavy waste allowed."
                      : "Not suitable for heavy waste."}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Info className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium">Transport Cost</h4>
                  <p className="text-sm text-gray-600">
                    {selectedSkip?.transport_cost}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-gray-500">
                Please select a skip to view details.
              </p>
            </div>
          )}
        </div>
        {selectedSkip && (
          <SecondFormNavigationPopup
            isOpen={!!selectedSkip}
            {...selectedSkip}
          />
        )}
        {/* skips loading error */}
        {skipsError && <p>Error loading skips</p>}
      </div>
    </div>
  );
}
