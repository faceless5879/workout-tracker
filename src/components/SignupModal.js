import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SignupModal() {
  // modal states
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // user information states
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // user information state handlers
  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  function handleHeight(e) {
    setHeight(e.target.value);
  }
  function handleWeight(e) {
    setWeight(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  // form submission
  function submit() {
    const newUser = {};
  }

  return (
    <div>
      <Button onClick={handleOpen}>sign up!</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box component='form' sx={style} noValidate autoComplete='off'>
          <Stack
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={0.5}
          >
            <TextField
              required
              id='firstName'
              label='First Name'
              value={firstName}
              onChange={handleFirstName}
            />
            <TextField
              required
              id='lastName'
              label='Last Name'
              value={lastName}
              onChange={handleLastName}
            />
            <TextField
              id='height'
              label='Height'
              variant='outlined'
              value={height}
              onChange={handleHeight}
            />
            <TextField
              id='weight'
              label='Weight'
              variant='outlined'
              value={weight}
              onChange={handleWeight}
            />
            <TextField
              required
              id='email'
              type='email'
              label='Email'
              value={email}
              onChange={handleEmail}
            />
            <TextField
              required
              id='password'
              label='Password'
              type='password'
              autoComplete='current-password'
              value={password}
              onChange={handlePassword}
            />
            <Button
              onClick={() => {
                submit();
              }}
              variant='outlined'
            >
              Submit
            </Button>
            <Button
              onClick={() => {
                handleClose();
              }}
              variant='outlined'
            >
              Close
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}