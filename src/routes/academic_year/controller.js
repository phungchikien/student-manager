const academicYearModel = require('../../resources/academic_year/models')

exports.newAcademicYear = async (ctx) => {
    await academicYearModel.createNewAcademicYear(ctx)
    ctx.body = 'success'
}

exports.getAllAcademicYear = async (ctx) => {
    await academicYearModel.getAcademicYear()
        .then((rows) => {
            return ctx.body = rows
        })
        .catch((err) => {
            return ctx.error(err)
        })
}

exports.getAcademicYearById = async (ctx) => {
    await academicYearModel.GetAcademicYearById(ctx.params.year_id)
        .then((rows) => {
            return ctx.body = rows
        })
        .catch((err) => {
            return ctx.error(err)
        })
}

exports.deleteAcademicYearById = async (ctx) => {
    await academicYearModel.DeleteAcademicYearById(ctx, ctx.params.year_id)
    ctx.body = "success"
}

exports.updateYear = async (ctx) => {
    await academicYearModel.updateAcademicYearById(ctx, ctx.params.year_id)
    ctx.body = "success"
}