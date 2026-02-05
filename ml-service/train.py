import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
import joblib

def generate_synthetic_data(samples=1000):
    np.random.seed(42)
    data = {
        'call_frequency_score': np.random.uniform(0, 1, samples),
        'bill_payment_punctuality_rate': np.random.uniform(0, 1, samples),
        'income_stability_coefficient': np.random.uniform(0, 1, samples),
        'savings_rate': np.random.uniform(0, 0.4, samples),
        'stable_contact_ratio': np.random.uniform(0, 1, samples),
    }
    
    df = pd.DataFrame(data)
    
    # Heuristic for default (target)
    # Higher scores = Lower chance of default (0)
    score = (df['bill_payment_punctuality_rate'] * 0.4 + 
             df['income_stability_coefficient'] * 0.3 + 
             df['savings_rate'] * 2 + 
             df['stable_contact_ratio'] * 0.1)
    
    df['target'] = (score < 0.4).astype(int) # 1 = Default, 0 = Good
    
    return df

def train_baseline_model():
    print("Generating synthetic data...")
    df = generate_synthetic_data()
    
    X = df.drop('target', axis=1)
    y = df['target']
    
    print("Training Random Forest model...")
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X, y)
    
    print("Saving model and features...")
    joblib.dump(model, 'credit_model.pkl')
    joblib.dump(X.columns.tolist(), 'features.pkl')
    print("Done!")

if __name__ == "__main__":
    train_baseline_model()
