// "use client";

import RestaurantImageSlider from "./_components/RestaurantImageSlider/RestaurantImageSlider";
import { Separator } from "@/components/ui/separator";
import menuIcon from "/public/DynamicRestaurant/charm_menu-hamburger.png";
import eventIcon from "/public/DynamicRestaurant/event.png";
import bookIcon from "/public/DynamicRestaurant/image 4.png";
import usersIcon from "/public/DynamicRestaurant/users.png";
import calenderIcon from "/public/DynamicRestaurant/calendar.png";
import foodMenuIcon from "/public/DynamicRestaurant/menu.png";
import successfulIcon from "/public/DynamicRestaurant/succesful.png";
import locationIcon from "/public/DynamicRestaurant/Location_icon_ic.png";
import arrow from "/public/DynamicRestaurant/trending-up.png";
import starIcon from "/public/DynamicRestaurant/Star 1.png";
import goldStarIcon from "/public/DynamicRestaurant/goldStar.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import styles from "./DynamicRestaurant.module.css";
import FeedbackCard from "./_components/FeedbackCard/FeedbackCard";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Book your Table | Bookatable",
};

export default function DynamicRestaurant({ params }) {
  // TODO: Use dynamic data from database
  const { id } = params;

  return (
    <div className="container pt-[160px]">
      {/* Restaurant Details Section */}
      <section className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 md:gap-y-0">
        {/* left */}
        <div className="relative rounded-xl bg-primary-white-light p-4 shadow">
          <RestaurantImageSlider />

          <div className="mt-5">
            <h1 className="text-3xl font-bold text-primary-secondary-1">
              <span className="text-primary-secondary-3">Villago</span>{" "}
              Restaurant & Bar
            </h1>
            <Separator className="mb-4 mt-2" />

            <div className="mb-10 grid grid-cols-1 gap-x-5 font-kumbh-sans lg:grid-cols-2">
              {/* Inner left */}
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Image src={locationIcon} alt="location icon" />
                  <p className="text-primary-secondary-1">
                    360 San Lorenzo Avenue, Suite 1430 Coral Gables, FL
                    33146-1865
                    <Link
                      href="https://maps.app.goo.gl/7cd8co1jrPgimQE77"
                      className="flex items-center gap-x-2 font-semibold italic"
                    >
                      Get Direction <Image src={arrow} alt="arrow icon" />
                    </Link>
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <Image src={eventIcon} alt="calendar icon" />
                  <p className="text-primary-secondary-1">
                    Every Friday restaurant are close
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <Image src={bookIcon} alt="calendar icon" />
                  <p className="border-b-2 border-b-primary-secondary-2 text-primary-secondary-1">
                    Show Menu
                  </p>
                </div>

                {/* Filters */}
              </div>

              {/* Inner Right */}
              <div className="flex items-start gap-2">
                <Image src={menuIcon} alt="hamburger menu icon" />
                <p>
                  Villagio restaurant and bar has one mission: to provide guests
                  with a fine and fresh seafood experience. Featuring seasonal
                  and sustainable seafood that is flown in fresh daily, our
                  chef-driven menu proves that no matter when you’re dining,
                  seafood can be truly exceptional. to provide guests with a
                  fine
                  <Button variant="link" className="text-primary-secondary-3">
                    Read More...
                  </Button>
                </p>
              </div>
            </div>
          </div>

          {/* Book Now Modal */}
          <AlertDialog>
            <AlertDialogTrigger className="absolute -bottom-2 left-1/2 w-[96%] -translate-x-1/2 -translate-y-1/2 rounded bg-primary-secondary-2 py-2 text-primary-white">
              Book Now
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  <Image
                    src={successfulIcon}
                    alt="booking successful marker"
                    className="mx-auto block"
                  />
                  <h4 className="my-3 text-center text-2xl text-primary-secondary-1">
                    Table Booked Successfully
                  </h4>
                </AlertDialogTitle>
                <Separator className="bg-primary-secondary-1" />
                <AlertDialogDescription>
                  <div className="mx-auto my-5 w-3/4 space-y-3">
                    <div className="flex items-center gap-x-4 font-kumbh-sans">
                      <Image src={calenderIcon} alt="calendar icon" />
                      <p className="text-xl">17 December 2022 | 12:15 PM</p>
                    </div>
                    <div className="flex items-center gap-x-4 font-kumbh-sans">
                      <Image src={usersIcon} alt="users icon" />
                      <p className="text-xl">2 Guests</p>
                    </div>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="mx-auto w-max">
                <AlertDialogAction className="flex items-center gap-x-3 bg-primary-secondary-3 px-5 py-6 text-lg font-bold text-primary-white">
                  <Image src={foodMenuIcon} alt="food menu icon" />
                  <span>Show Menu</span>
                </AlertDialogAction>
              </AlertDialogFooter>
              <Separator className="bg-primary-secondary-1" />

              <p className="text-justify font-kumbh-sans text-primary-white-dark">
                Your table is reserved! Since you reserved your table with Dine
                in Florida, your will automatically receive 2% off your bill
                when you pay
              </p>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        {/* right */}
        <div className="space-y-2">
          <div className="rounded-xl bg-primary-white-light p-4 shadow">
            <h3 className="text-center font-kumbh-sans text-lg font-semibold text-primary-secondary-1">
              Here to Find
            </h3>
            <Separator className="mb-2 mt-3 bg-primary-secondary-3" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.1672444935734!2d-80.2609355!3d25.731982300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b7ee988e43eb%3A0x3b46d98faeef083a!2s360%20San%20Lorenzo%20Ave%20%231430%2C%20Coral%20Gables%2C%20FL%2033146%2C%20USA!5e0!3m2!1sen!2sbd!4v1717945743373!5m2!1sen!2sbd"
              width={"100%"}
              height="250"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="rounded-xl bg-primary-white-light p-4 shadow">
            <h3 className="text-center font-kumbh-sans text-lg font-semibold text-primary-secondary-1">
              Opening Hours
            </h3>
            <Separator className="mb-2 mt-3 bg-primary-secondary-3" />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead className="font-bold text-primary-black">
                    Open
                  </TableHead>
                  <TableHead className="font-bold text-primary-black">
                    Close
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* TODO: Use data from database */}
                <TableRow className="border-0">
                  <TableCell>Saturday</TableCell>
                  <TableCell>10:00-12:00 PM</TableCell>
                  <TableCell>10:00-12:00 PM</TableCell>
                </TableRow>
                <TableRow className="border-0">
                  <TableCell>Saturday</TableCell>
                  <TableCell>10:00-12:00 PM</TableCell>
                  <TableCell>10:00-12:00 PM</TableCell>
                </TableRow>
                <TableRow className="border-0">
                  <TableCell>Saturday</TableCell>
                  <TableCell>10:00-12:00 PM</TableCell>
                  <TableCell>10:00-12:00 PM</TableCell>
                </TableRow>
                <TableRow className="border-0">
                  <TableCell>Saturday</TableCell>
                  <TableCell>10:00-12:00 PM</TableCell>
                  <TableCell>10:00-12:00 PM</TableCell>
                </TableRow>
                <TableRow className="border-0">
                  <TableCell>Saturday</TableCell>
                  <TableCell>10:00-12:00 PM</TableCell>
                  <TableCell>10:00-12:00 PM</TableCell>
                </TableRow>
                <TableRow className="border-0">
                  <TableCell>Saturday</TableCell>
                  <TableCell>10:00-12:00 PM</TableCell>
                  <TableCell>10:00-12:00 PM</TableCell>
                </TableRow>
                <TableRow className="border-0">
                  <TableCell>Saturday</TableCell>
                  <TableCell>10:00-12:00 PM</TableCell>
                  <TableCell>10:00-12:00 PM</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="mt-16">
        <h1 className="text-3xl font-bold text-primary-secondary-1">Review</h1>

        <div className="mt-12 flex flex-col items-start gap-16 lg:flex-row">
          <div className="mx-auto lg:mx-0 lg:w-[20%]">
            {/* left */}
            <div className="flex items-center gap-x-3 font-bold text-primary-secondary-1">
              <h1>4.8</h1>
              <Image src={starIcon} alt="rating star icon" />
            </div>

            <p className="mt-5 max-w-max text-center font-kumbh-sans text-primary-secondary-1">
              1,64,002 Ratings <br /> & <br />
              5922 Reviews
            </p>
          </div>

          {/* right */}
          <div className="w-full space-y-5 lg:w-1/2">
            <div className="flex items-center gap-x-16">
              <div className="flex items-center gap-x-2">
                <h4 className="text-xl font-bold text-[#F8B84E]">5</h4>
                <Image src={goldStarIcon} alt="gold star icon" />
              </div>
              <Progress
                value={70}
                className={cn("bg-primary-secondary-1", styles.progressBar)}
              />
            </div>
            <div className="flex items-center gap-x-16">
              <div className="flex items-center gap-x-2">
                <h4 className="text-xl font-bold text-[#F8B84E]">5</h4>
                <Image src={goldStarIcon} alt="gold star icon" />
              </div>
              <Progress
                value={60}
                className={cn("bg-primary-secondary-1", styles.progressBar)}
              />
            </div>
            <div className="flex items-center gap-x-16">
              <div className="flex items-center gap-x-2">
                <h4 className="text-xl font-bold text-[#F8B84E]">5</h4>
                <Image src={goldStarIcon} alt="gold star icon" />
              </div>
              <Progress
                value={50}
                className={cn("bg-primary-secondary-1", styles.progressBar)}
              />
            </div>
            <div className="flex items-center gap-x-16">
              <div className="flex items-center gap-x-2">
                <h4 className="text-xl font-bold text-[#F8B84E]">5</h4>
                <Image src={goldStarIcon} alt="gold star icon" />
              </div>
              <Progress
                value={40}
                className={cn("bg-primary-secondary-1", styles.progressBar)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* User feedback section */}
      <section className="mt-16">
        <h1 className="text-3xl font-bold text-primary-secondary-1">
          User Feedback
        </h1>

        <div className="mt-10">
          {/* TODO: Use dynamic data */}
          {Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx}>
              <FeedbackCard />
              <Separator className="my-10 bg-primary-black" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
