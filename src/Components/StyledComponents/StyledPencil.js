import { Edit3 } from "styled-icons/feather/Edit3";
import styled from "styled-components";
const StyledPencil = styled(Edit3)`
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.lightgreen};
  transition: all 1s;
  &:hover {
    cursor: pointer;
  }
`;
export default StyledPencil;
