import React from 'react';
import { Box, Typography, Paper, TextField, Button, Grid } from '@mui/material';

const Settings = () => {
    return (
        <Box maxWidth="md">
            <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
                Settings
            </Typography>
            <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight="bold">Profile Information</Typography>
                <Grid container spacing={3} sx={{ mb: 3 }}>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth label="Full Name" defaultValue="User Name" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth label="Email" defaultValue="user@example.com" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Phone Number" defaultValue="+91 98765 43210" />
                    </Grid>
                </Grid>
                <Button variant="contained" color="primary">Save Changes</Button>

                <Box sx={{ mt: 5 }}>
                    <Typography variant="h6" gutterBottom fontWeight="bold">Security</Typography>
                    <Grid container spacing={3} sx={{ mb: 3 }}>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth type="password" label="New Password" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth type="password" label="Confirm Password" />
                        </Grid>
                    </Grid>
                    <Button variant="outlined" color="primary">Update Password</Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default Settings;
