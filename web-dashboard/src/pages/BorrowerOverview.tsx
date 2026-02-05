import React from 'react';
import { Grid, Paper, Typography, Box, Card, CardContent, LinearProgress, Button, Stack } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SpeedIcon from '@mui/icons-material/Speed';
import HistoryIcon from '@mui/icons-material/History';

const data = [
    { name: 'Jan', repayment: 500 },
    { name: 'Feb', repayment: 500 },
    { name: 'Mar', repayment: 500 },
    { name: 'Apr', repayment: 500 },
    { name: 'May', repayment: 500 },
    { name: 'Jun', repayment: 500 },
];

const BorrowerOverview = () => {
    const trustScore = 78;

    return (
        <Box>
            <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
                Borrower Dashboard
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 3, height: '100%', position: 'relative', overflow: 'hidden' }}>
                        <Typography color="textSecondary" variant="subtitle2">Trust Score</Typography>
                        <Typography variant="h3" fontWeight="bold" color="primary">{trustScore}</Typography>
                        <Typography variant="body2" color="success.main">Excellent (Low Risk)</Typography>
                        <Box sx={{ mt: 2 }}>
                            <LinearProgress variant="determinate" value={trustScore} sx={{ height: 10, borderRadius: 5 }} />
                        </Box>
                        <Typography variant="caption" color="textSecondary" sx={{ mt: 1, display: 'block' }}>
                            Your score improved by 5 points this month!
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 3, height: '100%' }}>
                        <Typography color="textSecondary" variant="subtitle2">Active Loan Amount</Typography>
                        <Typography variant="h4" fontWeight="bold">₹25,000</Typography>
                        <Typography color="primary.main" variant="body2">EMI: ₹2,150 / month</Typography>
                        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                            <Button variant="contained" size="small" color="primary">Pay EMI</Button>
                            <Button variant="outlined" size="small">Details</Button>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 3, height: '100%', bgcolor: '#f1f8e9' }}>
                        <Typography color="textSecondary" variant="subtitle2">Loan Eligibility</Typography>
                        <Typography variant="h4" fontWeight="bold">₹50,000</Typography>
                        <Typography color="textSecondary" variant="body2">Based on your business growth</Typography>
                        <Button variant="contained" color="secondary" sx={{ mt: 2 }} fullWidth>Apply for Limit Increase</Button>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 3, height: 400 }}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">Repayment History</Typography>
                        <ResponsiveContainer width="100%" height="90%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="repayment" fill="#2e7d32" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack spacing={3}>
                        <Card sx={{ borderRadius: 3, boxShadow: 1 }}>
                            <CardContent>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <AccountBalanceIcon color="primary" />
                                    <Box>
                                        <Typography variant="subtitle1" fontWeight="bold">Business Details</Typography>
                                        <Typography variant="body2" color="textSecondary">Sri Sai Retail Shop</Typography>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                        <Card sx={{ borderRadius: 3, boxShadow: 1 }}>
                            <CardContent>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <SpeedIcon color="secondary" />
                                    <Box>
                                        <Typography variant="subtitle1" fontWeight="bold">Alternative Data Sync</Typography>
                                        <Typography variant="body2" color="textSecondary">Last synced: 2 hours ago</Typography>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                        <Card sx={{ borderRadius: 3, boxShadow: 1 }}>
                            <CardContent>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <HistoryIcon color="action" />
                                    <Box>
                                        <Typography variant="subtitle1" fontWeight="bold">Pending Documents</Typography>
                                        <Typography variant="body2" color="error">1 missing (Address Proof)</Typography>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BorrowerOverview;
