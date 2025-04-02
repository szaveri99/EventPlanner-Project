
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { User } from 'src/users/entities/user.entity'
import { PlaceDetail } from 'src/place_details/entities/place_detail.entity';
import { Category } from 'src/categories/entities/category.entity';

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

    @Column({ length: 20 })
    password: string;

    @Column({ length: 15 })
    phoneNumber: string;

    @Column({ length: 15, nullable: true })
    altPhoneNumber: string;

    @Column({ nullable: true })
    website: string;

    @Column({ nullable: true })
    socialMediaLinks: string;  // JSON stringified format

    @Column({ nullable: true })
    gstNumber: string;

    @Column({ length: 30 })
    city: string;

    @Column({ length: 30 })
    state: string;

    @Column({ length: 30 })
    country: string;

    @Column({ length: 15 })
    postalCode: string;

    @Column()
    completeAddress: string;

    @Column()
    yearBusinessStarted: number;

    @Column({ nullable: true })
    operationalLocations: string;  // JSON stringified format

    @Column({ nullable: true, type: 'jsonb' })
    categorySpecificData: any;  // Stores dynamic category fields

    @Column({ nullable: true, type: 'jsonb' })
    portfolio: any;  // Store images/videos as JSON data

    @Column({ default: false })
    availabilityForDestinationEvents: boolean;

    @Column({ nullable: true })
    bookingNoticePeriod: number;

    @Column({ default: 'Local' })
    serviceRegions: string;

    @ManyToMany(() => Category, category => category.vendors, { cascade: true })
    @JoinTable()
    categories: Category[];

    @ManyToOne(() => User, (user) => user.vendors, { nullable: true, onDelete: 'SET NULL' })
    user: User | null;

    @OneToMany(() => PlaceDetail, (place) => place.vendor)
    places: PlaceDetail[];

}
