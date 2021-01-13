// 初始化项目
// 导入express
const express = require('express');
// 导入并配置cors中间件
const cors = require('cors');
// 创建服务器实例对象
const app = express();

app.use(cors());
// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));
// 导入并注册用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)     
// 启动服务器
app.listen(3007, () => console.log('api server running at http://127.0.0.1:3007'));