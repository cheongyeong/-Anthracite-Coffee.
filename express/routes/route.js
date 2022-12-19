const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
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
router.get('/contact_write', (req, res) => {
  res.render('contact_write');
});





router.post('/writeForm', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let writer = param['writer'];
  let textBox = param['textBox'];

  db.insertForm(writer, textBox, () => {
    res.redirect('contact');
  })
});


router.get('/contact', (req, res) => {
  db.applyForm((rows, index) => {
    res.render('contact', {
      rows: rows
    });
  })
});





router.get('/contact_edit', (req, res) => {
  let id = req.query.id;
  db.applyFormByid(id, (row) => {
    res.render('contact_edit', {
      row: row[0]
    })
  });
})



router.post('/editForm', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let id = param['id'];
  let textBox = param['textBox'];
  let writer = param['writer'];
  db.editForm(id, textBox, writer, () => {
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
  })

})

router.get('/deleteForm', (req, res) => {
  let id = req.query.id;
  console.log(id);
  db.deleteByid(id, () => {
    res.redirect('contact')
  })
});



// 썸네일 리스트 페이지 get 



router.get('/shop', (req, res) => {
  db.getShop((rows, index) => {
    res.render('shop', {
      rows: rows
    });
  })
});


const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, '../public/uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); //파일의 확장자
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); //파일명 + 날짜 + 확장자명
    }
  }),
  limits: {
    fileSize: 1024 * 1024 * 2
  } //2메가까지 업로드 가능
})

router.get('/shop_upload', (req, res) => {
  res.render('shop_upload');
})


router.post('/productW', upload.single('product_img'), (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let shopImg = 'uploads/' + req.file.filename;
  let productTitle = param['productTitle'];
  let price = param['price'];
  let infoTextFIRST = param['infoTextFIRST'];
  let infoTextSECOND = param['infoTextSECOND'];
  db.insertProduct(shopImg, productTitle, price, infoTextFIRST, infoTextSECOND, () => {
    res.redirect('shop');
  })
})









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