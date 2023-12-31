const db = require('../config/db');


class car_customer_reservation
{
    constructor(model, color, year, kilometers, seatNums, transmissionType, make, 
        photoID, status, plateID, pricePerDay, officeID)
    {
        this.model = model;
        this.color = color;
        this.year = year;
        this.kilometers = kilometers;
        this.seatNums = seatNums;
        this.transmissionType = transmissionType;
        this.make = make;
        this.photoID = photoID;
        this.status = status;
        this.plateID = plateID;
        this.pricePerDay = pricePerDay;
        this.officeID = officeID;
    }
}