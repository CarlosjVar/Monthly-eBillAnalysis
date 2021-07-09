import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { AdminSchema } from './schema/admin.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Admin', schema: AdminSchema }]),
  ],
  controllers: [AdminsController],
  providers: [AdminsService],
})
export class AdminsModule {}
