"use client";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { useVerifyOtpMutation } from "@/redux/api/authApi";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"; // change regex to allow only chars or digits
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoadingButton from "../LoadingButton/LoadingButton";
import { Error_Modal, Success_model } from "@/utils/modalHook";

export default function OtpEnterForm() {
  const [otp, setOtp] = useState("");
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const router = useRouter();

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    try {
      const res = await verifyOtp({ otp: otp }).unwrap();

      if (res?.success) {
        // remove sign up token from session storage
        sessionStorage.removeItem("token");

        Success_model({ title: "OTP verification successful" });

        if (sessionStorage.getItem("forgotPasswordToken")) {
          router.push("/set-new-password");
        } else {
          router.push("/login");
        }
      }
    } catch (error) {
      Error_Modal({ title: error?.data?.message });
    }
  };

  return (
    <form className="container mx-auto sm:w-[65%] md:w-[55%] lg:w-[45%]">
      <div className="mb-7">
        <h3 className="text-2xl font-bold text-primary-secondary-1">
          Put OTP here
        </h3>
        <p className="mt-2 font-medium text-primary-secondary-2">
          OTP expires in 3 minutes
        </p>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label
          htmlFor="otp"
          className="mb-2 block font-semibold text-primary-secondary-1"
        >
          OTP
        </Label>
        <InputOTP
          maxLength={5}
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          id="otp"
          onChange={(value) => setOtp(value)}
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
          </InputOTPGroup>
        </InputOTP>
      </div>

      {!isLoading ? (
        <Button
          disabled={otp?.length < 4}
          className="mt-8 h-[45px] w-full rounded-md bg-primary-secondary-1 font-kumbh-sans text-primary-white"
          onClick={handleVerifyOtp}
        >
          Submit
        </Button>
      ) : (
        <Button
          disabled={true}
          className="mt-8 h-[45px] w-full rounded-md bg-primary-secondary-1 font-kumbh-sans text-primary-white"
        >
          <LoadingButton>Please wait ...</LoadingButton>
        </Button>
      )}
    </form>
  );
}
