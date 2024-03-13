import { Test, TestingModule } from '@nestjs/testing';
import { GreenController } from './green.controller';

describe('GreenController', () => {
  let controller: GreenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GreenController],
    }).compile();

    controller = module.get<GreenController>(GreenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
