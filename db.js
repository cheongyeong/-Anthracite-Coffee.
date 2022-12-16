const {
  name
} = require('ejs');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'Anthracite'
});


connection.connect(function (err) {
  if (err) throw err;
  console.log("connected!")
});



function applyForm(callback) {
  connection.query("SELECT * FROM sampleBoard ORDER BY id desc", (err, rows) => {
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
function editForm(id, writer, textBox, callback) {
  connection.query(`UPDATE sampleboard set writer='${writer}', create_time=now(), textbox='${textBox}', where id = ${id}`, (err) => {
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


module.exports = {
  applyForm,
  insertForm,
  applyFormByid,
  editForm,
  deleteByid
};