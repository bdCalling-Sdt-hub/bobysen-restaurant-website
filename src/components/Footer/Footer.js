import Image from "next/image";
import logo from "/public/footer/Group 2.png";
import sparkTech from "/public/footer/Group 94.png";
import fbLogo from "/public/footer/social (1).png";
import twitterLogo from "/public/footer/social (2).png";
import instaLogo from "/public/footer/social.png";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-20 bg-primary-black py-10">
      <div className="container flex flex-col justify-between lg:flex-row">
        {/* left */}
        <div className="lg:w-[50%]">
          <Image src={logo} alt="bookatable logo" />
          <p className="mt-8 font-kumbh-sans text-primary-white">
            The Food we had enjoyed at the time of dinner. It was really
            delicious taste with great quality, everything had unique taste
            which we had ordered, nice arrangement and services from the staff
            while eating, we found nothing bad about this hotel.
          </p>
        </div>

        {/* right */}
        <div className="mt-10 flex flex-col gap-x-10 gap-y-8 lg:mt-0 lg:w-[40%] lg:flex-row lg:gap-y-0">
          <div className="space-y-3">
            <h4 className="font-bold text-primary-white">Follow us</h4>
            <div className="flex items-center gap-x-3">
              <Image src={instaLogo} alt="bookatable logo" />
              <Image src={fbLogo} alt="bookatable logo" />
              <Image src={twitterLogo} alt="bookatable logo" />
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-primary-white">Call us</h4>
            <p className="font-kumbh-sans text-xl text-primary-white">
              +48 661 120 494
            </p>
          </div>
        </div>
      </div>
      <Separator className="container mb-6 mt-12" />

      <div className="container flex flex-col items-center justify-between gap-y-5 lg:flex-row lg:gap-y-0">
        <div className="flex flex-col items-center gap-x-4 gap-y-2 md:flex-row md:gap-y-0">
          <Image src={sparkTech} alt="SparkTech Agency Logo" />
          <p className="text-center font-kumbh-sans text-sm text-primary-white md:text-left md:text-base">
            Design & Developed by Sparktech Agency
          </p>
        </div>

        <div className="flex items-center gap-x-5">
          {/* TODO: Add relevant links */}
          <Link href={"#"} className="font-kumbh-sans text-primary-white">
            About Us
          </Link>
          <Link
            href={"/privacy-policy"}
            className="font-kumbh-sans text-primary-white"
          >
            Privacy Policy
          </Link>
          <Link
            href={"/terms-of-use"}
            className="font-kumbh-sans text-primary-white"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </div>
  );
}
