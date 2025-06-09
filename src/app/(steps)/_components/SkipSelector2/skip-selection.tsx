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
  const [selectedTab, setSelectedTab] = useState<string>("8");

  const handleTabChange = (value: SkipType) => {
    console.log("Tab changed to:", value);
    setSelectedSkip(value);
    const skip = skips?.find((s) => s === value);
    if (skip) {
      setSelectedTab(skip.size.toString());
    }
  };
  return (
    <div className="conianer grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="flex h-88 gap-4 ">
        <div className="flex flex-col space-y-2 w-15 border-b border-gray-200 pb-2">
          {skips?.map((skip) => (
            <div
              key={skip.size}
              className="card-height relative w-full h-65 bg-white rounded-sm bg-gray-200 cursor-pointer"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${skip?.size}-yarder-skip.jpg`}
                alt={`${skip?.size} yarder skip`}
                fill
                className="object-cover rounded-sm w-full h-18 transition-all duration-300 ease-in-out"
                priority={true}
                onClick={() => handleTabChange(skip)}
              />
            </div>
          ))}
        </div>
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
          {selectedSkip && "£" + selectedSkip.price_before_vat}
        </h2>
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide border-b border-gray-200 pb-2">
          {skips?.map((skip) => (
            <Button
              key={skip.size}
              variant={
                selectedTab === skip.size.toString() ? "default" : "outline"
              }
              onClick={() => handleTabChange(skip)}
            >
              {skip.size} Yard
            </Button>
          ))}
        </div>
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
        <SecondFormNavigationPopup isOpen={!!selectedSkip} {...selectedSkip} />
      )}
      {/* skips loading error */}
      {skipsError && <p>Error loading skips</p>}
    </div>
  );
}
