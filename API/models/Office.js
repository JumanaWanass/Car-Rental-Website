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

    static findByAttributes(attributes) 
    {
        const whereClause = Object.keys(attributes)
            .map(key => `${key}='${attributes[key]}'`)
            .join(' AND ');

        const sql = `SELECT * FROM office WHERE ${whereClause}`;
        return db.execute(sql);
    }
}

module.exports = Office;