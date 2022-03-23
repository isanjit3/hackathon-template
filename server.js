const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000 || process.env.PORT;
const mongoose = require("mongoose");
const MONGO_URI = "mongodb://localhost:27017/hackathon_template";
const User = require('./models/user');

// setting view engine to ejs
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// index page
app.get("/", async (req, res) => {
  //await addUser();
  res.render("index");
});

// page
app.get("/data-display", async (req, res) => {
  const users = await User.find({})
  res.render("data_display", {users})
});

// Connecting to MongoDB
mongoose.connection.on("connecting", () => {
  console.log(`Connecting to Mongo at ${MONGO_URI}`);
});

mongoose.connection.on("connected", () => {
  console.log("Mongo connection established");
});

mongoose.connection.on("error", (error) => {
  console.log.error("Mongo connection error", error);
});

try {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (error) {
  console.log(`Mongo connection error: ${error}`);
}

async function addUser() {
    const user = new User(
        {
            username: 'JohnDoe',
            firstname: 'John',
            lastname: 'Doe',
        }
    )

    const createdUser = await user.save();
}

// listening to application at http://localhost:3000/
app.listen(PORT, () => {
  console.log(`Hackathon Template listening at port: ${PORT}`);
});
