import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Unity } from 'src/entities/unity.entity';
import { UnityController } from './controller/unity.controller';
import { UnityService } from './service/unity.service';

@Module({
  imports: [
  
    TypeOrmModule.forFeature([Unity,User])
    ],
  controllers: [UnityController],
  providers: [UnityService]
})
export class UnityModule {}
