import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../schemas/users";
import { UsersUtil } from "../utils/users";

@Injectable()
export class UsersService {
  constructor(
    private usersUtil: UsersUtil,
    @InjectModel(User.name) private userModel: Model<User>
  ) {}

  async create(createUserDto: User): Promise<UserDocument> {
    const createdUser = new this.userModel({
      ...createUserDto,
      password: this.usersUtil.createPassword(),
    });
    return createdUser.save();
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find();
  }
}
