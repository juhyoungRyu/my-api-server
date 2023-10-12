import { v4 as uuidv4 } from "uuid";

export function getUuid() {
  const originUuid: string = uuidv4();
  const uuid = originUuid.replace(/-/g, "");
  return uuid;
}

export function getDefaultErrorModel() {
  return {
    msg: "",
  };
}

export function makeError(msg: string) {
  return {
    success: false,
    data: [],
    error: {
      msg,
    },
  };
}
