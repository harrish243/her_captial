import React from 'react';
import { Box, Typography, Paper, Grid, LinearProgress, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

const TrustScore = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
                Trust Score Analysis
            </Typography>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: 'center', mb: 4, background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)' }}>
                <Typography variant="h2" fontWeight="bold" color="primary">78/100</Typography>
                <Typography variant="h6" color="success.dark">High Trustworthiness</Typography>
                <Typography variant="body2" sx={{ maxWidth: 600, mx: 'auto', mt: 1 }}>
                    Based on your digital footprint, utility payments, and consistent savings history. You qualify for Tier 1 interest rates.
                </Typography>
            </Paper>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom fontWeight="bold">Score Components</Typography>
                    <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                            <Typography variant="body2">Bill Payments</Typography>
                            <Typography variant="body2" fontWeight="bold">90/100</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={90} color="success" sx={{ height: 8, borderRadius: 4 }} />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                            <Typography variant="body2">Savings Consistency</Typography>
                            <Typography variant="body2" fontWeight="bold">65/100</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={65} color="warning" sx={{ height: 8, borderRadius: 4 }} />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                            <Typography variant="body2">Social Verification</Typography>
                            <Typography variant="body2" fontWeight="bold">80/100</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={80} color="success" sx={{ height: 8, borderRadius: 4 }} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom fontWeight="bold">Improve Your Score</Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
                            <ListItemText primary="Pay your next EMI on time" secondary="+5 points" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><WarningIcon color="warning" /></ListItemIcon>
                            <ListItemText primary="Link another bank account for better cashflow visibility" secondary="+10 points" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><WarningIcon color="warning" /></ListItemIcon>
                            <ListItemText primary="Complete Video KYC" secondary="+15 points" />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TrustScore;
