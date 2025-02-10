import { NextFunction, Request, Response } from "express";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("from middleware " + req.session.user);
  if (!req.session.user) {
    res.status(401).json({ msg: "Unauthorized!" });
    return;
  }
  next();
};
