import express, { Request, Response } from "express";
import { getDefaultErrorModel, getUuid, makeError } from "./util/genUtil";

const dataApi = express.Router();

interface ObjReturn {
  success?: boolean;
  data?: {}[];
  error?: {
    msg: string;
  };
}

dataApi.post("/create", (req: Request, res: Response) => {
  if (req.body?.name === undefined) {
    res.send(makeError("NoParameterException : name"));
    return;
  }

  const objReturn: ObjReturn = {
    success: true,
    data: [
      {
        id: getUuid(),
        name: req.body.name,
      },
    ],
    error: getDefaultErrorModel(),
  };

  res.send(objReturn);
  return;
});

export default dataApi;
