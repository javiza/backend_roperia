import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { GreenModule } from './modules/green/green.module';
import { TrashModule } from './modules/trash/trash.module';
import { ConfigModule } from '@nestjs/config';
import { WhiteModule } from './modules/white/white.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,      
      autoLoadEntities: true,
    }),
    AdminModule,
    GreenModule,
    UserModule,
    TrashModule,
    WhiteModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
