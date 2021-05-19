const {response, request} = require('express');

const usuariosGet = (req = request, res = response) => {
    const {id, c} = req.query;
    res.json({
        msg:'Get API - conrolador',
        id,
        c
    });
}

const usuariosPost = (req, res = response) => {
    
    const {nombre, id} = req.body;

    res.json({
        msg:'Post API - conrolador',
        nombre,
        id
    });
}

const usuariosPut = (req, res = response) => {
    const {id} = req.params;
    res.json({
        msg:'Put API - conrolador',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg:'Patch API - conrolador'
    });
}

const usuariosDelete = (req, res = response) => {
    const {id} = req.params;
    res.json({
        msg:'Delete API - conrolador',
        id
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}