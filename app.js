import express from "express";
import { readFile } from "fs/promises";

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

const jsonData = "./data/db.json";

const loadData = async () => {
  return JSON.parse(await readFile(jsonData, "utf8"));
};

app.get(["/users", "/"], function (req, res) {
  loadData().then((data) => {
    const users = data.users;
    res.render("index", { users, title: "List of users" });
  });
});

app.get("/users/male", function (req, res) {
  loadData().then(() => {
    const users = data.users.filter((u) => u.gender === "male");
    res.render("index", { users, title: "List of male users" });
  });
});

app.get("/users/female", function (req, res) {
  db.read().then(() => {
    const users = data.users.filter((u) => u.gender === "female");
    res.render("index", { users, title: "List of female users" });
  });
});

app.get("/users/under30", function (req, res) {
  loadData().then(() => {
    const users = data.users.filter((u) => u.age < 30);
    res.render("index", { users, title: "List of under 30 users" });
  });
});

app.get("/users/over30", function (req, res) {
  loadData().then(() => {
    const users = data.users.filter((u) => u.age > 30);
    res.render("index", { users, title: "List of over 30 users" });
  });
});

app.get("/users/:id", function (req, res) {
  loadData().then(() => {
    const user = data.users.find((u) => u.id === parseInt(req.params.id));
    res.render("show_user", {
      user,
      title: `Details of user ${user.firstName} ${user.lastName} (#${user.id})`,
    });
  });
});

app.get("/users/:id/posts", function (req, res) {
  loadData().then(() => {
    const user = data.users.find((u) => u.id === parseInt(req.params.id));
    const posts = data.posts.filter((p) => p.userId === user.id);
    res.render("posts", {
      posts,
      title: `Posts of user ${user.firstName} ${user.lastName} (#${user.id})`,
    });
  });
});

export default app;
