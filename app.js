const express = require("express");
const mongoose = require("mongoose");
const studentRouter = require("./Routes/StudentRoute");
const departmentRouter = require("./Routes/DepartmentRoute");
// ------------ Server creation
const server = express(); // behind require("http").craeteServer()

mongoose
  .connect("mongodb://localhost:27017/cloudDB")
  .then(() => {
    console.log("DB Connected");
    server.listen(8080, () => {
      console.log(" I am listening................");
    });
  })
  .catch((error) => {
    console.log("DB Connection problem " + error);
  });

//------------------
// First MW logging values
server.use((request, response, next) => {
  console.log("Hello from first MW", request.url, request.method);
  next();
});

/***************
 * Routes
 */
server.use(express.json());

server.use(departmentRouter);
server.use(studentRouter);

// Not Found MW
server.use((request, response) => {
  response.status(404).json({ message: "Not Found" });
});

// Error MW
server.use((error, request, response, next) => {
  response.status(500).json({ Error: "Error " + error });
});
