import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const app = express();
app.all("/api/auth/*", toNodeHandler(auth));
app.use(cors());

app.use(express.json());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

app.get("/", async (req: Request, res: Response) => {
  res.send({ message: "hi" });
});

app.listen(7000, () => {
  console.log(`Better Auth app listening on port 7000`);
});

app.listen(7001, () => {
  console.log("server started on localhost:7001");
});
