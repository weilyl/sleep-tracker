
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id')
    table.string('username').notNullable().unique();
    table.string('password')
    table.string('firstname').notNullable()
    table.string('lastname')
    table.date('dob')
  })
};

exports.down = function(knex) {
  return knex('users').truncate();
  //knex.schema.dropTable('users')
};
