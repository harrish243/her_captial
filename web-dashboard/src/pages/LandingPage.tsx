import React from 'react';
import { Box, Button, Container, Typography, Grid, Card, CardContent, AppBar, Toolbar, Stack, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const LandingPage = () => {
    return (
        <Box sx={{ flexGrow: 1, minHeight: '100vh', flexDirection: 'column', display: 'flex' }}>
            <AppBar position="fixed" color="default" elevation={0} sx={{ bgcolor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', borderBottom: '1px solid', borderColor: 'divider' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: '800', color: 'primary.main', display: 'flex', alignItems: 'center', letterSpacing: -0.5 }}>
                        CREDIT-COLLATERAL
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="inherit" component={Link} to="/login" sx={{ fontWeight: 600 }}>Login</Button>
                        <Button variant="contained" color="primary" disableElevation component={Link} to="/register">Get Started</Button>
                    </Stack>
                </Toolbar>
            </AppBar>

            {/* Hero Section */}
            <Box sx={{
                pt: 20,
                pb: 12,
                background: 'linear-gradient(135deg, #F0FDF4 0%, #EFF6FF 100%)',
                borderBottom: '1px solid',
                borderColor: 'divider'
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '3rem', md: '4.5rem' }, lineHeight: 1.1, mb: 3 }}>
                                Loans based on <br />
                                <Box component="span" sx={{ color: 'primary.main' }}>Trust, not Assets</Box>
                            </Typography>
                            <Typography variant="h5" color="textSecondary" sx={{ mb: 5, maxWidth: '600px', lineHeight: 1.6 }}>
                                AI-powered microfinance empowering rural entrepreneurs. We connect lenders directly with verified borrowers using alternative data credit scoring.
                            </Typography>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    component={Link}
                                    to="/register?role=borrower"
                                    endIcon={<ArrowForwardIcon />}
                                    sx={{ px: 4, py: 2, fontSize: '1.1rem' }}
                                >
                                    I need a Loan
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    component={Link}
                                    to="/register?role=lender"
                                    sx={{ px: 4, py: 2, fontSize: '1.1rem', bgcolor: 'white' }}
                                >
                                    Start Investing
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            {/* Abstract graphical representation */}
                            <Paper elevation={3} sx={{ p: 4, borderRadius: 4, background: 'linear-gradient(135deg, #0F766E 0%, #115E59 100%)', color: 'white' }}>
                                <Stack spacing={3}>
                                    <Box>
                                        <Typography variant="overline" sx={{ opacity: 0.7 }}>Current APY</Typography>
                                        <Typography variant="h3">12.5%</Typography>
                                    </Box>
                                    <Box sx={{ height: '1px', bgcolor: 'rgba(255,255,255,0.2)' }} />
                                    <Stack direction="row" spacing={3}>
                                        <Box>
                                            <Typography variant="overline" sx={{ opacity: 0.7 }}>Active Loans</Typography>
                                            <Typography variant="h5">8,432</Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="overline" sx={{ opacity: 0.7 }}>Repayment Rate</Typography>
                                            <Typography variant="h5">98.2%</Typography>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Features Section */}
            <Box sx={{ py: 12, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Typography variant="h6" color="primary" fontWeight="bold" align="center" gutterBottom>Why Choose Us</Typography>
                    <Typography variant="h3" fontWeight="800" align="center" sx={{ mb: 8 }}>Reinventing Micro-Credit with AI</Typography>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ height: '100%', p: 2, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-8px)' } }}>
                                <CardContent>
                                    <Box sx={{ width: 60, height: 60, borderRadius: 3, bgcolor: '#E0F2F1', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                                        <TrendingUpIcon sx={{ fontSize: 32, color: 'primary.main' }} />
                                    </Box>
                                    <Typography variant="h5" gutterBottom fontWeight="bold">AI TrustScore™</Typography>
                                    <Typography color="textSecondary" sx={{ lineHeight: 1.7 }}>
                                        Our proprietary ML models analyze alternative data like utility payments and mobile usage to credit-score the unbanked.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ height: '100%', p: 2, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-8px)' } }}>
                                <CardContent>
                                    <Box sx={{ width: 60, height: 60, borderRadius: 3, bgcolor: '#E3F2FD', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                                        <SecurityIcon sx={{ fontSize: 32, color: 'secondary.main' }} />
                                    </Box>
                                    <Typography variant="h5" gutterBottom fontWeight="bold">Secure Platform</Typography>
                                    <Typography color="textSecondary" sx={{ lineHeight: 1.7 }}>
                                        Bank-grade encryption and blockchain-inspired ledgers ensure every transaction is transparent and immutable.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ height: '100%', p: 2, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-8px)' } }}>
                                <CardContent>
                                    <Box sx={{ width: 60, height: 60, borderRadius: 3, bgcolor: '#FFF3E0', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                                        <GroupsIcon sx={{ fontSize: 32, color: 'orange' }} />
                                    </Box>
                                    <Typography variant="h5" gutterBottom fontWeight="bold">Direct Impact</Typography>
                                    <Typography color="textSecondary" sx={{ lineHeight: 1.7 }}>
                                        Lenders see exactly who they fund. Borrowers get fair rates. Communities grow together.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default LandingPage;
