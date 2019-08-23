// Add seed data to the database using knex seeds
exports.seed = function(knex) {
  
  // truncate will reset the primary key each time
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries - VIN, make, model, mileage, transmissionType, and titleStatus
      return knex('cars').insert([
        { id: 1, VIN: '1LNHM93R89G607088', make: 'Honda', model: 'Civic', mileage: 1000 },
        { id: 2, VIN: '1HSHXAHR06J191212', make: 'Chevrolet ', model: 'Camaro', mileage: 5000 },
        { id: 3, VIN: '1HFTE334564139207', make: 'Honda ', model: 'TRX680FGA', mileage: 150000 }
      ]);
    });
};