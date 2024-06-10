import Image from "next/image";
import food from "/public/cart/food.png";
import styles from "./OrderCard.module.css";

export default function OrderCard() {
  // TODO: Use dynamic card data
  return (
    <div className="flex items-center gap-x-4 rounded bg-primary-secondary-2 px-4 py-1">
      {/* left */}
      <div className="text-center lg:w-[30%]">
        <Image
          src={food}
          alt="cart food item pic"
          className="mb-2 block w-full"
        />
        <h4 className="font-bold text-primary-white">Burger</h4>
      </div>

      {/* right */}
      <div className="lg:w-[60%]">
        <table className={styles.cardCardTable}>
          <tbody className="font-kumbh-sans text-primary-white">
            <tr className={styles.cartCardTr}>
              <td>Order Quantity</td>
              <td>04</td>
            </tr>
            <tr className={styles.cartCardTr}>
              <td>Amount</td>
              <td>$100</td>
            </tr>
            <tr className={styles.cartCardTr}>
              <td>Order Date</td>
              <td>2 June 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
