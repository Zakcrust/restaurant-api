import { Test, TestingModule } from '@nestjs/testing';
import { StaffTypeController } from './staff-type.controller';
import { StaffTypeService } from './staff-type.service';

describe('StaffTypeController', () => {
  let controller: StaffTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaffTypeController],
      providers: [StaffTypeService],
    }).compile();

    controller = module.get<StaffTypeController>(StaffTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
