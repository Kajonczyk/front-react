import React, { Component } from "react";
import { addRecruitmentFetch } from "../Fetches/Recruitments/AddRecruitmentFetch";
import { getRecruitmentFetch } from "../Fetches/Recruitments/GetRecruitmentFetch";
import { updateRecruitmentFetch } from "../Fetches/Recruitments/UpdateRecruitmentFetch";
import { StatusMessage } from "./StatusMessage";
import { validateAddRecruitment } from "./Validator";
import {
  StyledDescription,
  InputWrapper,
  StyledWrapper,
  Input,
  ButtonWrapper,
  SubmitButton,
  StyledTextArea,
  StyledSpan,
  InputCheck,
  StyledFieldsWrapper
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
    companyReply: false,
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
    const { id, value, type, checked } = e.target;
    if (type == "checkbox") {
      this.setState({
        [id]: checked
      });
    } else {
      this.setState({
        [id]: value
      });
    }
  };

  displayPopUp = () => {
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
      companyReply: true,
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

  validateForm = () => {
    const { companyName, cityName, positionName, applicationDate } = this.state;
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
      return false;
    } else {
      this.setState({
        errors: validateAddRecruitmentForm
      });
      return true;
    }
  };

  handleSubmit = async () => {
    const {
      companyName,
      cityName,
      positionName,
      applicationDate,
      notes,
      companyReply
    } = this.state;
    const obj = {
      id: 1,
      companyName,
      city: cityName,
      workPlace: positionName,
      dateOfCompanyReply: "",
      applicationDate,
      companyReply,
      notes,
      linkToApplication: "",
      ownerId: 1
    };
    const validatorHasErrors = this.validateForm();
    if (!validatorHasErrors) {
      const {
        editRecruitment,
        recruitmentId,
        updateRecruitments,
        updatePopUpStatus
      } = this.props;
      //CreateRecruitment component looks almost the same as EditRecruitment would look like so I'm using this component as an edit one not to create two very similar ones
      //That's why I'm using two different fetches below \/
      if (editRecruitment) {
        await updateRecruitmentFetch(obj, recruitmentId); // updates single recruitment
        await updateRecruitments(await getRecruitmentFetch()); // refreshes recruitments data
        updatePopUpStatus(true);
      } else {
        await addRecruitmentFetch(obj);
        await getRecruitmentFetch();
        this.displayPopUp();
      }
      this.cleanForm();
    }
  };
  render() {
    return (
      <>
        <StyledWrapper>
          <StyledFieldsWrapper>
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
          </StyledFieldsWrapper>
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
          <InputWrapper checkbox>
            <StyledSpan>
              <StyledDescription checkbox>Company reply</StyledDescription>
              <Input
                type="checkbox"
                id="companyReply"
                onChange={this.handleChange}
                value={this.state.companyReply}
                inputCheckbox
              />
              <InputCheck inputChecked={this.state.companyReply} />
            </StyledSpan>
          </InputWrapper>
          <ButtonWrapper>
            <SubmitButton onClick={this.handleSubmit}>Submit</SubmitButton>
          </ButtonWrapper>
        </StyledWrapper>

        {this.state.isTaskSuccessfullyAdded && (
          <StatusMessage
            descriptionText="Entry was successfully added!"
            closeAction={this.displayPopUp}
          />
        )}
      </>
    );
  }
}

export default CreateRecruitment;
