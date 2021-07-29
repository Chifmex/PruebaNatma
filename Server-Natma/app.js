//Imports
const http = require('http');

const express = require("express");
const publicacionesRoutes = require("./routes/publicaciones_routes");
// Express app creation
const app = express();
const cors = require("cors");

// Configurations
const appConfig = require("./configs/app");

app.use(express.static("public"));

// Receive parameters from the Form requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Routes
app.use("/publicaciones", publicacionesRoutes);
// App init
app.listen(appConfig.expressPort, () => {
  console.log(
    `Server is listenning on ${appConfig.expressPort}! (http://localhost:${appConfig.expressPort})`
  );
});

/*
// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send back a response and end the connection
    res.end('Hello World!\n');
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');
*/