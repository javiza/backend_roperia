import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trash } from 'src/trash/trash.entity';

import { TrashService } from './service/trash.service';
import { TrashController } from './controller/trash.controller';



@Module({
  imports: [
  TypeOrmModule.forFeature([Trash])
],
  controllers: [TrashController],
  providers: [TrashService]
})
export class TrashModule {}
