import React from "react";
import Image from "next/image";
import circles from "/public/login/circle-lines.png";
import flowers from "/public/login/bg-flowers.png";
import OtpEnterForm from "@/components/OtpEnterForm/OtpEnterForm";
import OtpGetForm from "@/components/OtpGetForm/OtpGetForm";

export const metadata = {
  title: "Get OTP | Bookable",
  description: "Get your OTP",
};

export default function GetOtp() {
  return (
    <div className="relative z-10 flex h-screen items-center justify-center">
      {/* background images */}
      <Image
        src={circles}
        alt="circle lines"
        className="absolute -left-[40%] -top-[4%] -z-10 md:w-[80%] lg:-left-[10%] lg:-top-[40%] lg:w-[50%] lg:opacity-[80%]"
      />
      <Image
        src={flowers}
        alt="background flowers"
        className="absolute -right-[4%] bottom-[2%] -z-10 sm:max-w-[30%] md:max-w-[50%] lg:-top-[2%] lg:right-[2%] lg:max-w-[30%]"
      />

      <div className="container z-10 flex h-[65vh] items-center justify-center rounded-xl border-[2px] border-[#5882c12b] shadow-lg md:mx-auto md:w-[85%] lg:shadow">
        <OtpGetForm />
      </div>
    </div>
  );
}
