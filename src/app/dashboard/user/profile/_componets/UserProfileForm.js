"use client";
import { Button } from "@/components/ui/button";
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
import UserDetailsForm from "./UserDetailsForm";
import PasswordChangeForm from "./PasswordChangeForm";

export default function UserProfileForm() {
  return (
    <>
      <UserDetailsForm />

      {/* passwords */}
      <PasswordChangeForm />

      <div className="mt-16 grid lg:grid-cols-1">
        <AlertDialog>
          <AlertDialogTrigger>
            <Button
              variant="outline"
              className="w-full border-primary-danger bg-transparent font-kumbh-sans text-primary-danger hover:bg-primary-danger hover:text-primary-white"
              size="lg"
              type="button"
            >
              Delete Account
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="px-7 py-10">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-center text-3xl">
                Are you absolutely sure?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-center text-lg">
                You won&apos;t be able to recover your previous data
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="mt-6 grid grid-cols-1 lg:grid-cols-2">
              <AlertDialogAction
                className="border border-primary-danger bg-transparent text-primary-danger hover:bg-primary-danger hover:text-primary-white"
                variant="outline"
              >
                Confirm
              </AlertDialogAction>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
}
