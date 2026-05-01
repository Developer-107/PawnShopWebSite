import express from "express";

const router = express.Router();

// GET all items (public)
router.get("/", async (req, res) => {
  try {
    const items = await req.db.query("SELECT * FROM items");
    const fetchedImages = await req.db.query("SELECT * FROM item_images");

    const grouped = new Map();

    // init items
    for (const item of items.rows) {
      grouped.set(item.id, {
        ...item,
        images: [],
        main_image: null,
      });
    }

    // attach images
    for (const img of fetchedImages.rows) {
      const item = grouped.get(img.item_id);
      if (!item) continue;

      item.images.push(img);

      if (img.is_main) {
        item.main_image = img.url;
      }
    }

    res.json({ list: Array.from(grouped.values()) });

  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching items");
  }
});

// GET single item
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const itemRes = await req.db.query(
      "SELECT * FROM items WHERE id=$1",
      [id]
    );

    const imagesRes = await req.db.query(
      "SELECT * FROM item_images WHERE item_id=$1",
      [id]
    );

    const item = itemRes.rows[0];

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    const images = imagesRes.rows;

    const main_image =
      images.find(img => img.is_main)?.url || null;

    res.json({
      item: {
        ...item,
        images,
        main_image,
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching item");
  }
});

export default router;
