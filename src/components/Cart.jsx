import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";

export const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="w-9 h-9 flex items-center justify-center bg-zinc-900 rounded-lg border border-zinc-800"
        >
          <ShoppingCart className="w-5 text-zinc-400" />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-zinc-900 border-zinc-800">
        <SheetHeader>
          <SheetTitle className="text-zinc-50">Carrinho</SheetTitle>
        </SheetHeader>
        <SheetDescription />
        <section>
          <span>Produto</span>
        </section>
      </SheetContent>
    </Sheet>
  );
};
