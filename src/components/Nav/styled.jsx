import styled from "styled-components";
import * as colors from "../../utils/colors";

import { IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";

export const NavContainer = styled.header`
  position: fixed;
  min-width: 360px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  background: ${colors.primaryColor};
  padding: 40px;
  z-index: 1000;
`;

export const NavContent = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormSearch = styled.form`
  max-width: 500px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background: ${colors.whiteColor};
  margin-right: 40px;
  padding: 0 15px;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 100%;
  color: ${colors.darkColor};
  font-weight: 500;
  font-size: 15px;

  &::placeholder {
    color: ${colors.grayColor};
  }
`;

export const IconSearch = styled(IoSearch)`
  font-size: 22px;
  color: ${colors.grayColor};
`;

export const CartButton = styled.button`
  position: relative;
  padding: 8px;
  border-radius: 2px;
`;

export const IconCart = styled(BsCart2)`
  font-size: 22px;
  color: ${colors.darkColor};
`;

export const CartLength = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  border-radius: 50%;
  background: ${colors.errorColor};
  color: ${colors.whiteColor};
  font-weight: 700;
`;
