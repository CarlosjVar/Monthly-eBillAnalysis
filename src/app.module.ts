import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AdminsController } from './admins/admins.controller';
import { AdminsService } from './admins/admins.service';
import config from './config/keys';
import { AdminsModule } from './admins/admins.module';

@Module({
  imports: [UsersModule, AdminsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
