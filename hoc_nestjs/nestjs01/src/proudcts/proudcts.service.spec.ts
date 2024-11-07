import { Test, TestingModule } from '@nestjs/testing';
import { ProudctsService } from './proudcts.service';

describe('ProudctsService', () => {
  let service: ProudctsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProudctsService],
    }).compile();

    service = module.get<ProudctsService>(ProudctsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
