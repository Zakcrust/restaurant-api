import { IsString } from "class-validator";

export class CreateStaffRoleDto {
    @IsString()
    staff_role_name: string;

    id: string;
}
