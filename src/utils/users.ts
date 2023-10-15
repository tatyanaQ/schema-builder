import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersUtil {
  constructor() {}

  createPassword(): string {
    return Date.now().toString();
  }
}
