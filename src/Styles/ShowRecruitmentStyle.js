import styled from "styled-components";

export const StyledDiv = styled.div`
  height: 200px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
`;
export const SectionInfo = styled.h1`
  color: ${({ theme }) => theme.lightgreen};
  margin: 0px auto;
  padding: 10px;
  font-family: ${({ theme }) => theme.font.family.Didact};
  border: 2px solid ${({ theme }) => theme.lightgreen};

  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  font-weight: 100;
`;
export const StyledP = styled.p`
  color: ${({ theme }) => theme.lightgreen};
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-size: ${({ theme }) => theme.font.size.formMobileText};
  margin-top: 30px;
  border: 0px;
  border-bottom: 1px solid;
  border-style: dotted;
  padding: 5px;
  text-align: center;
  word-break: break-word;
`;
