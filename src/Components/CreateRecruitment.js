import React from "react";
import styled from "styled-components";
import { StyledInput } from "./Input";
import { StyledButton } from "./Button";

const StyledDescription = styled.span`
  color: ${({ theme }) => theme.green};
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-weight: bold;
  text-align: center;
  display: block;
`;
const InputWrapper = styled.div`
  margin: 30px;
`;
const Input = styled(StyledInput)`
  margin-bottom: 5px;
`;
const DataInput = styled(Input)`
  width: 100%;
`;
const ButtonWrapper = styled.div`
  margin: 0px auto;
  text-align: center;
`;
const Button = styled(StyledButton)`
  margin-top: -20px;
`;

const InputTextData = [
  {
    desc: "Company Name"
  },
  {
    desc: "City"
  },
  {
    desc: "Position"
  }
];
const InputDateData = [
  {
    desc: "Date of company's reply"
  },
  {
    desc: "Application date"
  }
];
const CreateRecruitment = () => {
  return (
    <div>
      {InputTextData.map(data => (
        <InputWrapper key={data.desc}>
          <label>
            <StyledDescription>{data.desc}</StyledDescription>
            <Input type="text" placeholder={data.desc} />
          </label>
        </InputWrapper>
      ))}
      {InputDateData.map(data => (
        <InputWrapper key={data.desc}>
          <label>
            <StyledDescription>{data.desc}</StyledDescription>
            <DataInput type="date" placeholder={data.desc} />
          </label>
        </InputWrapper>
      ))}
      <ButtonWrapper>
        <Button>Submit</Button>
      </ButtonWrapper>
    </div>
  );
};

export default CreateRecruitment;
