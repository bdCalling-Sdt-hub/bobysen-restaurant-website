import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const AUTH_URL = "/users";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/create-user`,
        method: "POST",
        data: data,
      }),

      invalidatesTags: [tagTypes.auth],
    }),

    // verifyOtp:
  }),

  overrideExisting: true,
});

export const { useSignUpMutation } = authApi;
