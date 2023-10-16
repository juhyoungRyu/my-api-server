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

dataApi.post("/update", (req: Request, res: Response) => {
  if (req.body?.name === undefined) {
    res.send(makeError("NoParameterException : name"));
    return;
  }

  const objReturn: ObjReturn = {
    success: true,
    data: {},
    error: getDefaultErrorModel(),
  };

  const datas = testDb.datas;

  for (let i = 0; i < datas.length; i++) {
    if (datas[i].id === req.body.id) {
      datas[i].name = req.body.name;
    }
  }
  //testDb.datas.push(objReturn.data);
  res.send(objReturn);

  testDb.datas = datas;

  return;
});

dataApi.post("/delete", (req: Request, res: Response) => {
  if (req.body?.id === undefined) {
    res.send(makeError("NoParameterException : id"));
    return;
  }

  const objReturn: ObjReturn = {
    success: true,
    data: {},
    error: getDefaultErrorModel(),
  };

  let datas = testDb.datas;


  for (let i = 0; i < datas.length; i++) {
    if (datas[i].id === req.body.id) {
      datas.splice(i, 1);
      break;
    }
  }
  res.send(objReturn);

  testDb.datas = datas;
  return;
});

export default dataApi;
