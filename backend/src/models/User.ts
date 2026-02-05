import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  userType: 'borrower' | 'lender' | 'admin';
  phone: string;
  email: string;
  passwordHash: string;
  profile: {
    firstName: string;
    lastName: string;
    dateOfBirth?: Date;
    gender?: string;
    address?: {
      street: string;
      city: string;
      state: string;
      pincode: string;
    };
    photo?: string;
    language: string;
    businessInfo?: {
      businessName: string;
      businessType: string;
      yearStarted: number;
      monthlyRevenue: number;
    };
    investmentPreferences?: {
      riskAppetite: 'low' | 'medium' | 'high';
      minLoanAmount: number;
      maxLoanAmount: number;
      autoInvest: boolean;
    };
  };
  kyc: {
    status: 'pending' | 'approved' | 'rejected';
    aadhaarNumber?: string;
    panNumber?: string;
    verifiedAt?: Date;
  };
  trustScore: number;
  status: 'active' | 'suspended' | 'deleted';
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  userType: { type: String, enum: ['borrower', 'lender', 'admin'], required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  profile: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: Date,
    gender: String,
    address: {
      street: String,
      city: String,
      state: String,
      pincode: String,
    },
    photo: String,
    language: { type: String, default: 'English' },
    businessInfo: {
      businessName: String,
      businessType: String,
      yearStarted: Number,
      monthlyRevenue: Number,
    },
    investmentPreferences: {
      riskAppetite: { type: String, enum: ['low', 'medium', 'high'] },
      minLoanAmount: Number,
      maxLoanAmount: Number,
      autoInvest: { type: Boolean, default: false },
    }
  },
  kyc: {
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    aadhaarNumber: String,
    panNumber: String,
    verifiedAt: Date
  },
  trustScore: { type: Number, default: 0 },
  status: { type: String, enum: ['active', 'suspended', 'deleted'], default: 'active' }
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema);
