import Image from "next/image";
import food from "/public/cart/food.png";
import styles from "./CartCard.module.css";

export default function CartCard() {
  // TODO: Use dynamic card data
  return (
    <div className="flex items-center gap-x-10 rounded bg-primary-secondary-2 px-10 py-6">
      {/* left */}
      <div className="text-center lg:w-[20%]">
        <Image
          src={food}
          alt="cart food item pic"
          className="mb-2 block w-full"
        />
        <h4 className="font-bold text-primary-white">Burger</h4>
      </div>

      {/* right */}
      <div className="lg:w-[70%]">
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
