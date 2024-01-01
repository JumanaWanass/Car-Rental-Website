
const db = require('../config/db');

    class Report {
        constructor(startDate, endDate, carID) {
            this.startDate = startDate;
            this.endDate = endDate;
            this.carID = carID;
           //this.customerID = customerID;
        //his.statusReportDate = statusReportDate;
        }
    
        static getRep1(data) {
            const sql = `
            SELECT * FROM reservation AS r JOIN car AS c ON c.carID = r.carID JOIN customer AS cu ON cu.custID=r.custID WHERE r.pickupDate BETWEEN '2022-01-01' AND '2022-10-01';`;
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