import styled from "styled-components";
import { Plus } from "styled-icons/boxicons-regular/Plus";
const StyledPlus = styled(Plus)`
  height: 20px;
  width: 20px;
  color: ${({ theme }) => theme.green};
  transition: all 1s;
  &:hover {
    transform: rotateZ(180deg);
  }
`;
export default StyledPlus;
