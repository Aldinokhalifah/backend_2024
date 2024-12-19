const { json } = require('express');
const students = require('../data/students');

class StudentController {
    index(req, res) {
        const data = {
            'message' : 'menampilkan data student:',
            'data' : students
        }
        res.json(data);
    }

    store(req, res) {
        const {nama} = req.body;

        students.push(nama);
        const data = {
            'message' : `Menambahkan student baru: ${nama}`,
            'data' : students
        }
        res.json(data);
    }

    update(req, res) {
        const {id} = req.params;
        const {nama} = req.body;

        students[`${id}`] = `${nama}`;
        const data = {
            'message' : `Mengubah student dengan id: ${id}`,
            'data' : students
        }
        res.json(data);
    }
    destroy(req, res) {
        const {id} = req.params;

        students.splice(id, 1);
        const data = {
            'message' : `Menghapus student dengan id: ${id}`,
            'data' : students
        }
        res.json(data);
    }
}

const object = new StudentController();

module.exports = object;
