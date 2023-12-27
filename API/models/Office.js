const db = require('../config/db');

class Office {
    constructor(telephone, Street, CountryName, City)  {
        this.telephone = telephone;
        this.Street = Street;
        this.CountryName = CountryName;
        this.City = City;
    }
    
    // Add to database
    async save() {
    
        const sql = `INSERT INTO office(
                        telephone,
                        Street,
                        CountryName,
                        City
                    )
                    VALUES(
                        '${this.telephone}',
                        '${this.Street}',
                        '${this.CountryName}',
                        '${this.City}',
                    );`

        return db.execute(sql);
    }

    static findAll() {
        return db.execute("SELECT * FROM office");
    }

    static findById(id) {
        return db.execute(`SELECT * FROM office WHERE officeID='${id}'`);
    }

    static findByPhone(phone) {
        return db.execute(`SELECT * FROM office WHERE telephone='${phone}'`)
    }
}

module.exports = Office;