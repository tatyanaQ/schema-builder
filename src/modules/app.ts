import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./users";
import { BuilderModule } from "../builder/module";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb://root:root@host.docker.internal:27017/nest?authSource=admin"
    ),
    UsersModule,
    BuilderModule,
  ],
})
export class AppModule {}
