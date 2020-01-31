import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 5px 0px;
  background: none;
  border: 0px;
  border-bottom: 2px solid ${({ theme }) => theme.purplePrimary};
  margin: 10px 0px 15px 0px;
  width: 220px;
  color: ${({ theme }) => theme.purplePrimary};
  font-family: ${({ theme }) => theme.font.family.Didact};

  &::placeholder {
    color: ${({ theme }) => theme.purplePrimary};

    transition: transform 0.3s;
  }
  &:focus::placeholder {
    transform: translateY(-50px);
  }
  ${({ inputCheckbox, theme }) =>
    inputCheckbox &&
    `
  width:auto;
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  margin-bottom: 8px !important;
  border-radius: 3px;
  border-width: 2px;
  border:2px solid ${theme.purplePrimary};
  z-index:14;
`}
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xs};
    margin-top: 0px;
    ${({ inputCheckbox }) =>
      inputCheckbox &&
      `
    margin-top:10px;
    width: 17px;
  height: 17px;
    `}
  }
`;
