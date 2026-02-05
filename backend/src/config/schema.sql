CREATE TABLE IF NOT EXISTS loans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  borrower_id VARCHAR(50) NOT NULL,
  lender_id VARCHAR(50),
  amount DECIMAL(10, 2) NOT NULL,
  tenure_months INTEGER NOT NULL,
  interest_rate DECIMAL(5, 2) NOT NULL,
  monthly_emi DECIMAL(10, 2) NOT NULL,
  status VARCHAR(20) DEFAULT 'submitted', -- 'submitted', 'matched', 'disbursed', 'active', 'completed'
  applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  approved_at TIMESTAMP,
  disbursed_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  loan_id UUID REFERENCES loans(id),
  amount DECIMAL(10, 2) NOT NULL,
  due_date DATE NOT NULL,
  paid_date DATE,
  status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'completed', 'overdue'
  transaction_id VARCHAR(100)
);
