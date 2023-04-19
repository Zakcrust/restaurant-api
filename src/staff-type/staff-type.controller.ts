import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { StaffTypeService } from './staff-type.service';
import { CreateStaffTypeDto } from './dto/create-staff-type.dto';
import { UpdateStaffTypeDto } from './dto/update-staff-type.dto';

@Controller('staff-type')
export class StaffTypeController {
  constructor(private readonly staffTypeService: StaffTypeService) {}

  @Post()
  async create(@Body() createStaffTypeDto: CreateStaffTypeDto) {
    try {
      await this.staffTypeService.create(createStaffTypeDto);
      return {
        message : "Staff Type has been created"
      }
    } catch (error) {
      new HttpException(error.message, 400, {
        description: error.message,
      })
    }
  }

  @Get()
  async findAll() {
    return await this.staffTypeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.staffTypeService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateStaffTypeDto: UpdateStaffTypeDto) {
    return await this.staffTypeService.update(id, updateStaffTypeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.staffTypeService.remove(id);
  }
}
