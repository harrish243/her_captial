import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper, Stack, Tab, Tabs } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const roleParam = queryParams.get('role');

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Determine role based on input for demo purposes
        let role = roleParam || 'borrower';

        if (!roleParam) {
            if (phone.toLowerCase().includes('admin')) {
                role = 'admin';
            } else if (phone.toLowerCase().includes('lender') || phone.includes('1')) {
                role = 'lender';
            }
        }

        localStorage.setItem('token', 'fake-jwt-token');
        localStorage.setItem('userType', role);
        navigate('/dashboard');
    };

    return (
        <Container maxWidth="xs" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 4 }}>
            <Paper elevation={6} sx={{ p: 4, width: '100%', borderRadius: 4 }}>
                <Typography variant="h4" align="center" gutterBottom fontWeight="bold" color="primary">
                    {roleParam === 'borrower' ? 'Borrower Login' : roleParam === 'lender' ? 'Lender Login' : 'Welcome Back'}
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary" sx={{ mb: 3 }}>
                    {roleParam === 'borrower' ? 'Login to manage your micro-loan' : 'Login to manage your investments'}
                </Typography>
                <form onSubmit={handleLogin}>
                    <Stack spacing={2}>
                        <TextField
                            fullWidth
                            label="Phone Number"
                            variant="outlined"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ py: 1.5, mt: 1 }}
                        >
                            Login
                        </Button>
                        <Typography variant="body2" align="center">
                            Don't have an account? <Link to={roleParam ? `/register?role=${roleParam}` : "/register"}>Register</Link>
                        </Typography>
                    </Stack>
                </form>
            </Paper>
        </Container>
    );
};

export default Login;
