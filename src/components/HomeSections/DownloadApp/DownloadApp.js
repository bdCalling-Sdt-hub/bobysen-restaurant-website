import chef from "/public/DownloadApp/Frame 34616.png";
import arrow from "/public/DownloadApp/Vector 9.png";
import appStore from "/public/DownloadApp/Mobile app store badge (1).png";
import playStore from "/public/DownloadApp/Mobile app store badge.png";
import Link from "next/link";
import Image from "next/image";

export default function DownloadApp() {
  return (
    <section className="container relative z-10 flex items-center gap-x-8">
      {/* left */}
      <div className="lg:w-1/2">
        <h1 className="font-bold text-primary-secondary-1">
          It’s Now More Easy to{" "}
          <span className="text-primary-secondary-3">Booking</span> by Our
          Mobile App
        </h1>
        <p className="mb-10 mt-7 font-kumbh-sans text-[#191919] lg:w-[75%]">
          All you need to do is downlode one of the best delivery apps, make a
          and most companies are opting for mobile app devlopment for food
          delivery
        </p>

        <div className="flex items-center gap-x-4">
          {/* TODO: Add relevant links */}
          <Link href={"#"}>
            <Image src={appStore} alt="app store icon" />
          </Link>
          <Link href="#">
            <Image src={playStore} alt="play store icon" />
          </Link>
        </div>
      </div>

      {/* right */}
      <div className="z-10 lg:w-1/2">
        <Image src={chef} alt="chef's image" />
      </div>

      {/* floating arrow */}
      <Image
        src={arrow}
        alt="arrow icon"
        className="absolute -top-[8%] right-[35%] -z-10"
      />
    </section>
  );
}
