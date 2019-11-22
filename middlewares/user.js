const Knex = require("knex");

function getOne(id) {
    return Knex('user').where('id', id).first();


};

function getOneByEmail(email) {
    return Knex('user').where('email', email).first()
        ;
}


module.exports = {
    getOne,
    getOneByEmail
}