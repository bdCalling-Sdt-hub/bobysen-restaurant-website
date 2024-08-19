import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import EmptyData from "@/components/ui/Empty.jsx";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetMenuByReservationIdQuery } from "@/redux/api/cartApi.js";
import { EyeIcon, MessageSquareText } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import OrderCard from "./OrderCard";
import OrderSkeleton from "./OrderSkeleton.js";

export default function OrdersTable({ status, data }) {
  const [reservationId, setReservationId] = useState();
  const { data: Cdata, isLoading } = useGetMenuByReservationIdQuery(
    reservationId,
    {
      skip: !reservationId,
    },
  );

  return (
    <div className="container mt-12">
      <Table className="border">
        <TableCaption>
          A list of your {status?.toLowerCase()} orders.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-kumbh-sans text-xl text-primary-secondary-1">
              Restaurant Name
            </TableHead>
            <TableHead className="font-kumbh-sans text-xl text-primary-secondary-1">
              Reservation ID
            </TableHead>
            <TableHead className="font-kumbh-sans text-xl text-primary-secondary-1">
              Guest
            </TableHead>
            <TableHead className="font-kumbh-sans text-xl text-primary-secondary-1">
              Table No
            </TableHead>
            <TableHead className="font-kumbh-sans text-xl text-primary-secondary-1">
              Time & Date
            </TableHead>
            <TableHead className="font-kumbh-sans text-xl text-primary-secondary-1">
              Order History
            </TableHead>
            {status === "Completed" && (
              <TableHead className="font-kumbh-sans text-xl text-primary-secondary-1">
                Review
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((data, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-kumbh-sans text-primary-black">
                {data?.restaurant?.name}
              </TableCell>
              <TableCell className="font-kumbh-sans text-primary-black">
                {data?.id}
              </TableCell>
              <TableCell className="font-kumbh-sans text-primary-black">
                {data?.table?.seats} Person
              </TableCell>
              <TableCell className="font-kumbh-sans text-primary-black">
                {data?.table?.tableNo}
              </TableCell>

              <TableCell className="font-kumbh-sans text-primary-black">
                {new Date(data?.date).toDateString()}, ({data?.time})
              </TableCell>
              <TableCell className="font-kumbh-sans text-primary-black">
                {/* Show Order History Modal on Eye button click */}
                <AlertDialog>
                  <AlertDialogTrigger>
                    <EyeIcon
                      role="button"
                      onClick={() => setReservationId(data?._id)}
                    />
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle className="font-kumbh-sans text-2xl">
                        Order History
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        {/* Use Dynamic data for the cards */}
                        <div className="mt-4 max-h-[50vh] space-y-4 overflow-auto">
                          {isLoading ? (
                            <OrderSkeleton />
                          ) : Cdata?.data?.items?.length > 0 ? (
                            Cdata.data.items.map((data, index) => (
                              <OrderCard key={index} data={data} />
                            ))
                          ) : (
                            <EmptyData />
                          )}
                        </div>
                        {/* 
                        {Cdata?.data?.status !== "unpaid" && (
                          <div className="mt-10 flex items-center justify-between font-kumbh-sans text-xl font-medium text-primary-secondary-3">
                            <h4>Transaction Id</h4>
                            <h4>#30400e0349540340</h4>
                          </div>
                        )} */}
                        <div className="mb-2 mt-10 flex items-center justify-between font-kumbh-sans text-xl font-medium text-primary-secondary-3">
                          <h4>Total Cost</h4>
                          <h4>${Cdata?.data?.totalAmount}</h4>
                        </div>
                        <div className="mb-2 mt-4 flex items-center justify-between font-kumbh-sans text-xl font-medium text-primary-secondary-3">
                          <h4>Status</h4>
                          <h4>{Cdata?.data?.status}</h4>
                        </div>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
              {!data?.isReviewed && status === "completed" && (
                <TableCell className="font-kumbh-sans text-primary-black">
                  <Button variant="outline" asChild>
                    <Link
                      href={`/dashboard/user/review?booking=${data?._id}&restaurant=${data?.restaurant?._id}`}
                    >
                      <MessageSquareText className="mr-2 h-4 w-4" /> Share
                      Review
                    </Link>
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
