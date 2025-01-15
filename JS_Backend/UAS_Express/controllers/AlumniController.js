const {json} = require('express');
const Alumni = require('../models/alumni');

class AlumniController {
    async index(req, res) {
        const alumni = await Alumni.all();
        if(Alumni.length < 0) {
            res.status(404).json({message: 'Data Alumni Tidak Ditemukan'}); 
        } else {
            const response = {
                message: 'Menampilkan Data Alumni',
                data: alumni
            };
            res.status(200).json(response);
        }
    }

    async store(req, res) {
        const {name, phone, address, graduation_year, status, company_name, position} = req.body;

        // validasi tambahan
        if (!name || !phone || !address || !graduation_year || !status) {
            return res.status(204).json({message: 'Semua data harus diisi'});
        }
        if (typeof name !== 'string' || name.trim() === '') {
            return res.status(204).json({message: 'Nama harus berupa string dan tidak boleh kosong'});
        }
        if (isNaN(phone)) {
            return res.status(400).json({ 'message': 'Nomor HP harus berupa angka' });
        }
        if (typeof address !== 'string' || address.trim() === '') {
            return res.status(204).json({message: 'Alamat harus berupa string dan tidak boleh kosong'});
        }
        if (!/^\d{4}$/.test(graduation_year) || parseInt(graduation_year) > new Date().getFullYear()) {
            return res.status(204).json({message: 'Tahun kelulusan harus berupa angka 4 digit dan tidak boleh lebih dari tahun sekarang'});
        }
        if (typeof status !== 'string' || status.trim() === '') {
            return res.status(204).json({message: 'Status harus berupa string dan tidak boleh kosong'});
        }

        const alumni = await Alumni.create(req.body);
        const response = {
            message: `Menambahkan student baru dengan nama: ${name}`, 
            data: alumni
        }
        res.status(201).json(response);
    }
}

const object = new AlumniController();

module.exports = object;