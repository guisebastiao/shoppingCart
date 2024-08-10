export const priceFormat = (price) => {
  return price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  });
}
