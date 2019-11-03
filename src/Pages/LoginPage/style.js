import styled from "styled-components";
export const Wrapper = styled.div`
  background-image: linear-gradient(0deg, #093028, #237a57);
  min-height: 100vh;
`;
export const StyledH1 = styled.h1`
  text-align: center;
  font-weight: 100;
  font-size: ${({ theme }) => theme.font.size.juniorStartMobile};
  color: ${({ theme }) => theme.lightgreen};
  font-family: ${({ theme }) => theme.font.family.Sofia};
  position: relative;

  &::after {
    content: "JUNIOR";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.055;
    font-size: calc(${({ theme }) => theme.font.size.juniorStartMobile} * 5);
  }
`;

export const StyledGreetingDiv = styled.div`
  height: 400px;
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
