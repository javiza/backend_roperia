import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { CountClickModule } from './count-click/count-click.module';
import { FavoriteModule } from './favorite/favorite.module';
import { NotificationModule } from './notification/notification.module';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { ViewModule } from './view/view.module';
import { TrashModule } from './trash/trash.module';
import { ConfigModule } from '@nestjs/config';



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
    VideoModule,
    CountClickModule,
    ViewModule,
    UserModule,
    NotificationModule,
    FavoriteModule,
    TrashModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
