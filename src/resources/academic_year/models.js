const knex = require('../../connection/mysql').getConnection()
exports.createNewAcademicYear = async (ctx) => {
    const newYear = {
        academic_year_id: ctx.request.body.academic_year_id,
        year: ctx.request.body.year
    }

    return await knex('academic_years').insert(newYear)
}

exports.getAcademicYear = async () => {
    return await knex.select('*').from('academic_years')
}

exports.GetAcademicYearById = async (id) => {
    return await knex.select('*').from('academic_years').where('academic_year_id', id)
}

exports.DeleteAcademicYearById = async (ctx, id) => {
    try {
        const year = await knex('academic_years').where('academic_year_id', id)

        if (year) {
            return await knex('academic_years').del().where('academic_year_id', id)
        } else {
            ctx.response.status = 404
            ctx.body = "Year not found"
        }
    } catch (error) {
        console.error(error);
    }

}

exports.updateAcademicYearById = async (ctx, id) => {
    try {
        const result = await knex('academic_years').where('academic_year_id', id).update({
            year: ctx.request.body.year
        })
        return result
    }
    catch (error) {
        console.error(error);
    }

}