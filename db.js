var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'us-cdbr-east-06.cleardb.net',
  user: 'b772bba59ddeb2',
  password: 'a4f115f4',
  database: 'heroku_bbc89dee32d6896',
  multipleStatements: true
});


connection.connect(function (err) {
  if (err) throw err;
  console.log("connected!")
});



function applyForm(callback) {
  connection.query("SELECT * FROM sampleboard ORDER BY id desc", (err, rows) => {
    callback(rows);
  })
};



function insertForm(writer, textBox, callback) {
  connection.query(`INSERT INTO sampleboard(writer, create_time, textBox)
  values('${writer}',NOW(),'${textBox}')`, (err) => {
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
  connection.query(`UPDATE sampleboard set create_time=now(), textBox='${textBox}', writer='${writer}' where id = ${id}`, (err) => {
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









function getShop(callback) {
  connection.query('SELECT * FROM shopupload order by id desc', (err, rows) => {
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


module.exports = {
  applyForm,
  insertForm,
  applyFormByid,
  editForm,
  deleteByid,
  getShop,
  insertProduct
};