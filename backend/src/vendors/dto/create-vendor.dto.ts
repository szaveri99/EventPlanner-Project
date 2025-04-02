import { IsString, IsNotEmpty, Length, IsEmail, IsOptional, IsBoolean, IsArray, IsObject, IsPhoneNumber } from 'class-validator';

export class CreateVendorDto {
    @IsString()
    @IsNotEmpty()
    companyName: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsOptional()
    lastName: string;

    @IsPhoneNumber('IN')
    @IsNotEmpty()
    phoneNumber: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @Length(6, 20) // Adjust password length as needed
    password: string;

    @IsOptional()
    @IsString()
    website?: string;

    // @IsArray()
    @IsNotEmpty()
    // @IsString({ each: true })
    categories: string[];  // Example: ['Photography', 'Catering']

    @IsObject()
    @IsOptional()
    categorySpecificData?: Record<string, any>;

    // @IsArray()
    @IsOptional()
    portfolio?: { type: string, url: string }[];

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    state: string;

    @IsNotEmpty()
    @IsString()
    country: string;

    @IsNotEmpty()
    @IsString()
    postalCode: string;

    @IsNotEmpty()
    @IsString()
    completeAddress: string;

    @IsNotEmpty()
    yearBusinessStarted: number;

}
