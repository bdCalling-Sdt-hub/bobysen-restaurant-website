import { baseApi } from "./baseApi";

const restaurantApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRestaurants: builder.query({
      query: (data) => ({
        url: `/restaurants`,
        method: "GET",
        data: data,
      }),
      // providesTags: [tagTypes.restaurant],
    }),
    getSingleRestaurant: builder.query({
      query: (id) => ({
        url: `/restaurants/${id}`,
        method: "GET",
      }),
      // providesTags: [tagTypes.restaurant],
    }),
  }),

  // overrideExisting: true,
});

export const { useGetAllRestaurantsQuery, useGetSingleRestaurantQuery } =
  restaurantApi;
