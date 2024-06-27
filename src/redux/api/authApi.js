import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const AUTH_URL = "/users";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/create-user`,
        method: "POST",
        body: data,
      }),

      invalidatesTags: [tagTypes.auth],
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.auth],
    }),

    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "/otp/verify-otp",
        method: "POST",
        body: data,
      }),

      invalidatesTags: [tagTypes.otp],
    }),

    getSingleUser: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),

      providesTags: [tagTypes.users],
    }),
  }),

  overrideExisting: true,
});

export const {
  useSignUpMutation,
  useVerifyOtpMutation,
  useLoginMutation,
  useGetSingleUserQuery,
} = authApi;
