import { Controller, Post, Body } from "@nestjs/common";
import { CreateCollectionBody, BuilderService } from "./service";

@Controller("builder")
export class BuilderController {
  constructor(private builderService: BuilderService) {}

  @Post("/collection")
  async createCollection(
    @Body() body: { data: CreateCollectionBody }
  ): Promise<any> {
    return this.builderService.createCollection(body);
  }
}
