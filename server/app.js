const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const User = require("./models/user");
const { sequelize} = require("./models")
const req = require('express/lib/request')
const res = require('express/lib/response')
require('dotenv').config();
const port = process.env.PORT

//routers
const user = require("./routes/user");
const item = require("./routes/item")
const categories = require("./routes/categories")
const basket = require("./routes/basket")
const cors = require("cors");

//app
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//routes
app.use('/user',user)
app.use('/item',item)
app.use('/categories',categories)
app.use('/basket',basket)
app.use(cors());
// catch 404 and forward to error handler


app.listen({port: port}, async ()=>{
    console.log("server started http://localhost:5000");
    await sequelize.authenticate()
    console.log('db connected!!!');
})

