const db = require('../config/database');

class Alumni {
    static all() {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM alumni", (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }

    static async create(data) {
        const id = await new Promise((resolve, reject) => {
            db.query("INSERT INTO alumni SET ?", data, (err, results) => {
                if (err) {
                    reject(err);
                } 
                resolve(results.insertId);
            });

        });
        
        // Melakukan query berdasarkan id
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM alumni WHERE id = ?";
            db.query(sql, id, (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });

    }
}

module.exports = Alumni; 