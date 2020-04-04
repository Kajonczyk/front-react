import styled from "styled-components";

export const StyledDiv = styled.div`
  min-height: 200px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  ${({ theme }) => theme.mq.tablet} {
    margin-top: 40px;
    min-height: 150px;
  }
`;
export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mq.tablet} {
    ${({ data }) =>
      data &&
      `
      width:73%;
      margin:0px auto;
    `}
  }
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  ${({ theme }) => theme.mq.tablet} {
    width: 300px;
    margin: 20px auto;
    margin-bottom: 0px;
  }
`;
export const SectionInfo = styled.h1`
  color: ${({ theme }) => theme.purplePrimary};
  margin: 0px auto;
  padding: 10px;
  font-family: ${({ theme }) => theme.font.family.Didact};
  border: 2px solid ${({ theme }) => theme.purplePrimary};

  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  font-weight: 100;
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    align-items: center;
    width: 73%;
  }
`;

export const StyledLabel = styled.p`
  color: ${({ theme }) => theme.purplePrimary};
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-size: ${({ theme }) => theme.font.size.formMobileText};
  margin-top: 30px;
  border: 0px;
  border-bottom: 1px solid;
  border-style: dotted;
  padding: 5px;
  text-align: center;
  word-break: break-word;
  font-weight: bold;
  ${({ theme }) => theme.mq.tablet} {
    text-align: left;
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;
export const StyledSpan = styled.span`
  font-weight: normal;
`;
