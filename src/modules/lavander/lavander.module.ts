import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Lavander } from 'src/entities/lavander.entity';
import { LavanderController } from './controller/lavander.controller';
import { LavanderService } from './service/lavander.service';

@Module({
  imports: [
  
    TypeOrmModule.forFeature([Lavander,User])
    ],
  controllers: [LavanderController],
  providers: [LavanderService]
})
export class LavanderModule {}
