const Router = require('koa-router');
const { authToken } = require('../../../auth')
const router = new Router({
    prefix: '/pointTable'
});
router.use(authToken);
const pointTableController = require('./controller')

//Create new point table
router.post('/student/:student_id/createPoint', pointTableController.newPointTable)

//Read point by semester
router.get('/semester/:semester_id/getPoint', pointTableController.ReadPointOfClass)

//Read final by semester
router.get('/semester/:semester_id/getFinal', pointTableController.ReadFinal)

//Read rank point each semester
router.get('/years/:academic_year_id/semester/:semester_id/getRankPoint', pointTableController.readRankPointBySemester)

//Read rank Point each year
router.get('/years/:academic_year_id/getRankPoint', pointTableController.readRankPointByYear)

//Delete point
router.delete('/deletePoint/student/:student_id', pointTableController.deletePoint)

//Update point
router.put('/updatePoint/student/:student_id', pointTableController.updatePoint)
module.exports = router