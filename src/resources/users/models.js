const knex = require('../../connection/mysql').getConnection()

exports.deleteById = async (ctx, id) => {
    try {
        const user = knex.select('*').from('teachers').where('teacher_id', id).first();

        if (user) {
            return await knex('teachers').del().where('teacher_id', id)
        } else {
            return ctx.response.status = 404,
                ctx.body = "Teacher not found";
        }
    } catch (error) {
        return console.error(error);
    }
}

exports.createNewUser = async (ctx) => {
    const newUser = {
        name: ctx.request.body.name,
        username: ctx.request.body.username,
        password: ctx.request.body.password,
    }

    return await knex('teachers').insert(newUser)
}

exports.logIn = async (ctx) => {
    const { username, password } = ctx.request.body
    const user = await knex('teachers').where({ username: username }).first()
    const pass = await knex('teachers').where({ username: username, password: password }).first()
    const payload = {
        username: username
    }
    return [user, pass, payload]
}
