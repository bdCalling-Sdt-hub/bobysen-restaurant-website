"use client";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";

export default function OtpForm() {
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
        Put OTP here
      </h3>

      <div className="grid w-full items-center gap-1.5">
        <Label
          htmlFor="email"
          className="mb-2 block font-semibold text-primary-secondary-1"
        >
          OTP
        </Label>
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          {...register("otp", { required: true })}
        >
          <InputOTPGroup>
            <InputOTPSlot
              index={0}
              className="mr-4 border border-primary-secondary-1"
              style={{ borderRadius: "8px" }}
            />
            <InputOTPSlot
              index={1}
              className="mr-4 border border-primary-secondary-1"
              style={{ borderRadius: "8px" }}
            />
            <InputOTPSlot
              index={2}
              className="mr-4 border border-primary-secondary-1"
              style={{ borderRadius: "8px" }}
            />
            <InputOTPSlot
              index={3}
              className="mr-4 border border-primary-secondary-1"
              style={{ borderRadius: "8px" }}
            />
            <InputOTPSlot
              index={4}
              className="mr-4 border border-primary-secondary-1"
              style={{ borderRadius: "8px" }}
            />
          </InputOTPGroup>
        </InputOTP>
        {errors.otp && (
          <p className={cn("font-kumbh-sans text-primary-secondary-1")}>
            Please enter your one-time password
          </p>
        )}
      </div>

      <Button className="mt-8 h-[45px] w-full rounded-md bg-primary-secondary-1 font-kumbh-sans text-primary-white">
        Submit
      </Button>
    </form>
  );
}
