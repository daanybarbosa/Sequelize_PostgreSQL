// exportando as dependencias instaladas e configurando
const express = require('express');
const database = require('./config/database');
const router = require('./router/index');

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use('/', router);

const configureExpress = () => {
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use('/', router);
    return app;
};

//module.exports = app;
module.exports = database.authenticate().then(configureExpress);