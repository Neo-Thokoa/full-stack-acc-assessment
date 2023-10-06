# Neo Thokoa full-stack-acc-assessment

## Description

This project is a full-stack web application with a Node.js backend written in TypeScript using Express.js as an API server, Docker for containerization, and MongoDB as the database. The frontend is developed using React.js and CSS. 

## Backend Details

Details of files used

### Server.ts

Connects to a MongoDB database using Mongoose and starts a server using Express.

Example Usage:
```typescript
import mongoose from "mongoose";
import app from './app'
import syncBrands  from './controllers/trusted-brands.controller'; // Import the syncBrands function
const PORT = process.env.PORT || 4000;

const mongodburi = process.env.MONGODB_URI || "";
console.log("MongoURI->", mongodburi);

mongoose
  .connect(mongodburi)
  .then(() => {
    app.listen(PORT);
    console.log(`Server is running at PORT ${PORT} 🚀`)
  })
  .catch((err) => {
    console.log(err);
  });
```

Inputs:
- `mongoose`: The Mongoose library for MongoDB.
- `app`: The Express application.
- `syncBrands`: The function imported from the `trusted-brands.controller` file.
- `PORT`: The port number for the server.
- `mongodburi`: The MongoDB connection URI.

Outputs:
- The server starts running at the specified `PORT`.
- A success message is logged to the console.
"""

### routes.ts

Imports the 'globalRoute' and 'trustedBrand' modules from their respective files and exports an array of routes.

Example Usage:
```typescript

// Use the routes array
app.use(routes)
```

Inputs:
- None

Outputs:
- The 'routes' array, which contains the routes defined in the 'global' and 'trusted-brands.route' files.

### app.ts

Creates and configures an Express app with CORS middleware and routing.

Example Usage:
```typescript
import express from "express";
import cors from "cors";
import routes from "./routes";

const app = createApp();
```

Inputs:
- `express`: The Express module imported from the "express" package.
- `cors`: The CORS module imported from the "cors" package.
- `routes`: The routes module imported from the "./routes" file.

Outputs:
- An instance of the Express app with CORS middleware and routing configured.
