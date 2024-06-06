import { Kumbh_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kumbhSans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="shortcut icon"
          href="/public/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <body className={`${roboto.className} ${kumbhSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
