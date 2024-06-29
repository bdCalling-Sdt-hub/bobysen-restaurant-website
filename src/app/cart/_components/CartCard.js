import showImage from "@/utils/fileHelper.js";
import Image from "next/image";
import styles from "./CartCard.module.css";

export default function CartCard({ data, bookingId, totalAmount }) {
  // TODO: Use dynamic card data
  return (
    <div className="flex items-center gap-x-10 rounded bg-primary-secondary-2 px-10 py-6">
      {/* left */}
      <div className="text-center lg:w-[20%]">
        <Image
          height={400}
          width={400}
          src={showImage(data?.menuImage)}
          alt="cart food item pic"
          className="mb-2 block w-full"
        />
        <h4 className="font-bold text-primary-white">{data?.menuName}</h4>
      </div>

      {/* right */}
      <div className="lg:w-[70%]">
        <table className={styles.cardCardTable}>
          <tbody className="font-kumbh-sans text-primary-white">
            <tr className={styles.cartCardTr}>
              <td>Order Quantity</td>
              <td>{data?.quantity}</td>
            </tr>
            <tr className={styles.cartCardTr}>
              <td>Amount</td>
              <td>{data?.amount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
