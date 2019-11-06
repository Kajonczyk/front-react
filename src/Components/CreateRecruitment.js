import React, { Component } from "react";
import { addRecruitmentFetch } from "../Fetches/AddRecruitmentFetch";
import { updateRecruitmentFetch } from "../Fetches/UpdateRecruitmentFetch";
import { StatusMessage } from "./StatusMessage";
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
    this.setState(prevState => ({
      isTaskSuccessfullyAdded: !prevState.isTaskSuccessfullyAdded
    }));
  };
  cleanFormInputs = () => {
    this.setState({
      companyName: "",
      cityName: "",
      positionName: "",
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
      await this.props.updateShowRecruitments();
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
