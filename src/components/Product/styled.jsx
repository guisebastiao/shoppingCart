import styled from "styled-components";
import * as colors from "../../utils/colors";

import { BsFillCartPlusFill } from "react-icons/bs";

export const AddCart = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: ${colors.secondaryColor};
  transition: all 200ms;
  opacity: 0;

  &:hover {
    transform: scale(1.05);
  }
`;

export const AddCartIcon = styled(BsFillCartPlusFill)`
  font-size: 22px;
  color: ${colors.whiteColor};
`;

export const ProductContent = styled.div`
  position: relative;
  max-width: 240px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${colors.whiteColor};
  transition: all 200ms;
  border-radius: 4px;
  gap: 10px;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    cursor: default;
  }

  &:hover ${AddCart} {
    opacity: 1;
  }
`;

export const ImageContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Price = styled.h1`
  font-size: 28px;
  color: ${colors.darkColor};
  font-weight: 400;
`;

export const Title = styled.p`
  height: 100%;
  display: flex;
  align-items: flex-start;
  color: ${colors.grayColor};
  font-size: 15px;
  padding: 10px;
`;
