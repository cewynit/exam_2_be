import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "../../../common/base/base.repository";
import { User, UserDocument } from "../../../database/schemas/user.schema";


@Injectable()
export class AuthRepository extends BaseRepository<User>{
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<UserDocument>,
    ) {
        super(userModel);
    }
}