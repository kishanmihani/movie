require("dotenv").config();

const { PORT, db_user, db_password } = require("./config");
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

// ⚠️ SRV may fail → we’ll fix below
const uri = `mongodb://${db_user}:${db_password}@ac-gporj5c-shard-00-00.jxm0ffs.mongodb.net:27017,ac-gporj5c-shard-00-01.jxm0ffs.mongodb.net:27017,ac-gporj5c-shard-00-02.jxm0ffs.mongodb.net:27017/?ssl=true&replicaSet=atlas-fvpupk-shard-0&authSource=admin&appName=Cluster0`;
const { setDB } = require("./db");
const app = express();
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth.routes");
const usersRoutes = require("./routes/user.routes");
const movieRoutes = require("./routes/movie.routes");
const planRoutes = require("./routes/plan.routes");
const paymentRoutes = require("./routes/payment.routes");
const deviceRoutes = require("./routes/device.routes");

app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/plans", planRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/devices", deviceRoutes);
app.use("/api/users", usersRoutes);

// Mongo client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
  }
});

// ✅ Correct connection function
async function connectDB() {
  try {
    await client.connect();

    const database = client.db("MovieFlex");
    setDB(database);

    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
}

connectDB();
 console.log(uri);
