import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongoModule } from './database/connectDB/mongo.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    MongoModule,
    AuthModule,
    UserModule,
    ProductModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
