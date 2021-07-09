import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { AdminsService } from './admins.service';
import { Admin } from './interfaces/admin.interface';
import { CreateAdminDto } from './dto/create-admin.dto';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Get()
  async findAll(): Promise<Admin[]> {
    return this.adminsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Admin> {
    return this.adminsService.findOne(id);
  }
  @Post()
  async create(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
    return this.adminsService.create(createAdminDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Admin> {
    return this.adminsService.delete(id);
  }
  @Put(':id')
  async update(
    @Body() createAdminDto: CreateAdminDto,
    @Param('id') id: string,
  ): Promise<Admin> {
    return this.adminsService.update(id, createAdminDto);
  }
}
