import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Avatar } from '@mui/material';

const borrowers = [
    { id: 1, name: 'Lakshmi Devi', business: 'Organic Farming', amount: 50000, score: 85, location: 'Theni, TN' },
    { id: 2, name: 'Saraswathi M', business: 'Textile Weaving', amount: 30000, score: 78, location: 'Kanchipuram, TN' },
    { id: 3, name: 'Kavitha R', business: 'Dairy Farm', amount: 75000, score: 92, location: 'Erode, TN' },
    { id: 4, name: 'Meena K', business: 'Grocery Store', amount: 20000, score: 65, location: 'Madurai, TN' },
];

const Borrowers = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
                Explore Borrowers
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
                Find entrepreneur women to support based on their business and trust score.
            </Typography>

            <Grid container spacing={3}>
                {borrowers.map((b) => (
                    <Grid item xs={12} md={4} key={b.id}>
                        <Card elevation={2} sx={{ borderRadius: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>{b.name[0]}</Avatar>
                                    <Box>
                                        <Typography variant="h6" fontWeight="bold">{b.name}</Typography>
                                        <Typography variant="caption" color="textSecondary">{b.location}</Typography>
                                    </Box>
                                </Box>
                                <Typography variant="body2" sx={{ mb: 1 }}><strong>Business:</strong> {b.business}</Typography>
                                <Typography variant="body2" sx={{ mb: 1 }}><strong>Asking Amount:</strong> ₹{b.amount.toLocaleString()}</Typography>
                                <Typography variant="body2" color={b.score > 75 ? 'success.main' : 'warning.main'} fontWeight="bold">
                                    Trust Score: {b.score}/100
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ p: 2, pt: 0 }}>
                                <Button variant="contained" fullWidth>View Profile</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Borrowers;
