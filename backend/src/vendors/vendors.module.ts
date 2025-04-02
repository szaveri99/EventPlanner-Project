import { Module } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { VendorsController } from './vendors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from './entities/vendor.entity';
import { Category } from 'src/categories/entities/category.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Vendor, Category])],
  controllers: [VendorsController],
  providers: [VendorsService],
})
export class VendorsModule { }
