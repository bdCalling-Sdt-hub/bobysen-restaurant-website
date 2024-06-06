import circle from "/public/home/circle.png";
import arrow from "/public/home/arrow.png";
import coffeeShop from "/public/home/coffeeshop.png";
import logo from "/public/home/logo.png";
import orange from "/public/home/orange.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="absolute left-0 top-[50px] w-full">
      <div className="container flex max-h-[100px] items-center justify-between">
        {/* left */}
        <div className="lg:w-[12%]">
          <Image src={logo} alt="logo" className="max-h-[100px] w-full" />
        </div>

        {/* right */}
        <div className="flex items-center gap-x-5 lg:max-w-max">
          <Button
            className="hover:bg-secondary-1 h-[40px] w-[140px] rounded-xl border border-primary-secondary-1 bg-primary-secondary-3 font-semibold hover:bg-primary-secondary-1 hover:text-primary-white"
            style={{ boxShadow: "0px 3px 0px #334A55" }}
          >
            Download App
          </Button>
          <Button
            className="h-[40px] w-[140px] rounded-xl border border-primary-secondary-1 bg-transparent font-semibold text-primary-secondary-1 hover:bg-primary-secondary-1 hover:text-primary-white"
            style={{ boxShadow: "0px 3px 0px #334A55" }}
          >
            My Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
