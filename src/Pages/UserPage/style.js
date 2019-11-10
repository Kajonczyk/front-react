import styled from "styled-components";

export const StyledWrapper = styled.div`
  background-image: linear-gradient(0deg, #093028, #237a57);
  overflow: hidden;
  min-height: 100vh;
`;
export const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.lightgreen};
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.Sofia};
  position: relative;
  font-weight: 100;
`;
export const StyledGreetingWrapper = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
`;
export const StyledGreeting = styled(StyledH1)`
  font-size: ${({ theme }) => theme.font.size.juniorStartMobile};
  &::after {
    content: "DASHBOARD";
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.055;
    font-size: calc(${({ theme }) => theme.font.size.juniorStartMobile} * 3);
  }
`;

export const RecruitmentWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
`;

export const SectionInfo = styled(StyledH1)`
  color: ${({ theme }) => theme.lightgreen};
  padding: 15px;
  font-family: ${({ theme }) => theme.font.family.Didact};

  border: 2px solid ${({ theme }) => theme.lightgreen};
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;

  text-align: center;
  &:nth-child(1) {
    margin-top: 40px;
  }
`;
export const StyledRecruitmentWrapper = styled.div`
  width: 250px;
`;
