const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "MGI_Alfan",
});

const Model = mongoose.model("Users", {
  nama: String,
  hobi: String,
  alamat: String,
  nomor_telp: String,
});

app.post("/create", async (req, res) => {
  try {
    const newItem = await Model.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/read", async (req, res) => {
  try {
    const items = await Model.find({});
    console.log(items);
    res.json(items);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

app.patch("/update/:id", async (req, res) => {
  try {
    const item = await Model.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: "Item not found" });
    }
    if (req.body.nama != null) {
      item.nama = req.body.nama;
    }
    if (req.body.hobi != null) {
      item.hobi = req.body.hobi;
    }
    if (req.body.alamat != null) {
      item.alamat = req.body.alamat;
    }
    if (req.body.nomor_telp != null) {
      item.nomor_telp = req.body.nomor_telp;
    }
    const updatedItem = await item.save();
    return res.status(200).json({message: "User updated"},updatedItem);
    
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const deletedItem = await Model.findOneAndDelete(req.params.id);
    if (deletedItem == null) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
