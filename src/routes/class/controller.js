const classModel = require('../../resources/class/models')

//Read all class
exports.ReadAllClass = async (ctx) => {
    await classModel.getAllClass()
        .then((rows) => {
            ctx.body = rows
        })
        .catch((err) => {
            ctx.error(err)
        })
}

//Read all class by year
exports.ReadAllClassByYear = async (ctx) => {
    await classModel.getAllClassByYear(ctx.params.year_id)
        .then((rows) => {
            ctx.body = rows
        })
        .catch((err) => {
            ctx.error(err)
        })
}

//Read all class by year and semester
exports.ReadAllClassByYearAndSemester = async (ctx) => {
    await classModel.getAllClassByYearAndSemester(ctx.params.year_id, ctx.params.semester_id)
        .then((rows) => {
            ctx.body = rows
        })
        .catch((err) => {
            ctx.error(err)
        })
}

//Create new Class by year and semester
exports.NewClassByYearAndSemester = async (ctx) => {
    await classModel.CreateNewClassByYearAndSemester(ctx, ctx.params.year_id, ctx.params.semester_id, ctx.params.teacher_id)
    ctx.body = 'success'
}

//Delete class
exports.deleteClass = async (ctx) => {
    await classModel.deleteClassById(ctx, ctx.params.class_id)
    ctx.body = 'success'
}

//Update class
exports.updateClass = async (ctx) => {
    await classModel.updateClassById(ctx, ctx.params.class_id)
    ctx.body = 'success'
}