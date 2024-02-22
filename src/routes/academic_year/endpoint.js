const Router = require('koa-router');
const { authToken } = require('../../../auth')
const router = new Router({
    prefix: '/years'
});
router.use(authToken);

const academicYearController = require('./controller')

router.post('/newAcademicYear', academicYearController.newAcademicYear)
router.get('/academicYear', academicYearController.getAllAcademicYear)
router.get('/academicYear/:year_id', academicYearController.getAcademicYearById)
router.delete('/deleteYear/:year_id', academicYearController.deleteAcademicYearById)
router.put('/updateYear/:year_id', academicYearController.updateYear)
module.exports = router;
