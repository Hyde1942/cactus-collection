import { Test, TestingModule } from '@nestjs/testing';
import { cactusService } from './cactus.service';

describe('cactusService', () => {
  let service: cactusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [cactusService],
    }).compile();

    service = module.get<cactusService>(cactusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
