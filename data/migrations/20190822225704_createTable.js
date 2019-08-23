// Using knex migrations, design and write a schema for the cars table using the specifications below.

// The critical information for each car is the VIN, make, model, and mileage.
// They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.

exports.up = function(knex, Promise) {

  // don't forget the return statement
  // create table called 'cars'
  return knex.schema.createTable('cars', tbl => {

    // creates a primary key called id
    tbl.increments();

    // VIN - creates a varchar field called VIN which is both required and unique
    // A VIN is composed of 17 characters (digits and capital letters) that act as a unique identifier for the vehicle.
    tbl.string('VIN', 17).unique().notNullable();

    // make - creates a varchar field called make which is required
    tbl.string('make', 128).notNullable();

    // model - creates a varchar field called model which is required
    tbl.string('model', 128).notNullable();

    // mileage - creates a numeric field called mileage which is required
    tbl.decimal('mileage').notNullable();

    // transmission type - creates a varchar field called transmissionType (not required)
    tbl.string('transmissionType', 128)
    
    // status of the title - creates a varchar field called titleStatus (not required)
    tbl.string('titleStatus', 128)
  });
};

exports.down = function(knex, Promise) {
  // drops the entire table
  return knex.schema.dropTableIfExists('cars');
};
