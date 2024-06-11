import tableImg from "/public/login/group.png";
import logo from "/public/login/logo.png";
import circles from "/public/login/circle-lines.png";
import flowers from "/public/login/bg-flowers.png";
import LoginForm from "@/components/LoginForm/LoginForm";
import Image from "next/image";
import SignUpForm from "@/components/SignUpForm/SignUpForm";

export const metadata = {
  title: "Sign Up | Bookatable",
  description: "Sign up page",
};

export default function SignUp() {
  return (
    <div className="relative z-10 mb-16 flex h-screen items-center justify-center pt-[250px]">
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

      <div className="container z-10 flex flex-col items-center rounded-xl border-[2px] border-[#5882c12b] py-5 shadow-lg md:mx-auto md:w-[85%] lg:flex-row lg:gap-x-16 lg:shadow">
        {/* left */}
        <div className="w-1/2">
          <Image
            src={tableImg}
            alt="table with people"
            className="mx-auto block sm:w-[70%] md:w-full lg:w-[90%]"
          />
        </div>

        {/* right */}
        <div className="mt-5 w-[90%] lg:mt-0 lg:w-1/2">
          <Image src={logo} alt="logo" className="mx-auto w-[40%] lg:w-[30%]" />

          <div className="mt-4 lg:mt-5 lg:px-4">
            <p className="text-center text-xl font-semibold text-primary-secondary-1">
              Great to have you back !
            </p>

            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}
