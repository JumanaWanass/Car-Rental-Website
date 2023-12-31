const db = require('../config/db');
class Customer 
{
    constructor(ssn, fname, lname, Bdate, street, countryName, city, email, password)
    {
        this.ssn = ssn;
        this.fname = fname;
        this.lname = lname;
        this.Bdate = Bdate;
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
                        Fname,
                        Lname,
                        Bdate,
                        Street,
                        CountryName,
                        City,
                        Email,
                        Password
                    )
                    VALUES(
                        '${this.ssn}',
                        '${this.fname}',
                        '${this.lname}',
                        '${this.Bdate}',
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

    static findByAttributes(attributes) {
        const whereClause = Object.keys(attributes)
            .map(key => `${key}='${attributes[key]}'`)
            .join(' AND ');
    
        // Check if whereClause is empty
        const sql = whereClause
            ? `SELECT * FROM customer WHERE ${whereClause}`
            : 'SELECT * FROM customer';
    
        console.log('Generated SQL query:', sql);
    
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
            customer.Fname,
            customer.Lname,
            customer.Bdate,
            customer.Street,
            customer.CountryName,
            customer.City,
            customer.Email,
            customer.Password
        );
        return newCustomer.save();
    }
}
module.exports = Customer;