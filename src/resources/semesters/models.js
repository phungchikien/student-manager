const knex = require('../../connection/mysql').getConnection()

//Create new semester
exports.createNewSemester = async (ctx) => {
    const newSemester = {
        academic_year_id: ctx.params.year_id,
        semester_number: ctx.request.body.semester_number
    }

    return await knex('semesters').insert(newSemester)
}

//Delete semester
exports.deleteSemester = async (ctx, id) => {
    try {
        const semester = await knex('semesters').where('semester_id', id)
        if (semester) {
            return await knex('semesters').del().where('semester_id', id)
        } else {
            ctx.response.status = 404
            ctx.body = "Semester not found"
        }
    }
    catch (error) {
        console.error(error);
    }
}

//Update semester
exports.updateSemester = async (ctx, id) => {
    try {
        const result = await knex('semesters').where('semester_id', id).update({
            semester_number: ctx.request.body.semester_number
        })
    }
    catch (error) {
        console.error(error);
    }
}

//Read all semester
exports.getAllSemester = async () => {
    return await knex.select('*').from('semesters')
}

//Read all semester by year_id
exports.getAllSemesterByYear = async (id) => {
    return await knex.select('*').from('semesters').where('academic_year_id', id)
}

