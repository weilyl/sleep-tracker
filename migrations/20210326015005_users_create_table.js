
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id')
    table.string('username').notNullable()
    table.string('password')
    table.string('firstname').notNullable()
    table.string('lastname')
    table.datetime('DOB')
  })
};

exports.down = function(knex) {
  
};