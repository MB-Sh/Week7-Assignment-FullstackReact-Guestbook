//my imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";


//initialise express
const app = express();

//tell express to use json
app.use(express.json());

//tell express to use cors
app.use(cors());

//configure dotenv file
dotenv.config();

//set up our db using the connection string from supabase and the pg package
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({ connectionString: dbConnectionString });

//set up a PORT for our server to listen to
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});

//write an endpoint for our root route --> we use the GET method to read data
app.get("/", (req, res) => {
  res.json({
    message: "You are looking at my root route",
  });
});