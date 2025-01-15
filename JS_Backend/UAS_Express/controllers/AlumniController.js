const {json} = require('express');
const Alumni = require('../models/alumni');

class AlumniController {
    // Method untuk menampilkan semua data alumni
    async index(req, res) {
        const alumni = await Alumni.all();
        if(Alumni.length < 0) {
            res.status(404).json({
                message: 'Data Alumni Tidak Ditemukan'
            }); 
        } else {
            const response = {
                message: 'Menampilkan Data Alumni',
                data: alumni
            };
            res.status(200).json(response);
        }
    }

    // Method untuk menambahkan data alumni
    async store(req, res) {
        const {name, phone, address, graduation_year, status, company_name, position} = req.body;

        // validasi tambahan
        if (!name || !phone || !address || !graduation_year || !status) {
            return res.status(422).json({
                message: 'Semua data harus diisi'
            });
        }
        if (typeof name !== 'string' || name.trim() === '') {
            return res.status(422).json({
                message: 'Nama harus berupa string dan tidak boleh kosong'
            });
        }
        if (isNaN(phone)) {
            return res.status(400).json({ 
                message: 'Nomor HP harus berupa angka' 
            });
        }
        if (typeof address !== 'string' || address.trim() === '') {
            return res.status(422).json({
                message: 'Alamat harus berupa string dan tidak boleh kosong'
            });
        }
        if (!/^\d{4}$/.test(graduation_year) || parseInt(graduation_year) > new Date().getFullYear()) {
            return res.status(422).json({
                message: 'Tahun kelulusan harus berupa angka 4 digit dan tidak boleh lebih dari tahun sekarang'
            });
        }
        if (typeof status !== 'string' || status.trim() === '') {
            return res.status(422).json({
                message: 'Status harus berupa string dan tidak boleh kosong'
            });
        }

        const alumni = await Alumni.create(req.body);
        const response = {
            message: `Menambahkan alumni baru dengan nama: ${name}`, 
            data: alumni
        }
        res.status(201).json(response);
    }

    // Method untuk menampilkan data alumni berdasarkan id
    async update(req, res) {
        const {id} = req.params;
        const alumni = await Alumni.find(id);

        if(alumni) {
            const alumni_update = await Alumni.update(id, req.body);
            const response = {
                message: `Data Alumni dengan id: ${id} berhasil diupdate`,
                data: alumni
            }
            res.status(200).json(response);
        } else {
            res.status(404).json({
                message: 'Data Alumni Tidak Ditemukan'
            });
        }
    }

    // Method untuk menghapus data alumni berdasarkan id
    async destroy(req, res) {
        const {id} = req.params;
        const alumni = await Alumni.find(id);

        if(alumni) {
            const alumni_delete = await Alumni.delete(id);
            const response = {
                message: `Data Alumni dengan id: ${id} berhasil dihapus`,
                data: alumni
            }
            res.status(200).json(response);
        } else {
            res.status(404).json({
                message: 'Data Alumni Tidak Ditemukan'
            });
        }
    }

    // Method untuk menampilkan data alumni berdasarkan id
    async show(req, res) {
        const {id} = req.params;
        const alumni = await Alumni.find(id);

        if(alumni) {
            const response = {
                message: `Menampilkan data alumni dengan id: ${id}`,
                data: alumni
            }
            res.status(200).json(response);
        } else {
            res.status(404).json({
                message: 'Data Alumni Tidak Ditemukan'
            });
        }
    }

    // Method untuk mencari data alumni berdasarkan nama
    async search(req, res) {
        const {name} = req.params;
        const alumni = await Alumni.search(name);

        if(alumni.length > 0) {
            const response = {
                message: `Menampilkan data alumni dengan nama: ${name}`,
                data: alumni
            }
            res.status(200).json(response);
        } else {
            res.status(404).json({
                message: 'Data Alumni Tidak Ditemukan'
            });
        }
    }

    // Method untuk menampilkan data alumni berdasarkan status fresh graduate
    async freshGraduate(req, res) {
        const alumni = await Alumni.findByStatus('fresh graduate');
        if(alumni.length > 0) {
            const response = {
                message: 'Menampilkan data alumni fresh graduate',
                total: alumni.length,
                data: alumni
            }
            res.status(200).json(response);
        } else {
            res.status(404).json({
                message: 'Data Status Alumni Tidak Ditemukan'
            });
        }
    }

    // Method untuk menampilkan data alumni berdasarkan status employed
    async employed(req, res) {
        const alumni = await Alumni.findByStatus('employed');
        if(alumni.length > 0) {
            const response = {
                message: 'Menampilkan data alumni employed',
                total: alumni.length,
                data: alumni
            }
            res.status(200).json(response);
        } else {
            res.status(404).json({
                message: 'Data Status Alumni Tidak Ditemukan'
            });
        }
    }

    // Method untuk menampilkan data alumni berdasarkan status unemployed
    async unemployed(req, res) {
        const alumni = await Alumni.findByStatus('unemployed');
        if(alumni.length > 0) {
            const response = {
                message: 'Menampilkan data alumni unemployed',
                total: alumni.length,
                data: alumni
            }
            res.status(200).json(response);
        } else {
            res.status(404).json({
                message: 'Data Status Alumni Tidak Ditemukan'
            });
        }
    }
}

const object = new AlumniController();

module.exports = object;