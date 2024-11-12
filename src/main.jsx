import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

const queryClient = new QueryClient();
import { CartProvider } from "./context/cartContext";
import { router } from "./routes";
import "./global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
        <Toaster />
      </CartProvider>
    </QueryClientProvider>
  </StrictMode>
);
