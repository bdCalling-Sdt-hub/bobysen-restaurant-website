"use client";

import { persistor, store } from "@/redux/store";
import { pageview } from "@/utils/gAnalytics";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function Providers({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    pageview(pathname);
  }, [pathname]);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </ReduxProvider>
  );
}
