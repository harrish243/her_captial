import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const userGrowthData = [
    { name: 'Jan', users: 100 },
    { name: 'Feb', users: 150 },
    { name: 'Mar', users: 300 },
    { name: 'Apr', users: 450 },
    { name: 'May', users: 600 },
    { name: 'Jun', users: 800 },
];

const loanStatusData = [
    { name: 'Active', value: 400 },
    { name: 'Completed', value: 300 },
    { name: 'Defaulted', value: 20 },
    { name: 'Pending', value: 50 },
];

const COLORS = ['#2e7d32', '#1976d2', '#d32f2f', '#ff9800'];

const AdminOverview = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
                Admin Dashboard
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} md={3}>
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 3, bgcolor: '#e8eaf6' }}>
                        <Typography color="textSecondary" variant="subtitle2">Total Users</Typography>
                        <Typography variant="h4" fontWeight="bold">850</Typography>
                        <Typography color="primary.main" variant="body2">+120 this month</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 3, bgcolor: '#e0f2f1' }}>
                        <Typography color="textSecondary" variant="subtitle2">Total Disbursed</Typography>
                        <Typography variant="h4" fontWeight="bold">₹12.5L</Typography>
                        <Typography color="success.main" variant="body2">Across 150 loans</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 3, bgcolor: '#fff3e0' }}>
                        <Typography color="textSecondary" variant="subtitle2">Default Rate</Typography>
                        <Typography variant="h4" fontWeight="bold">2.4%</Typography>
                        <Typography color="error.main" variant="body2">Within Acceptable Limit</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 3, bgcolor: '#fce4ec' }}>
                        <Typography color="textSecondary" variant="subtitle2">System Health</Typography>
                        <Typography variant="h4" fontWeight="bold">99.9%</Typography>
                        <Typography color="success.main" variant="body2">All Services Operational</Typography>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 3, height: 400 }}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">User Growth</Typography>
                        <ResponsiveContainer width="100%" height="90%">
                            <BarChart data={userGrowthData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="users" fill="#1976d2" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={2} sx={{ p: 3, borderRadius: 3, height: 400 }}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">Loan Status Distribution</Typography>
                        <ResponsiveContainer width="100%" height="90%">
                            <PieChart>
                                <Pie
                                    data={loanStatusData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {loanStatusData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                            {loanStatusData.map((entry, index) => (
                                <Box key={entry.name} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    <Box sx={{ width: 10, height: 10, bgcolor: COLORS[index], borderRadius: '50%' }} />
                                    <Typography variant="caption">{entry.name}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AdminOverview;
