import styled from "styled-components";
import { KeyboardArrowDown } from "styled-icons/material/KeyboardArrowDown";

export const StyledKeyboardArrowDownIcon = styled(KeyboardArrowDown)`
  height: 20px;
  width: 20px;
  color: ${({ theme }) => theme.purplePrimary};
  transition: all 1s;
  &:hover {
    transform: translateY(5px);
    cursor: pointer;
  }
`;
