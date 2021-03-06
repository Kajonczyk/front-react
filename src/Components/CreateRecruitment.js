import React, { Component } from "react";
import { addRecruitmentFetch } from "../Fetches/AddRecruitmentFetch";
import { updateRecruitmentFetch } from "../Fetches/UpdateRecruitmentFetch";
import { StatusMessage } from "./StatusMessage";
<<<<<<< HEAD
import * as Validator from "./Validator";

const StyledDescription = styled.span`
  color: ${({ theme }) => theme.lightgreen};
  font-family: ${({ theme }) => theme.font.family.Didact};
  font-weight: bold;
  text-align: center;
  display: block;
`;
const InputWrapper = styled.div`
  margin: 20px;
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
  margin: 15px 0px;
  color: ${({ theme }) => theme.lightgreen};
  width: 220px;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.lightgreen};
  }
`;
=======
import { validateAddRecruitment } from "./Validator";
import {
  StyledDescription,
  InputWrapper,
  StyledWrapper,
  Input,
  ButtonWrapper,
  SubmitButton,
  StyledTextArea
} from "../Styles/CreateRecruitmentStyle";
>>>>>>> 23f0bfd237f41cf4d422a0751ea8632527e9f8e5

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
    companyName: "handleFetchRecruitments",
    cityName: "handleFetchRecruitments",
    positionName: "handleFetchRecruitments",
    companyReplyDate: "",
    applicationDate: "",
    notes: "",
    errors: {
      companyNameError: false,
      cityNameError: false,
      positionNameError: false,
      applicationDateError: false
    },
    isTaskSuccessfullyAdded: false
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
  handlePopUpStatusChange = () => {
<<<<<<< HEAD
    this.setState({
      isTaskSuccessfullyAdded: !this.state.isTaskSuccessfullyAdded
    });
=======
    this.setState(prevState => ({
      isTaskSuccessfullyAdded: !prevState.isTaskSuccessfullyAdded
    }));
>>>>>>> 23f0bfd237f41cf4d422a0751ea8632527e9f8e5
  };
  cleanFormInputs = () => {
    this.setState({
      companyName: "handleFetchRecruitments",
      cityName: "handleFetchRecruitments",
      positionName: "handleFetchRecruitments",
      applicationDate: "",
      notes: ""
    });
  };
  cleanFormErrors = () => {
    this.setState({
      errors: {
        companyNameError: false,
        cityNameError: false,
        positionNameError: false,
        applicationDateError: false
      }
    });
  };
  cleanForm = () => {
    this.cleanFormInputs();
    this.cleanFormErrors();
  };
  validateForm = (companyName, cityName, positionName, applicationDate) => {
    let validateHasErrors;
    const validateAddRecruitmentForm = validateAddRecruitment(
      companyName,
      cityName,
      positionName,
      applicationDate
    );
    const isFormValidatedCorrectly = !Object.values(
      validateAddRecruitmentForm
    ).some(Boolean);
    if (isFormValidatedCorrectly) {
      validateHasErrors = false;
    } else {
      this.setState({
        errors: validateAddRecruitmentForm
      });
      validateHasErrors = true;
    }
    return validateHasErrors;
  };

  handleSubmit = async () => {
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
    const validatorHasErrors = this.validateForm(
      companyName,
      cityName,
      positionName,
      applicationDate
    );
    if (!validatorHasErrors) {
      const token = localStorage.getItem("token");
      const { editRecruitment, recruitmentId } = this.props;
      //CreateRecruitment component looks almost the same as EditRecruitment would look like so I'm using this component as an edit one not to create two very similar ones
      //That's why I'm using two different fetches below \/
      if (editRecruitment) {
        updateRecruitmentFetch(obj, recruitmentId);
      } else {
        addRecruitmentFetch(obj, token);
        this.handlePopUpStatusChange();
      }
      //After adding a new recruitment there's a need to update ShowRecruitment component to make newly created recruitment visible
<<<<<<< HEAD

      setTimeout(this.props.updateShowRecruitments, 100);

=======
>>>>>>> 23f0bfd237f41cf4d422a0751ea8632527e9f8e5
      this.cleanForm();
    }
  };
  render() {
    return (
      <>
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
        {this.state.isTaskSuccessfullyAdded && (
          <StatusMessage
            descriptionText="Task was successfully added!"
            closeAction={this.handlePopUpStatusChange}
          />
        )}
      </>
    );
  }
}

export default CreateRecruitment;
