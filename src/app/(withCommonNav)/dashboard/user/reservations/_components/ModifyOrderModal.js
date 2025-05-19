"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Phone } from "lucide-react";

export default function ModifyOrderModal({ open, setOpen, reservation }) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-semibold">
            Reservation Modification
          </AlertDialogTitle>
        </AlertDialogHeader>

        <div className="py-4">
          <p className="mb-4">
            For any changes to your dining reservation, including time
            adjustments, party size or any other modification, please contact
            our restaurant directly using one of the numbers below.
          </p>

          <div className="space-y-3 rounded-lg bg-muted p-4">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary-secondary-3" />
              <span className="font-medium">
                Helpline 1: {reservation?.restaurant?.helpLineNumber1}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary-secondary-3" />
              <span className="font-medium">
                Helpline 2: {reservation?.restaurant?.helpLineNumber2}
              </span>
            </div>
          </div>
        </div>

        <AlertDialogFooter>
          <Button
            onClick={() => setOpen(false)}
            className="w-full bg-primary-secondary-3 text-white sm:w-auto"
          >
            I understand
          </Button>

          <AlertDialogCancel className="absolute right-1 top-0 h-auto rounded-full border-none p-2 shadow-none">
            <X size={20} className="text-gray-500" />
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
