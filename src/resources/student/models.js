const knex = require('../../connection/mysql').getConnection()

//Create new student by class
exports.createNewStudent = async (ctx, id) => {
    const newStudent = {
        student_name: ctx.request.body.student_name,
        class_id: id
    }
    return await knex('students').insert(newStudent)
}

//Delete student by class
exports.deleteStudent = async (ctx, student_id) => {
    try {
        const student = knex('students').where('student_id', student_id)
        if (student) {
            return await knex('students').del().where('student_id', student_id)
        } else {
            ctx.response.status = 404
            ctx.body = "Student not found"
        }
    }
    catch (error) {
        console.error(error);
    }
}

//Update student information
exports.updateStudent = async (ctx, student_id) => {
    try {
        const result = await knex('students').where('student_id', student_id).update({
            student_name: ctx.request.body.student_name,
            class_id: ctx.request.body.class_id
        })
    }
    catch (error) {
        console.error(error);
    }
}

//Read student from database
exports.readStudent = async (ctx) => {
    return await knex.select('*').from('students')
}

//Read data of student via id 
exports.readStudentById = async (ctx, id) => {
    return await knex.select('*').from('students').where('student_id', id)
}

//Read student by class
exports.readStudentByClass = async (ctx, id) => {
    return await knex.select('*').from('students').where('class_id', id)
}