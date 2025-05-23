const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Updated user schema with 'code'
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,    // authority or patient
  code: String,    // Authority code or Patient ID/DOB
  age: Number
});

const User = mongoose.model("User", userSchema);

app.post("/register/:role", async (req, res) => {
  try {
    const { role } = req.params;
    const { name, email, password, code } = req.body;
    if (!name || !email || !password || !code) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = new User({ name, email, password, role, code });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch(err => console.log(err));
