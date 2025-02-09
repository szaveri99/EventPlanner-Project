import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ length: 20 })
    name: string;

    @Column({ length: 25 })
    email: string;

    @Column()
    password: string
}
