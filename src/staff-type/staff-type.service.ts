import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { slugify } from 'src/utils/slugify';
import { Repository } from 'typeorm';
import { CreateStaffTypeDto } from './dto/create-staff-type.dto';
import { UpdateStaffTypeDto } from './dto/update-staff-type.dto';
import { StaffType } from './entities/staff-type.entity';

@Injectable()
export class StaffTypeService {

  constructor(
    @InjectRepository(StaffType)
    private staffTypeRepository: Repository<StaffType>
  ) {

  }

  async create(createStaffTypeDto: CreateStaffTypeDto) {
    createStaffTypeDto.id =  `STFTP-${slugify(createStaffTypeDto.title)}`;    
    return await this.staffTypeRepository.insert(createStaffTypeDto);
  }

  async findAll() {
    return await this.staffTypeRepository.find();
  }

  async findOne(id: string) {
    return await this.staffTypeRepository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: string, updateStaffTypeDto: UpdateStaffTypeDto) {
    return await this.staffTypeRepository.update({
      id: id
    }, updateStaffTypeDto)
  }

  async remove(id: string) {
    return await this.staffTypeRepository.delete(id)
  }
}
