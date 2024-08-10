import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartStorage = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  products: cartStorage ? cartStorage : [],
  totalPrice: 0,
  active: false,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      toast.success("Produto adicionado ao carrinho.");

      state.products = state.products.map(item => item.id === action.payload.id ? { ...item, amount: item.amount + 1 } : item);

      if(!state.products.some(item => item.id === action.payload.id)){
        state.products = [...state.products, { ...action.payload, amount: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(state.products));
    },

    countPrice: (state, action) => {
      let total = 0

      action.payload.products.map(product => {
        const price = product.amount * product.price;
        total += price;
      });

      state.totalPrice = total;
    },

    decreaseProduct: (state, action) => {
      state.products = state.products.map(item => item.id === action.payload.id ? { ...item, amount: item.amount > 1 ? item.amount - 1 : item.amount } : item);
      localStorage.setItem("cart", JSON.stringify(state.products));
    },

    increaseProduct: (state, action) => {
      state.products = state.products.map(item => item.id === action.payload.id ? { ...item, amount: item.amount += 1 } : item);
      localStorage.setItem("cart", JSON.stringify(state.products));
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.products));
    },

    activeCart: (state, action) => {
      state.active = !action.payload;
    }
  }
});

export const { addProduct, countPrice, decreaseProduct, increaseProduct, deleteProduct, activeCart } = cartSlice.actions;
export default cartSlice.reducer;
