import { tagTypes } from "../tagTypes.js";
import { baseApi } from "./baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMenuByReservationId: builder.query({
      query: (bookingId) => ({
        url: `/cart/${bookingId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.cart, tagTypes.booking],
    }),
  }),

  // overrideExisting: true,
});

export const { useGetMenuByReservationIdQuery } = cartApi;
