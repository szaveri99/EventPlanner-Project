import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlaceDetailsService } from './place_details.service';
import { CreatePlaceDetailDto } from './dto/create-place_detail.dto';
import { UpdatePlaceDetailDto } from './dto/update-place_detail.dto';

@Controller('place-details')
export class PlaceDetailsController {
  constructor(private readonly placeDetailsService: PlaceDetailsService) {}

  @Post('/add-place')
  create(@Body() createPlaceDetailDto: CreatePlaceDetailDto) {
    return this.placeDetailsService.create(createPlaceDetailDto);
  }

  @Get('/all-places')
  findAll() {
    return this.placeDetailsService.findAll();
  }

  @Get('/single-place/:id')
  findOne(@Param('id') id: string) {
    return this.placeDetailsService.findOne(+id);
  }

  @Patch('/update-place/:id')
  update(@Param('id') id: string, @Body() updatePlaceDetailDto: UpdatePlaceDetailDto) {
    return this.placeDetailsService.update(+id, updatePlaceDetailDto);
  }

  @Delete('/delete-place/:id')
  remove(@Param('id') id: string) {
    return this.placeDetailsService.remove(+id);
  }
}
