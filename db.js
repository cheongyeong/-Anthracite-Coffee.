var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'database-1.cq9sxzrqavcn.ap-northeast-2.rds.amazonaws.com',
  user: 'root',
  password: 'cjsrud1004-',
  database: 'anthracite',
  dateStrings: 'date',
  multipleStatements: true
});


connection.connect(function (err) {
  if (err) throw err;
  console.log("connected!")
});


// 두개 테이블 데려고기 
// function applyForm(callback) {
//   connection.query("SELECT * FROM sampleboard ORDER BY id desc;"+"SELECT * FROM sampleboard ORDER BY id desc;", (err, rows) => {
//     let rows0 = rows[0]
//     let rows1 = rows[1]
//     if (err) throw err;
//     callback(rows0, rows1);
//   })
// };


function applyForm(callback) {
  connection.query("SELECT * FROM sampleboard ORDER BY id desc;", (err, rows) => {
    callback(rows);
  })
};



function insertForm(writer, textBox, callback) {
  connection.query(`INSERT INTO sampleboard(writer, create_time, textBox)
  values('${writer}',now(),'${textBox}')`, (err) => {
    if (err) throw err;
    callback();
  })
};


function applyFormByid(id, callback) {
  connection.query(`select * from sampleboard where id=${id}`, (err, row) => {
    if (err) throw err;
    callback(row);
  }) // table 안에 특정값만 불러오고 싶으면 () 안에 작성 
}


// id가 일치하는 부분을 수정하는 함수
function editForm(id, textBox, writer, callback) {
  connection.query(`UPDATE sampleboard set create_time=now(),
  textBox='${textBox}', writer='${writer}' where id = ${id}`, (err) => {
    if (err) throw err;
    callback();

  })
}

function deleteByid(id, callback) {
  connection.query(`DELETE from sampleboard where id = ${id}`, (err) => {
    if (err) throw err;
    callback();
  })

}



//썸네일 리스트 // 





function getShop(callback) {
  connection.query('SELECT * FROM shopupload order by id desc', (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  })
};

function insertProduct(shopImg, productTitle, price, infoTextFIRST, infoTextSECOND, callback) {
  connection.query(`INSERT INTO shopupload(shopImg,productTitle,price,infoTextFIRST,infoTextSECOND,create_time)
    values('${shopImg}','${productTitle}','${price}','${infoTextFIRST}','${infoTextSECOND}',NOW())`, (err) => {
    if (err) throw err;
    callback();
  })
}

function getShopByid(id, callback) {
  connection.query(`select * from shopupload where id=${id}`, (err, row) => {
    if (err) throw err;
    callback(row);
  }) // table 안에 특정값만 불러오고 싶으면 () 안에 작성 
}

function editShop(id, shopImg, productTitle, price, infoTextFIRST, infoTextSECOND, callback) {
  connection.query(`UPDATE shopupload set shopImg='${shopImg}', productTitle='${productTitle}', price='${price}',
  infoTextFIRST='${infoTextFIRST}', infoTextSECOND='${infoTextSECOND}' where id = ${id}`, (err) => {
    if (err) throw err;
    callback();

  })
}

function deleteShopByid(id, callback) {
  connection.query(`DELETE from shopupload where id = ${id}`, (err) => {
    if (err) throw err;
    callback();
  })

}



module.exports = {
  applyForm,
  insertForm,
  applyFormByid,
  editForm,
  deleteByid,
  getShop,
  insertProduct,
  getShopByid,
  editShop,
  deleteShopByid
};