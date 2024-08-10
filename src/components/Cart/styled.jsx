import styled from "styled-components";
import * as colors from "../../utils/colors";

export const CartContent = styled.div`
  position: fixed;
  right: 0;
  top: 100px;
  width: 380px;
  height: calc(100vh - 100px);
  transform: translateX(100%);
  background: ${colors.whiteColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  transition: all 300ms;
  z-index: 500;

  &.active {
    transform: translateX(0%);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ProductsCart = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10px;
  overflow-y: auto;
  gap: 10px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: ${colors.darkColor};
  font-weight: 400;
  margin: 40px 0;
`;

export const TotalPriceContent = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${colors.themeColor};
  padding: 20px;
  gap: 8px;
`;

export const TotalPriceParagraph = styled.p`
  color: ${colors.darkColor};
  font-weight: 500;
  font-size: 20px;
`;

export const Price = styled.p`
  color: ${colors.darkColor};
  font-weight: 600;
  font-size: 24px;
`;
