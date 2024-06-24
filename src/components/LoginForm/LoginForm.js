"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { useLoginMutation } from "@/redux/api/authApi";
import { setUser } from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";
import { Error_Modal, Success_model } from "@/utils/modalHook";
import { useRouter } from "next/navigation";
import LoadingButton from "../LoadingButton/LoadingButton";
import { setToLocalStorage } from "@/utils/local-storage";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();

      if (res?.data?.accessToken) {
        console.log("hello");
        Success_model({ title: "Login Successful" });
        dispatch(setUser({ user: res.data.user }));
        setToLocalStorage("accessToken", res.data.accessToken);
        router.push("/");
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

      <div className="mt-6 grid w-full items-center gap-1.5">
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
          type="password"
          id="password"
          {...register("password", { required: true })}
          className="border-primary-secondary-1 text-primary-black"
        />
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
          <LoadingButton>SIGN IN</LoadingButton>
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
