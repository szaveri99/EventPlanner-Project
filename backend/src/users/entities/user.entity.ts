import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Vendor } from 'src/vendors/entities/vendor.entity';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ length: 20 })
    firstName: string;

    @Column({ nullable: true, length: 20 })
    lastName: string;

    @Column({ length: 30 })
    email: string;

    @Column({ length: 10 })
    password: string

    @OneToMany(() => Vendor, (vendor) => vendor.user) // A user can have multiple vendors
    vendors: Vendor[];
}
