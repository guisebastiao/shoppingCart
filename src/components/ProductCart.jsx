import { X, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

import { formatCurrency } from "@/hooks/formatCurrency";
import { useCart } from "@/context/cartContext";

export const ProductCart = ({ product }) => {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();

  return (
    <section className="w-full h-16 flex items-center justify-between">
      <img
        src={product.thumbnail}
        alt="product-cart-thumbnail"
        className="max-w-14 w-full aspect-square rounded-lg"
      />
      <div className="w-full flex flex-col px-2 gap-1">
        <span className="text-sm max-w-44 w-full truncate text-zinc-50">
          {product.title}
        </span>
        <span className="max-w-44 w-full truncate text-zinc-300">
          {formatCurrency({ price: product.price })}
        </span>
      </div>
      <div className="w-full flex items-center justify-between flex-col">
        <button
          onClick={() => increaseQuantity(product.id)}
          className="w-5 h-6 border border-transparent hover:bg-zinc-800 hover:border-zinc-700 rounded flex items-center justify-center"
        >
          <span className="sr-only">Aumentar a quantidade do produto</span>
          <ChevronUp className="text-zinc-50 w-4" />
        </button>
        <input
          type="number"
          className="w-5 h-6 outline-none text-center text-xs bg-transparent border border-zinc-700 rounded text-zinc-50"
          value={product.quantity}
          disabled
        />
        <button
          onClick={() => decreaseQuantity(product.id)}
          className="w-5 h-6 border border-transparent text-zinc-50 hover:bg-zinc-800 hover:border-zinc-700 rounded flex items-center justify-center disabled:hover:bg-transparent disabled:hover:border-transparent disabled:text-zinc-500"
          disabled={product.quantity <= 1}
        >
          <span className="sr-only">Diminuir a quantidade do produto</span>
          <ChevronDown className="w-4" />
        </button>
      </div>
      <Button
        onClick={() => removeItem(product.id)}
        className="w-8 h-8 flex items-center justify-center bg-red-600 hover:bg-red-500"
      >
        <X className="text-zinc-50" />
      </Button>
    </section>
  );
};
