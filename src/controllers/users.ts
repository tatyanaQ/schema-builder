import { Controller, Get, Post, Body } from "@nestjs/common";
import { UsersService } from "../services/users";
import { User } from "../schemas/users";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<any> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() body: { user: User }): Promise<any> {
    const user = body.user;
    return this.usersService.create(user);
  }
}
