const express = require('express');
const router = express.Router();
const path = require('path');
const {
  nextTick
} = require('process');




router.get('/', (req, res) => {
  res.render('main');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});
router.get('/contact_page', (req, res) => {
  res.render('contact_page');
});

router.get('/contact_write', (req, res) => {
  res.render('contact_write');
});

router.post('/contact_page', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let writer = param['writer'];
  let textBox = param['textBox'];
  console.log(writer);
  console.log(textBox);
  res.render('contact_page.ejs', {
    'data': param
  });
});

router.get('/contact_edit', (req, res) => {
  res.render('contact_edit');
});



router.get('/join', (req, res) => {
  res.render('join');
});

router.post('/join', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let name = param['my_name'];
  let id = param['my_id'];
  let pw = param['my_pw'];
  let pw_check = param['my_pwCheck'];
  let email = param['my_mail'];
  let phone = param['my_number'];
  // let adress = param['my_adress'];
  console.log(name);
  console.log(id);
  console.log(pw);
  console.log(pw_check);
  console.log(email);
  console.log(phone);
  // console.log(adress);
});

router.get('/login', (req, res) => {
  res.render('login');
});



module.exports = router;