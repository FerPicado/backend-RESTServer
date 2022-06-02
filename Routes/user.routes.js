const {
    Router
} = require('express');
const {
    userGet,
    userPost,
    userPut,
    userDelete
} = require('../Controllers/user.controllers');

const router = Router();

//en las rutas introducimos lo creado desde user.controllers.js
router.get('/', userGet);

router.post('/', userPost);

router.put('/:userID', userPut);

router.delete('/', userDelete);

module.exports = router;