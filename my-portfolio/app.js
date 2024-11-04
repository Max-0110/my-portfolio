var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');  // 引入路由文件

var app = express();

// 设置视图引擎
app.set('views', path.join(__dirname, 'views'));  // 确保指向 views 文件夹
app.set('view engine', 'ejs');

// 使用中间件
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));  // 设置静态文件目录

// 使用路由
app.use('/', indexRouter);  // 将路由挂载到根路径

module.exports = app;