import { axiosBaseQuery } from "@/helpers/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tagTypes";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "http://192.168.10.61:5005/api/v1" }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
