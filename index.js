const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
 const path = require("path");
 // app.set("view-engine" , "ejs");
  // app.set("views", path.join(__dirname,"views"));

  app.use(express.static(path.join(__dirname)));
  app.use(express.urlencoded({extended:true}));

    app.get("/",(req,res)=>{
        res.redirect("main.html");
    });
    app.get("/page2.html",(req,res)=>{
        res.redirect("page2.html");
    });

    
     app.listen(3000, ()=>{
        console.log("Server is running on port number 3000");
     })

     app.post("/post",(req,res)=>{
        console.log(req.body);
        res.redirect("page3.html");
           
     });

     

    app.post("/login",(req,res)=>{
        console.log(req.body);
        res.redirect("main.html");
           
     });

     app.get("/loginpage.html.html",(req,res)=>{
        res.redirect("loginpage.html");
    });
