import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./users";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb://root:root@host.docker.internal:27017/nest?authSource=admin"
    ),
    UsersModule,
  ],
})
export class AppModule {}
