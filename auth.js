const { accessToken } = require('./src/routes/users/controller')
const hardCodeToken = 'kien'
const jwt = require('jsonwebtoken');


exports.authToken = (ctx, next) => {
    //Lấy thông tin field authorization trên header
    const authorizationHeader = ctx.request.headers['authorization']
    console.log(authorizationHeader)
    //Kiểm tra tiền tố chuỗi authorization có chứa tiền tố Bearer phía trước không 
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        ctx.response.status = 403
        ctx.body = 'Unauthorized - Missing or Invalid Token'
        return
    }

    // Nếu thành công, loại bỏ tiền tố Bearer (chỉ lấy token)
    const token = authorizationHeader.split(' ')[1]
    console.log(token)
    //Giải mã token
    try {
        const decoded = jwt.verify(token, hardCodeToken)
        ctx.state.user = decoded
        return next();
    } catch (error) {
        ctx.response.status = 401
        ctx.body = 'Unauthorized - Invalid Token or Token Expired'
    }

}

