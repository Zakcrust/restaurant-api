import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { slugify } from 'src/utils/slugify';
import { Repository } from 'typeorm';
import { CreateStaffRoleDto } from './dto/create-staff-role.dto';
import { UpdateStaffRoleDto } from './dto/update-staff-role.dto';
import { StaffRole } from './entities/staff-role.entity';

@Injectable()
export class StaffRoleService {

  constructor(
    @InjectRepository(StaffRole)
    private staffRoleRepository: Repository<StaffRole>
  ) {

  }

  async create(createStaffRoleDto: CreateStaffRoleDto) {
    createStaffRoleDto.id =  `STFRL-${slugify(createStaffRoleDto.staff_role_name)}`;
    return await this.staffRoleRepository.insert(createStaffRoleDto);
  }

  async findAll() {
    return await this.staffRoleRepository.find();
  }

  async findOne(id: string) {
    return await this.staffRoleRepository.findOne({
      where: {
        id: id
      }
    })
  }

  async update(id: string, updateStaffRoleDto: UpdateStaffRoleDto) {
    return await this.staffRoleRepository.update(id, updateStaffRoleDto)
  }

  async remove(id: string) {
    return await this.staffRoleRepository.delete(id);
  }
}
