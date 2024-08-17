import { Kumbh_Sans, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Providers from "@/lib/Providers";
import "rc-time-picker-date-fns/assets/index.css";
import { Toaster } from "sonner";

export const metadata = {
  title: {
    default: "Bookatable",
    template: "%s | Bookatable",
  },
  description:
    "The official webpage of the bookatable restaurant which enable diners to customize their booking by requesting a specific table location or view.",
};

const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kumbhSans",
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${kumbhSans.variable} max-w-8xl flex min-h-screen flex-col`}
      >
        <Providers>
          <main className="z-10 flex-grow">{children}</main>

          <footer>
            <Footer />
          </footer>
        </Providers>

        <Toaster richColors />
      </body>
    </html>
  );
}
