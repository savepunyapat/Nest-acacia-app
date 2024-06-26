import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/shared/db/prisma/prisma.service';
import { Categories } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.prismaService.categories.create({
      data: createCategoryDto,
    });
    return category;
  }

  async findAll(): Promise<Categories[]> {
    const categories = await this.prismaService.categories.findMany({
      orderBy: { id: 'desc' },
    });
    return categories;
  }

  async findOne(id: number): Promise<Categories> {
    const category = await this.prismaService.categories.findUnique({
      where: { id: id },
    });
    if (!category) {
      throw new NotFoundException('ไม่พบข้อมูลที่ค้นหา');
    }
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.prismaService.categories.update({
      where: { id: id },
      data: updateCategoryDto,
    });
    return category;
  }

  async remove(id: number) {
    const response = await this.prismaService.categories.delete({
      where: { id: id },
    });
    return response;
  }
}
