import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Admin } from './interfaces/admin.interface';

@Injectable()
export class AdminsService {
  constructor(
    @InjectModel('Admin') private readonly adminModel: Model<Admin>,
  ) {}
  async findAll(): Promise<Admin[]> {
    return await this.adminModel.find();
  }
  async findOne(id: string): Promise<Admin> {
    return await this.adminModel.findOne({ _id: id });
  }
  async create(user: Admin): Promise<Admin> {
    const newUser = new this.adminModel(user);
    return await newUser.save();
  }
  async delete(id: string): Promise<Admin> {
    return await this.adminModel.findByIdAndRemove(id);
  }
  async update(id: string, user: Admin): Promise<Admin> {
    return await this.adminModel.findByIdAndUpdate(id, user, { new: true });
  }
}
