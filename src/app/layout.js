import { Kumbh_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import circle from "/public/home/circle.png";
import flowers from "/public/home/flowers.png";
import Footer from "@/components/Footer/Footer";
import Providers from "@/lib/Providers";
import "rc-time-picker-date-fns/assets/index.css";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kumbhSans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${kumbhSans.variable} max-w-8xl flex min-h-screen flex-col`}
      >
        <Providers>
          <Navbar />
          {/* background effects */}
          <div className="relative">
            <Image
              src={circle}
              alt="bg-effect circle"
              className="absolute -left-[50%] top-0 -z-10 lg:-left-[2%]"
            />
            <Image
              src={flowers}
              alt="bg-effect flowers"
              className="absolute right-0 top-0 -z-10 w-[70%] lg:w-[40%]"
            />
          </div>

          <main className="z-10 flex-grow">{children}</main>

          <footer>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
