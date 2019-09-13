import React, { Component } from 'react';

import Confirm from './Confirm';
import Success from './Success';
import PersonalFormDetails from './PersonalFormDetails';
import UserFormDetails from './UserFormDetails';

export default class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
  };

  nextStep = () => {
    this.setState({
      step: this.state.step + 1,
    });
  };

  prevStep = () => {
    this.setState({
      step: this.state.step - 1,
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { nextStep, prevStep, handleChange } = this;
    const {
      step,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio,
    } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <UserFormDetails
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalFormDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
        );
      case 4:
        return <Success />;
    }
  }
}
