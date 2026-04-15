const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ message: "healthy" });
});

app.get("/me", (req, res) => {
  res.status(200).json({
    name: "Taiwo Omobolanle",
    email: "taiwovictor510@example.com",
    github: "https://github.com/BlaqKulture"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
