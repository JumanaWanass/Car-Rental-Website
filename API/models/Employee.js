const db = require('../config/db');


class Employee 
{
    constructor(ssn, Fname, Lname, Bdate, street, CountryName, City, Email, Password) {
        this.ssn = ssn;
        this.Fname = Fname;
        this.Lname = Lname;
        this.Bdate = Bdate;
        this.street = street;
        this.CountryName = CountryName;
        this.City = City;
        this.Email = Email;
        this.Password = Password;
    }

    async save() {
        const sql = `INSERT INTO Employee(
                        ssn,
                        Fname,
                        Lname,
                        Bdate,
                        street,
                        CountryName,
                        City,
                        Email,
                        Password
                    )
                    VALUES(
                        '${this.ssn}',
                        '${this.Fname}',
                        '${this.Lname}',
                        '${this.Bdate}',
                        '${this.street}',
                        '${this.CountryName}',
                        '${this.City}',
                        '${this.Email}',
                        '${this.Password}'
                    );`
        return db.execute(sql);
    }

    
    static findAll() 
    {
        const sql = 'SELECT * FROM Employee;';
        return db.execute(sql);
    }

    static findByAttributes(attributes) {
        const whereClause = Object.keys(attributes)
            .map(key => `${key}='${attributes[key]}'`)
            .join(' AND ');
    
        // Check if whereClause is empty
        const sql = whereClause
            ? `SELECT * FROM Employee WHERE ${whereClause}`
            : 'SELECT * FROM Employee';
    
        console.log('Generated SQL query:', sql);
    
        return db.execute(sql);
    }
    

    static findAll() {
        const sql = 'SELECT * FROM Employee;';
        return db.execute(sql);
    }

    static deleteByAttributes(attributes) {
        const whereClause = Object.keys(attributes)
            .map(key => `${key}='${attributes[key]}'`)
            .join(' AND ');

        const sql = `DELETE FROM Employee WHERE ${whereClause};`;
        return db.execute(sql);
    }

    static updateByAttributes(attributes, newValues) {
        const whereClause = Object.keys(attributes)
            .map(key => `${key}='${attributes[key]}'`)
            .join(' AND ');

        const setClause = Object.keys(newValues)
            .map(key => `${key}='${newValues[key]}'`)
            .join(', ');

        const sql = `UPDATE Employee SET ${setClause} WHERE ${whereClause};`;
        return db.execute(sql);
    }

    static createEmployee(employee) {
        const newEmployee = new Employee(
            employee.ssn,
            employee.Fname,
            employee.Lname,
            employee.Bdate,
            employee.street,
            employee.CountryName,
            employee.City,
            employee.Email,
            employee.Password
        );
        return newEmployee.save();
    }
}
module.exports = Employee;