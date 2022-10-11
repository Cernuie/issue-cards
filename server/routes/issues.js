const express = require('express');
const router = express.Router();
const {getUsersFromDatabase, getIssuesFromDatabase} = require('../helpers/dbHelpers')
module.exports = (db) => {
    router.get('/', (req, res) => {
        getIssuesFromDatabase()
        .then(response => {
            if(response) {
                res.json({response})
            } else {
                res.json({pass:'failed'})
            }
        })
    })

    router.get('/users', (req, res) => {
        getUsersFromDatabase()
        .then(response => {
            if(response) {
                console.log(response)
                res.json({response})
            } else {
                res.json({ pass: 'failed' })
            }
        })
    })
    router.post('/new', (req, res) => {
        const issueName = req.body.issueName
        const assigned = req.body.assigned
        const priority = req.body.priority 
        const description = req.body.issue
        console.log(req.body)
    })

    return router
}