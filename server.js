// const http = require("http");
// const express = require("express");
// const path = require("path");
// const app = express();
// const PORT = 443;
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const cors = require('cors');
// const io = new Server(server);
// app.use(express.static(path.join(__dirname, "public")));
// app.use(cors({
//     origin: 'http://localhost:8080', // Replace with your client URL
//     methods: ['GET', 'POST']
//   }));

// io.on("connection", (socket) => {
//     console.log("A new user has connected", socket.id);
//     socket.on("message", (msg) => {
//         console.log(`Message from ${socket.id}: ${msg}`);
//         io.emit("message", msg);
//     });
//     socket.on("disconnect", () => {
//         console.log("User disconnected", socket.id);
//     });
//     socket.on("error", (error) => {
//         console.error("Socket.IO error:", error);
//     });
// });



// server.listen(PORT, () => {
//     console.log(`Server is running on ${PORT}`);
// });


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// });


const https = require("https");
const express = require("express");
const app = express();
const PORT = 443;
const server = https.createServer(app);
const cors = require('cors');
const { Server } = require("socket.io");
const io = new Server(server);;
app.use(cors({
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST']
  }));


io.on("connection", (socket) => {
    console.log("A new user has connected", socket.id);
    socket.on("message", (msg) => {
        console.log(`Message from ${socket.id}: ${msg}`);
        io.emit("message", msg);
    });
    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
    });
    socket.on("error", (error) => {
        console.error("Socket.IO error:", error);
    });
});
app.get('/',(req,res)=>{
    res.send("WS Running Successful");
})
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
