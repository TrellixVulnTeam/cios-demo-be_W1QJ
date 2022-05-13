/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tenant", (table) => {
    table.uuid("id").unique();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.string("new_address");
    table.string("email", 128).notNullable();
    table.string("firstName");
    table.string("lastName");

    // Payment information (in practice this would be probably a payment platform and not hit our database :)
    table.string("sort_code");
    table.string("postal_code");
    table.string("account_number");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tenant");
};