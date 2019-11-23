import { Document } from 'mongoose';

export interface cactus extends Document {
    readonly genere: string;
    readonly species: string;
    readonly description: string;
    readonly watering: string;
    readonly created_at: Date;
}