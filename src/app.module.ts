import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { AdminModule } from './admin/admin.module';
import { GreenModule } from './modules/green/green.module';
import { TrashModule } from './modules/trash/trash.module';
import { ConfigModule } from '@nestjs/config';
import { WhiteModule } from './modules/white/white.module';
import { AuthModule } from './auth/auth.module';
import { ProcesoModule } from './modules/proceso/proceso.module';
import { UnityModule } from './modules/unity/unity.module';
import { LavanderModule } from './modules/lavander/lavander.module';
import { ProvidersModule } from './providers/providers.module';

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
    AuthModule,
    //AdminModule,
    GreenModule,
    ProvidersModule,
 //   UserModule,
    LavanderModule,
    UnityModule,
    ProcesoModule,
    TrashModule,
    WhiteModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
