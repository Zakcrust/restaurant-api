import { Test, TestingModule } from '@nestjs/testing';
import { StaffRoleService } from './staff-role.service';

describe('StaffRoleService', () => {
  let service: StaffRoleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffRoleService],
    }).compile();

    service = module.get<StaffRoleService>(StaffRoleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
