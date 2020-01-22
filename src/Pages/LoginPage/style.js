import styled from "styled-components";
export const Wrapper = styled.div`
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => theme.gradientWhite} 0%,
    ${({ theme }) => theme.gradientPink} 18%
  );
  min-height: 100vh;
`;
export const StyledH1 = styled.h1`
  text-align: center;
  font-weight: 100;
  font-size: ${({ theme }) => theme.font.size.juniorStartMobile};
  color: ${({ theme }) => theme.purplePrimary};
  font-family: ${({ theme }) => theme.font.family.Didact};
  position: relative;

  &::after {
    content: "JUNIOR";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.04;
    font-size: calc(${({ theme }) => theme.font.size.juniorStartMobile} * 1.8);
    font-family: ${({ theme }) => theme.font.family.Didact};
  }
`;

export const StyledGreetingDiv = styled.div`
  height: 300px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StyledLoginWrapper = styled.div`
  height: 500px;
  padding: 20px;
`;
