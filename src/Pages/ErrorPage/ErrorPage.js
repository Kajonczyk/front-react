import React from "react";
import styled from "styled-components";
import history from "../../Utils/history";
const ErrorPage = props => {
  const redirect = () => {
    history.push("/");
  };
  return (
    <StyledWrapper>
      <StyledHeading big>404</StyledHeading>
      <StyledHeading>
        Apparently you got lost. Click{" "}
        <StyledSpan onClick={redirect}>here</StyledSpan> to return to the main
        page
      </StyledHeading>
    </StyledWrapper>
  );
};
export default ErrorPage;
const StyledWrapper = styled.div`
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => theme.gradientWhite} 0%,
    ${({ theme }) => theme.gradientPink} 18%
  );
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.purplePrimary};
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-weight: normal;
  padding: 0px 20px;
  text-align: center;
  ${({ big, theme }) =>
    big &&
    `
  font-size: calc(${theme.font.size.juniorStartMobile} * 2);
  `}
`;
const StyledSpan = styled.span`
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
`;
