"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useSignUpMutation } from "@/redux/api/authApi";
import { Error_Modal, Success_model } from "@/utils/modalHook";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LoadingButton from "../LoadingButton/LoadingButton";
import { Button } from "../ui/button";
import eyeIcon from "/public/signUp/eyeIcon.svg";
import eyeOffIcon from "/public/signUp/eyeOffIcon.svg";
import { useSelector } from "react-redux";
import EyeIconInverse from "../EyeIconInverse/EyeIconInverse";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [signUp, { isLoading }] = useSignUpMutation();
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  const onSubmit = async (data) => {
    const { fname, lname } = data;

    data.fullName = fname + " " + lname;

    // delete non-required values
    delete data.fname;
    delete data.lname;
    delete data.confirmPassword;

    try {
      const res = await signUp(data).unwrap();
      if (res?.data?.token) {
        Success_model({
          title: "Registration Successful!",
          text: "A verification code was sent to your email. Enter otp code to verify your identity",
        });

        // set sign up token to session-storage
        sessionStorage.setItem("token", res?.data?.token);

        router.push("/verify-otp");
      }
    } catch (error) {
      Error_Modal({
        title:
          error?.data?.message.charAt(0).toUpperCase() +
          error?.data?.message.slice(1),
      });
    }
  };

  // !-------- If user already exits then auto redirect -------
  useLayoutEffect(() => {
    if (user?.userId) {
      router.back();
    }
  }, [user?.userId]);

  // !----------------------------------------------------------

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 max-h-[700px] overflow-auto p-4"
    >
      <div className="space-y-6">
        {/* first name */}
        <div className="grid w-full items-center gap-1.5">
          <Label
            htmlFor="fname"
            className="mb-1 block font-semibold text-primary-secondary-1"
          >
            First Name *
          </Label>
          <Input
            type="text"
            id="fname"
            placeholder="Enter your first name"
            {...register("fname", { required: true })}
            className="border border-primary-secondary-1 text-primary-black"
          />
          {errors.fname && (
            <p className={cn("font-kumbh-sans text-primary-danger")}>
              First Name is required
            </p>
          )}
        </div>

        {/* last name */}
        <div className="grid w-full items-center gap-1.5">
          <Label
            htmlFor="lname"
            className="mb-1 block font-semibold text-primary-secondary-1"
          >
            Last Name *
          </Label>
          <Input
            type="text"
            id="lname"
            placeholder="Enter your last name"
            {...register("lname", { required: true })}
            className="border border-primary-secondary-1 text-primary-black"
          />
          {errors.lname && (
            <p className={cn("font-kumbh-sans text-primary-danger")}>
              Last Name is required
            </p>
          )}
        </div>

        {/* contact number */}
        <div className="grid w-full items-center gap-1.5">
          <Label
            htmlFor="phoneNumber"
            className="mb-1 block font-semibold text-primary-secondary-1"
          >
            Phone Number *
          </Label>
          <Input
            type="tel"
            id="phoneNumber"
            placeholder="Enter phone number"
            {...register("phoneNumber", {
              required: true,
              minLength: 10,
              maxLength: 15,
            })}
            className="border border-primary-secondary-1 text-primary-black"
          />
          {errors.phoneNumber && (
            <p className={cn("font-kumbh-sans text-primary-danger")}>
              {errors.phoneNumber.type === "required"
                ? "Phone Number is required"
                : "Phone Number cannot be less than 10 or more than 15"}
            </p>
          )}
        </div>

        {/* email */}
        <div className="grid w-full items-center gap-1.5">
          <Label
            htmlFor="email"
            className="mb-1 block font-semibold text-primary-secondary-1"
          >
            Email *
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="....@gmail.com"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            className="border border-primary-secondary-1 text-primary-black"
          />
          {errors.email && (
            <p className={cn("font-kumbh-sans text-primary-danger")}>
              {errors.email.type === "pattern"
                ? "Invalid Email Address"
                : "Email is required"}
            </p>
          )}
        </div>

        {/* new password */}
        <div className="mt-6 grid w-full items-center gap-1.5">
          <Label
            htmlFor="password"
            className="font-semibold text-primary-secondary-1"
          >
            Password *
          </Label>

          <div className="relative">
            <Input
              type={showNewPass ? "text" : "password"}
              id="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
              })}
              className="border-primary-secondary-1 text-primary-black"
            />
            <EyeIconInverse
              showPassword={showNewPass}
              setShowPassword={setShowNewPass}
            />
          </div>

          {errors.password && (
            <p className={cn("font-kumbh-sans text-primary-danger")}>
              {errors.password.type === "pattern"
                ? "Password must have one uppercase letter, one special Character, one number and no less than 8 letters."
                : "New Password is required"}
            </p>
          )}
        </div>

        {/* confirm password */}
        <div className="mt-6 grid w-full items-center gap-1.5">
          <Label
            htmlFor="confirmPassword"
            className="font-semibold text-primary-secondary-1"
          >
            Confirm Password *
          </Label>

          <div className="relative">
            <Input
              type={showConfirmPass ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: true,
                validate: (val) => {
                  if (watch("password") != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
              className="border-primary-secondary-1 text-primary-black"
            />

            <EyeIconInverse
              showPassword={showConfirmPass}
              setShowPassword={setShowConfirmPass}
            />
          </div>

          {errors.confirmPassword && (
            <p className={cn("font-kumbh-sans text-primary-danger")}>
              {errors.confirmPassword.type === "validate"
                ? "Your passwords do not match"
                : "Confirm Password is required"}
            </p>
          )}
        </div>
      </div>

      {!isLoading ? (
        <Button
          type="submit"
          className="mt-8 h-[45px] w-full rounded-md bg-primary-secondary-1 font-kumbh-sans text-primary-white"
        >
          Create Account
        </Button>
      ) : (
        <Button
          color={"text-black"}
          className="mt-8 h-[45px] w-full rounded-md bg-primary-secondary-1 font-kumbh-sans text-primary-white"
          disabled={true}
        >
          <LoadingButton>Please Wait...</LoadingButton>
        </Button>
      )}

      <div className="mt-5 flex items-center justify-center gap-4">
        <p className="font-kumbh-sans text-primary-secondary-1">
          Already a member?
        </p>
        {/* TODO: Add relevant Link */}
        <Link
          href="/login"
          className="border-b border-b-primary-secondary-3 font-kumbh-sans text-primary-secondary-3"
        >
          Sign In
        </Link>
      </div>
    </form>
  );
}
