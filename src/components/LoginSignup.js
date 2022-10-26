import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SignupModal from './SignupModal';

export default function LoginSignup() {
  // login info states
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // login info handlers
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function submit() {}

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={0.5}
      >
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
          Login
        </Button>
        <SignupModal></SignupModal>
      </Stack>
    </Box>
  );
}
