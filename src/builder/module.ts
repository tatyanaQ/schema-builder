import { Module } from "@nestjs/common";
import { BuilderController } from "./controller";
import { BuilderService } from "./service";
import { BuilderUtil } from "./utils";

@Module({
  controllers: [BuilderController],
  providers: [BuilderService, BuilderUtil],
})
export class BuilderModule {}
