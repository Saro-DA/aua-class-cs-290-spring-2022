const express = require("express");
const app = express();

const users = [
  { id: 1, name: "Rebecca" },
  { id: 2, name: "Ani" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find((item) => item.id == req.params.id);
  console.log(user, "-- my user in console");

  if (!user) {
    res.send(404, {
      status: 404,
      message: "User not found!",
    });
    return;
  }
  res.send(user);
});

app.post("/users/create", (req, res) => {
  console.log("I'm inside Post");
  res.send("I'm inside Post!");
});

app.get("/:someting", (req, res) => {
  res.send(`I'm the ${req.params.someting}!`);
});

app.get("/", (req, res) => {
  res.send("I'm the root!");
});

// pay attention to the port the server is running on
app.listen(3030, () => {
  console.log("Server is running! 🚀");
});

// get, post, create...
