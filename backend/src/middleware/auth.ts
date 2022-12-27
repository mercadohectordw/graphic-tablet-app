import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";
const JWT_KEY = process.env.JWT_SECRET || " ";

export const verifyToken = (req:Request, res:Response, next:NextFunction) => {
  const authHeader = req.headers.authorization;

  if(authHeader && authHeader !== "null"){
    Jwt.verify(authHeader.split(" ")[1], JWT_KEY, (err:any, user : any) => {
      if(err){
        return res.status(403).send("UnAuthorized");
      }
      req = Object.assign(req, { userId : user});
      console.log(req);
      next();
    });
  } else {
    res.status(403).send("UnAuthorized");
  }
};