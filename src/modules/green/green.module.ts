import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Green } from 'src/entities/green.entity';
import { GreenController } from './controller/green.controller';
import { GreenService } from './service/green.service';

@Module({
  imports: [
  
    TypeOrmModule.forFeature([Green,User])
    ],
  controllers: [GreenController],
  providers: [GreenService]
})
export class GreenModule {}
