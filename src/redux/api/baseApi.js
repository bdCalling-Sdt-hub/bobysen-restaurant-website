import { axiosBaseQuery } from "@/helpers/axiosBaseQuery";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tagTypes";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "http://192.168.10.61:5005/api/v1" }),
  tagTypes: tagTypesList,
  endpoints: () => ({}),
});
