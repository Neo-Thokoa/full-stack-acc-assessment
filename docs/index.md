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

### trusted-brands.route.ts


Imports the necessary modules and defines the routes for two API endpoints in an Express.js application.

Example Usage:
```typescript
import express from "express";
import trustedBrandsControllers from "../controllers/trusted-brands.controller";

const router = express.Router();

router.get("/api/getbrands", trustedBrandsControllers.getTrustedBrands);
router.get("/api/syncbrands", trustedBrandsControllers.syncBrands);

export default router;
```

Inputs:
- express: The Express.js framework module.
- trustedBrandsControllers: An object containing the controller methods for handling the "/api/getbrands" and "/api/syncbrands" routes.

Outputs:
- router: The Express.js router instance that contains the defined routes for the "/api/getbrands" and "/api/syncbrands" endpoints.

### trusted-brands.model.ts

Defines a Mongoose schema for a collection called "TrustedBrands".

Example Usage:
```typescript
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const trustedBrandsSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date
  },
  title: {
    type: String,
    required: true,
  },
});

export default mongoose.model('TrustedBrands', trustedBrandsSchema);
```

Inputs:
- `mongoose`: The Mongoose library for MongoDB.
- `Schema`: The schema class provided by Mongoose.

Outputs:
- A Mongoose schema object that defines the structure of the "TrustedBrands" collection in MongoDB.

### trusted-brands.controller.ts

This module exports two functions: `getTrustedBrands` and `syncBrands`. The `getTrustedBrands` function retrieves a list of trusted brands from a MongoDB database based on a filter, while the `syncBrands` function inserts default brand data into the MongoDB database.

Example Usage:
```typescript
// Retrieve trusted brands with a specific published date
getTrustedBrands({ query: { publishedDate: '2022-01-01' } }, response);

// Insert default brand data into the database
syncBrands(request, response);
```

Inputs:
- `req: any` - The request object containing the query parameters.
- `res: any` - The response object used to send the HTTP response.

Outputs:
- If the 'publishedDate' is invalid, a 400 response with an error message is returned.
- If no trusted brands are found, a 404 response with an error message is returned.
- If the trusted brands are successfully retrieved, a 200 response with the list of trusted brands is returned.
- If an error occurs, a 500 response with an error message is returned.

"""

## Front-End
