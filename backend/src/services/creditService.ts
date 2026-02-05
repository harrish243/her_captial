import axios from 'axios';
import AlternativeData from '../models/AlternativeData';
import User from '../models/User';

const ML_SERVICE_URL = process.env.ML_SERVICE_URL || 'http://localhost:8000';

export const calculateTrustScore = async (userId: string) => {
    try {
        const data = await AlternativeData.findOne({ userId }).sort({ collectedAt: -1 });
        if (!data) {
            throw new Error('No alternative data found for user');
        }

        // Map DB data to ML features
        const mlPayload = {
            call_frequency_score: Math.min(data.mobileUsage.callLogsCount / 100, 1.0),
            bill_payment_punctuality_rate: data.mobileUsage.billPaymentHistory.filter(b => b.onTime).length /
                (data.mobileUsage.billPaymentHistory.length || 1),
            income_stability_coefficient: calculateStability(data.transactions),
            savings_rate: calculateSavingsRate(data.transactions),
            stable_contact_ratio: data.socialNetwork.stableContacts / (data.socialNetwork.contactCount || 1)
        };

        const response = await axios.post(`${ML_SERVICE_URL}/predict/credit-score`, mlPayload);
        const { trust_score, risk_category } = response.data;

        // Update user's trust score
        await User.findByIdAndUpdate(userId, { trustScore: trust_score });

        return { trust_score, risk_category };
    } catch (error) {
        console.error('Error calculating trust score:', error);
        throw error;
    }
};

const calculateStability = (transactions: any[]) => {
    // Simple mock logic
    return 0.85;
};

const calculateSavingsRate = (transactions: any[]) => {
    // Simple mock logic
    return 0.2;
};
