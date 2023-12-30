const db = require('../config/db');
class Customer 
{
    constructor(ssn, firstName, lastName, birthDate, street, countryName, city, email, password)
    {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.street = street;
        this.countryName = countryName;
        this.city = city;
        this.email = email;
        this.password = password;
    }

    async save() 
    {
        const sql = `INSERT INTO customer(
                        ssn,
                        firstName,
                        lastName,
                        birthDate,
                        street,
                        countryName,
                        city,
                        email,
                        password
                    )
                    VALUES(
                        '${this.ssn}',
                        '${this.firstName}',
                        '${this.lastName}',
                        '${this.birthDate}',
                        '${this.street}',
                        '${this.countryName}',
                        '${this.city}',
                        '${this.email}',
                        '${this.password}'
                    );`
        return db.execute(sql);
    }
    
    static findAll() 
    {
        const sql = 'SELECT * FROM Customer;';
        return db.execute(sql);
    }

    static findByAttributes(attributes) 
    {
        const whereClause = Object.keys(attributes)
            .map(key => `${key}='${attributes[key]}'`)
            .join(' AND ');
        const sql = `SELECT * FROM customer WHERE ${whereClause}`;
        return db.execute(sql);
    }
    static deleteByAttributes(attributes) 
    {
        const whereClause = Object.keys(attributes)
            .map(key => `${key}='${attributes[key]}'`)
            .join(' AND ');
        const sql = `DELETE FROM customer WHERE ${whereClause};`;
        return db.execute(sql);
    }
    static updateByAttributes(attributes, newValues) {
        const whereClause = Object.keys(attributes)
            .map(key => `${key}='${attributes[key]}'`)
            .join(' AND ');
        const setClause = Object.keys(newValues)
            .map(key => `${key}='${newValues[key]}'`)
            .join(', ');
        const sql = `UPDATE customer SET ${setClause} WHERE ${whereClause};`;
        return db.execute(sql);
    }

    static createCustomer(customer)
    {
        const newCustomer = new Customer(
            customer.ssn,
            customer.firstName,
            customer.lastName,
            customer.birthDate,
            customer.street,
            customer.countryName,
            customer.city,
            customer.email,
            customer.password
        );
        return newCustomer.save();
    }
}
module.exports = Customer;