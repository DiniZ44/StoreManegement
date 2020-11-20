module.exports = {
    client: 'postgresql',
    connection: {
        database: 'store_management',
        user: 'postgres',
        password: '12345'
    },

    pool: {
        min: 2,
        max: 10
    },

    migrations:{
        tableName: 'knex_migrations'
    }

}