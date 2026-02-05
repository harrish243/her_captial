import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper, ToggleButton, ToggleButtonGroup, Grid } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Register = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialRole = (queryParams.get('role') as 'borrower' | 'lender') || 'borrower';

    const isRoleLocked = queryParams.has('role');

    const [userType, setUserType] = useState<'borrower' | 'lender'>(initialRole);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate registration
        navigate(`/login?role=${userType}`);
    };

    return (
        <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 4 }}>
            <Paper elevation={6} sx={{ p: 4, borderRadius: 4, width: '100%' }}>
                <Typography variant="h4" align="center" gutterBottom fontWeight="bold" color="primary">
                    {userType === 'borrower' ? 'Borrower Registration' : 'Lender Registration'}
                </Typography>

                {!isRoleLocked && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                        <ToggleButtonGroup
                            color="primary"
                            value={userType}
                            exclusive
                            onChange={(e, val) => val && setUserType(val)}
                            aria-label="User Type"
                            fullWidth
                        >
                            <ToggleButton value="borrower" sx={{ px: 4, width: '50%' }}>Borrower</ToggleButton>
                            <ToggleButton value="lender" sx={{ px: 4, width: '50%' }}>Lender</ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                )}

                <form onSubmit={handleRegister}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="First Name"
                                variant="outlined"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Last Name"
                                variant="outlined"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Phone Number"
                                variant="outlined"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email"
                                type="email"
                                variant="outlined"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                variant="outlined"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{ py: 1.5, mt: 3 }}
                    >
                        Register as {userType.charAt(0).toUpperCase() + userType.slice(1)}
                    </Button>
                    <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                        Already have an account? <Link to={`/login?role=${userType}`}>Login</Link>
                    </Typography>
                </form>
            </Paper>
        </Container>
    );
};

export default Register;
