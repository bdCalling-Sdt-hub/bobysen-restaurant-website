"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
      <div className="grid w-full items-center gap-1.5">
        <Label
          htmlFor="nameOrEmail"
          className="mb-1 block font-semibold text-primary-secondary-1"
        >
          Username or Email
        </Label>
        <Input
          type="email"
          id="nameOrEmail"
          {...register("nameOrEmail", { required: true })}
          className="border border-primary-secondary-1"
        />
        {errors.nameOrEmail && (
          <p className={cn("font-kumbh-sans text-primary-secondary-1")}>
            Username or Email is required
          </p>
        )}
      </div>

      <div className="mt-6 grid w-full items-center gap-1.5">
        <div className="mb-1 flex items-center justify-between">
          <Label
            htmlFor="password"
            className="font-semibold text-primary-secondary-1"
          >
            Password
          </Label>
          {/* TODO: Add relevant Link */}
          <Link href="#" className="text-primary-secondary-1 opacity-[90%]">
            Forgot Password?
          </Link>
        </div>
        <Input
          type="password"
          id="password"
          {...register("password", { required: true })}
          className="border-primary-secondary-1"
        />
        {errors.password && (
          <p className={cn("font-kumbh-sans text-primary-secondary-1")}>
            Password is required
          </p>
        )}
      </div>

      <Button className="mt-10 h-[45px] w-full rounded-md bg-primary-secondary-1 font-kumbh-sans text-primary-white">
        SIGN IN
      </Button>

      <div className="mt-10 flex items-center justify-center gap-4">
        <p className="font-kumbh-sans text-primary-secondary-1">New here?</p>
        {/* TODO: Add relevant Link */}
        <Link
          href="#"
          className="border-b border-b-primary-secondary-3 font-kumbh-sans text-primary-secondary-3"
        >
          Create your account
        </Link>
      </div>
    </form>
  );
}
