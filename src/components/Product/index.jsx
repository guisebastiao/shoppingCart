import React from "react";
import { useDispatch } from "react-redux";

import { AddCart, AddCartIcon, ProductContent, ImageContent, Image, Price, Title } from "./styled";

import { addProduct } from "../../slices/cartSlice";

import { priceFormat } from "../../utils/priceFormat";

const Product = ({ data }) => {
  const { title, price, thumbnail } = data;
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addProduct(data));
  }

  return (
    <ProductContent>
      <ImageContent>
        <Image src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} />
      </ImageContent>
      <Price>{priceFormat(price)}</Price>
      <Title>{title}</Title>
      <AddCart onClick={handleAddProduct}>
        <AddCartIcon />
      </AddCart>
    </ProductContent>
  )
}

export default Product;
