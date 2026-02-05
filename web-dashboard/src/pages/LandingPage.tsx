import React from 'react';
import { Box, Button, Container, Typography, Grid, Card, CardContent, AppBar, Toolbar, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';

const LandingPage = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'primary.main' }}>
                        CREDIT-COLLATERAL
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="inherit" component={Link} to="/login">Login</Button>
                        <Button variant="contained" color="primary" component={Link} to="/register">Join Now</Button>
                    </Stack>
                </Toolbar>
            </AppBar>

            <Container maxWidth="lg">
                <Box sx={{ py: 10, textAlign: 'center' }}>
                    <Typography variant="h2" gutterBottom fontWeight="800" sx={{ background: 'linear-gradient(45deg, #2e7d32 30%, #1976d2 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Empowering Rural Women Entrepreneurs
                    </Typography>
                    <Typography variant="h5" color="textSecondary" paragraph sx={{ mb: 4 }}>
                        Collateral-free microfinance powered by AI. Connecting trustworthy borrowers with impact-driven lenders.
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button variant="contained" size="large" component={Link} to="/register?role=borrower" sx={{ px: 4, py: 1.5 }}>Start Borrowing</Button>
                        <Button variant="outlined" size="large" component={Link} to="/register?role=lender" sx={{ px: 4, py: 1.5 }}>Become a Lender</Button>
                    </Stack>
                </Box>

                <Grid container spacing={4} sx={{ mb: 10 }}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ height: '100%', textAlign: 'center', p: 2, borderRadius: 4 }}>
                            <CardContent>
                                <TrendingUpIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                                <Typography variant="h5" gutterBottom fontWeight="bold">AI Credit Scoring</Typography>
                                <Typography color="textSecondary">
                                    We analyze alternative data like mobile usage and business patterns to build trust scores without assets.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ height: '100%', textAlign: 'center', p: 2, borderRadius: 4 }}>
                            <CardContent>
                                <SecurityIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
                                <Typography variant="h5" gutterBottom fontWeight="bold">Secure & Transparent</Typography>
                                <Typography color="textSecondary">
                                    End-to-end encryption and blockchain-inspired transparency ensure your investments and loans are safe.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ height: '100%', textAlign: 'center', p: 2, borderRadius: 4 }}>
                            <CardContent>
                                <GroupsIcon sx={{ fontSize: 48, color: 'orange', mb: 2 }} />
                                <Typography variant="h5" gutterBottom fontWeight="bold">Community Driven</Typography>
                                <Typography color="textSecondary">
                                    Lenders directly support individual businesses, fostering growth in rural communities.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default LandingPage;
