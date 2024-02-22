const semesterModel = require('../../resources/semesters/models')

//Create new semester
exports.newSemester = async (ctx) => {
    await semesterModel.createNewSemester(ctx)
    ctx.body = 'success'
}

//Delete semester
exports.deleteSemesterById = async (ctx) => {
    await semesterModel.deleteSemester(ctx, ctx.params.semester_id)
    ctx.body = 'success'
}

//Update semester
exports.updateSemesterById = async (ctx) => {
    await semesterModel.updateSemester(ctx, ctx.params.semester_id)
    ctx.body = 'success'
}
//Read all semester
exports.ReadAllSemester = async (ctx) => {
    await semesterModel.getAllSemester()
        .then((rows) => {
            ctx.body = rows
        })
        .catch((err) => {
            ctx.error(err)
        })
}

//Read all semester by year
exports.ReadAllSemesterByYear = async (ctx) => {
    await semesterModel.getAllSemesterByYear(ctx.params.year_id)
        .then((rows) => {
            ctx.body = rows
        })
        .catch((err) => {
            ctx.error(err)
        })
}
