import { IsString } from "class-validator";

export class CreateStaffTypeDto {
    @IsString()
    title: string;

    id: string; 
}