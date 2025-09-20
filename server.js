import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { Pool } from "pg";
import dotenv from "dotenv";



dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

const client = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // needed on Railway
});


client.connect()
  .then(() => console.log("DB connected!"))
  .catch(err => console.error("DB connection error:", err));




app.use(express.json());


app.get("/api/items", async (req, res) => {

try{

    const result = await client.query( "SELECT * FROM items");

    res.json({
            list: result.rows
    }) 

    } catch (err) {
     console.error(err);
    res.status(500).send("Error fetching items");
    }

});
 

app.get("/api/item/:id", async (req, res) => {



try{
    const id = req.params.id;

    const result = await client.query( "SELECT * FROM items WHERE id=$1", [id]);
    console.log(result)

    res.json({
        item: result.rows[0]
    })


} catch (err) {
    console.log(err);
res.status(500).send("Error fetching items")
}

});
















// Serve static files from Vite build
app.use(express.static(path.join(__dirname, "dist")));

// Return index.html for all other routes
app.get(/^\/.*$/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});