
exports.up = function(knex, Promise) {
    return knex.schema.createTable('subcategory', table =>{
        table.increments('id').primary()
        table.string('description')
        table.integer('categoryID').references('id').inTable('category')
    })
    };

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('subcategory')
};
