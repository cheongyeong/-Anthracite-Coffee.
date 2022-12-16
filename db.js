var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'anthracite'
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

// function insertProduct(img, name, price, callback) {
//   connection.query(`INSERT INTO prduct1(create_time,img,name,price) values(NOW(),'${img}','${name}',${price})`, (err) => {
//     if (err) throw err;
//     callback();
//   })
// }


module.exports = {
  applyForm,
  insertForm,
  applyFormByid,
  editForm,
  deleteByid
};