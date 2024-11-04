var express = require('express');
var router = express.Router();

// 首页路由
router.get('/', function(req, res, next) {
  console.log('主页路由被访问');
  res.render('index', { title: '主页' });
});

// 关于我页面路由
router.get('/about', function(req, res, next) {
  console.log('关于我页面路由被访问');
  res.render('about', { title: '关于我' });
});

// 项目页面路由
router.get('/projects', function(req, res, next) {
  console.log('项目页面路由被访问');
  res.render('projects', { title: '项目' });
});

// 服务页面路
router.get('/services', function(req, res, next) {
  console.log('服务页面路由被访问');
  res.render('services', { title: '服务' });
});

// 联系我页面路由
router.get('/contact', function(req, res, next) {
  console.log('联系我页面路由被访问');
  res.render('contact', { title: '联系我' });
});

module.exports = router;