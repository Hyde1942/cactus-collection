import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { cactus } from './interfaces/cactus.interface';
import { createCactusDTO } from './dto/create-cactus.dto';
import { async } from 'rxjs/internal/scheduler/async';


@Injectable()
export class cactusService {
    constructor(@InjectModel('cactus') private readonly cactusModel: Model<cactus>) { }

    // fetch all cactus
    async getAllCactus(): Promise<cactus[]> {
        const cactus = await this.cactusModel.find().exec();
        return cactus;
    }
    
    // Get a single cactus
    async getCactus(cactusID): Promise<cactus> {
        const cactus = await this.cactusModel.findById(cactusID).exec();
        return cactus;
    }

    // post a single cactus
    async addCactus(createCactusDTO: createCactusDTO): Promise<cactus> {
        const newCactus = await this.cactusModel(createCactusDTO);
        return newCactus.save();
    }

    // Edit cactus details
    async updateCactus(cactusID, createCactusDTO: createCactusDTO): Promise<cactus> {
        const updatedCactus = await this.cactusModel
            .findByIdAndUpdate(cactusID, createCactusDTO, { new: true });
        return updatedCactus;
    }

    // Delete a cactus
    async deleteCactus(cactusID): Promise<any> {
        const deletedCactus = await this.cactusModel.findByIdAndRemove(cactusID);
        return deletedCactus;
    }

}
