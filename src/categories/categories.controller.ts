import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller({
  path: 'categories',
  version: '1',
})
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    const category = await this.categoriesService.create(createCategoryDto);
    return {
      message: 'เพิ่มข้อมูลสำเร็จ',
      data: category,
    };
  }
  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.findOne(id);
  }
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    const response = await this.categoriesService.update(id, updateCategoryDto);
    return {
      message: 'แก้ไขข้อมูลสำเร็จ',
      data: response,
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    const isDataExist = await this.categoriesService.findOne(id);
    if (!isDataExist) {
      return {
        message: 'ไม่พบข้อมูลที่ต้องการลบ',
      };
    }

    await this.categoriesService.remove(id);

    return {
      message: 'ลบข้อมูลสำเร็จ',
    };
  }
}
