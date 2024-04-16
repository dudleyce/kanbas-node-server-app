//const express = require('express');
import "dotenv/config";
import session from "express-session";
import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js"
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from "./Kanbas/assignments/routes.js";
const CONNECTION_STRING =  'mongodb://127.0.0.1:27017/kanbas' || process.env.DB_CONNECTION_STRING;
const DB_NAME = "kanbas";

console.log(CONNECTION_STRING);
console.log(process.env.DB_CONNECTION_STRING);
mongoose.connect(CONNECTION_STRING).catch(error => console.error('Error connecting to MongoDB:', error.message));
//mongoose.connect(CONNECTION_STRING, { dbName: DB_NAME });
//mongoose.connect("mongodb://127.0.0.1:27017");
const app = express();
const corsOptions = {
  origin: "https://main--luxury-selkie-3211f8.netlify.app", // Ensure this matches your Netlify URL exactly.
  credentials: true, // If you're using credentials like cookies or auth headers
};

app.use(cors(corsOptions));
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.HTTP_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));





//app.use(cors({
//  credentials: true,
  // Specify only the origin without the path
//  origin: ["http://localhost:3000", "https://main--luxury-selkie-3211f8.netlify.app"]
//}));

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.HTTP_SERVER_DOMAIN,
  };
}  


app.use(process.env.PORT || express.json());
UserRoutes(app);
app.listen(4000);
Hello(app);
Lab5(app);
ModuleRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);


