"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useLoginMutation } from "@/redux/api/authApi";
import { setUser } from "@/redux/features/authSlice";
import eyeIcon from "/public/signUp/eyeIcon.svg";
import eyeOffIcon from "/public/signUp/eyeOffIcon.svg";
import { Error_Modal, Success_model } from "@/utils/modalHook";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import LoadingButton from "../LoadingButton/LoadingButton";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPass, setShowPass] = useState(false);
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  const redirectLink = useSearchParams().get("redirectLink");

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();

      if (res?.data?.accessToken) {
        Success_model({ title: "Login Successful" });
        dispatch(setUser({ user: res.data.user, token: res.data.accessToken }));
        router.push(redirectLink || "/");
      }
    } catch (error) {
      Error_Modal(error?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
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
          {...register("email", { required: true })}
          className="border border-primary-secondary-1 text-primary-black"
        />
        {errors.email && (
          <p className={cn("font-kumbh-sans text-primary-secondary-1")}>
            Username or Email is required
          </p>
        )}
      </div>

      <div className="relative mt-6 grid w-full items-center gap-1.5">
        <div className="mb-1 flex items-center justify-between">
          <Label
            htmlFor="password"
            className="font-semibold text-primary-secondary-1"
          >
            Password
          </Label>
          {/* TODO: Add relevant Link */}
          <Link
            href="/forgot-password"
            className="text-primary-secondary-1 opacity-[90%]"
          >
            Forgot Password?
          </Link>
        </div>
        <Input
          type={showPass ? "text" : "password"}
          id="password"
          {...register("password", { required: true })}
          className="border-primary-secondary-1 text-primary-black"
        />
        {!showPass ? (
          <Image
            src={eyeIcon}
            alt="show password icon"
            className="absolute right-2 top-[50%] translate-y-1/2 opacity-[80%]"
            onClick={() => setShowPass(!showPass)}
            role="button"
          />
        ) : (
          <Image
            src={eyeOffIcon}
            alt="hide password icon"
            className="absolute right-2 top-[45%] translate-y-1/2 opacity-[80%]"
            onClick={() => setShowPass(!showPass)}
            role="button"
          />
        )}
        {errors.password && (
          <p className={cn("font-kumbh-sans text-primary-secondary-1")}>
            Password is required
          </p>
        )}
      </div>

      {!isLoading ? (
        <Button className="mt-10 h-[45px] w-full rounded-md bg-primary-secondary-1 font-kumbh-sans text-primary-white">
          SIGN IN
        </Button>
      ) : (
        <Button
          disabled={true}
          className="mt-10 h-[45px] w-full rounded-md bg-primary-secondary-1 font-kumbh-sans text-primary-white"
        >
          <LoadingButton>SIGNING IN...</LoadingButton>
        </Button>
      )}

      <div className="mt-10 flex items-center justify-center gap-4">
        <p className="font-kumbh-sans text-primary-secondary-1">New here?</p>
        {/* TODO: Add relevant Link */}
        <Link
          href="/sign-up"
          className="border-b border-b-primary-secondary-3 font-kumbh-sans text-primary-secondary-3"
        >
          Create your account
        </Link>
      </div>
    </form>
  );
}
