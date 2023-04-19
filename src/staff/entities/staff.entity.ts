import { StaffRole } from 'src/staff-role/entities/staff-role.entity';
import { StaffType } from 'src/staff-type/entities/staff-type.entity';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Staff {
    @PrimaryColumn({
        insert: true
    })
    id: string;

    @Column()
    staff_name: string;

    @Column()
    shift_start_time: string;

    @Column()
    shift_end_time: string;

    @OneToOne(() => StaffType)
    @JoinColumn({
        foreignKeyConstraintName: 'staff_type_id'
    })
    staff_type: StaffType;

    @OneToOne(() => StaffRole)
    @JoinColumn({
        foreignKeyConstraintName: 'staff_role_id'
    })
    staff_role: StaffRole
}
