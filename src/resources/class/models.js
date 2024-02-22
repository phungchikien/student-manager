const knex = require('../../connection/mysql').getConnection()

exports.getAllClass = async () => {
    return await knex.select('*').from('classes')
}

exports.getAllClassByYear = async (year_id) => {
    return await knex.select('*').from('classes').where('academic_year_id', year_id)
}

exports.getAllClassByYearAndSemester = async (year_id, semester_id) => {
    return await knex.select('*').from('classes').where('academic_year_id', year_id).where('semester_id', semester_id)
}

exports.CreateNewClassByYearAndSemester = async (ctx, year_id, semester_id, teacher_id) => {
    const newClass = {
        class_name: ctx.request.body.class_name,
        academic_year_id: year_id,
        semester_id: semester_id,
        teacher_id: teacher_id
    }

    return await knex('classes').insert(newClass)
}

//Delete class
exports.deleteClassById = async (ctx, class_id) => {
    try {
        const result = await knex('classes').where('class_id', class_id)
        if (result) {
            return await knex('classes').del().where('class_id', class_id)
        } else {
            ctx.response.status = 404
            ctx.body = "Semester not found"
        }
    }
    catch (error) {
        console.error(error);
    }
}

//Update class
exports.updateClassById = async (ctx, class_id) => {
    try {
        const result = await knex('classes').where('class_id', class_id).update({
            class_name: ctx.request.body.class_name,
            teacher_id: ctx.request.body.teacher_id,
        })
    }
    catch (error) {
        console.error(error);
    }
}