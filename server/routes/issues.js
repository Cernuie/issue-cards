const express = require('express');
const router = express.Router();

module.exports = (db) => {
    router.post('/new', (req, res) => {
        console.log(req, res)
    })

    return router
}