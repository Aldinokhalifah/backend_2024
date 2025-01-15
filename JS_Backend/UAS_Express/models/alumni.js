const db = require('../config/database');

class Alumni {
    // Method untuk menampilkan semua data alumni
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

    // Method untuk menambahkan data alumni
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

    // Method untuk menampilkan data alumni berdasarkan id
    static find(id) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM alumni WHERE id = ?", id, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    const[alumni] = results;
                    resolve(alumni);
                }
            });
        });
    }

    // Method untuk mengupdate data alumni berdasarkan id
    static async update(id, data) {
        await new Promise((resolve, reject) => {
            db.query("UPDATE alumni SET ? WHERE id = ?", [data, id], (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    }

    // Method untuk menghapus data alumni berdasarkan id
    static async delete(id) {
        await new Promise((resolve, reject) => {
            db.query("DELETE FROM alumni WHERE id = ?", id, (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    }
    
    // Method untuk mencari data alumni berdasarkan nama
    static search(name) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM alumni WHERE name LIKE ?", [`%${name}%`], (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    }
    
    // Method untuk menampilkan data alumni berdasarkan status fresh graduate
    static findByStatus(status) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM alumni WHERE status = ?", status, (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        })
    }
}

module.exports = Alumni; 