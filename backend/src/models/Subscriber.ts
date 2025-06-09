import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    role: { type: String },
    company: { type: String },
    experience: { type: String },
    interests: { type: String },
    newsletter: { type: Boolean, default: false }
}, { timestamps: true });

export const Subscriber = mongoose.model('Subscriber', subscriberSchema);
