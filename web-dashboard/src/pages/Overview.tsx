import React from 'react';
import { Grid, Paper, Typography, Box, Card, CardContent } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
    { name: 'Jan', amount: 4000 },
    { name: 'Feb', amount: 3000 },
    { name: 'Mar', amount: 5000 },
    { name: 'Apr', amount: 4500 },
    { name: 'May', amount: 6000 },
    { name: 'Jun', amount: 5500 },
];

const Overview = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom fontWeight="bold">
                Lender Dashboard
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 3, bgcolor: '#e8f5e9' }}>
                        <Typography color="textSecondary" variant="subtitle2">Total Invested</Typography>
                        <Typography variant="h4" fontWeight="bold">₹2,45,000</Typography>
                        <Typography color="success.main" variant="body2">+12% from last month</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 3, bgcolor: '#e3f2fd' }}>
                        <Typography color="textSecondary" variant="subtitle2">Returns Earned</Typography>
                        <Typography variant="h4" fontWeight="bold">₹24,500</Typography>
                        <Typography color="primary.main" variant="body2">10% Average Yield</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 3, bgcolor: '#fff3e0' }}>
                        <Typography color="textSecondary" variant="subtitle2">Active Loans</Typography>
                        <Typography variant="h4" fontWeight="bold">18</Typography>
                        <Typography color="warning.main" variant="body2">2 pending approval</Typography>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 3, height: 400 }}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">Portfolio Growth</Typography>
                        <ResponsiveContainer width="100%" height="90%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2e7d32" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#2e7d32" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="amount" stroke="#2e7d32" fillOpacity={1} fill="url(#colorAmt)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 3, height: 400 }}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">Impact Summary</Typography>
                        <Box sx={{ mt: 2 }}>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" color="textSecondary">Women Entrepreneur Helped</Typography>
                                <Typography variant="h5" fontWeight="bold">12</Typography>
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" color="textSecondary">Rural Communities Reached</Typography>
                                <Typography variant="h5" fontWeight="bold">5</Typography>
                            </Box>
                            <Box>
                                <Typography variant="body2" color="textSecondary">Business Sectors Impacted</Typography>
                                <Typography variant="h5" fontWeight="bold">Herbal, Retail, Agri</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Overview;
