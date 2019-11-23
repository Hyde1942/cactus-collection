import * as mongoose from 'mongoose';

export const cactusSchema = new mongoose.Schema({
    genere: String,
    species: String,
    description: String,
    watering: String,
    created_at: { type: Date, default: Date.now }
})