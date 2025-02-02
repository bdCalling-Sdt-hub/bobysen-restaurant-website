"use client";

import { DayPickerInput } from "@/components/DayPickerInput/DayPickerInput";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import {
  useGetRestaurantReviewsQuery,
  useGetSingleRestaurantQuery,
} from "@/redux/api/restaurantApi.js";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { format } from "date-fns";
import { Clock, PhoneOutgoing } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TimePicker from "rc-time-picker-date-fns";
import { useCallback, useState } from "react";
import styles from "../../DynamicRestaurant.module.css";
import BookNowBtn from "../BookNowBtn/BookNowBtn";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import RestaurantImageSlider from "../RestaurantImageSlider/RestaurantImageSlider";
import locationIcon from "/public/DynamicRestaurant/Location_icon_ic.png";
import starIcon from "/public/DynamicRestaurant/Star 1.png";
import menuIcon from "/public/DynamicRestaurant/charm_menu-hamburger.png";
import eventIcon from "/public/DynamicRestaurant/event.png";
import goldStarIcon from "/public/DynamicRestaurant/goldStar.png";
import bookIcon from "/public/DynamicRestaurant/image 4.png";
import usersIcon from "/public/DynamicRestaurant/users.png";
import { useGetSingleEventQuery } from "@/redux/api/eventApi";
import moment from "moment";
import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader";
import truncatedText from "@/utils/truncatedText";
import { Users2Icon } from "lucide-react";
import { Menu } from "lucide-react";

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

export default function DynamicRestaurantContainer({ params, eventId }) {
  const [map, setMap] = useState(null);
  const { id } = params;
  const { data: reviewsData, isLoading: isReviewsLoading } =
    useGetRestaurantReviewsQuery(id);
  const { data: Rdata, isLoading: isRestaurantLoading } =
    useGetSingleRestaurantQuery(id);
  const [showRequiredError, setShowRequiredError] = useState(false);
  const { data: eventData, isLoading } = useGetSingleEventQuery(eventId);
  const eventDate = moment(eventData?.data?.date).format("DD MMM, YYYY");
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);

  const {
    name,
    address,
    location,
    avgReviews,
    reviewStatus,
    days,
    description,
    helpLineNumber1,
    helpLineNumber2,
  } = Rdata?.data ?? {};

  const center = {
    lat: location?.coordinates[1] ? location?.coordinates[1] : 0,
    lng: location?.coordinates[0] ? location?.coordinates[0] : 0,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAu6RiRrpTx0SY5nnFxml5UbOpuHiGNHKI",
  });
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);
  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  // reviews data
  const { ratingOverview, reviews } = reviewsData?.data || {};

  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(eventId ? eventDate : null);
  const [guestCount, setGuestCount] = useState(null);
  const numberOfGuests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const reservationData = eventId
    ? {
        time: selectedTime,
        date: selectedDate,
        seats: guestCount,
        restaurant: id,
        event: eventId,
      }
    : {
        time: selectedTime,
        date: selectedDate,
        seats: guestCount,
        restaurant: id,
      };

  console.log(Rdata?.data);

  return (
    <>
      {isLoading ? (
        <div className="container pt-[160px]">
          <SkeletonLoader></SkeletonLoader>
        </div>
      ) : (
        <div className="container pt-[160px]">
          {/* Restaurant Details Section */}
          <section className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 md:gap-y-0">
            {/* left */}
            <div className="relative rounded-xl bg-primary-white-light p-4 shadow">
              <RestaurantImageSlider images={Rdata?.data?.images} />

              {!isRestaurantLoading && (
                <>
                  <div className="mt-3">
                    <h1 className="text-3xl font-bold text-primary-secondary-3">
                      {name}
                    </h1>

                    <Separator className="mb-4 mt-2" />

                    <div className="mb-3 grid grid-cols-1 gap-x-5 font-kumbh-sans lg:grid-cols-2">
                      {/* Inner left */}
                      <div className="">
                        <div className="mb-4 flex items-start gap-2">
                          <Image src={locationIcon} alt="location icon" />
                          <p className="text-primary-secondary-1">
                            {address}
                            {/* <Link
                      href="https://maps.app.goo.gl/7cd8co1jrPgimQE77"
                      className="flex items-center gap-x-2 font-semibold italic"
                    >
                      Get Direction <Image src={arrow} alt="arrow icon" />
                    </Link> */}
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
                      </div>

                      {/* Inner Right */}
                      <div>
                        <div className="flex items-start gap-x-1">
                          <Menu
                            className="text-primary-secondary-3"
                            size={24}
                          />

                          <p className="max-w-[85%]">
                            {descriptionExpanded
                              ? description
                              : truncatedText(description, 200)}

                            {description?.length > 200 && (
                              <button
                                className="ml-1 text-sm font-medium text-primary-secondary-3/90 hover:underline"
                                onClick={() =>
                                  setDescriptionExpanded(!descriptionExpanded)
                                }
                              >
                                {descriptionExpanded
                                  ? "show less"
                                  : "read more..."}
                              </button>
                            )}
                          </p>
                        </div>

                        <div className="mt-4 flex items-start gap-2">
                          <Image src={bookIcon} alt="calendar icon" />
                          <Link href={`/menu/${id}?state=only-menu`}>
                            <p className="border-b-2 border-b-primary-secondary-2 text-primary-secondary-1 transition-all duration-300 ease-in-out hover:border-b-primary-secondary-1">
                              Show Menu
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Filters */}
                    <div className="mb-24 mt-10 lg:mt-0 xl:w-3/4">
                      <h4 className="text-xl font-semibold text-primary-secondary-1">
                        Book a table
                      </h4>

                      <div
                        className={`mb-16 mt-3 grid grid-cols-1 gap-x-6 gap-y-4 lg:mb-0 lg:w-full xl:grid-cols-3 xl:gap-y-0`}
                      >
                        <div className="w-full">
                          <DayPickerInput
                            // disabled={eventData?.data ? true : false}
                            minDate={eventData?.data?.startDate}
                            maxDate={eventData?.data?.endDate}
                            date={selectedDate}
                            setDate={setSelectedDate}
                          />
                        </div>

                        <div className="flex items-center rounded-lg border border-primary-secondary-1/35 px-3">
                          <Clock size={20} />
                          <TimePicker
                            showHour={true}
                            showMinute={true}
                            showSecond={false}
                            className="h-full w-full"
                            placeholder="Time"
                            minuteStep={15}
                            onChange={(value) =>
                              setSelectedTime(format(value, "HH:mm"))
                            }
                            defaultValue={selectedTime}
                          />
                        </div>

                        {/* select users */}
                        <div className="">
                          <Select
                            onValueChange={(value) => setGuestCount(value)}
                          >
                            <SelectTrigger className="border border-primary-secondary-1/35 pl-3">
                              <div className="flex items-center gap-x-2">
                                <Users2Icon size={20} />
                                <SelectValue placeholder="Guests" />
                              </div>
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

                      {showRequiredError && (
                        <p className="mt-[2px] pl-1 font-kumbh-sans text-sm font-medium text-primary-danger">
                          Please fill out the form completely to book now!
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Book Now Button with Modal */}

                  <BookNowBtn
                    guest={guestCount}
                    eventId={eventId}
                    reservation={reservationData}
                    setShowRequiredError={setShowRequiredError}
                  />
                </>
              )}
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
                    {days?.map((day) => (
                      <TableRow key={day.id} className="border-0">
                        <TableCell className="capitalize">{day?.day}</TableCell>

                        {/* Show closed if opening and closing time are both 00:00 */}
                        <TableCell>
                          {day?.openingTime === "00:00" &&
                          day?.closingTime === "00:00" ? (
                            <span className="text-primary-danger">Closed</span>
                          ) : (
                            day?.openingTime
                          )}
                        </TableCell>
                        <TableCell>
                          {day?.openingTime === "00:00" &&
                          day?.closingTime === "00:00"
                            ? ""
                            : day?.closingTime}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>

          {/* Review Section */}
          <section className="mt-16">
            <h1 className="text-3xl font-bold text-primary-secondary-1">
              Review
            </h1>

            <div className="mt-12 flex flex-col items-start gap-16 lg:flex-row">
              <div className="mx-auto lg:mx-0 lg:w-[20%]">
                {/* left */}
                <div className="flex items-center gap-x-3 font-bold text-primary-secondary-1">
                  <h1>{avgReviews}</h1>
                  <Image src={starIcon} alt="rating star icon" />
                </div>

                <p className="mt-5 max-w-max text-center font-kumbh-sans text-primary-secondary-1">
                  {reviews?.length ?? 0} Reviews
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
                    value={
                      ratingOverview &&
                      ratingOverview["5star"] &&
                      ratingOverview["5star"].avg
                        ? ratingOverview["5star"].avg
                        : 0
                    }
                    className={cn("bg-primary-secondary-1", styles.progressBar)}
                  />
                </div>
                <div className="flex items-center gap-x-16">
                  <div className="flex items-center gap-x-2">
                    <h4 className="text-xl font-bold text-[#F8B84E]">4</h4>
                    <Image src={goldStarIcon} alt="gold star icon" />
                  </div>
                  <Progress
                    value={
                      ratingOverview && ratingOverview["4star"]?.avg
                        ? ratingOverview["4star"]?.avg
                        : 0
                    }
                    className={cn("bg-primary-secondary-1", styles.progressBar)}
                  />
                </div>
                <div className="flex items-center gap-x-16">
                  <div className="flex items-center gap-x-2">
                    <h4 className="text-xl font-bold text-[#F8B84E]">3</h4>
                    <Image src={goldStarIcon} alt="gold star icon" />
                  </div>
                  <Progress
                    value={
                      ratingOverview && ratingOverview["3star"]?.avg
                        ? ratingOverview["3star"]?.avg
                        : 0
                    }
                    className={cn("bg-primary-secondary-1", styles.progressBar)}
                  />
                </div>
                <div className="flex items-center gap-x-16">
                  <div className="flex items-center gap-x-2">
                    <h4 className="text-xl font-bold text-[#F8B84E]">2</h4>
                    <Image src={goldStarIcon} alt="gold star icon" />
                  </div>
                  <Progress
                    value={
                      ratingOverview && ratingOverview["2star"]?.avg
                        ? ratingOverview["2star"]?.avg
                        : 0
                    }
                    className={cn("bg-primary-secondary-1", styles.progressBar)}
                  />
                </div>
                <div className="flex items-center gap-x-16">
                  <div className="flex items-center gap-x-2">
                    <h4 className="text-xl font-bold text-[#F8B84E]">1</h4>
                    <Image src={goldStarIcon} alt="gold star icon" />
                  </div>
                  <Progress
                    value={
                      ratingOverview && ratingOverview["1star"]?.avg
                        ? ratingOverview["1star"]?.avg
                        : 0
                    }
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
              {reviews?.map((review, idx) => (
                <div key={idx}>
                  <FeedbackCard data={review} />
                  <Separator className="my-10 bg-primary-black" />
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
