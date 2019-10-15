import styled from "styled-components";

const SectionInfo = styled.h2`
  color: ${({ theme }) => theme.lightgreen};
  padding: 15px;
  font-family: ${({ theme }) => theme.font.family.Didact};

  border: 2px solid ${({ theme }) => theme.lightgreen};
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;

  text-align: center;
  margin-top: 20px;
`;
export default SectionInfo;
