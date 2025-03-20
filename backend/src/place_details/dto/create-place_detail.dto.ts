import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  IsObject,
  IsUrl,
  IsPhoneNumber,
} from 'class-validator';

export class CreatePlaceDetailDto {
  @IsString()
  title: string;

  @IsNumber()
  @IsOptional()
  rating?: number;

  @IsString()
  designation: string;

  @IsString()
  address: string;

  @IsPhoneNumber(null) 
  phone: string;

  @IsUrl()
  @IsOptional()
  website?: string;

  @IsNumber()
  @IsOptional()
  review_counts?: number;

  @IsString()
  @IsOptional()
  reviews?: string;

  @IsObject()
  @IsOptional()
  workHours?: Record<string, string>;

  @IsArray()
  @IsOptional()
  serviceTypes?: string[];

  @IsString()
  location: string;

  @IsString()
  place_image_url: string;

  @IsNumber()
  vendorId: number; 
}
