// const { PORT } = require("./config");
const { PORT } = require("./config");
const express = require("express");
const cors = require("cors");

// const port = parseInt(PORT) || 3000;
const authRoutes = require("./routes/auth.routes");
const movieRoutes = require("./routes/movie.routes");
const planRoutes = require("./routes/plan.routes");
const paymentRoutes = require("./routes/payment.routes");
const deviceRoutes = require("./routes/device.routes");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/plans", planRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/devices", deviceRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
