module.exports = app =>{

    const mongoose = require("mongoose")

    //连接本地数据库node-vue-moba
    mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba',{
        useNewUrlParser: true
    })
}