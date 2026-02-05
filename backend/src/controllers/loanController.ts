import { Request, Response } from 'express';
import { query } from '../config/db';
import User from '../models/User';

export const applyForLoan = async (req: Request, res: Response) => {
    try {
        const { borrowerId, amount, tenureMonths, interestRate, purpose } = req.body;

        // Check borrower trust score
        const user = await User.findById(borrowerId);
        if (!user || user.trustScore < 50) {
            return res.status(400).json({ message: 'Low trust score. Loan application rejected.' });
        }

        const monthlyEmi = (amount * (1 + (interestRate / 100))) / tenureMonths;

        const result = await query(
            'INSERT INTO loans (borrower_id, amount, tenure_months, interest_rate, monthly_emi, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [borrowerId, amount, tenureMonths, interestRate, monthlyEmi, 'submitted']
        );

        res.status(201).json(result.rows[0]);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getBorrowerLoans = async (req: Request, res: Response) => {
    try {
        const { borrowerId } = req.params;
        const result = await query('SELECT * FROM loans WHERE borrower_id = $1', [borrowerId]);
        res.json(result.rows);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getLenderOpportunities = async (req: Request, res: Response) => {
    try {
        const result = await query('SELECT * FROM loans WHERE status = $1', ['submitted']);
        res.json(result.rows);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
