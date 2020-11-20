
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').unique()
        table.string('password').notNull()
        table.boolean('admin').defaultTo(false)
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
