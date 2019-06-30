//引入express模块
const express = require('express');

//创建app应用对象
const app = express();

//验证服务器有效性
app.use((req,res,next) => {
    //查看微信服务器的提交参数
    console.log(req.query);
})

//监听端口号
app.listen(3000,() => {
    console.log('-- Server start --')
})