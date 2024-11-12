import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

import { useCart } from "@/context/cartContext";
import { ProductCart } from "./ProductCart";
import { formatCurrency } from "@/hooks/formatCurrency";

export const Cart = () => {
  const { cart, removeAll, totalPrice, totalProducts } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="relative w-9 h-9 flex items-center justify-center bg-zinc-900 rounded-lg border border-zinc-800"
        >
          {totalProducts > 0 && (
            <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 bg-red-600 rounded-full text-[9px] font-bold text-zinc-50">
              {totalProducts > 9 ? "9+" : totalProducts}
            </span>
          )}

          <ShoppingCart className="w-5 text-zinc-400" />
        </button>
      </SheetTrigger>
      <SheetContent className=" bg-zinc-900 border-zinc-800">
        <SheetHeader className="p-3">
          <SheetTitle className="text-zinc-50">Carrinho</SheetTitle>
        </SheetHeader>
        <SheetDescription />
        <div className="flex items-center justify-start flex-col h-height-calc-2 gap-1 py-3 overflow-y-scroll px-3">
          {cart.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
        <SheetFooter className="absolute h-14 w-full flex items-center justify-between bottom-0 left-0 z-50 bg-zinc-900 border-t border-t-zinc-800 px-3">
          <div className="flex items-center justify-center gap-2">
            <span className="text-base font-semibold text-zinc-300">
              Total:
            </span>
            <span className="text-base text-zinc-50">
              {formatCurrency({ price: totalPrice })}
            </span>
          </div>
          <Button
            onClick={() => removeAll()}
            className="bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600"
          >
            Remover Tudo
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
