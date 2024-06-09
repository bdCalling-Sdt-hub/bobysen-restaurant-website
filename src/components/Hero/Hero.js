import Image from "next/image";
import coffeeShop from "/public/home/coffeeshop.png";
import HeroSearchBar from "../HeroSearchBar/HeroSearchBar";
import orangeIcon from "/public/hero/orange.png";
import arrowIcon from "/public/hero/arrow.png";

export default function Hero() {
  return (
    <section className="relative">
      <div className="container flex flex-col items-center justify-center gap-x-16 sm:h-[80vh] sm:px-10 lg:flex-row lg:px-0">
        {/* left */}
        <div className="space-y-8 sm:container lg:w-[40%]">
          <h1 className="text-4xl font-bold text-primary-black md:text-5xl lg:leading-[58px]">
            Good <span className="text-primary-secondary-3">booking</span>,
            great memories
          </h1>
          <p className="font-kumbh-sans text-xl font-light sm:text-2xl md:text-5xl lg:text-3xl">
            Enable diners to customize their booking by requesting a specific
            table location or view.
          </p>

          {/* search bar */}
          <HeroSearchBar />
        </div>

        {/* right */}
        <div className="w-[60%] lg:w-[50%]">
          <Image src={coffeeShop} alt="coffee shop" className="w-[90%]" />
        </div>
      </div>

      {/* floating icons */}
      <Image
        src={arrowIcon}
        alt="arrow icon"
        className="absolute -z-10 hidden sm:hidden lg:-top-[3%] lg:left-[26%] lg:block"
      />
      <Image
        src={orangeIcon}
        alt="orange icon"
        className="absolute -translate-x-1/2 -translate-y-1/2 lg:left-[48%] lg:top-[40%]"
      />
    </section>
  );
}
