import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const topRestaurantApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTopRestaurnts: builder.query({
      query: (data) => ({
        url: `/topRestaurants`,
        method: "GET",
        data: data,
      }),
      providesTags: [tagTypes.topRestaurants],
    }),
    getSingleTopRestaurant: builder.query({
      query: (id) => ({
        url: `/topRestaurants/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.topRestaurants],
    }),
  }),

  //   overrideExisting: true,
});

export const { useGetAllTopRestaurntsQuery, useGetSingleTopRestaurantQuery } =
  topRestaurantApi;
