import styled from "styled-components";
import * as colors from "../../utils/colors";

import { BsCartDashFill } from "react-icons/bs";

export const Product = styled.div`
  width: 100%;
  height: fit-content;
  background: ${colors.whiteColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  gap: 10px;

  &:last-child {
    border-bottom: none;
  }
`;

export const Thumbnail = styled.img`
  width: 70px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 2px;
`;

export const Properties = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const Price = styled.h1`
  font-size: 30px;
  font-weight: 400;
  color: ${colors.darkColor};
`;

export const Title = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${colors.grayColor};
`;

export const Buttons = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const RemoveItemButton = styled.button`
  padding: 5px;
`;

export const RemoveItemIcon = styled(BsCartDashFill)`
  color: ${colors.errorColor};
  font-size: 22px;
`;

export const AmountContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Amount = styled.p`
  width: 20px;
  height: 20px;
  font-size: 16px;
  color: ${colors.grayColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 20px;
  height: 20px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.grayColor};
  transition: all 200ms;
  border-radius: 2px;

  &:hover {
    background: ${colors.grayColor};
    color: ${colors.whiteColor};
  }
`;

