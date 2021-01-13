// 导入数据库操作模块：
const db = require('../db/index')
/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */

// 注册用户的处理函数
exports.regUser = (req, res) => {
    // 获取客户端提交到服务器的用户信息
    // 接收表单数据
    const userinfo = req.body
    // 对表单中的数据进行校验,是否合法!
    if (!userinfo.username || !userinfo.password) {
        return res.send({
            status: 1,
            message: '用户名或密码不能为空！'
        })
    }
    // 定义 SQL 语句：
    const sql = `select * from ev_users where username=?`
    db.query(sql, [userinfo.username], function (err, results) {
        // 执行 SQL 语句失败
        if (err) {
            return res.send({
                status: 1,
                message: err.message
            })
        }
        // 用户名被占用
        if (results.length > 0) {
            return res.send({
                status: 1,
                message: '用户名被占用，请更换其他用户名！'
            })
        }
        // TODO: 用户名可用，继续后续流程...
    })
    res.send('reguser OK')
}

// 登录的处理函数
exports.login = (req, res) => {
    res.send('login OK')
}