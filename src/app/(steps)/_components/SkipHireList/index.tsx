"use client";

import React, { useState } from "react";
import { SkipType } from "@/types/skip.types";
import { useGetSkipsQuery } from "../../_hooks/useGetSkipsQuery";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useForm } from "react-hook-form";
import FormNavigationPopup from "../FormNavigationPopup";
import SkipSelection from "../SkipSelector2/skip-selection";

export default function SkipHireList() {
  const {
    data: skips,
    isPending: skipsLoading,
    isError: skipsError,
  } = useGetSkipsQuery();

  const { watch, setValue } = useForm();
  const selectedSkip = watch("selectedSkip");
  const [skip, setSkip] = useState<SkipType | null>(null);

  const handleSkipSelect = (skip: SkipType) => {
    // check if the skip is already selected
    if (skip?.id === selectedSkip) {
      setValue("selectedSkip", null); // deselect skip
      setSkip(null); // update skip state
      return;
    }

    setValue("selectedSkip", skip?.id); // set the value of the form
    setSkip(skip); // update skip state
  };

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

      {/* bottom popup with selected skip and action buttons */}
      {skip && <FormNavigationPopup isOpen={!!skip} {...skip} />}
    </>
  );
}
