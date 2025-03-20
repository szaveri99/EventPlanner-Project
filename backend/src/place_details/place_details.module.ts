import { Module } from '@nestjs/common';
import { PlaceDetailsService } from './place_details.service';
import { PlaceDetailsController } from './place_details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceDetail } from './entities/place_detail.entity';
import { Vendor } from 'src/vendors/entities/vendor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlaceDetail, Vendor])],
  controllers: [PlaceDetailsController],
  providers: [PlaceDetailsService],
})
export class PlaceDetailsModule { }
