const {
    response,
    request
} = require('express');
// res = response, se hace para que vscode nos deje jalar nuestras funciones ej: res.json


const userGet = (req = request, res = response) => {

    const {
        info,
        name,
        lastname
    } = req.query;

    res.json({
        msg: 'GET API desde user.controllers!',
        info,
        name,
        lastname
    });

};

const userPost = (req, res = response) => {

    const {
        name,
        profession,
        goals
    } = req.body;

    res.status(201).json({

        msg: 'POST API desde user.controllers!',
        name,
        profession,
        goals
    });

};

const userPut = (req, res = response) => {

    const id = req.params.userID;

    res.status(500).json({
        msg: 'PUT API desde user.controllers!',
        id
    });

};

const userDelete = (req, res = response) => {

    res.json({
        msg: 'DELETE API desde user.controllers!'
    });

};

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
};