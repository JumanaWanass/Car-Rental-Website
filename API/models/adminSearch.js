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

    static findByAttributes(attributes) {
        const nonEmptyAttributes = Object.fromEntries(
          Object.entries(attributes).filter(([key, value]) => value !== '')
        );
       
        const whereConditions = Object.entries(nonEmptyAttributes)
          .map(([key, value]) => `${key}='${value}'`)
          .join(' AND ');
       
        let sql = 'SELECT * FROM customer JOIN reservation ON customer.custID = reservation.custID JOIN car ON reservation.carID = car.carID';
       
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

// class car_customer_reservation
// {
//     constructor(carID,model, color, make, ssn, fname, lname,  countryName, city,pickupDate)
//     {
//         this.carID=carID;
//         this.model = model;
//         this.color = color;
//         this.make = make;
//         this.ssn = ssn;
//         this.fname = fname;
//         this.lname = lname;
//         this.countryName = countryName;   //of customer
//         this.city = city;
//     this.pickupDate = pickupDate;
//     }

//     static findByAttributes(attributes) {
       
//         const whereClause = Object.keys(attributes)
//             .map(key => `${key}='${attributes[key]}'`)
//             .join(' AND ');
    
//         const sql = whereClause
//             ? `SELECT * FROM customer JOIN reservation ON custID = custID JOIN car ON carID = carID WHERE ${whereClause}`
//             : 'SELECT * FROM customer';
    
//         console.log('Generated SQL query:', sql);
    
//         return db.execute(sql);
//     }
// }

// module.exports = Reservation;
// module.exports= Car;
// module.exports=Customer;