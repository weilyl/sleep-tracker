
exports.up = function(knex) {
  return knex.schema.createTable('entries', function(table) {
      table.increments('id');
      table.integer('hours').notNullable();
      table.date('day')      
      table.timestamp('wakeup').defaultTo(knex.fn.now())      
      table.timestamps(true, true);
      table.text('description');
      table.string('title');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('entries')
};
