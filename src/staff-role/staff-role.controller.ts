import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { StaffRoleService } from './staff-role.service';
import { CreateStaffRoleDto } from './dto/create-staff-role.dto';
import { UpdateStaffRoleDto } from './dto/update-staff-role.dto';

@Controller('staff-role')
export class StaffRoleController {
  constructor(private readonly staffRoleService: StaffRoleService) {}

  @Post()
  async create(@Body() createStaffRoleDto: CreateStaffRoleDto) {
    try {
      await this.staffRoleService.create(createStaffRoleDto);
      return {
        message : "Staff Role has been created"
      }
    } catch (error) {
      new HttpException(error.message, 400, {
        description: error.message,
      })
    }
  }
  
  @Get()
  async findAll() {
    return await this.staffRoleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.staffRoleService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateStaffRoleDto: UpdateStaffRoleDto) {
    return await this.staffRoleService.update(id, updateStaffRoleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.staffRoleService.remove(id);
  }
}
