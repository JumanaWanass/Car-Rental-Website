const db = require('../config/db');

class CarCustomerReservation {
    constructor(carID, model, color, make, ssn, fname, lname, countryName, city, pickupDate) {
        this.carID = carID;
        this.model = model;
        this.color = color;
        this.make = make;
        this.ssn = ssn;
        this.fname = fname;
        this.lname = lname;
        this.countryName = countryName; // of customer
        this.city = city;
        this.pickupDate = pickupDate;
    }

    static findByAttributes(attributes) 
    {
      const nonEmptyAttributes = Object.fromEntries(
          Object.entries(attributes).filter(([key, value]) => value !== '')
      );

      const whereConditions = Object.entries(nonEmptyAttributes)
  .map(([key, value]) => `car.${key}='${value}'`)
  .join(' AND ');

      console.log('Generated WHERE conditions:', whereConditions);

      let sql = `
          SELECT DISTINCT customer.*, reservation.*, car.*
          FROM customer
          JOIN reservation ON customer.custID = reservation.custID
          JOIN car ON reservation.carID = car.carID
      `;

      if (whereConditions) {
          sql += ` WHERE ${whereConditions}`;
        }
       
        console.log('Generated SQL query:', sql);
       
        return db.execute(sql);
       }

    static findAllAvailableCars() {
        const sql = 'SELECT * FROM car WHERE carID NOT IN (SELECT carID FROM reservation)';
        return db.execute(sql);
  }
  
}

module.exports = CarCustomerReservation;