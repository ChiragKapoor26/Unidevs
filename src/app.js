const express = require('express');
const app = express()
const port = 4407
const {adminAuth,userAuth}= require('./middlewares/auth');
app.use('/admin',adminAuth);
app.get('/admin/getAll',(req,res)=> {
    res.send("All data fetched");
});
app.get('/admin/deleteUser',(req,res) => {
    res.send("All data deleted");
});
app.use('/user/login',(req,res) => {
    res.send("User login successfully");
})
app.use('/user',userAuth);
app.get('/user/getuserdata',(req,res) => {
    res.send("all user data fetched");
});
app.get('/user/delete-data',(req,res) => {
    res.send("user all data deleted");
})
app.listen(port,()=> {
    console.log(`Unidevs port listening on port ${port}`);
});