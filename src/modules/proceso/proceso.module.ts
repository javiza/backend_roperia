import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Proceso } from 'src/entities/proceso.entity';
import { ProcesoController } from './controller/proceso.controller';
import { ProcesoService } from './service/proceso.service';

@Module({
  imports: [
  
    TypeOrmModule.forFeature([Proceso,User])
    ],
  controllers: [ProcesoController],
  providers: [ProcesoService]
})
export class ProcesoModule {}
