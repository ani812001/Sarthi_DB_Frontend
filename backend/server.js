const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const companyRoutes = require("./routes/companyRoutes");
const instituteRoutes = require("./routes/instituteRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/institute", instituteRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
