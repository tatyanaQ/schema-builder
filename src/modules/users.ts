import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersController } from "../controllers/users";
import { UsersService } from "../services/users";
import { User, UserSchema } from "../schemas/users";
import { UsersUtil } from "../utils/users";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersUtil],
})
export class UsersModule {}
