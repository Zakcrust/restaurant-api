import { Module } from '@nestjs/common';
import { StaffTypeService } from './staff-type.service';
import { StaffTypeController } from './staff-type.controller';
import { StaffType } from './entities/staff-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([StaffType])
  ],
  controllers: [StaffTypeController],
  providers: [StaffTypeService]
})
export class StaffTypeModule {}
