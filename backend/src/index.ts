import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const app = express();
const PORT = 7000; // Run everything on a single port

app.use(cors());
app.use(express.json());

// Mount Better Auth
app.all("/api/auth/*", toNodeHandler(auth));

// Your other backend routes
app.get("/health", (req: Request, res: Response) => {
  res.send({ message: "Backend server health OK!" });
});

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Welcome to the backend API" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
