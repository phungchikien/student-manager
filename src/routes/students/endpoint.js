const Router = require('koa-router');
const { authToken } = require('../../../auth')

const router = new Router({
    prefix: '/student'
});
router.use(authToken);
const studentController = require('./controller')


router.post('/class/:class_id/newStudent', studentController.createStudent)
router.delete('/deleteStudent/:student_id', studentController.deleteStudentById)
router.put('/updateStudent/:student_id', studentController.updateStudentById)
router.get('/allStudent', studentController.getStudent)
router.get('/:student_id', studentController.getStudentById)
router.get('/allStudent/class/:class_id', studentController.getStudentByClass)
module.exports = router