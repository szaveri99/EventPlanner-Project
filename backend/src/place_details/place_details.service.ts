import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreatePlaceDetailDto } from './dto/create-place_detail.dto';
import { UpdatePlaceDetailDto } from './dto/update-place_detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaceDetail } from './entities/place_detail.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { Vendor } from 'src/vendors/entities/vendor.entity';

@Injectable()
export class PlaceDetailsService {
  constructor(
    @InjectRepository(PlaceDetail)
    private readonly placeDetailsRepository: Repository<PlaceDetail>,
    @InjectRepository(Vendor)
    private readonly vendorRepository: Repository<Vendor>,
  ) {}

  async create(
    createPlaceDetailDto: CreatePlaceDetailDto,
  ): Promise<PlaceDetail> {
    const { vendorId, ...placeDetailData } = createPlaceDetailDto;

    const vendor = await this.validateVendorExists(vendorId);

    const placeDetail = this.placeDetailsRepository.create({
      ...placeDetailData,
      vendor,
    });

    try {
      const savedPlaceDetail =
        await this.placeDetailsRepository.save(placeDetail);
      return savedPlaceDetail;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new InternalServerErrorException(
          'Failed to validate vendor. Please try again.',
        );
      }
      console.error(error);
      throw error;
    }
  }

  async findAll(): Promise<PlaceDetail[]> {
    try {
      const placeDetails = await this.placeDetailsRepository.find({
        relations: ['vendor'],
      });
      return placeDetails;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new InternalServerErrorException(
          'Failed to validate vendor. Please try again.',
        );
      }
      console.error(error);
      throw error;
    }
  }

  async findOne(id: number): Promise<PlaceDetail> {
    try {
      const placeDetail = await this.placeDetailsRepository.findOne({
        where: { placeId: id },
        relations: ['vendor'],
      });

      if (!placeDetail) {
        throw new NotFoundException(`PlaceDetail with ID ${id} not found`);
      }
      return placeDetail;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new InternalServerErrorException(
          'Failed to validate vendor. Please try again.',
        );
      }
      console.error(error);
      throw error;
    }
  }

  async update(
    id: number,
    updatePlaceDetailDto: UpdatePlaceDetailDto,
  ): Promise<PlaceDetail> {
    const placeDetail = await this.findOne(id);

    const { vendorId, ...updateData } = updatePlaceDetailDto;

    if (vendorId) {
      placeDetail.vendor = await this.validateVendorExists(vendorId);
    }

    Object.assign(placeDetail, updateData);

    try {
      const updatedPlaceDetail =
        await this.placeDetailsRepository.save(placeDetail);
      return updatedPlaceDetail;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new InternalServerErrorException(
          'Failed to validate vendor. Please try again.',
        );
      }
      console.error(error);
      throw error;
    }
  }

  async remove(id: number): Promise<{ message: string }> {
    const placeDetail = await this.findOne(id);

    try {
      await this.placeDetailsRepository.remove(placeDetail);
      return { message: `Place detail deleted successfully.` };
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new InternalServerErrorException(
          'Failed to validate vendor. Please try again.',
        );
      }
      console.error(error);
      throw error;
    }
  }

  private async validateVendorExists(vendorId: number): Promise<Vendor> {
    try {
      const vendor = await this.vendorRepository.findOne({
        where: { vendorId },
      });

      if (!vendor) {
        throw new NotFoundException(`Vendor with ID ${vendorId} not found`);
      }

      return vendor;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new InternalServerErrorException(
          'Failed to validate vendor. Please try again.',
        );
      }
      console.error(error);
      throw error;
    }
  }
}