"use client";

import { Button } from "@/components/ui/button";
import styles from "./Orders.module.css";
import { cn } from "@/lib/utils";
import { useState } from "react";
import OrdersTable from "./_components/OrdersTable";

export default function UserOrders() {
  const status = ["Ongoing", "Completed", "Cancel"];
  const [selectedStatus, setSelectedStatus] = useState("Ongoing");

  console.log(selectedStatus);

  return (
    <div className="pt-[160px]">
      {/* header */}
      <div className="h-[70px] bg-primary-secondary-1">
        <div className="mx-auto flex h-full w-1/2 items-stretch justify-center gap-x-12">
          {status.map((statusName, idx) => (
            <div
              className={cn("flex h-full items-center border-0", {
                [styles.activeLink]: selectedStatus === statusName,
              })}
              key={idx}
              onClick={() => setSelectedStatus(statusName)}
              role="button"
            >
              <p className="font-kumbh-sans text-lg text-primary-white">
                {statusName}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Orders - TODO: Show dynamic table data */}
      <div>
        <OrdersTable status={selectedStatus} />
      </div>
    </div>
  );
}
