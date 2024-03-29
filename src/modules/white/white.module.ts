import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { White } from 'src/entities/white.entity';
import { WhiteController } from './controller/white.controller';
import { WhiteService } from './service/white.service';

@Module({
  imports: [
  
    TypeOrmModule.forFeature([White,User])
    ],
  controllers: [WhiteController],
  providers: [WhiteService]
})
export class WhiteModule {}
