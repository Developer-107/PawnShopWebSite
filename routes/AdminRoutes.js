import express from "express";
import { protect } from "../middlewares/Middleware.js"

const router = express.Router();

// GET all items (admin view)
router.get("/items", async (req, res) => {
  try {
    const result = await req.db.query("SELECT * FROM items");

    res.json({ list: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching items");
  }
});

// CREATE item
router.post("/items", protect, async (req, res) => {
  try {
    const { brand, model, state, priceSale, priceBefore, imageUrls, mobNumber, type } =
      req.body;

    if (
      !brand ||
      !model ||
      !state ||
      !priceSale ||
      !priceBefore ||
      !imageUrls ||
      !mobNumber ||
      !type
    ) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const result = await req.db.query(
      "INSERT INTO items (brand, model, state, pricesale, pricebefore, type, mobnumber) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [brand, model, state, priceSale, priceBefore, type, mobNumber],
    );
    
    const item = result.rows[0];

    if (imageUrls && imageUrls.length > 0) {
      for (let i = 0; i < imageUrls.length; i++) {
        await req.db.query(
          "INSERT INTO item_images (item_id, url, is_main) VALUES ($1,$2,$3)",
          [item.id, imageUrls[i], i === 0]
        );
      }
    }

    res.status(201).json({
      message: "Created",
      item: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating item");
  }
});

// UPDATE item
router.put("/items/:id", protect, async (req, res) => {

  try {
    const { id } = req.params;

    const {
      brand,
      model,
      state,
      priceSale,
      priceBefore,
      mobNumber,
      imageUrls,
      type,
    } = req.body;

    

    if (
      !brand ||
      !model ||
      !state ||
      !priceSale ||
      !priceBefore ||
      !imageUrls ||
      !mobNumber ||
      !type
    ) {
      return res.status(400).json({ error: "Missing fields" });
     
    }

    // 1. update item
    const result = await req.db.query(
      `UPDATE items 
       SET brand=$1, model=$2, state=$3, pricesale=$4, pricebefore=$5, type=$6, mobnumber=$7 
       WHERE id=$8 
       RETURNING *`,
      [brand, model, state, priceSale, priceBefore, type, mobNumber, id]
    );

    // 2. delete old images
    await req.db.query(
      "DELETE FROM item_images WHERE item_id=$1",
      [id]
    );

    // 3. insert new images
    for (let i = 0; i < imageUrls.length; i++) {
      await req.db.query(
        "INSERT INTO item_images (item_id, url, is_main) VALUES ($1,$2,$3)",
        [id, imageUrls[i], i === 0]
      );
    }

    res.json({
      message: "Updated",
      item: result.rows[0],
    });

  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating item");
  }
});

// DELETE item
router.delete("/items/:id", protect, async (req, res) => {
  try {
    const { id } = req.params;

    // delete images first
    await req.db.query(
      "DELETE FROM item_images WHERE item_id=$1",
      [id]
    );

    // delete item
    await req.db.query(
      "DELETE FROM items WHERE id=$1",
      [id]
    );

    res.json({ message: "Deleted" });

  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting item");
  }
});

export default router;
