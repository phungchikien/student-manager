const Router = require('koa-router')
const userRouter = require('./src/routes/users/endpoint.js')
const academicYearRouter = require('./src/routes/academic_year/endpoint.js')
const semesterRouter = require('./src/routes/semesters/endpoint.js')
const classRouter = require('./src/routes/class/endpoint.js')
const pointTableRouter = require('./src/routes/point_table/endpoint.js')
const studentRouter = require('./src/routes/students/endpoint.js')
const router = new Router();


router
    .use(userRouter.routes())
    .use(userRouter.allowedMethods())
    .use(academicYearRouter.routes())
    .use(academicYearRouter.allowedMethods())
    .use(semesterRouter.routes())
    .use(semesterRouter.allowedMethods())
    .use(classRouter.routes())
    .use(classRouter.allowedMethods())
    .use(pointTableRouter.routes())
    .use(pointTableRouter.allowedMethods())
    .use(studentRouter.routes())
    .use(studentRouter.allowedMethods())

module.exports = router;