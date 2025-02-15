const express = require("express");
const app = express();

app.use("/test", (req,res)=>{
    res.send("First Line and Description");
});

app.use("/",(req,res)=>{
    res.send("Second Line");
});

app.listen(7777,()=>{
    console.log("Server is running on port 7777");
});
