import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class StaffType {
    @PrimaryColumn()
    id: string;

    @Column()
    title: string;
}
