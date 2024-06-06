"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function SetNewPassForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container mx-auto sm:w-[65%] md:w-[55%] lg:w-[45%]"
    >
      <h3 className="mb-12 text-2xl font-bold text-primary-secondary-1">
        Set New Password
      </h3>

      <div className="grid w-full items-center gap-1.5">
        <Label
          htmlFor="newPassword"
          className="mb-2 block font-semibold text-primary-secondary-1"
        >
          Enter New Password
        </Label>
        <Input
          type="password"
          id="newPassword"
          {...register("newPassword", { required: true })}
          className="border border-primary-secondary-1 text-primary-black"
        />
        {errors.newPassword && (
          <p className={cn("font-kumbh-sans text-primary-secondary-1")}>
            New Password is required
          </p>
        )}
      </div>

      <div className="mt-8 grid w-full items-center gap-1.5">
        <Label
          htmlFor="confirmPassword"
          className="mb-2 block font-semibold text-primary-secondary-1"
        >
          Confirm Password
        </Label>
        <Input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword", { required: true })}
          className="border border-primary-secondary-1 text-primary-black"
        />
        {errors.confirmPassword && (
          <p className={cn("font-kumbh-sans text-primary-secondary-1")}>
            Confirm Password is required
          </p>
        )}
      </div>

      <Button className="mt-8 h-[45px] w-full rounded-md bg-primary-secondary-1 font-kumbh-sans text-primary-white">
        Submit
      </Button>
    </form>
  );
}
