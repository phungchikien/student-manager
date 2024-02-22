const Router = require('koa-router');
const router = new Router({
    prefix: '/users'
});

const UserController = require('./controller')


router.post('/newUser', UserController.newUser);
router.delete('/deleteUser/:id', UserController.deleteUser);
router.post('/login', UserController.logInController);
module.exports = router;



