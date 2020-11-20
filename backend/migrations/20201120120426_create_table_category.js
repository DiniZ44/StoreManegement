
exports.up = function(knex, Promise) {
    return knex.schema.createTable('category', table =>{
        table.increments('id').primary()
        table.string('description').notNull()
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('category')
  
};
