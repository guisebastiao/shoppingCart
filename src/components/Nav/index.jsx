import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Select } from "../../slices/apiSlice";
import { activeCart } from "../../slices/cartSlice";

import { NavContainer, NavContent, FormSearch, InputSearch, IconSearch, CartButton, IconCart, CartLength } from "./styled";

const Nav = ({ data, setData }) => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const { products, active } = useSelector(state => state.cart);

  const handleSearch = (event) => {
    event.preventDefault();

    if(searchValue.trim() === ""){
      return;
    }

    setData({
      query: searchValue,
      offset: 0,
    });

    dispatch(Select(data));
  }

  const handleActiveCart = () => {
    dispatch(activeCart(active));
  }

  return (
    <NavContainer>
      <NavContent>
        <FormSearch onSubmit={handleSearch}>
          <InputSearch type="text" placeholder="Buscar produtos..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />
          <IconSearch />
        </FormSearch>
        <CartButton onClick={handleActiveCart}>
          { products.length > 0 && (
            <CartLength>{products.length > 9 ? "9+" : products.length }</CartLength>
          )}
          <IconCart />
        </CartButton>
      </NavContent>
    </NavContainer>
  );
}

export default Nav;
