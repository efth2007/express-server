const pool = require('../../db');
const queries = require('./queries')


const getContacts = (req, res) => {
pool.query(queries.getContacts, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows)
})};

const getContactById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getContactById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}


module.exports = {
    getContacts, getContactById,
}