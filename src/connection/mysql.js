const knex = require('knex')
const option = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: 'kienphu77',
        database: 'student_manager2'
    }
}

const knexConnection = knex(option)

module.exports = {
    getConnection: () => knexConnection
}