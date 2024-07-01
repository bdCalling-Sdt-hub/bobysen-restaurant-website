import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useGetSingleUserQuery,
  useUpdateUserProfileMutation,
} from "@/redux/api/userApi";
import { Error_Modal, Success_model } from "@/utils/modalHook";
import { Loader } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import defaultProfilePic from "/public/dashboard-user/profile/profilePic.png";
import { Skeleton } from "antd";

export default function UserDetailsForm() {
  const { data: profileData, isFetching: profileDataLoading } =
    useGetSingleUserQuery();
  const [updateProfile, { isLoading: updateLoading }] =
    useUpdateUserProfileMutation();

  const { image, fullName, phoneNumber, email } = profileData?.data || {};

  console.log(profileData?.data);

  const [profilePic, setProfilePic] = useState(null);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  // set form default values
  useEffect(() => {
    let defaultValues = {};
    (defaultValues.fullName = fullName),
      (defaultValues.contactNumber = phoneNumber);
    defaultValues.email = email;
    reset({ ...defaultValues });

    const subcription = watch((value, { name, type }) => {
      if (name === "image") {
        setProfilePic(value.image[0]);
      }
    });
  }, [profilePic, setProfilePic, profileDataLoading]);

  const onUserDetailSubmit = async (data) => {
    const formData = new FormData();

    const updatedData = {
      fullName: data.fullName,
    };

    formData.append("file", data.image[0]);
    formData.append("data", JSON.stringify(updatedData));

    try {
      const res = await updateProfile(formData).unwrap();
      console.log(res);

      if (res?.success) {
        Success_model({ title: "Profile Updated Successfully" });
      }
    } catch (error) {
      Error_Modal({ title: error?.data?.message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onUserDetailSubmit)} className="mb-20">
      {/* profile pic */}
      <div className="my-16 flex flex-col items-center lg:flex-row lg:gap-x-20">
        <div className="h-[200px] w-[200px] overflow-hidden">
          {profileDataLoading ? (
            <div className="h-[200px] w-[200px] animate-pulse rounded-full bg-gray-400/10"></div>
          ) : (
            <Image
              src={
                profilePic
                  ? window.URL.createObjectURL(profilePic)
                  : image
                    ? `http://192.168.10.61:5005${image}`
                    : defaultProfilePic
              }
              alt="profile picture"
              width={170}
              height={170}
              className="h-full w-full rounded-full object-fill"
            />
          )}
        </div>

        <div className="space-y-5 text-center">
          <p className="font-kumbh-sans text-lg text-primary-secondary-1">
            Maximum size 5mb. Format jpg, jpeg, png
          </p>
          <input
            type="file"
            name="image"
            id="image"
            {...register("image", {
              onchange: (e) => {
                setProfilePic(e.target.files[0]);
              },
            })}
            accept=".jpg, .jpeg, .png, .svg"
            className="hidden"
          />
          <Button
            className="rounded-3xl bg-primary-secondary-1 px-16 font-kumbh-sans text-primary-white"
            size="lg"
            type="button"
            onClick={() => document.getElementById("image").click()}
          >
            Change Picture
          </Button>
        </div>
      </div>

      {profileDataLoading ? (
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
          <div className="h-10 w-full animate-pulse rounded-lg border bg-gray-400/20"></div>
          <div className="h-10 w-full animate-pulse rounded-lg border bg-gray-400/20"></div>
          <div className="h-10 w-full animate-pulse rounded-lg border bg-gray-400/20"></div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6 lg:flex-row">
          {/* full name */}
          <div className="relative grid w-full items-center gap-1.5 font-kumbh-sans">
            <Label htmlFor="full Name" className="mb-1">
              Full Name
            </Label>
            {
              <Input
                type="text"
                id="full Name"
                placeholder="Full Name"
                {...register("fullName", { required: true })}
                className="border border-primary-secondary-3 bg-primary-white-light text-primary-black"
              />
            }

            {errors.fullName && (
              <span className="absolute -bottom-6 left-1">
                Name is required
              </span>
            )}
          </div>

          {/* email */}
          <div className="grid w-full items-center gap-1.5 font-kumbh-sans">
            <Label htmlFor="email" className="mb-1">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              disabled
              placeholder="Email"
              {...register("email", { required: true })}
              className="border border-primary-secondary-3 bg-primary-white-light text-primary-black"
            />
          </div>

          {/* Contact Number */}
          <div className="grid w-full items-center gap-1.5 font-kumbh-sans">
            <Label htmlFor="contact Number" className="mb-1">
              Contact Number
            </Label>
            <Input
              type="tel"
              disabled
              id="contactNumber"
              placeholder="Contact Number"
              {...register("contactNumber", { required: true })}
              className="border border-primary-secondary-3 bg-primary-white-light text-primary-black"
            />
            {errors.contactNumber && <span>This field is required</span>}
          </div>
        </div>
      )}

      <Button
        className="mt-8 block w-full bg-primary-secondary-3 font-kumbh-sans text-primary-white lg:w-1/2"
        size="lg"
        type="submit"
        disabled={updateLoading}
      >
        {updateLoading ? (
          <span className="flex items-center justify-center gap-x-3">
            <Loader size={20} className="animate-spin" /> Saving Changes...
          </span>
        ) : (
          "Save Changes"
        )}
      </Button>
    </form>
  );
}
