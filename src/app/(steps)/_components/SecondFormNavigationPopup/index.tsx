import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SkipType } from "@/types/skip.types";
import { ArrowRight } from "lucide-react";

interface SecondFormNavigationPopupProps extends SkipType {
  isOpen: boolean;
}

export default function FormNavigationPopup({
  isOpen,
  ...props
}: SecondFormNavigationPopupProps) {
  return (
    <Sheet modal={false} open={isOpen}>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent
        side="bottom"
        className="p-4"
        style={{ backgroundColor: "var(--footer)" }}
      >
        <div className="container">
          {/* skip details  */}
          <div className="flex items-start justify-between">
            {/* name and hire period  */}
            <div className="space-y-1">
              <h2 className="text-lg font-bold tracking-tight">
                {props?.size} Yard Skip
              </h2>
              <p className=" text-sm text-gray-500">
                {props?.hire_period_days} day hire period
              </p>
            </div>

            {/* price */}
            <div className="text-end">
              <h3 className="text-2xl font-bold ">
                £{props?.price_before_vat}
              </h3>
              <small className="text-sm text-gray-500">
                ({props?.vat}% VAT)
              </small>
            </div>
          </div>
          {/* action buttons  */}
          <div className="flex justify-between items-center gap-4 w-full md:justify-end mt-4">
            <SheetDescription className="container !p-0">
              You are about to hire a skip. Please review the details above
              before proceeding.
            </SheetDescription>
            <Button
              variant={"outline"}
              className="flex-1 md:flex-initial md:w-26"
            >
              Back
            </Button>
            <Button
              className="flex-1 md:flex-initial md:w-26 text-white"
              style={{ backgroundColor: "var(--chart-2-b)" }}
            >
              Continue <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
