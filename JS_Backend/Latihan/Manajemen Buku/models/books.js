const db = require('../config/database');

class Books {
    // Mendapatkan semua data buku
    static all() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM books";
            db.query(query, (err, result) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    // Membuat data buku baru
    static async create(data) {
        const id = await new Promise((resolve, reject) => {
            const query = "INSERT INTO books SET ?";
            db.query(query, data, (err, result) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(result.insertId);
                }
            });
        });

        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM books WHERE id = ?";
            db.query(query, id, (err, result) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    // mencari data berdasarkan id
    static find(id) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM books WHERE id = ?';
            db.query(query, id, (err, result) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    // mengupdate data buku
    static async update(id, data) {
        await new Promise((resolve, reject) => {
            const query = "UPDATE books SET ? WHERE id = ?";
            db.query(query, [data, id], (err, result) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    static async delete(id) {
        await new Promise((resolve, reject) => {
            const query = 'DELETE FROM books WHERE id = ?';
            db.query(query, id, (err, result) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

module.exports = Books;