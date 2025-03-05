import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity'
@Entity()
export class Vendor {
    @PrimaryGeneratedColumn()
    vendorId: number;

    @Column({ length: 20 })
    firstName: string;

    @Column({ nullable: true, length: 20 })
    lastName: string;

    @Column({ length: 100 })
    companyName: string;

    @Column({ length: 30 })
    email: string;

    @Column({ length: 10 })
    password: string;

    @ManyToOne(() => User, (user) => user.vendors, { nullable: true, onDelete: 'SET NULL' })
    user: User | null;
}
