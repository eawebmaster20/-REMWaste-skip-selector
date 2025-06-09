"use client";

import React from "react";
import { useGetSkipsQuery } from "../../_hooks/useGetSkipsQuery";
import LoadingSpinner from "@/components/LoadingSpinner";
import SkipSelection from "../SkipSelector2/skip-selection";

export default function SkipHireList() {
  const { isPending: skipsLoading, isError: skipsError } = useGetSkipsQuery();

  return (
    <>
      {/* skips loading */}
      {skipsLoading && (
        <div className="flex items-center justify-center h-[50vh]">
          <LoadingSpinner size="lg" className="mx-auto text-orange-500" />
        </div>
      )}

      <SkipSelection />

      {/* skips loading error */}
      {skipsError && <p>Error loading skips</p>}
    </>
  );
}
