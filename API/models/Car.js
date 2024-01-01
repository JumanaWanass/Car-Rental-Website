const db = require('../config/db');

class Car 
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

    async save()        // Add car record to Cars table
    {
        const sql = `INSERT INTO car(
                        model,
                        color,
                        year,
                        kilometers,
                        seatNums,
                        transmissionType,
                        make,
                        photoID,
                        status,
                        plateID,
                        pricePerDay,
                        officeID
                    )
                    VALUES(
                        '${this.model}',
                        '${this.color}',
                        '${this.year}',
                        '${this.kilometers}',
                        '${this.seatNums}',
                        '${this.transmissionType}',
                        '${this.make}',
                        '${this.photoID}',
                        '${this.status}',
                        '${this.plateID}',
                        '${this.pricePerDay}',
                        '${this.officeID}'
                    );`
        return db.execute(sql);
    }

    static findAll() 
    {
        const sql = 'SELECT * FROM Car;';
        return db.execute(sql);
    }

    static findByAttributes(attributes) 
    {
        const whereClause = Object.keys(attributes)
            .map(key => `${key}='${attributes[key]}'`)
            .join(' AND ');

        const sql = `SELECT * FROM Car WHERE ${whereClause}`;
        return db.execute(sql);
    }

    static deleteByAttributes(attributes) 
    {
        const whereClause = Object.keys(attributes)
            .map(key => `${key}='${attributes[key]}'`)
            .join(' AND ');

        const sql = `DELETE FROM Car WHERE ${whereClause};`;
        return db.execute(sql);
    }

    static updateByAttributes(attributes, newValues) {
        const whereClause = Object.keys(attributes)
            .map(key => `${key}='${attributes[key]}'`)
            .join(' AND ');

        const setClause = Object.keys(newValues)
            .map(key => `${key}='${newValues[key]}'`)
            .join(', ');

        const sql = `UPDATE Car SET ${setClause} WHERE ${whereClause};`;
        return db.execute(sql);
    }

    static createCar(car) 
    {
        const newCar = new Car(
            car.model,
            car.color,
            car.year,
            car.kilometers,
            car.seatNums,
            car.transmissionType,
            car.make,
            car.photoID ? car.photoID : 'default.png',
            car.status  ? car.status : 'available',
            car.plateID,
            car.pricePerDay,
            car.officeID
        );
        return newCar.save();
    }
    static findUniqueMakeModelCombinations() 
    {
        const sql = 'SELECT DISTINCT make, model FROM Car';
        return db.execute(sql);
    }

}
module.exports = Car;