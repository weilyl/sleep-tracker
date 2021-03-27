
exports.up = function(knex) {
//   return knex.schema.alterTable("users", function(table) {
//       table.update("dob", "public")
//   })
  // https://stackoverflow.com/questions/14189254/pgerror-error-column-of-relation-does-not-exist
};

exports.down = function(knex) {
//   return knex.schema.alterTable("users", function(table){
//     table.renameColumn("dob", "DOB")
//   })
};
