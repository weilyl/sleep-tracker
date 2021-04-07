
exports.up = function(knex) {
  return knex.schema.alterTable("entries", function (table) {
    //   table.unique("day");
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('entries', function (table) {
    //   table.dropUnique("day");
  })
};
