const Router = require('koa-router');
const classController = require('./controller')
const { authToken } = require('../../../auth')

const router = new Router({
    prefix: '/class'
});

router.use(authToken);

//Read all class
router.get('/allClass', classController.ReadAllClass)

//Read all class by year
router.get('/:year_id/allClass', classController.ReadAllClassByYear)

//Read all class by year and semester
router.get('/:year_id/semester/:semester_id/allClass', classController.ReadAllClassByYearAndSemester)

//Create new Class by year and semester
router.post('/:year_id/semester/:semester_id/teacher/:teacher_id/newClass', classController.NewClassByYearAndSemester)

//Delete class
router.delete('/deleteClass/:class_id', classController.deleteClass)

//Update class
router.put('/updateClass/:class_id', classController.updateClass)
module.exports = router