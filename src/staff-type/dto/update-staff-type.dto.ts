import { PartialType } from '@nestjs/mapped-types';
import { CreateStaffTypeDto } from './create-staff-type.dto';

export class UpdateStaffTypeDto extends PartialType(CreateStaffTypeDto) {}
