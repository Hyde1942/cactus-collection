import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule} from '@nestjs/mongoose';
import { cactusModule } from './cactus/cactus.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/cactus', { useNewUrlParser: true }),
    cactusModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
