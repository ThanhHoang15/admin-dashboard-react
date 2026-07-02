import express from "express";            // create backend server/routes
import mongoose from "mongoose";          // connect to MongoDB
import cors from "cors";                  // allow React frontend to call backend
import dotenv from "dotenv";              // read .env file

dotenv.config();                          // load MONGO_URL and PORT from .env

const app = express();                    // create Express app

app.use(cors());                          // allow frontend requests
app.use(express.json());                  // allow backend to read JSON body

app.get("/", (req, res) => {              // GET route for homepage
  res.send("Backend is running");         // response shown in browser
});

mongoose.connect(process.env.MONGO_URL)    // connect to MongoDB using .env URL
  .then(() => {                           // if MongoDB connects successfully
    console.log("MongoDB connected");     // print success message

    app.listen(process.env.PORT || 8800, () => {                          // start backend server
      console.log(`Server running on port ${process.env.PORT || 8800}`); // print port
    });
  })
  .catch((err) => {                       // if MongoDB connection fails
    console.log(err);                     // print error
  });