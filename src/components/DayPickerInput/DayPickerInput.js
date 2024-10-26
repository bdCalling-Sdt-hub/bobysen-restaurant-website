"use client";

import * as React from "react";
import { format, isBefore, isAfter, startOfDay } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import calendarIcon from "/public/DynamicRestaurant/calendar.png";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import moment from "moment";

export function DayPickerInput({ date, setDate, disabled, minDate, maxDate }) {
  const [error, setError] = React.useState(null);

  const handleDateSelect = (selectedDate) => {
    if (disabled) return;

    // Set minDate and maxDate to start of the day (00:00) to include the whole day
    const normalizedMinDate = startOfDay(new Date(minDate));
    const normalizedMaxDate = startOfDay(new Date(maxDate));

    if (minDate && maxDate) {
      if (
        isBefore(selectedDate, normalizedMinDate) ||
        isAfter(selectedDate, normalizedMaxDate)
      ) {
        setError(
          `Please select a date within ${moment(normalizedMinDate).format("MMM DD, YYYY")} and ${moment(normalizedMaxDate).format("MMM DD, YYYY")}`,
        );
        return;
      }
    }

    setError(null);
    setDate(selectedDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground",
            disabled && "cursor-not-allowed opacity-50",
          )}
          disabled={disabled} // Disable button if disabled prop is true
        >
          <Image src={calendarIcon} alt="calendar icon" className="mr-2" />
          {date ? (
            format(date, "yyyy-MM-dd")
          ) : (
            <span className="text-primary-black">Date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect} // Validate date selection
          initialFocus
          disabled={disabled} // Disable calendar interactions if disabled
        />
        {error && (
          <div className="mx-auto mt-2 max-w-[250px] p-2 text-sm text-red-600">
            {error}
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
