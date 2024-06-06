import Image from "next/image";
import coffeeShop from "/public/home/coffeeshop.png";

export default function Hero() {
  return (
    <section>
      <div className="container flex flex-col items-center justify-center gap-10 lg:flex-row">
        {/* left */}
        <div className="space-y-8 border lg:w-[40%]">
          <h1 className="text-5xl font-bold leading-[58px] text-primary-black">
            Good <span className="text-primary-secondary-3">booking</span>,
            great memories
          </h1>
          <p className="font-kumbh-sans text-3xl font-light">
            Enable diners to customize their booking by requesting a specific
            table location or view.
          </p>
        </div>

        {/* right */}
        <div className="border lg:w-[50%]">
          <Image src={coffeeShop} alt="coffee shop" className="w-[90%]" />
        </div>
      </div>
    </section>
  );
}
