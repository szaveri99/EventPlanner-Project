import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Vendor } from "src/vendors/entities/vendor.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @ManyToMany(() => Vendor, vendor => vendor.categories)
    vendors: Vendor[];
}
