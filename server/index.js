const express = require("express")
const app = express()

app.use(require('cors')())
app.use(express.json())


//这里返回的是一个方法，然后将app给他，即将这里实例的app传送到routers/admin下的index.js，让其使用
//app使用下面这些外部的函数，减少此文件的内容
require('./plugins/db')(app)
require('./routers/admin/index')(app)



app.listen(3000, () => {
    console.log('http://localhost:3000');
});