import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Array to hold all items in the cart
  totalAmount: 0,
  bookingId: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { quantity, price, bookingId, ...otherPayload } = action.payload;
      const amount = Number(quantity) * Number(price);
      const existingItemIndex = state.items.findIndex(
        (item) => item.bookingId === bookingId,
      );

      if (existingItemIndex !== -1) {
        // If bookingId already exists, update existing item
        const existingItem = state.items[existingItemIndex];
        existingItem.quantity += Number(quantity);
        existingItem.amount += amount;
      } else {
        // If bookingId does not exist, add new item
        const newItem = {
          ...otherPayload,
          quantity: Number(quantity),
          price: Number(price),
          amount: amount,
          bookingId: bookingId,
        };
        state.items.push(newItem);
      }

      // Update total amount and bookingId
      state.totalAmount += amount;
      state.bookingId = bookingId;

      // Update localStorage with updated cart data
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
