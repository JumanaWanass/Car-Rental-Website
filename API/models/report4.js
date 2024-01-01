
const db = require('../config/db');

class Report {
    constructor(custID) {
        this.custID=custID
    }

    static getRep4(custID) {
        const sql = `SELECT customer.custID,customer.Fname AS customerFirstName,customer.Lname AS customerLastName,customer.Bdate AS customerBirthdate,customer.Street AS customerStreet,customer.CountryName AS customerCountry,customer.City AS customerCity,customer.Email AS customerEmail,reservation.reserveID,reservation.paymentStatus,reservation.pickupDate,reservation.returnDate,reservation.pickupStreet,reservation.pickupCity,reservation.returnStreet,reservation.returnCity,car.model AS carModel,car.plateID FROM reservation JOIN customer ON reservation.custID = customer.custID JOIN car ON reservation.carID = car.carID WHERE customer.custID = '${custID}';`;
        return db.execute(sql);
    }

}

module.exports = Report;