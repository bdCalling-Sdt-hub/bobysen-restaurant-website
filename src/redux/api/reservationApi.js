import { tagTypes } from "../tagTypes.js";
import { baseApi } from "./baseApi";

const reservationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllReservations: builder.query({
      query: (query) => ({
        url: `/booking`,
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.booking],
    }),
    getSingleReservation: builder.query({
      query: (id) => ({
        url: `/booking/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),
  }),

  // overrideExisting: true,
});

export const { useGetAllReservationsQuery, useGetSingleReservationQuery } =
  reservationApi;
