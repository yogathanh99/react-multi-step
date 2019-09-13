import React from 'react';
import { List, ListItemText, Button } from '@material-ui/core';

const Confirm = props => {
  const nextPage = e => {
    e.preventDefault();
    props.nextStep();
  };

  const backPage = e => {
    e.preventDefault();
    props.prevStep();
  };

  const {
    values: { firstName, lastName, email, occupation, city, bio },
  } = props;

  return (
    <>
      <h2>Confirm User Data</h2>
      <List>
        <ListItemText primary='First Name' secondary={firstName} />
        <ListItemText primary='Last Name' secondary={lastName} />
        <ListItemText primary='Email' secondary={email} />
        <ListItemText primary='Occupation' secondary={occupation} />
        <ListItemText primary='City' secondary={city} />
        <ListItemText primary='Bio' secondary={bio} />
      </List>
      <br />
      <Button
        variant='contained'
        color='primary'
        onClick={nextPage}
        style={{ margin: '14px' }}
      >
        Continue & Confirm
      </Button>
      <Button variant='contained' onClick={backPage} style={{ margin: '14px' }}>
        Back
      </Button>
    </>
  );
};

export default Confirm;
