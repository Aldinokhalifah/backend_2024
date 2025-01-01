const { json } = require('express');
const Students = require('../data/students');
const Student = require('../models/Student');

class StudentController {
    async index(req, res) {
        const students = await Student.all();
        if(students.length > 0) {
            const data = {
                'message' : 'Menampilkan seluruh data student',
                'data' : students
            }
            res.status(200).json(data);
        } else {
            const data = {
                'message' : 'Data student kosong',
            }
            res.status(404).json(data);
        }
    }

    async store(req, res) {
        const { nama, nim, email } = req.body;

        // Handle jika data kosong
        if (!nama || !nim || !email) {
            return res.status(400).json({ 'message': 'Nama, NIM, dan Email harus diisi' });
        }

        // Handle nim harus berupa angka
        if (isNaN(nim)) {
            return res.status(400).json({ 'message': 'NIM harus berupa angka' });
        }

        // Handle format email harus benar
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 'message': 'Format email tidak benar' });
        }

        const students = await Student.create(req.body);
        const data = {
            'message': `Menambahkan student baru dengan nama: ${nama}`, 
            'data': students
        }
        res.status(201).json(data); 
    }

    async update(req, res) {
        const {id} = req.params;
        const student = await Student.find(id);

        if(student) {
            const student = await Student.update(id, req.body);
            const data = { 
                'message' : `Mengupdate student dengan id: ${id}`,
                'data' : student
            }
            res.status(200).json(data);
        } else {
            const data = {
                'message' : `Student dengan id: ${id} tidak ditemukan`,
            }
            res.status(404).json(data);
        }
    }
    
    async destroy(req, res) {
        const {id} = req.params;
        const student = await Student.find(id);
        if(student) {
            await Student.delete(id);
            const data = {
                'message' : `Menghapus student dengan id: ${id}`,
                'data' : student
            }
            res.status(200).json(data);
        } else {
            const data = {
                'message' : `Student dengan id: ${id} tidak ditemukan`,
            }
            res.status(404).json(data);
        }
    }

    async show(req, res) {
        const {id} = req.params;
        const student = await Student.find(id);
        if(student) {
            const data = {
                'message' : `Menampilkan student dengan id: ${id}`,
                'data' : student
            }
            res.status(200).json(data);
        } else { 
            const data = {
                'message' : `Student dengan id: ${id} tidak ditemukan`,
            }
            res.status(404).json(data);
        }
    }
}

const object = new StudentController();

module.exports = object;
