import { createBrowserRouter } from "react-router-dom";

import { Shopping } from "./pages/Shopping";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Shopping />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
