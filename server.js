require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const subscribersRouter = require("./routes/subscribers");
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.use("/subscribers", subscribersRouter);
app.listen(5000, () => console.log(" Server started"));
