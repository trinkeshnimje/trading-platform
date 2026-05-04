require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://trading-platform-frontend-d5df.onrender.com",
    "https://trading-platform-dashboard-xxxx.onrender.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());  // ✅ ADDED
app.use("/", authRoute);  // ✅ ADDED

const {HoldingsModel} = require("./model/HoldingsModel");
const {PositionModel} = require("./model/PositionModel");
const {OrdersModel} = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Positions" });
  }
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode
  });
  newOrder.save();
  res.send("orders saved");
});

mongoose.connect(url)
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB connection error:", err);
  });