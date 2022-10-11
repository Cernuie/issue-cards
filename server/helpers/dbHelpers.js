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
    INSERT INTO issues (issue_name, assigned, priority, description)
    `

    const queryParams = [issueName, assigned, priority, description]

    return pool.query(queryString, queryParams)
    .then(result => result.rows[0])
    .catch((e) => e)
}

exports.addIssuesToDatabase = addIssuesToDatabase

const getUserForIssues = (assigned) => {

}

const linkUserToIssues = (assigned) => {

}