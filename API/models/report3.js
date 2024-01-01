
const db = require('../config/db');

class Report {
    constructor(custID) {
        this.custID=custID
       
    }

    static getRep1(startDate, endDate) {
        const sql = `SELECT * FROM reservation JOIN car ON carID = carID JOIN customer ON custID= custID WHERE pickupDate BETWEEN '${startDate}' AND '${endDate}';`;
        return db.execute(sql);
    }


    static getRep2(startDate, endDate) {
        const sql = `SELECT * FROM reservation JOIN car ON carID = carID WHERE pickupDate BETWEEN '${startDate}' AND '${endDate}';`;
        return db.execute(sql);
    }

    static getRep5(startDate, endDate) {
        const sql =`SELECT DATE(pickupDate) AS paymentDate,SUM(pricePerDay) AS dailyPayments FROM reservation JOIN car ON reservation.carID = car.carID WHERE pickupDate BETWEEN '${startDate}' AND '${endDate}' GROUP BY paymentDate;`;
        return db.execute(sql);
    }
}

module.exports = Report;