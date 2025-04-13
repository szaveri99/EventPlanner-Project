import {
  IsString,
  IsNumber,
  IsOptional,
  IsDateString,
  IsUrl,
} from 'class-validator';

export class CreateReviewDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  reviewer_name?: string;

  @IsNumber()
  @IsOptional()
  rating?: number;

  @IsString()
  @IsOptional()
  reviews?: string;

  @IsString()
  location: string;

  @IsDateString()
  @IsOptional()
  datePosted?: Date;

  @IsUrl()
  reviewer_image_url: string;

  @IsString()
  status: string;

  @IsNumber()
  userId: number; 
}
