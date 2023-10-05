import mongoose from "mongoose";
import app from './app'
import syncBrands  from './controllers/trusted-brands.controller'; // Import the syncBrands function
const PORT = process.env.PORT || 4000;

const mongodburi = process.env.MONGODB_URI || "";
/* Connecting to the database and then starting the server. */
mongoose
  .connect(mongodburi)
  .then(() => {
    app.listen(PORT);
    console.log(`Server is running at PORT ${PORT} 🚀`)
  })
  .catch((err) => {
    console.log(err);
  });

