const express = require('express');
const router = express.Router();
const path = require('path');
const {
  nextTick
} = require('process');
const db = require('../db.js');




router.get('/', (req, res) => {
  res.render('main');
});

router.get('/main', (req, res) => {
  res.render('main');
});

router.get('/shop', (req, res) => {
  res.render('shop');
});
router.get('/notice', (req, res) => {
  res.render('notice');
});
router.get('/newNotice', (req, res) => {
  res.render('newNotice');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/contact_page', (req, res) => {
  res.render('contact_page');
});

router.get('/contact_edit', (req, res) => {
  res.render('contact_edit');
});





// router.get('/contact_edit', (req, res) => { // newmemo
//   res.render('contact_edit');
// });

router.get('/contact', (req, res) => { //getmemo
  db.applyForm((rows) => {
    res.render('contact', {
      rows: rows
    });
  })
});


router.get('/contact_write', (req, res) => {
  res.render('contact_write');
});


router.post('/writeForm', (req, res) => { //writememo
  let param = JSON.parse(JSON.stringify(req.body));
  let writer = param['writer'];
  let create_time = param['create_time']
  let textBox = param['textBox']; // html name 값을 '' 안에

  db.insertForm(writer, textBox, () => { //insertMemo
    res.redirect('contact');
  })
});





router.get('/contact_edit', (req, res) => { //updatememo
  let id = req.query.id;
  db.applyFormByid(id, (row) => { //getMemoByid
    res.render('contact_edit', {
      row: row[0]
    })
  });
})

router.post('/editForm', (req, res) => { //updatememo
  let param = JSON.parse(JSON.stringify(req.body));
  let id = param['id']; // html name 값을 '' 안에
  let textBox = param['textBox']; // html name 값을 '' 안에
  let writer = param['writer'];
  db.editForm(id, writer, textBox, () => {
    res.redirect('contact');
  })

})




router.get('/contact_page', (req, res) => {
  let id = req.query.id;
  console.log(id);
  db.applyFormByid(id, (row) => {
    res.render('contact_page', {
      row: row[0]
    })
  });
})




router.get('/deleteForm', (req, res) => {
  let id = req.query.id;
  console.log(id);
  db.deleteByid(id, () => {
    res.redirect('contact')
  })
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