import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const cartStorage = localStorage.getItem("cart");

  const [cart, setCart] = useState(!cartStorage ? [] : JSON.parse(cartStorage));
  localStorage.setItem("cart", JSON.stringify(cart));

  const addItem = (item) => {
    const product = {
      id: item.id,
      title: item.title,
      originalPrice: item.price,
      price: item.price,
      thumbnail: item.thumbnail,
    };

    setCart((state) => {
      const index = state.findIndex((item) => item.id === product.id);

      if (index !== -1) {
        const update = [...state];
        const item = { ...update[index] };
        item.quantity += 1;
        item.price = item.originalPrice * item.quantity;
        update[index] = item;
        return update;
      }

      return [...state, { ...product, quantity: 1 }];
    });

    toast.success("Item adicionando no carrinho.");
  };

  const removeItem = (itemId) => {
    setCart((state) => state.filter((item) => item.id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: item.originalPrice * (item.quantity + 1),
            }
          : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              price: item.originalPrice * (item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeAll = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce(
    (price, item) => price + item.price * item.quantity,
    0
  );

  const totalProducts = cart.reduce(
    (products, item) => products + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        totalPrice,
        totalProducts,
        increaseQuantity,
        decreaseQuantity,
        removeAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
