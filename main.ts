import express, { Express, Request, Response } from "express";
import dataApi from "./src/api";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Api Server Start");
});

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});

app.use(express.json());
app.use("/data", dataApi);
