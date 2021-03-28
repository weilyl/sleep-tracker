
exports.up = function(knex) {
    return knex.schema.alterTable("entries", function (table) {
        // table.renameColumn("created_at", "wakeup");s
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable("entries", function (table) {
        // table.renameColumn("wakeup", "created_at");s
    })
};
