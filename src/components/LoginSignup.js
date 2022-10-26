import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SignupModal from './SignupModal';

export default function LoginSignup() {
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
        <TextField required id='outlined-required' label='Email' />
        <TextField
          required
          id='outlined-password-input'
          label='Password'
          type='password'
          autoComplete='current-password'
        />
        <Button
          onClick={() => {
            alert('clicked');
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
