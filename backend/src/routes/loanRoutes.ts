import { Router } from 'express';
import { applyForLoan, getBorrowerLoans, getLenderOpportunities } from '../controllers/loanController';

const router = Router();

router.post('/apply', applyForLoan);
router.get('/borrower/:borrowerId', getBorrowerLoans);
router.get('/opportunities', getLenderOpportunities);

export default router;
