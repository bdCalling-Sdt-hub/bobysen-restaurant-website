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

      // Clear existing cart items if a new bookingId is added
      if (state.bookingId !== bookingId) {
        state.items = [];
        state.totalAmount = 0;
        state.bookingId = bookingId;
      }
      if (existingItemIndex !== -1) {
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
        };
        state.items.push(newItem);
      }

      // Update total amount
      state.totalAmount += amount;
      state.bookingId = bookingId;

      // Update localStorage with updated cart data
      localStorage.setItem("cart", JSON.stringify(state));
    },

    getItemByBookingId: (state, action) => {
      const { bookingId } = action.payload;
      const item = state.items.find((item) => item.bookingId === bookingId);
      return item;
    },
  },
});

export const { addToCart, getItemByBookingId } = cartSlice.actions;

export default cartSlice.reducer;
