import React from 'react';
import { TextField, Button } from '@material-ui/core';

const UserFormDetails = props => {
  const nextPage = e => {
    e.preventDefault();
    props.nextStep();
  };

  const { values, handleChange } = props;

  return (
    <>
      <h2>Enter User Details</h2>
      <TextField
        label='First Name'
        placeholder='Enter Your First Name'
        margin='normal'
        defaultValue={values.firstName}
        onChange={handleChange('firstName')}
      />
      <br />
      <TextField
        label='Last Name'
        placeholder='Enter Your Last Name'
        margin='normal'
        defaultValue={values.lastName}
        onChange={handleChange('lastName')}
      />
      <br />
      <TextField
        label='Email'
        placeholder='Enter Your Email'
        margin='normal'
        defaultValue={values.email}
        onChange={handleChange('email')}
      />
      <br />
      <Button
        variant='contained'
        color='primary'
        onClick={nextPage}
        style={{ margin: '15px' }}
      >
        Continue
      </Button>
    </>
  );
};

export default UserFormDetails;
