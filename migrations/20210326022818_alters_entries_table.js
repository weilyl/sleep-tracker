
exports.up = function(knex) {
  return knex.schema.alterTable('entries', function (table) {
      table.integer('user_id')
        .unsigned();
      table.foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade');
  })
};

exports.down = function(knex) {
  return knex.schema.table('entries', function(table) {
    table.dropForeign('user_id');
  })
};
