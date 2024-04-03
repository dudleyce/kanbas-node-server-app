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
  // Specify only the origin without the path
  origin: ["http://localhost:3000", "https://main--luxury-selkie-3211f8.netlify.app"]
}));
app.use(express.json());
app.listen(process.env.PORT || 4000);
Hello(app);
Lab5(app);
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);


