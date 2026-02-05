import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Chip } from '@mui/material';

const MyLoans = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
                My Loans
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card elevation={2} sx={{ borderRadius: 3, borderLeft: '6px solid #2e7d32' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <Box>
                                    <Typography variant="h6" fontWeight="bold">Operational Expansion Loan</Typography>
                                    <Typography variant="body2" color="textSecondary">Loan ID: #LN-2024-001</Typography>
                                </Box>
                                <Chip label="Active" color="success" />
                            </Box>
                            <Grid container spacing={2} sx={{ mt: 2 }}>
                                <Grid item xs={6} md={3}>
                                    <Typography variant="caption" color="textSecondary">Sanctioned Amount</Typography>
                                    <Typography variant="subtitle1" fontWeight="bold">₹25,000</Typography>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Typography variant="caption" color="textSecondary">Outstanding</Typography>
                                    <Typography variant="subtitle1" fontWeight="bold">₹18,400</Typography>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Typography variant="caption" color="textSecondary">Interest Rate</Typography>
                                    <Typography variant="subtitle1" fontWeight="bold">12%</Typography>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Typography variant="caption" color="textSecondary">Next Due</Typography>
                                    <Typography variant="subtitle1" fontWeight="bold">15 Feb 2026</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MyLoans;
