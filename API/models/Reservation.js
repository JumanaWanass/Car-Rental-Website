const db = require("../config/db");
class Reservation 
{
  constructor
  (
    country,
    paymentStatus,
    pickupDate,
    pickupStreet,
    pickupCity,
    returnDate,
    returnStreet,
    returnCity,
    carID,
    empID,
    custID
  ) 
  {
    this.country = country;
    this.paymentStatus = paymentStatus;
    this.pickupDate = pickupDate;
    this.pickupStreet = pickupStreet;
    this.pickupCity = pickupCity;
    this.returnDate = returnDate;
    this.returnStreet = returnStreet;
    this.returnCity = returnCity;
    this.carID = carID;
    this.empID = empID;
    this.custID = custID;
  }
  async save() {
    const sql = `INSERT INTO Reservation(
            country,
            paymentStatus,
            pickupDate,
            pickupStreet,
            pickupCity,
            returnDate,
            returnStreet,
            returnCity,
            carID,
            empID,
            custID
        )
        VALUES(
            '${this.country}',
            '${this.paymentStatus}',
            '${this.pickupDate}',
            '${this.pickupStreet}',
            '${this.pickupCity}',
            '${this.returnDate}',
            '${this.returnStreet}',
            '${this.returnCity}',
            '${this.carID}',
            '${this.empID}',
            '${this.custID}'
        );`;
    return db.execute(sql);
  }
  static findAll() {
    return db.execute("SELECT * FROM Reservation");
  }
  static findByAttributes(attributes) {
    const whereClause = Object.keys(attributes)
      .map((key) => `${key}='${attributes[key]}'`)
      .join(" AND ");
    const sql = `SELECT * FROM Reservation WHERE ${whereClause}`;
    return db.execute(sql);
  }
  static deleteByAttributes(attributes) {
    const whereClause = Object.keys(attributes)
      .map((key) => `${key}='${attributes[key]}'`)
      .join(" AND ");
    const sql = `DELETE FROM Reservation WHERE ${whereClause};`;
    return db.execute(sql);
  }
  static updateByAttributes(attributes, newValues) 
  {
    const whereClause = Object.keys(attributes)
      .map((key) => `${key}='${attributes[key]}'`)
      .join(" AND ");
    const setClause = Object.keys(newValues)
      .map((key) => `${key}='${newValues[key]}'`)
      .join(", ");
    const sql = `UPDATE Reservation SET ${setClause} WHERE ${whereClause};`;
    return db.execute(sql);
  }
  
  static createReservation(Reservation) {
  const newReservation = new Reservation(
    Reservation.country,
    Reservation.paymentStatus,
    Reservation.pickupDate,
    Reservation.pickupStreet,
    Reservation.pickupCity,
    Reservation.returnDate,
    Reservation.returnStreet,
    Reservation.returnCity,
    Reservation.carID,
    Reservation.empID,
    Reservation.custID
  );
  return newReservation.save();
  }

  static findAvailableCars() {
   
    const sql = "SELECT * FROM Car WHERE status = 'Available';"; // Adjust the query based on your schema

    return db.execute(sql);
  }

}
module.exports = Reservation;
