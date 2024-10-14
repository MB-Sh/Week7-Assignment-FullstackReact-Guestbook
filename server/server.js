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

app.get("/locations", async (req, res) => {
  try {
    //write a sql query to get the biscuit name and descriptions from the db
    const locationsData = await db.query(
      `SELECT title, description, travel_tip, image_src
      FROM locations;
    `);
    //we parse the response into json
    console.log(locationsData);
   
    res.status(200).json(locationsData.rows);
  } catch (error) {
    //our server will give us this error, if there is a problem with the code in try
    console.error("This is a fatal error! How dramatic!", error);
    res.status(500).json({ success: false });
  }
});


app.get("/locations-categories", async (req, res) => {
  try {
    const locationsData = await db.query(`
      SELECT locations.title, locations.description, locations.travel_tip, locations.image_src, categories.catergory_name 
      FROM locations
      JOIN locations_categories ON locations_categories.location_id = locations.id
      JOIN categories ON locations_categories.category_id = categories.id;
    `);
    res.status(200).json(locationsData.rows);
  } catch (error) {
    console.error("Error fetching locations with categories!", error);
    res.status(500).json({ success: false });
  }
});


app.post("/add-location", async (req, res) => {
  try {
    const { title, description, travel_tip, image_src, category_id } = req.body;

    // adding new location into the locations table
    const newLocation = await db.query(
      `INSERT INTO locations (title, description, travel_tip, image_src)
       VALUES ($1, $2, $3, $4)RETURNING *;`,
      [title, description, travel_tip, image_src]
    );
    const location_id = newLocation.rows[0].id;

    // Linking my new location to a category in locations_categories table
    await db.query(
      `INSERT INTO locations_categories (location_id, category_id)
       VALUES ($1, $2);`,
      [location_id, category_id]
    );

    res.status(200).json(newLocation.rows[0]);
  } catch (error) {
    console.error("Error adding new location!", error);
    res.status(500).json({ success: false });
  }
});

app.delete("/delete-location/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // delete the junction first, the the location
    await db.query(`DELETE FROM locations_categories WHERE location_id = $1;`, [id]);

    const deleteLocation = await db.query(`DELETE FROM locations WHERE id = $1 RETURNING *;`, [id]);

    res.status(200).json(deleteLocation.rows[0]);
  } catch (error) {
    console.error("Error deleting location!", error);
    res.status(500).json({ success: false });
  }
});