import { generateId } from "src/utils/id-generator";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class StaffRole {
    @PrimaryColumn()
    id: string;

    @Column()
    staff_role_name: string;
}
