import styled from "styled-components";
import * as colors from "../../utils/colors";

export const ProductsContent = styled.div`
  max-width: 1100px;
  min-height: calc(100dvh - 100px);
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 100px;
  padding: 20px;
  gap: 20px;
`;

export const Navegation = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.whiteColor};
  gap: 20px;
`;

export const Button = styled.button`
  width: 90px;
  height: 32px;
  border-radius: 3px;
  color: ${colors.grayColor};
  transition: all 200ms;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${colors.blueLightColor};
  }
`;

export const PageCurrent = styled.span`
  display: block;
  border-radius: 3px;
  transition: all 200ms;
  font-size: 16px;
  color: ${colors.grayColor};
  font-weight: 500;
  padding: 4px;
`;
