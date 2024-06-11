import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EyeIcon, MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import CartCard from "@/app/cart/_components/CartCard";
import OrderCard from "./OrderCard";
import Link from "next/link";

export default function OrdersTable({ status }) {
  // TODO: Use dynamic table data

  return (
    <div className="container mt-12">
      <Table className="border">
        <TableCaption>A list of your {status} orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-kumbh-sans text-xl text-primary-secondary-1">
              Restaurant Name
            </TableHead>
            <TableHead className="font-kumbh-sans text-xl text-primary-secondary-1">
              Amount
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
          {Array.from({ length: 7 }).map((_, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-kumbh-sans text-primary-black">
                Lava Java Restaurant
              </TableCell>
              <TableCell className="font-kumbh-sans text-primary-black">
                $500
              </TableCell>
              <TableCell className="font-kumbh-sans text-primary-black">
                31 apr 2024, 11.00PM
              </TableCell>
              <TableCell className="font-kumbh-sans text-primary-black">
                {/* Show Order History Modal on Eye button click */}
                <AlertDialog>
                  <AlertDialogTrigger>
                    <EyeIcon role="button" />
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle className="font-kumbh-sans text-2xl">
                        Order History
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        {/* Use Dynamic data for the cards */}
                        <div className="mt-4 max-h-[50vh] space-y-4 overflow-auto">
                          <OrderCard />
                          <OrderCard />
                          <OrderCard />
                        </div>

                        <div className="mb-2 mt-10 flex items-center justify-between font-kumbh-sans text-xl font-medium text-primary-secondary-3">
                          <h4>Total Cost</h4>
                          <h4>$1500.00</h4>
                        </div>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
              {status === "Completed" && (
                <TableCell className="font-kumbh-sans text-primary-black">
                  <Button variant="outline" asChild>
                    <Link href="/dashboard/user/review">
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
