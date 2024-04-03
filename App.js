//const express = require('express');
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js"
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from "./Kanbas/assignments/routes.js";

const app = express();
app.use(cors({
    credentials: true,
    origin: [process.env.FRONTEND_URL, "http://localhost:3000"]
  }));
app.use(express.json());
app.listen(process.env.PORT || 4000);
Hello(app);
Lab5(app);
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);


