import { Response, NextFunction } from "express";
import { AppRequest } from "../types/request";

export function setRequestId(
  req: AppRequest,
  res: Response,
  next: NextFunction
) {
  req.id = Date.now().toString();

  next();
}
