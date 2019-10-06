import React, { Component } from "react";
import styled from "styled-components";
import { StyledInput } from "./StyledComponents/Input";
import { StyledButton } from "./StyledComponents/Button";
import * as AddRecruitmentFetch from "./Fetches/AddRecruitmentFetch";
import * as Validator from "./Validator";

const StyledDescription = styled.span`
  color: ${({ theme }) => theme.lightgreen};
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-weight: bold;
  text-align: center;
  display: block;
`;
const InputWrapper = styled.div`
  margin: 30px;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled(StyledInput)`
  margin-bottom: 5px;
`;

const ButtonWrapper = styled.div`
  margin: 0px auto;
  text-align: center;
`;
const SubmitButton = styled(StyledButton)`
  margin-top: -20px;
  position: relative;
  &::after {
  }
`;
const StyledTextArea = styled.textarea`
  padding-bottom: 30px;
  background: none;
  border: 0px;
  border-bottom: 2px solid ${({ theme }) => theme.lightgreen};
  margin-bottom: 15px;
  color: ${({ theme }) => theme.lightgreen};
  width: 220px;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.lightgreen};
  }
`;

const InputTextData = [
  {
    desc: "Company Name",
    id: "companyName"
  },
  {
    desc: "City",
    id: "cityName"
  },
  {
    desc: "Position",
    id: "positionName"
  }
];
class CreateRecruitment extends Component {
  state = {
    companyName: "",
    cityName: "",
    positionName: "",
    companyReplyDate: "",
    applicationDate: "",
    notes: "",
    errors: {
      companyNameError: false,
      cityNameError: false,
      positionNameError: false,
      applicationDateError: false
    }
  };
  handleChange = e => {
    const { id, value, type } = e.target;

    this.setState({
      [id]: value
    });
    if (type === "date") {
      this.setState({
        [id]: value
      });
    }
  };
  cleanForm = () => {
    this.setState({
      companyName: "",
      cityName: "",
      positionName: "",
      applicationDate: "",
      notes: "",
      errors: {
        companyNameError: false,
        cityNameError: false,
        positionNameError: false,
        applicationDateError: false
      }
    });
  };
  validateForm = (companyName, cityName, positionName, applicationDate) => {
    return Validator.validateAddRecruitment(
      companyName,
      cityName,
      positionName,
      applicationDate,
      this
    );
  };

  handleSubmit = () => {
    const {
      companyName,
      cityName,
      positionName,
      applicationDate,
      notes
    } = this.state;
    const obj = {
      id: 1,
      companyName,
      city: cityName,
      workPlace: positionName,
      dateOfCompanyReply: "",
      applicationDate,
      companyReply: false,
      notes,
      linkToApplication: "",
      ownerId: 1
    };
    const validatorHasNoErrors = this.validateForm(
      companyName,
      cityName,
      positionName,
      applicationDate
    );
    if (validatorHasNoErrors) {
      const token = localStorage.getItem("token");
      AddRecruitmentFetch.addRecruitmentFetch(obj, token);
      this.cleanForm();
    }
  };
  render() {
    return (
      <StyledWrapper>
        {InputTextData.map(data => (
          <InputWrapper key={data.desc}>
            <label>
              <StyledDescription>{data.desc}</StyledDescription>
              <Input
                type="text"
                id={data.id}
                placeholder={data.desc}
                onChange={this.handleChange}
                value={this.state[data.id]}
              />
            </label>
          </InputWrapper>
        ))}
        <InputWrapper>
          <label>
            <StyledDescription>Application date</StyledDescription>
            <Input
              type="date"
              id="applicationDate"
              onChange={this.handleChange}
              value={this.state.applicationDate}
            />
          </label>
        </InputWrapper>

        <InputWrapper>
          <label>
            <StyledDescription>Notes</StyledDescription>
            <StyledTextArea
              id="notes"
              placeholder="Your text goes here"
              onChange={this.handleChange}
              value={this.state.notes}
            />
          </label>
        </InputWrapper>
        <ButtonWrapper>
          <SubmitButton onClick={this.handleSubmit}>Submit</SubmitButton>
        </ButtonWrapper>
      </StyledWrapper>
    );
  }
}

export default CreateRecruitment;
