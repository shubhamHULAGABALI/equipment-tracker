const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// GET all equipment
app.get("/api/equipment", (req, res) => {
  db.all("SELECT * FROM equipment", [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

// ADD equipment
app.post("/api/equipment", (req, res) => {
  const { name, type, status, lastCleaned } = req.body;

  db.run(
    "INSERT INTO equipment (name, type, status, lastCleaned) VALUES (?, ?, ?, ?)",
    [name, type, status, lastCleaned],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ id: this.lastID });
    }
  );
});

// UPDATE equipment
app.put("/api/equipment/:id", (req, res) => {
  const { name, type, status, lastCleaned } = req.body;

  db.run(
    "UPDATE equipment SET name=?, type=?, status=?, lastCleaned=? WHERE id=?",
    [name, type, status, lastCleaned, req.params.id],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Updated" });
    }
  );
});

// DELETE equipment
app.delete("/api/equipment/:id", (req, res) => {
  db.run(
    "DELETE FROM equipment WHERE id=?",
    req.params.id,
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Deleted" });
    }
  );
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
