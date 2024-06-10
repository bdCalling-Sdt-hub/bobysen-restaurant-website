"use client";
import Image from "next/image";
import coffeeShop from "/public/home/coffeeshop.png";
import HeroSearchBar from "../HeroSearchBar/HeroSearchBar";
import orangeIcon from "/public/hero/orange.png";
import arrowIcon from "/public/hero/arrow.png";
import { motion } from "framer-motion";

// motion variants
const pathVariants = {
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

const leftDivVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative md:pt-[70px] lg:pt-0">
      <div className="container flex flex-col items-center justify-center gap-x-16 sm:h-[80vh] sm:px-10 lg:flex-row lg:px-0">
        {/* left */}
        <motion.div
          className="space-y-8 sm:container lg:w-[40%]"
          variants={leftDivVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={leftDivVariants}
            className="text-4xl font-bold text-primary-black md:text-5xl lg:leading-[58px]"
          >
            Good <span className="text-primary-secondary-3">booking</span>,
            great memories
          </motion.h1>
          <motion.p
            variants={leftDivVariants}
            className="font-kumbh-sans text-xl font-light sm:text-2xl md:text-5xl lg:text-3xl"
          >
            Enable diners to customize their booking by requesting a specific
            table location or view.
          </motion.p>

          {/* search bar */}
          <motion.div variants={leftDivVariants}>
            <HeroSearchBar />
          </motion.div>
        </motion.div>

        {/* right */}
        <motion.div
          className="w-[75%] lg:w-[50%]"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image src={coffeeShop} alt="coffee shop" className="w-[90%]" />
        </motion.div>
      </div>

      {/* floating icons */}
      <motion.svg
        width="574"
        height="235"
        viewBox="0 0 574 235"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -z-10 hidden sm:hidden lg:left-[26%] lg:top-[6%] lg:block"
        variants={pathVariants}
        initial="initial"
        animate="animate"
      >
        <motion.path
          d="M19.0205 129.266C16.9178 129.59 15.3351 127.251 16.1296 124.993L25.946 97.095C26.7628 94.7737 29.4644 94.2823 30.7733 96.2169L46.9347 120.105C48.2435 122.04 47.1597 124.923 44.9982 125.256L19.0205 129.266Z"
          fill="#8ABA51"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6, ease: "easeIn" }}
        />
        <motion.path
          d="M572.677 231.939C548.176 175.474 460.817 45.3579 410.481 117.563C366.046 181.305 527.14 270.869 528.276 117.002C529.411 -36.8647 208.913 -38.3163 25.9171 119.395"
          stroke="#8ABA51"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-dasharray="8 8"
          variants={pathVariants}
        />
      </motion.svg>

      <Image
        src={orangeIcon}
        alt="orange icon"
        className="absolute -translate-x-1/2 -translate-y-1/2 lg:left-[48%] lg:top-[40%]"
      />
    </section>
  );
}
