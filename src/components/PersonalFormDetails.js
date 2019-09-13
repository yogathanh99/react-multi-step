import React from 'react';
import { TextField, Button } from '@material-ui/core';

const PersonalFormDetails = props => {
  const nextPage = e => {
    e.preventDefault();
    props.nextStep();
  };

  const backPage = e => {
    e.preventDefault();
    props.prevStep();
  };

  const { values, handleChange } = props;

  return (
    <>
      <h2>Enter Personal Details</h2>
      <TextField
        label='Occupation'
        placeholder='Enter Your Occupation'
        margin='normal'
        defaultValue={values.occupation}
        onChange={handleChange('occupation')}
      />
      <br />
      <TextField
        label='City'
        placeholder='Enter Your City'
        margin='normal'
        defaultValue={values.city}
        onChange={handleChange('city')}
      />
      <br />
      <TextField
        label='Bio'
        placeholder='Enter Your Bio'
        margin='normal'
        defaultValue={values.bio}
        onChange={handleChange('bio')}
      />
      <br />
      <Button
        variant='contained'
        color='primary'
        onClick={nextPage}
        style={{ margin: '14px' }}
      >
        Continue
      </Button>
      <Button variant='contained' onClick={backPage} style={{ margin: '14px' }}>
        Back
      </Button>
    </>
  );
};

export default PersonalFormDetails;
