//npm으로 설치한 애들을 연결해주면 됩니다. 
const express = require("express");
const cookieParser = require('cookie-parser')
const expressLayout = require('express-ejs-layouts')
const routers = require('./routes/route');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());


app.set('views', path.join(__dirname,'views'));   // views 폴더안에 애들의 경로를 잡아준다. 
app.set('view engine','ejs');

app.use(expressLayout);
app.use('/',routers);

app.use(express.static(path.join(__dirname,'public')));  





module.exports = app;  