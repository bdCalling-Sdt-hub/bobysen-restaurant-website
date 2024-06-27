"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useGetSingleRestaurantQuery } from "@/redux/api/restaurantApi.js";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Clock, PhoneOutgoing } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import styles from "./DynamicRestaurant.module.css";
import BookNowBtn from "./_components/BookNowBtn/BookNowBtn";
import FeedbackCard from "./_components/FeedbackCard/FeedbackCard";
import RestaurantImageSlider from "./_components/RestaurantImageSlider/RestaurantImageSlider";
import locationIcon from "/public/DynamicRestaurant/Location_icon_ic.png";
import starIcon from "/public/DynamicRestaurant/Star 1.png";
import menuIcon from "/public/DynamicRestaurant/charm_menu-hamburger.png";
import eventIcon from "/public/DynamicRestaurant/event.png";
import goldStarIcon from "/public/DynamicRestaurant/goldStar.png";
import bookIcon from "/public/DynamicRestaurant/image 4.png";
import usersIcon from "/public/DynamicRestaurant/users.png";

import { DayPickerInput } from "@/components/DayPickerInput/DayPickerInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TimePicker from "rc-time-picker-date-fns";

const AnyReactComponent = ({ text }) => (
  <div className="">
    <img
      height={50}
      width={50}
      src="https://i.ibb.co/V9QYmtw/marker.png"
      alt=""
    />
  </div>
);

export default function DynamicRestaurant({ params }) {
  const [map, setMap] = useState(null);
  // TODO: Use dynamic data from database
  const { id } = params;
  const { data: Rdata, isLoading } = useGetSingleRestaurantQuery(id);
  const {
    name,
    location,
    avgReviews,
    reviewStatus,
    days,
    description,
    helpLineNumber1,
    helpLineNumber2,
  } = Rdata?.data ?? {};
  console.log(Rdata);
  const center = {
    lat: 23.7387,
    lng: 90.3935,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDhzY2k-tIrpnoBut75TTDJTuE1kURA_fU",
  });
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);
  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  // todo: get book a table data
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [guestCount, setGuestCount] = useState(null);
  const numberOfGuests = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="container pt-[160px]">
      {/* Restaurant Details Section */}
      <section className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 md:gap-y-0">
        {/* left */}
        <div className="relative rounded-xl bg-primary-white-light p-4 shadow">
          <RestaurantImageSlider images={Rdata?.data?.images} />

          <div className="mt-5">
            <h1 className="text-3xl font-bold text-primary-secondary-3">
              {name}
            </h1>
            <Separator className="mb-4 mt-2" />

            <div className="mb-5 grid grid-cols-1 gap-x-5 font-kumbh-sans lg:grid-cols-2">
              {/* Inner left */}
              <div className="">
                <div className="mb-4 flex items-start gap-2">
                  <Image src={locationIcon} alt="location icon" />
                  <p className="text-primary-secondary-1">
                    {location}
                    {/* <Link
                      href="https://maps.app.goo.gl/7cd8co1jrPgimQE77"
                      className="flex items-center gap-x-2 font-semibold italic"
                    >
                      Get Direction <Image src={arrow} alt="arrow icon" />
                    </Link> */}
                  </p>
                </div>

                <div className="mb-4 flex items-start gap-2">
                  <Image src={eventIcon} alt="calendar icon" />
                  <p className="text-primary-secondary-1">
                    Every Friday restaurant are close
                  </p>
                </div>

                <div className="mb-4 flex items-start gap-x-3">
                  <PhoneOutgoing size={19} color="#8aba51" />
                  <div className="flex flex-col gap-y-2">
                    <p className="text-base text-primary-secondary-1">
                      {helpLineNumber1}
                    </p>
                    <p className="text-base text-primary-secondary-1">
                      {helpLineNumber2}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Image src={bookIcon} alt="calendar icon" />
                  <Link href={`/menu/${id}?state=only-menu`}>
                    <p className="border-b-2 border-b-primary-secondary-2 text-primary-secondary-1 transition-all duration-300 ease-in-out hover:border-b-primary-secondary-1">
                      Show Menu
                    </p>
                  </Link>
                </div>
              </div>

              {/* Inner Right */}
              <div className="flex items-start gap-2">
                <Image src={menuIcon} alt="hamburger menu icon" />
                <p>
                  {description}
                  <Button variant="link" className="text-primary-secondary-3">
                    Read More...
                  </Button>
                </p>
              </div>
            </div>

            {/* Filters */}
            <div className="lg:w-3/4">
              <h4 className="text-xl font-semibold text-primary-secondary-1">
                Book a table
              </h4>

              <div className="mt-2 grid w-full grid-cols-3 gap-x-6">
                <DayPickerInput date={selectedDate} setDate={setSelectedDate} />
                <div className="flex items-center gap-x-3 rounded-lg border px-2">
                  <Clock />
                  <TimePicker
                    showHour={true}
                    showMinute={true}
                    showSecond={false}
                    className="h-full w-full"
                    defaultValue={new Date()}
                    minuteStep={15}
                    onChange={(value) => setSelectedTime(value)}
                  />
                </div>

                {/* select users */}
                <Select
                  className=""
                  onValueChange={(value) => setGuestCount(value)}
                >
                  <SelectTrigger className="flex max-w-max items-center justify-start gap-x-4">
                    <Image src={usersIcon} alt="users icon" />
                    <SelectValue placeholder="Guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {numberOfGuests?.map((number) => (
                      <SelectItem value={number} key={number}>
                        {number}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Book Now Button with Modal */}
          <BookNowBtn id={id} />
        </div>

        {/* right */}
        <div className="space-y-2">
          <div className="rounded-xl bg-primary-white-light p-4 shadow">
            <h3 className="text-center font-kumbh-sans text-lg font-semibold text-primary-secondary-1">
              Here to Find
            </h3>
            <Separator className="mb-2 mt-3 bg-primary-secondary-3" />
            <div style={{ height: "250px", width: "100%" }}>
              {isLoaded && (
                <GoogleMap
                  mapContainerStyle={{ height: "250px", width: "100%" }}
                  center={center}
                  zoom={10}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                >
                  <Marker position={center} />
                </GoogleMap>
              )}
            </div>
          </div>

          <div className="rounded-xl bg-primary-white-light p-4 shadow">
            <h3 className="text-center font-kumbh-sans text-lg font-semibold text-primary-secondary-1">
              Opening Hours
            </h3>
            <Separator className="mb-2 mt-3 bg-primary-secondary-3" />
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-primary-black">
                    Day
                  </TableHead>
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
                {days?.map((day) => (
                  <TableRow key={day.id} className="border-0">
                    <TableCell>{day?.day}</TableCell>
                    <TableCell>{day?.openingTime}</TableCell>
                    <TableCell>{day?.closingTime}</TableCell>
                  </TableRow>
                ))}
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
