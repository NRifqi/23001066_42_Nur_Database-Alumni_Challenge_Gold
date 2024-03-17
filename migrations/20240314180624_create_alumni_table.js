/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("alumni",function(table) {
    table.increments("id").primary();
    table.string("nama", 50).notNullable();
    table.integer("nis").notNullable();
    table.string("alamat", 100).notNullable();
    table.integer("angkatan").notNullable();
    table.string("pekerjaan", 50).notNullable();
    table.string("perusahaan", 50).notNullable();
    table.string("kesan", 100).notNullable();
    table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("alumni") 
};
