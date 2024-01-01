
const db = require('../config/db');

class Report {
    constructor(custID) {
        this.custID=custID
       
    }

    static getRep3(startDate, endDate) {
        const sql = `SELECT * FROM reservation JOIN car ON carID = carID JOIN customer ON custID= custID WHERE pickupDate BETWEEN '${startDate}' AND '${endDate}';`;
        return db.execute(sql);
    }
}

module.exports = Report;