import express, { Request, Response } from "express";
import { testDb } from "../main";
import { getDefaultErrorModel, getUuid, makeError } from "./util/genUtil";

const dataApi = express.Router();

interface ObjReturn {
  success?: boolean;
  data?: {};
  error?: {
    msg: string;
  };
}

dataApi.post("/get", (req: Request, res: Response) => {
  const objReturn: ObjReturn = {
    success: true,
    data: testDb.datas,
    error: getDefaultErrorModel(),
  };

  res.send(objReturn);
  return;
});

dataApi.post("/create", (req: Request, res: Response) => {
  if (req.body?.name === undefined) {
    res.send(makeError("NoParameterException : name"));
    return;
  }

  const objReturn: ObjReturn = {
    success: true,
    data: {
      id: getUuid(),
      name: req.body.name,
    },
    error: getDefaultErrorModel(),
  };

  testDb.datas.push(objReturn.data);
  res.send(objReturn);
  return;
});

export default dataApi;
