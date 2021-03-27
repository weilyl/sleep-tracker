
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id')
    table.string('username').notNullable()
    table.string('password')
    table.string('firstname').notNullable()
    table.string('lastname')
    table.date('dob')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
