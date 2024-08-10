import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CartContent, ProductsCart, Paragraph, TotalPriceContent, TotalPriceParagraph, Price } from "./styled";

import ProductCart from "../ProductCart";

import { countPrice } from "../../slices/cartSlice";

import { priceFormat } from "../../utils/priceFormat";

const Cart = () => {
  const { products, active, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countPrice({ products }));
  }, [dispatch, products])

  return (
    <CartContent className={active && "active"}>
      <ProductsCart>
        {products.length <= 0 && <Paragraph>Nenhum item adicionado no carrinho.</Paragraph>}
        {products.map(product => (
          <ProductCart key={product.id} product={product} />
        ))}
      </ProductsCart>
      <TotalPriceContent>
        <TotalPriceParagraph>Preço total:</TotalPriceParagraph>
        <Price>{priceFormat(totalPrice)}</Price>
      </TotalPriceContent>
    </CartContent>
  );
}

export default Cart;
