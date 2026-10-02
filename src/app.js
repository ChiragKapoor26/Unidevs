const express = require('express');
const app = express()
const port = 4407

app.get("/",(req,res) => {
    res.send("Hello Chirag and Parth from the Home page");
});
app.get("/test",(req,res) => {
    res.send("Hello Chirag and Parth from the Test page");
});
app.post("/test",(req,res) => {
    res.send({"firstName":"Chirag Kapoor","Occupation":"software Engineer"
    });
});
app.delete("/test",(req,res) => {
    res.send("Data deleted successfully");
});
app.get("/user",(req,res) => {
    res.send("Hello Chirag and Parth from the User page");
});
app.listen(port,()=> {
    console.log(`Unidevs port listening on port ${port}`);
});