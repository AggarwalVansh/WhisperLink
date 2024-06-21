const express = require("express");
const path = require("path");
const port = `8788`;

const app = express();
const server = require("http").createServer(app);

const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname + "/public")));

io.on("connection", function (socket) {
  socket.on("newuser", function (username) {
    socket.broadcast.emit("update", username + " joined the conversation");
  });

  socket.on("exituser", function (username) {
    socket.broadcast.emit("update", username + " left the conversation");
  });

  socket.on("chat", function (message) {
    socket.broadcast.emit("chat", message);
  });
});

server.listen(port);
console.log(`Your Chat App is working properly on http://localhost:${port}`);
