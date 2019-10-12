import styled from "styled-components";
import { Plus } from "styled-icons/boxicons-regular/Plus";
const StyledPlus = styled(Plus)`
  height: 20px;
  width: 20px;
  color: ${({ theme }) => theme.lightgreen};
  transition: all 1s;
  &:hover {
    transform: rotateZ(180deg);
    cursor: pointer;
  }
`;
export default StyledPlus;
