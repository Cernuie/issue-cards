const { response, query } = require("express");
require('dotenv').config();
const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME
});

const getIssuesFromDatabase = () => {
    const queryString = `
    SELECT * FROM issues;
    `

    return pool.query(queryString)
    .then(res => {
        return res.rows
    })
}

exports.getIssuesFromDatabase = getIssuesFromDatabase

const getUsersFromDatabase = () => {
    const queryString = `
    SELECT * FROM users;
    `

    return pool.query(queryString)
    .then(res => {
        return res.rows
    })
}

exports.getUsersFromDatabase = getUsersFromDatabase;

const addIssuesToDatabase = (issueName, assigned, priority, description) => {
    const queryString = `
    INSERT INTO issues (issue_name, assigned_to, priority, description)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `

    const queryParams = [issueName, assigned, priority, description]

    return pool.query(queryString, queryParams)
    .then(result => result.rows[0])
    .catch((e) => e)
}

exports.addIssuesToDatabase = addIssuesToDatabase

const linkUserToIssues = (assignedUserId, issue_id) => {
    const queryString = `
    INSERT INTO user_issues (user_id, issue_id)
    VALUES ($1, $2)
    RETURNING *;
    `

    const queryParams = [assignedUserId, issue_id]
    
    return pool.query(queryString, queryParams)
    .then(result => result.rows[0])
    .catch((e) => e)
}

exports.linkUserToIssues = linkUserToIssues