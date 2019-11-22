// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection:'postgres:///intrstr'
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'intrstr',
  //     user: 'username',
  //     password: 'password'
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'intrstr',
  //     user: 'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
