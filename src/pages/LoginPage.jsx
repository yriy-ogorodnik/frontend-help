// LoginPage.jsx
import { Copyright } from '@mui/icons-material';
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Додайте логіку для обробки логіну, наприклад, виклик API
      // const response = await authService.login(email, password);

      // Якщо логін успішний, ви можете перенаправити користувача на іншу сторінку
      // history.push('/dashboard');
    } catch (error) {
      setError('Неправильний email або пароль.');
    }
  };

  return (
   <Container component="main" maxWidth="xs">
   <CssBaseline />
   <Box
     sx={{
       marginTop: 8,
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
     }}
   >
     <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
       <LockOutlinedIcon />
     </Avatar>
     <Typography component="h1" variant="h5">
       Sign in
     </Typography>
     <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
       <TextField
         margin="normal"
         required
         fullWidth
         id="email"
         label="Email Address"
         name="email"
         autoComplete="email"
         autoFocus
       />
       <TextField
         margin="normal"
         required
         fullWidth
         name="password"
         label="Password"
         type="password"
         id="password"
         autoComplete="current-password"
       />
       
       <Button
         type="submit"
         fullWidth
         variant="contained"
         sx={{ mt: 3, mb: 2 }}
       >
         Sign In
       </Button>
       <Grid container>
         <Grid item xs>
           <Link href="#" variant="body2">
             Forgot password?
           </Link>
         </Grid>
         <Grid item>
           <Link href="#" variant="body2" to="/register">
             {"Don't have an account? Sign Up"}
           </Link>
         </Grid>
       </Grid>
     </Box>
   </Box>
   
 </Container>
  );
};

export default LoginPage;
