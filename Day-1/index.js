import express from "express";
import userdata from "./data/data.js";
const app = express();
app.use(express.json());
const port = 8080;
//*1 Get request(fetching data from server)
app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});
//Industry standard
app.get("/api/v1/users/", (req, res) => {
  const { name } = req.query;
  if (name) {
    const user = userdata.filter((user) => {
      return user.name === name;
    });
    res.status(200).send(user);
  }
  res.status(200).send(userdata);
});
//routers parameter
app.get("/api/v1/users/:id", (req, res) => {
  const { id } = req.params;
  const parseid = parseInt(id);
  const user = userdata.find((user) => user.id === parseid);
  res.status(200).send(user);
});
//*2post request --->it is for sending data to server
app.post("/api/v1/users", (req, res) => {
  const { name, displayname } = req.body;
  const newuser = {
    id: userdata.length + 1,
    name,
    displayname,
  };
  userdata.push(newuser);

  res.send(201).send({
    message: "data created succesfully",
    data: newuser,
  });
});
//*3.put request ---->sare field ko update karta hai
app.put("/api/v1/users/:id", (req, res) => {
  //~ console.log(req.body,req.params)
  const {
    body,
    params: { id },
  } = req;
  const parseid = parseInt(id);
  const userIndex = userdata.findIndex((user) => user.id === parseid);
  if (userIndex === -1) {
    res.status(404).send("user not found");
  }
  userdata[userIndex] = {
    id: parseid,
    ...body,
  };
  res.status(201).send({ message: "user Updated", data: userdata[userIndex] });
});
//*4.patch request------>specific feild ko update karta hai
app.patch("/api/v1/users/:id", (req, res) => {
  //~ console.log(req.body,req.params)
  const {
    body,
    params: { id },
  } = req;
  const parseid = parseInt(id);
  const userIndex = userdata.findIndex((user) => user.id === parseid);
  if (userIndex === -1) {
    res.status(404).send("user not found");
  }
  userdata[userIndex] = {
    ...userdata[userIndex],
    ...body,
  };
  res.status(201).send({ message: "user Updated", data: userdata[userIndex] });
});
//*5.delete request --->handle delete request in expresss js
app.delete("/api/v1/users/:id", (req, res) => {
    const { id } = req.params;
    const parseId = parseInt(id);
  
    const userIndex = userdata.findIndex((user) => user.id === parseId);
  
    if (userIndex === -1) {
      return res.status(404).send("User not found");
    }
  
    const deletedUser = userdata.splice(userIndex, 1); // removes the user
  
    res.status(200).send({
      message: "User deleted successfully",
      deletedUser: deletedUser[0],
    });
  });
  

app.listen(port, (req, res) => {
  console.log("server is running on port-", port);
});
