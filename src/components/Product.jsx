import { Button } from "./ui/button";

import { useCart } from "@/context/cartContext";
import { formatCurrency } from "@/hooks/formatCurrency";

export const Product = ({ data }) => {
  const { addItem } = useCart();

  const handleAddCart = () => {
    addItem(data);
  };

  return (
    <section className="max-w-48 max-h-80 w-full flex items-center flex-col bg-zinc-900 border border-zinc-800 rounded-lg px-2 py-4 gap-2">
      <div className="relative w-full aspect-square">
        <img
          src={data.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
          alt="product-image"
          className="absolute w-full h-full object-cover rounded-lg"
        />
      </div>
      <p className="w-full text-sm text-zinc-200 h-10 truncate">{data.title}</p>
      <span className="text-lg text-zinc-50 font-semibold">
        {formatCurrency({ price: data.price })}
      </span>
      <Button onClick={handleAddCart} className="bg-blue-800 hover:bg-blue-600">
        Adicionar ao carrinho
      </Button>
    </section>
  );
};
