
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', table => {
      table.increments('id').primary()
      table.string('descripition').notNull()
      table.double('quantity').notNull()
      table.string('size').notNull()
      table.string('imageUrl', 1000)
      table.double('price_init').notNull()
      table.double('price_final').notNull()
      table.integer('subcatID').references('id').inTable('subcategory')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products')
};
