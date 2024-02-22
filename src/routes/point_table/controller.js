const PointTableModels = require('../../resources/point_table/models')

exports.newPointTable = async (ctx) => {
    await PointTableModels.createNewGrade(ctx, ctx.params.student_id)
    ctx.body = 'success'
}

exports.ReadPointOfClass = async (ctx) => {

    await PointTableModels.getClassPoint(ctx.params.semester_id)
        .then((rows) => {

            return ctx.body = rows
        })
        .catch((err) => {
            return ctx.error(err)
        })
}

exports.ReadFinal = async (ctx) => {
    await PointTableModels.getClassFinal(ctx.params.semester_id)
        .then((rows) => {
            return ctx.body = rows
        })
        .catch((err) => {
            return ctx.error(err)
        })
}

exports.readRankPointBySemester = async (ctx) => {
    await PointTableModels.getClassRankPointBySemester(ctx.params.semester_id, ctx.params.academic_year_id)
        .then((rows) => {
            return ctx.body = rows
        })
        .catch((err) => {
            return ctx.error(err)
        })
}

exports.readRankPointByYear = async (ctx) => {
    await PointTableModels.getClassRankPointByYear(ctx.params.academic_year_id)
        .then((rows) => {
            return ctx.body = rows
        })
        .catch((err) => {
            return ctx.error(err)
        })
}

//Delete Point 
exports.deletePoint = async (ctx) => {
    await PointTableModels.deleteStudentPoint(ctx, ctx.params.student_id)
    ctx.body = 'success'
}

//Update Point
exports.updatePoint = async (ctx) => {
    await PointTableModels.updatePoint(ctx, ctx.params.student_id)
    ctx.body = 'success'
}