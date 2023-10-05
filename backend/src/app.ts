import express from "express";
import cors from "cors";

// import our local router file
import routes from "./routes";
// init express app
const app = express();

// Configure CORS middleware
const allowedOrigins = ['http://localhost:3000']
const corsOptions = {
    origin: allowedOrigins, // Replace with the actual origin of your frontend
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow cookies and other credentials to be included in the request
    optionsSuccessStatus: 204, // Set the status code for successful preflight requests
  };
// allow express to work with cors
// app.use(cors(corsOptions));  
// allow express to work with json
app.use(express.json());
// router
app.use(routes);
// export app to import into server.js
export default app;
