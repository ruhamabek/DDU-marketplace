import { Request, Response, NextFunction } from "express";
import axios from "axios";

interface Session {
  user?: any;
  session?: any;
}

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const pathname = req.path;

  try {
    const response = await axios.get<Session>(
      "http://localhost:7001/api/auth/get-session",
      {
        headers: {
          cookie: req.headers.cookie || "",
        },
      }
    );

    const session = response.data?.session;

    if (!session && pathname.startsWith("/dashboard")) {
      return res.redirect("/login");
    }

    if (
      session &&
      (pathname === "/login" || pathname === "/register" || pathname === "/")
    ) {
      return res.redirect("/");
    }

    next();
  } catch (error) {
    console.error("Error fetching session:", error);
    next(error);
  }
};

export default authMiddleware;
