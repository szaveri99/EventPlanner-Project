import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';

@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) { }

  @Post()
  create(@Body() createVendorDto: CreateVendorDto) {
    return this.vendorsService.createVendor(createVendorDto);
  }

  @Get(':vendorId')
  async getVendor(@Param('vendorId') vendorId: number) {
    return this.vendorsService.getVendorById(vendorId);
  }

  @Get()
  async getAllVendors() {
    return this.vendorsService.getAllVendors();
  }

  @Patch(':vendorId')
  update(@Param('vendorId') vendorId: number, @Body() updateVendorDto: UpdateVendorDto) {
    return this.vendorsService.updateVendor(vendorId, updateVendorDto);
  }

  @Delete(':vendorId')
  remove(@Param('vendorId') vendorId: number) {
    return this.vendorsService.deleteVendor(vendorId);
  }
}

