"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import eyeIcon from "/public/signUp/eyeIcon.svg";
import eyeOffIcon from "/public/signUp/eyeOffIcon.svg";
import Image from "next/image";
import { useState } from "react";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // show password states
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
      <div className="space-y-6">
        <div className="grid w-full items-center gap-1.5">
          <Label
            htmlFor="fname"
            className="mb-1 block font-semibold text-primary-secondary-1"
          >
            First Name
          </Label>
          <Input
            type="text"
            id="fname"
            placeholder="Enter your first name"
            {...register("fname", { required: true })}
            className="border border-primary-secondary-1 text-primary-black"
          />
          {errors.fname && (
            <p className={cn("font-kumbh-sans text-primary-secondary-1")}>
              First Name is required
            </p>
          )}
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label
            htmlFor="lname"
            className="mb-1 block font-semibold text-primary-secondary-1"
          >
            Last Name
          </Label>
          <Input
            type="text"
            id="lname"
            placeholder="Enter your last name"
            {...register("lname", { required: true })}
            className="border border-primary-secondary-1 text-primary-black"
          />
          {errors.lname && (
            <p className={cn("font-kumbh-sans text-primary-secondary-1")}>
              Last Name is required
            </p>
          )}
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label
            htmlFor="contactNumber"
            className="mb-1 block font-semibold text-primary-secondary-1"
          >
            Contact Number
          </Label>
          <Input
            type="number"
            id="contactNumber"
            placeholder="+88#########48"
            {...register("contactNumber", { required: true })}
            className="border border-primary-secondary-1 text-primary-black"
          />
          {errors.contactNumber && (
            <p className={cn("font-kumbh-sans text-primary-secondary-1")}>
              Contact Number is required
            </p>
          )}
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label
            htmlFor="email"
            className="mb-1 block font-semibold text-primary-secondary-1"
          >
            Email
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
            <p className={cn("font-kumbh-sans text-primary-secondary-1")}>
              Email is required
            </p>
          )}
        </div>

        <div className="mt-6 grid w-full items-center gap-1.5">
          <Label
            htmlFor="newPassword"
            className="font-semibold text-primary-secondary-1"
          >
            New Password
          </Label>

          <div className="relative">
            <Input
              type={showNewPass ? "text" : "password"}
              id="newPassword"
              placeholder="New Password"
              {...register("newPassword", { required: true })}
              className="border-primary-secondary-1 text-primary-black"
            />
            {!showNewPass ? (
              <Image
                src={eyeIcon}
                alt="show password icon"
                className="absolute right-1 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[80%]"
                onClick={() => setShowNewPass(!showNewPass)}
                role="button"
              />
            ) : (
              <Image
                src={eyeOffIcon}
                alt="hide password icon"
                className="absolute right-1 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[80%]"
                onClick={() => setShowNewPass(!showNewPass)}
                role="button"
              />
            )}
          </div>

          {errors.newPassword && (
            <p className={cn("font-kumbh-sans text-primary-secondary-1")}>
              New Password is required
            </p>
          )}
        </div>

        <div className="mt-6 grid w-full items-center gap-1.5">
          <Label
            htmlFor="confirmPassword"
            className="font-semibold text-primary-secondary-1"
          >
            Confirm Password
          </Label>

          <div className="relative">
            <Input
              type={showConfirmPass ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm your password"
              {...register("confirmPassword", { required: true })}
              className="border-primary-secondary-1 text-primary-black"
            />
            {!showConfirmPass ? (
              <Image
                src={eyeIcon}
                alt="show password icon"
                className="absolute right-1 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[80%]"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                role="button"
              />
            ) : (
              <Image
                src={eyeOffIcon}
                alt="hide password icon"
                className="absolute right-1 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[80%]"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                role="button"
              />
            )}
          </div>

          {errors.confirmPassword && (
            <p className={cn("font-kumbh-sans text-primary-secondary-1")}>
              Confirm Password is required
            </p>
          )}
        </div>
      </div>

      <Button className="mt-8 h-[45px] w-full rounded-md bg-primary-secondary-1 font-kumbh-sans text-primary-white">
        Create Account
      </Button>

      <div className="mt-5 flex items-center justify-center gap-4">
        <p className="font-kumbh-sans text-primary-secondary-1">
          Already a member?
        </p>
        {/* TODO: Add relevant Link */}
        <Link
          href="#"
          className="border-b border-b-primary-secondary-3 font-kumbh-sans text-primary-secondary-3"
        >
          Sign In
        </Link>
      </div>
    </form>
  );
}
