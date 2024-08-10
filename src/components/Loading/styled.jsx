import styled, { keyframes } from "styled-components";
import * as colors from "../../utils/colors";

const animation = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

export const Loader = styled.div`
  width: ${props => props.size}px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${colors.secondaryColor};
  --conic: conic-gradient(#0000 10%,#000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--conic);
  mask: var(--conic);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: ${animation} 1s infinite linear;
`;
