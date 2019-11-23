import { Test, TestingModule } from '@nestjs/testing';
import { cactusController } from './cactus.controller';

describe('Cactus Controller', () => {
  let controller: cactusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [cactusController],
    }).compile();

    controller = module.get<cactusController>(cactusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
