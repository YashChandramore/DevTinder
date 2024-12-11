const express = require("express");
const app = express();

app.use("/test",(req,res)=>{
    res.send("test from the server ");
});

app.use("/hello",(req,res)=>{
    res.send("Hello jii from the server ");
});

app.listen(3000,()=>{
    console.log("Serveris listening at 3000 ");
});