const db = require('../config/db');

class Model {
    constructor(attributes)  {
        this.name = name; // Example
    }
    
    // Add to database
    async save() {
    
        const sql = `INSERT INTO users(
                        name
                    )
                    VALUES(
                        '${this.name}',
                    );`

        return db.execute(sql);
    }

    static findAll() {
        return db.execute("SELECT * FROM users");
    }

    static findById(id) {
        return db.execute(`SELECT * FROM users WHERE id='${id}'`);
    }

    static findByEmail(email) {
        return db.execute(`SELECT * FROM users WHERE email='${email}'`)
    }
}

module.exports = User;