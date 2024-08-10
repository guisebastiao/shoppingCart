import { configureStore } from "@reduxjs/toolkit";

import apiReducer from "./slices/apiSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    api: apiReducer,
    cart: cartReducer,
  }
});
