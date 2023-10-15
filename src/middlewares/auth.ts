import { Request, Response, NextFunction } from "express";
import { AppRequest } from "../types/request";

export function authorize(req: AppRequest, res: Response, next: NextFunction) {
  const { query } = req;
  const userId = Number(query.userId);

  if (userId) {
    req.user = { id: userId };
  }

  next();
}
