import { useDispatch } from "react-redux";

import { Product, Thumbnail, Properties, Price, Title, Buttons, RemoveItemButton, RemoveItemIcon, AmountContent, Amount, Button } from "./styled";

import { priceFormat } from "../../utils/priceFormat";

import { decreaseProduct, increaseProduct, deleteProduct } from "../../slices/cartSlice";

const ProductCart = ({ product }) => {
  const { title, price, thumbnail, amount } = product;
  const dispatch = useDispatch();

  const handleDecrease = () => {
    dispatch(decreaseProduct(product));
  }

  const handleIncrease = () => {
    dispatch(increaseProduct(product));
  }

  const handleDelete = () => {
    dispatch(deleteProduct(product));
  }

  return (
    <Product>
      <Thumbnail src={thumbnail} />
      <Properties>
        <Title>{title}</Title>
        <Price>{priceFormat(price)}</Price>
      </Properties>
      <Buttons>
        <RemoveItemButton onClick={handleDelete}>
          <RemoveItemIcon />
        </RemoveItemButton>
        <AmountContent>
          <Button onClick={handleDecrease}>&lt;</Button>
          <Amount>{amount}</Amount>
          <Button onClick={handleIncrease}>&gt;</Button>
        </AmountContent>
      </Buttons>
    </Product>
  );
}

export default ProductCart;
