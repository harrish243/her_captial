import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';

const portfolioData = [
    { id: 1, borrower: 'Sri Sai Retails', amount: 50000, interest: '12%', status: 'Active', repayment: 'On Time' },
    { id: 2, borrower: 'Laxmi AGRO', amount: 25000, interest: '10%', status: 'Active', repayment: 'On Time' },
    { id: 3, borrower: 'Devi Handicrafts', amount: 15000, interest: '11%', status: 'Completed', repayment: 'Completed' },
    { id: 4, borrower: 'Anjali Textiles', amount: 30000, interest: '13%', status: 'Active', repayment: 'Delayed' },
];

const Portfolio = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
                My Portfolio
            </Typography>
            <Paper elevation={2} sx={{ borderRadius: 3, overflow: 'hidden' }}>
                <TableContainer>
                    <Table>
                        <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Borrower</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Loan Amount</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Interest Rate</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Repayment Health</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {portfolioData.map((row) => (
                                <TableRow key={row.id} hover>
                                    <TableCell>{row.borrower}</TableCell>
                                    <TableCell>₹{row.amount.toLocaleString()}</TableCell>
                                    <TableCell>{row.interest}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={row.status}
                                            size="small"
                                            color={row.status === 'Active' ? 'success' : 'default'}
                                            variant={row.status === 'Active' ? 'filled' : 'outlined'}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            label={row.repayment}
                                            size="small"
                                            color={row.repayment === 'On Time' ? 'success' : row.repayment === 'Delayed' ? 'warning' : 'default'}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default Portfolio;
