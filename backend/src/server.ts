import mongoose from "mongoose";
import app from './app'
import { seedDatabase } from './dbSeeder'; // Import the seeder function
const PORT = process.env.PORT || 4000;

const mongodburi = process.env.MONGODB_URI || "";
console.log("MongoURI->", mongodburi);
/* Connecting to the database and then starting the server. */
mongoose
  .connect(mongodburi)
  .then(() => {
    seedDatabase(); // Seed the database
    app.listen(PORT);
    console.log(`Server is running at PORT ${PORT} 🚀`)
  })
  .catch((err) => {
    console.log(err);
  });

