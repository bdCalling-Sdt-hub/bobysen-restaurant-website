"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useGetSingleUserQuery } from "@/redux/api/authApi";
import { useEffect, useState } from "react";

export default function UserProfileForm() {
  const data = useGetSingleUserQuery();
  console.log(data);

  const { fullName, phoneNumber } = data?.data;

  const [date, setDate] = useState("");

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  // set form default values
  useEffect(() => {
    let defaultValues = {};
    (defaultValues.name = fullName),
      (defaultValues.contactNumber = phoneNumber);
    reset({ ...defaultValues });
  }, []);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center gap-6 lg:flex-row">
        {/* full name */}
        <div className="grid w-full items-center gap-1.5 font-kumbh-sans lg:w-[50%]">
          <Label htmlFor="full Name" className="mb-1">
            Full Name
          </Label>
          <Input
            type="text"
            id="full Name"
            placeholder="Full Name"
            {...register("name", { required: true })}
            className="border border-primary-secondary-3 bg-primary-white-light text-primary-black"
          />
        </div>

        {/* gender */}
        <div className="w-full font-kumbh-sans lg:w-[25%]">
          <Label htmlFor="sex" className="mb-1">
            Sex
          </Label>

          <Controller
            control={control}
            name="sex"
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field}>
                <SelectTrigger className="border border-primary-secondary-3 text-primary-secondary-3">
                  <SelectValue placeholder="Sex" />
                </SelectTrigger>
                <SelectContent className="border border-primary-secondary-3 text-primary-secondary-3">
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        {/* date picker */}
        <div className="w-full lg:w-[25%]">
          <Label htmlFor="Date of birth" className="mb-1 block">
            Date of birth
          </Label>
          <Popover className="border border-primary-secondary-3">
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start border border-primary-secondary-3 text-left font-normal text-primary-secondary-3",
                  !date && "text-muted-foreground",
                )}
              >
                {date ? format(date, "PPP") : <span>Pick a date</span>}
                <CalendarIcon className="ml-auto mr-1 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Contact Number */}
      <div className="my-8 grid w-full items-center gap-1.5 font-kumbh-sans lg:w-[48%]">
        <Label htmlFor="contact Number" className="mb-1">
          Contact Number
        </Label>
        <Input
          type="tel"
          id="contactNumber"
          placeholder="Contact Number"
          {...register("contactNumber", { required: true })}
          className="border border-primary-secondary-3 bg-primary-white-light text-primary-black"
        />
      </div>

      {/* passwords */}
      <div className="flex flex-col items-center gap-y-8 lg:flex-row lg:gap-x-6 lg:gap-y-0">
        <div className="grid w-full items-center gap-1.5 font-kumbh-sans lg:w-[50%]">
          <Label htmlFor="oldPassword" className="mb-1">
            Old Password
          </Label>
          <Input
            type="password"
            id="oldPassword"
            placeholder="Old password"
            {...register("oldPassword", { required: true })}
            className="border border-primary-secondary-3 bg-primary-white-light text-primary-black"
          />
        </div>

        <div className="grid w-full items-center gap-1.5 font-kumbh-sans lg:w-[50%]">
          <Label htmlFor="newPassword" className="mb-1">
            A new Password
          </Label>
          <Input
            type="password"
            id="newPassword"
            placeholder="New password"
            {...register("newPassword", { required: true })}
            className="border border-primary-secondary-3 bg-primary-white-light text-primary-black"
          />
        </div>

        <div className="grid w-full items-center gap-1.5 font-kumbh-sans lg:w-[50%]">
          <Label htmlFor="confirmPassword" className="mb-1">
            Confirm Password
          </Label>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            {...register("confirmPassword", { required: true })}
            className="border border-primary-secondary-3 bg-primary-white-light text-primary-black"
          />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:flex-row lg:gap-x-16 lg:gap-y-0">
        <Button
          className="bg-primary-secondary-3 font-kumbh-sans text-primary-white"
          size="lg"
        >
          Save Changes
        </Button>

        {/* Delete Account Modal */}
        <AlertDialog>
          <AlertDialogTrigger>
            <Button
              variant="outline"
              className="w-full border-primary-danger bg-transparent font-kumbh-sans text-primary-danger hover:bg-primary-danger hover:text-primary-white"
              size="lg"
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
    </form>
  );
}
