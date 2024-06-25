import { Test, TestingModule } from '@nestjs/testing';
import { GlobalHelpersService } from './global-helpers.service';

describe('GlobalHelpersService', () => {
  let service: GlobalHelpersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GlobalHelpersService],
    }).compile();

    service = module.get<GlobalHelpersService>(GlobalHelpersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
