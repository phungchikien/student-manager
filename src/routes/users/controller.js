const jwt = require('jsonwebtoken')
const userModel = require('../../resources/users/models')
//thêm user
exports.newUser = async ctx => {
    await userModel.createNewUser(ctx)
    ctx.body = 'success'

};

//Xóa user
exports.deleteUser = async (ctx) => {
    await userModel.deleteById(ctx, ctx.params.id)
    ctx.body = "success"
};


//Đăng nhập
exports.logInController = async (ctx) => {
    const [userCheck, passwordCheck, payload] = await userModel.logIn(ctx)
    const hardCodeToken = 'kien'
    if (!userCheck) {
        ctx.response.status = 401;
        ctx.body = { error: 'Sai Username ' };
        return;
    }


    if (!passwordCheck) {
        ctx.response.status = 401;
        ctx.body = { error: 'Sai Password ' };
        return;
    }

    const token = jwt.sign(payload, hardCodeToken);

    return ctx.body = token;
}



