import { Logger } from "@nestjs/common";
import { Response, NextFunction } from "express";
import { AppRequest } from "../types/request";

export function logRequest(req: AppRequest, res: Response, next: NextFunction) {
  const { id, method, url } = req;
  Logger.log(`${id} ${method} ${url}`);

  next();
}
