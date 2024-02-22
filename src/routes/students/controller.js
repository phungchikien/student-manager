const studentModels = require('../../resources/student/models')
//Create new student by class
exports.createStudent = async (ctx) => {
    await studentModels.createNewStudent(ctx, ctx.params.class_id)
    ctx.body = "success"
}

//Delete student
exports.deleteStudentById = async (ctx) => {
    await studentModels.deleteStudent(ctx, ctx.params.student_id)
    ctx.body = "success"
}

//Update student
exports.updateStudentById = async (ctx) => {
    await studentModels.updateStudent(ctx, ctx.params.student_id)
    ctx.body = "success"

}

//Read student from database
exports.getStudent = async (ctx) => {
    await studentModels.readStudent(ctx)
        .then((rows) => {
            return ctx.body = rows
        })
        .catch((err) => {
            return ctx.error(err)
        })
}

//Read data of student via id 
exports.getStudentById = async (ctx) => {
    await studentModels.readStudentById(ctx, ctx.params.student_id)
        .then((rows) => {
            return ctx.body = rows
        })
        .catch((err) => {
            return ctx.error(err)
        })
}

//Read student data by class
exports.getStudentByClass = async (ctx) => {
    await studentModels.readStudentByClass(ctx, ctx.params.class_id)
        .then((rows) => {
            return ctx.body = rows
        })
        .catch((err) => {
            return ctx.error(err)
        })
}