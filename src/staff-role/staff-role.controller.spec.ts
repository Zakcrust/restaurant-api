import { Test, TestingModule } from '@nestjs/testing';
import { StaffRoleController } from './staff-role.controller';
import { StaffRoleService } from './staff-role.service';

describe('StaffRoleController', () => {
  let controller: StaffRoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaffRoleController],
      providers: [StaffRoleService],
    }).compile();

    controller = module.get<StaffRoleController>(StaffRoleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
