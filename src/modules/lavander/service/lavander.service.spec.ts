import { Test, TestingModule } from '@nestjs/testing';
import { LavanderService } from './lavander.service';

describe('lavanderService', () => {
  let service: LavanderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LavanderService],
    }).compile();

    service = module.get<LavanderService>(LavanderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
