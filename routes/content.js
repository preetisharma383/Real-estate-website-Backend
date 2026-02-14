const express = require("express");
const router = express.Router();
const Content = require("../models/Content");

// GET Content
router.get("/", async (req, res) => {
  try {
    const content = await Content.findOne(); // Get the first document
    res.json(content);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// POST (Update) Content
router.post("/", async (req, res) => {
  try {
    // findOneAndUpdate with "upsert: true" means: 
    // If it exists, update it. If not, create it.
   const updatedContent = await Content.findOneAndUpdate(
  {}, 
  req.body, 
  { returnDocument: 'after', upsert: true } // New way
);
    res.json(updatedContent);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to update database");
  }
});

module.exports = router;