import { IsDate, IsNumberString, IsString, Matches } from "class-validator";

export class CreateStaffDto {
    @IsString()
    staff_name: string;

    @IsNumberString()
    shift_start_time: string;

    @IsNumberString()
    shift_end_time: string;

    @IsString()
    staff_type_id: string;

    @IsString()
    staff_role_id: string;
}
