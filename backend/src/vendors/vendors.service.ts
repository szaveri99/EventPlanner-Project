import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vendor } from './entities/vendor.entity';
import { Category } from 'src/categories/entities/category.entity';
import { In } from 'typeorm';

@Injectable()
export class VendorsService {
  constructor(
    @InjectRepository(Vendor) private vendorRepo: Repository<Vendor>,
    @InjectRepository(Category) private categoryRepo: Repository<Category>
  ) { }

  async createVendor(dto: CreateVendorDto) {
    // Fetch categories by ID
    let categories = await this.categoryRepo.find({
      where: { name: In(dto.categories) },
    });

    // Check if all provided categories exist, otherwise create missing ones
    if (categories.length !== dto.categories.length) {
      const existingCategoryNames = categories.map(c => c.name);
      const newCategories = dto.categories.filter(cat => !existingCategoryNames.includes(cat));

      if (newCategories.length > 0) {
        const createdCategories = await this.categoryRepo.save(
          newCategories.map(name => ({ name }))
        );
        categories = [...categories, ...createdCategories];
      }
    }

    // Create the vendor with associated categories
    const vendor = this.vendorRepo.create({ ...dto, categories });
    return this.vendorRepo.save(vendor);
  }

  async getVendorById(vendorId: number) {
    const vendor = await this.vendorRepo.findOne({
      where: { vendorId: vendorId },
      relations: ['categories'],
    });

    if (!vendor) throw new NotFoundException(`Vendor with ID ${vendorId} not found.`);
    return vendor;
  }

  async getAllVendors() {
    const vendors = await this.vendorRepo.find({
      relations: ['categories'],
    });

    return vendors.map(vendor => ({
      ...vendor,
      categories: vendor.categories.map(c => c.name),
    }));
  }


  async updateVendor(vendorId: number, dto: UpdateVendorDto) {
    const vendor = await this.vendorRepo.findOne({
      where: { vendorId: vendorId },
      relations: ['categories'] // Ensure categories are loaded
    });

    if (!vendor) {
      throw new NotFoundException(`Vendor with ID ${vendorId} not found.`);
    }

    let categories = [];
    if (dto.categories) {
      // Find existing categories by name
      categories = await this.categoryRepo.find({
        where: { name: In(dto.categories) }
      });

      // Find category names that do not exist
      const existingCategoryNames = categories.map(cat => cat.name);
      const newCategories = dto.categories.filter(name => !existingCategoryNames.includes(name));

      // Create new categories if they don't exist
      if (newCategories.length > 0) {
        const createdCategories = await this.categoryRepo.save(
          newCategories.map(name => ({ name }))
        );
        categories = [...categories, ...createdCategories];
      }
    }

    // Update the vendor with new data
    const updatedVendor = this.vendorRepo.create({
      ...vendor,
      ...dto,
      categories: categories.length > 0 ? categories : vendor.categories, // Preserve old categories if not updated
    });

    return this.vendorRepo.save(updatedVendor);
  }

  async deleteVendor(vendorId: number) {
    // Check if the vendor exists before deletion
    const vendor = await this.vendorRepo.findOne({ where: { vendorId: vendorId } });

    if (!vendor) {
      throw new NotFoundException(`Vendor with ID ${vendorId} not found.`);
    }

    // Delete the vendor
    await this.vendorRepo.delete(vendorId);
    return { message: `Vendor with ID ${vendorId} deleted successfully.` };
  }

}