import { PartialType } from '@nestjs/mapped-types';
import { IsNumberString, IsOptional, IsString } from 'class-validator';
import { CreateStaffDto } from './create-staff.dto';

export class UpdateStaffDto extends PartialType(CreateStaffDto) {
    @IsString()
    @IsOptional()
    staff_name: string;

    @IsNumberString()
    @IsOptional()
    shift_start_time: string;

    @IsNumberString()
    @IsOptional()
    shift_end_time: string;

    @IsString()
    @IsOptional()
    staff_type_id: string;

    @IsString()
    @IsOptional()
    staff_role_id: string;
}
