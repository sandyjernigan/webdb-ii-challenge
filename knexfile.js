// Update with your config settings.

// Configure knex to connect to a /data/car-dealer.db3 database using the sqlite3 npm module.

module.exports = {

  development: {
    // DBMS driver
    client: 'sqlite3',
    // location of the db
    connection: {
      filename: './data/car-dealer.db3'
    },
    useNullAsDefault: true,
    // generates migration files in a data/migrations/ folder
    migrations: {
      directory: './data/migrations'
    }
  }

};
