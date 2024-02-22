const knex = require('../../connection/mysql').getConnection()
exports.createNewGrade = async (ctx, student_id) => {
    const studentName = knex.select('student_name').from('students').where('student_id', student_id)
    const classID = knex.select('class_id').from('students').where('student_id', student_id)
    const semesterID = knex.select('semester_id').from('classes').where('class_id', classID)
    const academicYearID = knex.select('academic_year_id').from('classes').where('class_id', classID)


    const passingPoint = 4
    const PassOrFail = ctx.request.body.score >= passingPoint ? "Pass" : "Fail"

    const point = {
        student_id: student_id,
        student_name: studentName,
        class_id: classID,
        semester_id: semesterID,
        academic_year_id: academicYearID,
        score: ctx.request.body.score,
        final: PassOrFail
    }
    // console.log(studentName)
    return await knex('grades').insert(point)
}

//get number of student pass or fail
exports.getClassFinal = async (semester_ID) => {
    return await knex.select('class_id')
        .from('grades').where('semester_id', semester_ID)
        .count({ pass_count: knex.raw('CASE WHEN final = ? THEN 1 END', ['Pass']) })
        .count({ fail_count: knex.raw('CASE WHEN final = ? THEN 1 END', ['Fail']) })
        .groupBy('class_id', 'semester_id')
        .orderBy('score')
}

//get number of student >=8, >=7, >=5, <5 in 1 semester
exports.getClassRankPointBySemester = async (semester_ID, year_id) => {
    return await knex.select('class_id')
        .from('grades').where('semester_id', semester_ID).where('academic_year_id', year_id)
        .count({ gioi_count: knex.raw('CASE WHEN score >= 8 THEN 1 END') })
        .count({ kha_count: knex.raw('CASE WHEN score >= 7 AND score < 8 THEN 1 END') })
        .count({ trungbinh_count: knex.raw('CASE WHEN score >= 5 AND score < 7 THEN 1 END') })
        .count({ yeu_count: knex.raw('CASE WHEN score <5 THEN 1 END') })
        .groupBy('class_id', 'semester_id')
        .orderBy('score')
}

//get number of student >=8, >=7, >=5, <5 in 1 year
exports.getClassRankPointByYear = async (academic_year_id) => {
    return await knex.select('class_id')
        .from('grades').where('academic_year_id', academic_year_id)
        .count({ gioi_count: knex.raw('CASE WHEN score >= 8 THEN 1 END') })
        .count({ kha_count: knex.raw('CASE WHEN score >= 7 AND score < 8 THEN 1 END') })
        .count({ trungbinh_count: knex.raw('CASE WHEN score >= 5 AND score < 7 THEN 1 END') })
        .count({ yeu_count: knex.raw('CASE WHEN score <5 THEN 1 END') })
        .groupBy('class_id', 'semester_id')
        .orderBy('score')
}

//Get point of student via semester 
exports.getClassPoint = async (semester_ID) => {
    return await knex.select('class_id', 'student_name', 'score', 'final')
        .from('grades').where('class_id', semester_ID)
        .orderBy('score')
}

//Delete point
exports.deleteStudentPoint = async (ctx, id) => {
    try {
        const semester = await knex('grades').where('student_id', id)
        if (semester) {
            return await knex('grades').del().where('student_id', id)
        } else {
            ctx.response.status = 404
            ctx.body = "Student not found"
        }
    } catch (error) {
        console.error(error);
    }
}

//Update point
exports.updatePoint = async (ctx, id) => {
    try {
        const passingPoint = 4
        const PassOrFail = ctx.request.body.score >= passingPoint ? "Pass" : "Fail"
        const result = await knex('grades').where('student_id', id).update({
            score: ctx.request.body.score,
            final: PassOrFail
        })

    } catch (error) {
        console.error(error);
    }
}
