import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryFailedError } from 'typeorm';
import { Review } from './entities/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    try {
      const user = await this.userRepository.findOne({
        where: { userId: createReviewDto.userId },
      });

      if (!user) {
        throw new NotFoundException(
          `User with ID ${createReviewDto.userId} not found`,
        );
      }

      const review = this.reviewRepository.create({
        ...createReviewDto,
        user,
      });

      return await this.reviewRepository.save(review);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new InternalServerErrorException(
          'Database error while creating review',
        );
      }
      console.error(error); 
      throw error; 
    }
  }

  async findAll(): Promise<Review[]> {
    try {
      const reviews = await this.reviewRepository.find({
        relations: ['user'],
        order: { datePosted: 'DESC' },
      });

      if (reviews.length === 0) {
        throw new NotFoundException('No reviews found!');
      }

      return reviews;
    } catch (error) {
      console.error(error); 
      throw error;
    }
  }

  async findOne(id: number): Promise<Review> {
    try {
      const review = await this.reviewRepository.findOne({
        where: { reviewId: id },
        relations: ['user'],
      });

      if (!review) {
        throw new NotFoundException(`Review with ID ${id} not found`);
      }

      return review;
    } catch (error) {
      console.error(error); 
      throw error;
    }
  }

  async update(id: number, updateReviewDto: UpdateReviewDto): Promise<Review> {
    try {
      const review = await this.reviewRepository.preload({
        reviewId: id,
        ...updateReviewDto,
      });

      if (!review) {
        throw new NotFoundException(`Review with ID ${id} not found`);
      }

      return await this.reviewRepository.save(review);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new InternalServerErrorException(
          `Database error while updating review with ID ${id}`,
        );
      }
      console.error(error); 
      throw error;
    }
  }

  async remove(id: number): Promise<{ message: string }> {
    try {
      const result = await this.reviewRepository.delete(id);

      if (result.affected === 0) {
        throw new NotFoundException(`Review with ID ${id} not found`);
      }
      return { message: `Review deleted successfully.` };
    } catch (error) {
      console.error(error); 
      throw error;
    }
  }
}
