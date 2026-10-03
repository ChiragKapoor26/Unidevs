const express = require('express');
const app = express()
const port = 4407

app.use("/test",
    [(req,res,next) => {
        console.log("First route runs successfully");
        // res.send("Hello Chirag and Parth from the Home page");
        next();
    },
    [(req,res,next)=> {
        console.log("Second route runs successfully");
        // res.send("Hello Chirag from 2nd route handler");
        next();
    },
    (req,res,next) => {
        console.log("Third route runs successfully");
        // res.send("Hello Chirag from 3rd route handler");
        next();
    }],
    (req,res,next) => {
        console.log("Fourth route runs successfully");
        res.send("Hello Chirag from 4th route handler");
        next();
    }]
);
app.listen(port,()=> {
    console.log(`Unidevs port listening on port ${port}`);
});