//nesse arquivo tera a configuracao das rotas do projeto
const { Router } = require('express');
const user = require('./user');
const account = require('./account');
const router = Router();

router.use('/user', user);
router.use('/account', account);

router.get('/', async (req, res) => {
    res.send('api running!');
});

module.exports = router;
