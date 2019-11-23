import { Module } from '@nestjs/common';
import { cactusController } from "./cactus.controller";
import { cactusService } from './cactus.service';
import { MongooseModule } from '@nestjs/mongoose';
import { cactusSchema } from './schemas/cactus.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'cactus', schema: cactusSchema }])
  ],
  controllers: [cactusController],
  providers: [cactusService],
})
export class cactusModule {}
