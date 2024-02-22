const Router = require('koa-router');
const { authToken } = require('../../../auth')
const router = new Router({
    prefix: '/semesters'
});
router.use(authToken);
const semesterController = require('./controller')
//Create new semester
router.post('/:year_id/newSemester', semesterController.newSemester)

//Delete semester
router.delete('/deleteSemester/:semester_id', semesterController.deleteSemesterById)

//Update semester
router.put('/updateSemester/:semester_id', semesterController.updateSemesterById)

//Read all semester
router.get('/allSemester', semesterController.ReadAllSemester)

//Read all semester by year
router.get('/:year_id/allSemester', semesterController.ReadAllSemesterByYear)
module.exports = router