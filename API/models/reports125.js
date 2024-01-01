
const db = require('../config/db');

    class Report {
        constructor(startDate, endDate, carID) {
            this.startDate = startDate;
            this.endDate = endDate;
            this.carID = carID;
           //this.customerID = customerID;
        //his.statusReportDate = statusReportDate;
        }
    
        static getRep1(startDate, endDate) {
            const sql = `
            SELECT * FROM reservation AS r JOIN car AS c ON c.carID = r.carID JOIN customer AS cu ON cu.custID=r.custID WHERE r.pickupDate BETWEEN '${startDate}' AND '${endDate}';`;
            console.log(sql);
            return db.execute(sql);
        }
    
    
        static getRep2(startDate, endDate) {
            const sql = `SELECT * FROM reservation AS r JOIN car AS c ON c.carID = r.carID WHERE r.pickupDate BETWEEN '${startDate}' AND '${endDate}';`;
            return db.execute(sql);
        }
    
        static getRep5(startDate, endDate) {
            const sql = `
            SELECT 
                DATE(r.pickupDate) AS paymentDate, 
                SUM(c.pricePerDay) AS dailyPayments 
            FROM 
                Reservation r
            JOIN 
                Car c ON r.carID = c.carID 
            WHERE 
                r.pickupDate BETWEEN '${startDate}' AND '${endDate}' 
            GROUP BY 
                paymentDate;
        `;
            return db.execute(sql);
        }
    }
    
    module.exports = Report;