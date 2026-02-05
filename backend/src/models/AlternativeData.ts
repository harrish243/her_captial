import mongoose, { Schema, Document } from 'mongoose';

export interface IAlternativeData extends Document {
    userId: mongoose.Types.ObjectId;
    collectedAt: Date;
    mobileUsage: {
        callLogsCount: number;
        smsCount: number;
        dataUsageGB: number;
        billPaymentHistory: {
            amount: number;
            onTime: boolean;
            date: Date;
        }[];
    };
    transactions: {
        type: 'credit' | 'debit';
        amount: number;
        category: string;
        timestamp: Date;
    }[];
    socialNetwork: {
        contactCount: number;
        stableContacts: number;
        communicationFrequency: number;
    };
    computedFeatures?: any;
}

const AlternativeDataSchema: Schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    collectedAt: { type: Date, default: Date.now },
    mobileUsage: {
        callLogsCount: Number,
        smsCount: Number,
        dataUsageGB: Number,
        billPaymentHistory: [{
            amount: Number,
            onTime: Boolean,
            date: Date
        }]
    },
    transactions: [{
        type: { type: String, enum: ['credit', 'debit'] },
        amount: Number,
        category: String,
        timestamp: { type: Date, default: Date.now }
    }],
    socialNetwork: {
        contactCount: Number,
        stableContacts: Number,
        communicationFrequency: Number
    },
    computedFeatures: Schema.Types.Mixed
}, { timestamps: true });

export default mongoose.model<IAlternativeData>('AlternativeData', AlternativeDataSchema);
