import styled from "styled-components";
import { KeyboardArrowDown } from "styled-icons/material/KeyboardArrowDown";

const StyledKeyboardArrowDown = styled(KeyboardArrowDown)`
  height: 20px;
  width: 20px;
  color: ${({ theme }) => theme.lightgreen};
  transition: all 1s;
  &:hover {
    transform: translateY(5px);
    cursor: pointer;
  }
`;
export default StyledKeyboardArrowDown;
