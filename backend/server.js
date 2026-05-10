const express = require("express");
const cors = require("cors");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* Routes */
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

/* Test */
app.get("/", (req, res) => {
  res.send("Backend Running");
});

/* Server */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
