import { Trash2 } from "styled-icons/feather/Trash2";
import styled from "styled-components";
const StyledTrash = styled(Trash2)`
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.lightgreen};
  transition: all 1s;
  &:hover {
    cursor: pointer;
  }
`;
export default StyledTrash;
