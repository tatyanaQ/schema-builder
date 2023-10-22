import { Injectable } from "@nestjs/common";

@Injectable()
export class BuilderUtil {
  constructor() {}

  capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
