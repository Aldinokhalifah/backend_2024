const db = require('../config/database');

class Student {
    static all() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM students', (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    static async create(data) {
        // Melakukan insert data ke database
        const id = await new Promise((resolve, reject) => {
            const sql = "INSERT INTO students SET ?";
            db.query(sql, data, (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results.insertId);
            });

            const student =  this.find(id);
            return student;
        });
    
        // Melakukan query berdasarkan id
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM students WHERE id = ?";
            db.query(sql, id, (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    }

    static find(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM students WHERE id = ?', id, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    const[student] = result;
                    resolve(student);
                }
            });
        })
    }

    static async update(id, data) {
        await new Promise((resolve, reject) => {
            const sql = "UPDATE students SET ? WHERE id = ?";
            db.query(sql, [id, data], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        })
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM students WHERE id = ?', id, (err, results) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }


}

module.exports = Student;