// 封装可以连接mysql的函数

const mysql = require('mysql2');
const config = require('../config/index');

// 创建一个线程池
const pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT
});

//连接mysql
const allService = {
    query: function(sql, values) {
        //连接线程
        return new Promise((resolve, reject) => {
            pool.getConnection(function(err, connection) {
                if(err) {
                    reject(err)
                } else {
                    // 执行sql语句
                    connection.query(sql, values, (err, rows) => {
                        if(err) {
                            reject(err)
                        } else {
                            connection.release() // 释放连接
                            resolve(rows)
                        }
                    })
                }
            })
        })
    }
}

// 登录
const userLogin = (username, password) => {
    let _sql = `select * from users where username='${username}' and password='${password}';`
    return allService.query(_sql)
}

//查询
const userFound = (username) => {
    let _sql = `select * from users where username='${username}';`
    return allService.query(_sql)
}
//写入
const userInsert = (username, password, nickname) => {
    let _sql = `insert into users(username,password,nickname) values('${username}','${password}','${nickname}');`
    return allService.query(_sql)
}

//根据type查找日记列表
const findNoteListByType = (type) => {
    let _sql = `select * from note where note_type='${type}';`
    return allService.query(_sql)
}

//根据ID查找日记详情
const findNoteDetailById = (id) => {
    let _sql = `select * from note where id='${id}';`
    return allService.query(_sql)
}
// 发布
const notePublish = (values, id) => {
    let _sql = ''
    if (id) { // 有id就是修改
      _sql = `update note set userId=?,title=?,note_type=?,note_content=?,c_time=?,m_time=?,head_img=?,nickname=? where id=${id};`
    } else {
      _sql = `insert into note set userId=?,title=?,note_type=?,note_content=?,c_time=?,m_time=?,head_img=?,nickname=?;`
    }
   
    return allService.query(_sql, values)
  }

module.exports = {
    userLogin,
    userFound,
    userInsert,
    findNoteListByType,
    findNoteDetailById,
    notePublish
}