/* 加载mongoose */
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
/* 连接数据库 mongod 服务器端 mongo客户端 */
var db = mongoose.connect("mongodb://housekeeper:housekeeper@localhost:27017/housekeeper",{useMongoClient:true});

/* 连接error */
db.on("error",function(error){
    console.log("数据库连接失败：" + error);
});

/* 连接success */
db.on("open",function(){
    console.log("数据库连接成功");
});

module.exports = db;