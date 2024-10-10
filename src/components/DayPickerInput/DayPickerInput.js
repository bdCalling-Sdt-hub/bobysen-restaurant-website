"use client";

import * as React from "react";
import { format } from "date-fns";
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

export function DayPickerInput({ date, setDate, disabled }) {
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
          onSelect={disabled ? undefined : setDate} // Prevent date selection if disabled
          initialFocus
          disabled={disabled} // Disable calendar interactions if disabled
        />
      </PopoverContent>
    </Popover>
  );
}
