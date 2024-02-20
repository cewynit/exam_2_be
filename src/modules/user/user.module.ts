import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/database/schemas/user.schema';
import { UserRepository } from './repository/user.repository';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  imports: [
    CloudinaryModule,
    MongooseModule.forFeature([
        { name: User.name, schema: UserSchema },
    ]),
],
  controllers: [UserController],
  providers: [UserService,UserRepository],
})
export class UserModule {}
