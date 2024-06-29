import { baseApi } from "./baseApi";

const restaurantApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRestaurants: builder.query({
      query: (query) => ({
        url: `/restaurants`,
        method: "GET",
        params: query,
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

    insertReview: builder.mutation({
      query: (data) => ({
        url: `/reviews`,
        method: "POST",
        body: data,
      }),
    }),
    getRestaurantReviews: builder.query({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "GET",
      }),
    }),
  }),

  // overrideExisting: true,
});

export const {
  useGetAllRestaurantsQuery,
  useGetSingleRestaurantQuery,
  useGetRestaurantReviewsQuery,
  useInsertReviewMutation,
} = restaurantApi;
