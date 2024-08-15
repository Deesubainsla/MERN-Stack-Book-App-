import mongoose from 'mongoose'

const KartSchema = new mongoose.Schema({

}, {timestamps: true});

export const Kart = mongoose.model('Kart',KartSchema);