import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/entities/admin.entity';
import { AdminController } from './controller/admin.controller';
import { AdminService } from './service/admin.service';


@Module({
  imports: [
  
    TypeOrmModule.forFeature([Admin])
    ],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
