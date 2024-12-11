const express = require("express");
const app = express();

// app.use("/",(req,res)=>{
//     res.send("Hello , Dashboard here ");
// });

app.get("/user",(req,res)=>{
    res.send({firstname:"yash", lastname:"chandramore"});
})

app.post("/user",(req,res)=>{
    res.send("data sent successfully");
})

app.use("/test",(req,res)=>{
    res.send("test from the server ");
});

app.use("/hello",(req,res)=>{
    res.send("Hello jii from the server ");
});



app.listen(3000,()=>{
    console.log("Serveris listening at 3000 ");
});