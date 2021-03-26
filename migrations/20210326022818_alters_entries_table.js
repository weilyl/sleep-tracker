
exports.up = function(knex) {
  return knex.schema.alterTable('entries', function (table) {
      table.integer('user_id');
      table.foreign('user_id')
        .references('id').inTable('users');
  })
};

exports.down = function(knex) {
  
};
