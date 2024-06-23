"use client";

import { store } from "@/redux/store";
import { Provider as ReduxProvider } from "react-redux";

export default function Providers({ children }) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
