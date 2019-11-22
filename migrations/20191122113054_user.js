
exports.up = function (knex, Promise) {
    //users beacuse in postgres user is reserved
    return knex.schema.createTable('users', (table) => {
        //create autoincrementing serial for ids
        table.increments();
        table.text('username').notNullable();
        table.text('email').notNullable();
        table.text('google_id').notNullable();
        table.boolean('banned').notNullable().default(false);

    })

    // return knex.schema.createTable('role', (table) => {
    //     //create autoincrementing serial for ids
    //     table.increments();
    //     table.text('name').notNullable();

    // })


};

exports.down = function (knex, Promise) {

    knex.schema.dropTable('users');

};
