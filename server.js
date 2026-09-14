const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "crazy crash Rocket Backend is running 🚀"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "online"
  });
});

app.listen(PORT, () => {
  console.log(`crazy crash Backend running on port ${PORT}`);
});
