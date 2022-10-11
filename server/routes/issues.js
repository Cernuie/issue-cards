const express = require('express');
const router = express.Router();
const {getUsersFromDatabase, getIssuesFromDatabase, addIssuesToDatabase, linkUserToIssues} = require('../helpers/dbHelpers')
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
                res.json({response})
            } else {
                res.json({ pass: 'failed' })
            }
        })
    })

    router.post('/new', (req, res) => {
        const issueName = req.body.issueName
        const assigned = req.body.assigned
        const assignedUserId = req.body.assignedUserId
        const priority = req.body.priority 
        const description = req.body.issue
        addIssuesToDatabase(issueName, assigned, priority, description)
        .then(response => {
            linkUserToIssues(assignedUserId, response.id)
            .then((success) => {
                if(success) {
                    res.json({ pass: "Posted the issue"})
                } else {
                    res.json({pass: "Error has occurred posting issue"})
                }
            }) 
        })
    })

    return router
}