import restaurantTable from "/public/services/restaurantTable.png";
import arrow from "/public/services/arrow.png";
import mobileIcon from "/public/services/mobile.png";
import hrIcon from "/public/services/24hr.png";
import calendarIcon from "/public/services/calendar.png";
import Image from "next/image";

export default function Services() {
  return (
    <section className="container my-[120px] flex flex-col gap-y-16 lg:flex-row lg:items-center lg:justify-center lg:gap-x-7 lg:gap-y-0">
      {/* left */}
      <div className="lg:w-1/2">
        <Image
          src={restaurantTable}
          alt="people at restaurant table"
          className="mx-auto block md:w-[70%] lg:w-[85%]"
        />
      </div>

      {/* right */}
      <div className="space-y-8 md:mx-auto md:w-3/4 lg:w-1/2 lg:space-y-6">
        <h1 className="text-5xl font-bold text-primary-black lg:leading-snug">
          We are <span className="text-primary-secondary-3">more</span> than{" "}
          <span className="text-primary-secondary-2">multiple</span> service
        </h1>
        <p className="font-kumbh-sans text-primary-secondary-2">
          This is a type of resturent which typically serves food and drink, in
          addition to light refreshments such as baked goods or snacks. The term
          comes frome the rench word meaning food
        </p>

        <div className="grid grid-cols-2 gap-y-7 lg:gap-x-16">
          <div className="flex items-center gap-x-3">
            <Image src={mobileIcon} alt="mobile icon" />
            <p className="font-semibold">Online Order</p>
          </div>
          <div className="flex items-center gap-x-3">
            <Image src={hrIcon} alt="324/7 icon" />
            <p className="font-semibold">24/7 Service</p>
          </div>
          <div className="flex items-center gap-x-3">
            <Image src={calendarIcon} alt="calendar icon" />
            <p className="font-semibold">Pre-Reservation</p>
          </div>
          <div className="flex items-center gap-x-3">
            <Image src={calendarIcon} alt="calendar icon" />
            <p className="font-semibold">Organized Foodhut Place</p>
          </div>
          <div className="flex items-center gap-x-3">
            <Image src={mobileIcon} alt="mobile icon" />
            <p className="font-semibold">Super Chef</p>
          </div>
          <div className="flex items-center gap-x-3">
            <Image src={mobileIcon} alt="mobile icon" />
            <p className="font-semibold">Clean Kitchen</p>
          </div>
        </div>
      </div>
    </section>
  );
}
