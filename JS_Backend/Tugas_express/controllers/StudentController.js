const { json } = require('express');
const Students = require('../data/students');
const Student = require('../models/Student');

class StudentController {
    async index(req, res) {
        const students = await Student.all();
        const data = {
            'message' : 'menampilkan data student:',
            'data' : students
        }
        res.json(data);
    }

    async store(req, res) {
        const students = await Student.create(req.body);
        const data = {
            'message': `Menambahkan student baru dengan nama: ${req.body.nama}`, 
            'data': students
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
