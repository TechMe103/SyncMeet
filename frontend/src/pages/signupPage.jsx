// Signup.jsx
import React, { useState } from 'react';

import { 
  Grid, 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Link,
  useTheme,
  useMediaQuery
} from '@mui/material';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted:', formData);
  };

  return (
    <Grid container component="main" sx={{ minHeight: '100vh' }}>
      <Grid item xs={12} md={6}>
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            p: 4,
            backgroundColor: 'background.paper'
          }}
        >
          <Box 
            component="form" 
            onSubmit={handleSubmit}
            sx={{ 
              width: '100%', 
              maxWidth: 400,
              mt: 8 
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              Create Account
            </Typography>
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={formData.username}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            
            <Link href="#" variant="body2" sx={{ display: 'block', textAlign: 'right', mb: 2 }}>
              Forgot Password?
            </Link>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 2, mb: 2, py: 1.5 }}
            >
              Sign Up
            </Button>
            
            <Typography variant="body2" align="center" sx={{ mt: 4 }}>
              Already have an account?{' '}
              <Link href="#" variant="body2" sx={{ fontWeight: 600 }}>
                Login
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
      
      {!isMobile && (
        <Grid item xs={false} md={6}>
          <Box
            sx={{
              backgroundImage: 'url(/signup.jpg)' , 
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
              width: '100%'
            }}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Signup;