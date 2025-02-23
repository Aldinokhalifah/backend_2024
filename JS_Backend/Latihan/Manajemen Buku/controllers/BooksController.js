const {json} = require('express');
const Books = require('../models/books');

class BooksController {
    // menampilkan semua data buku
    async index(_, res) {
        const books = await Books.all();
        if(books.length < 0) {
            res.status(404).json({
                'message': 'Data not found'
            });
        } else {
            const response = {
                'message': 'Menampilkan data buku',
                'data': books
            }
            res.status(200).json(response);
        }
    }

    // menambahkan data buku baru
    async store(req, res) {
        const {title, author, year} = req.body;
        if (!title || !author || !year) {
            return res.status(400).json({
                'message': 'All fields are required'
            });
        }

        if (typeof title !== 'string' || typeof author !== 'string' || typeof year !== 'number') {
            return res.status(400).json({
                'message': 'Invalid data types'
            });
        }

        const newBook = await Books.create(req.body);
        const response = {
            'message': 'Data berhasil ditambahkan',
            'data': newBook
        };
        res.status(201).json(response);
    }

    // mengupdate data buku
    async update(req, res) {
        const {id} = req.params;
        const {title, author, year} = req.body;

        if (!title || !author || !year) {
            return res.status(400).json({
                'message': 'All fields are required'
            });
        }

        if (typeof title !== 'string' || typeof author !== 'string' || typeof year !== 'number') {
            return res.status(400).json({
                'message': 'Invalid data types'
            });
        }

        const book = await Books.find(id);

        if(book) {
            await Books.update(id, req.body);
            const book_updated = await Books.find(id);
            const response = {
                'message': `Data buku dengan id ${id} telah diupdate`,
                'data lama': book,
                'data baru': book_updated
            }
            res.status(200).json(response);
        } else {
            res.status(404).json({
                message: 'Data Buku Tidak Ditemukan'
            });
        }
    }

    async show(req, res) {
        const {id} = req.params;
        const buku = await Books.find(id);

        if(buku) {
            const response = {
                message: `Menampilkan data buku dengan id: ${id}`,
                data: buku
            }
            res.status(200).json(response);
        } else {
            res.status(404).json({
                message: 'Data Buku Tidak Ditemukan'
            });
        }
    }

    async search(req, res) {
        const {title} = req.params;
        const book = await Books.findByTitle(title);

        if(book) {
            const response = {
                message: `Menampilkan data buku dengan judul: ${title}`,
                data: book
            }
            res.status(200).json(response);
        } else {
            res.status(404).json({
                message: 'Data Buku Tidak Ditemukan'
            });
        }
    }

    async destroy(req, res) {
        const {id} = req.params;
        const book = await Books.find(id);

        if(book) {
            await Books.delete(id);
            const response = {
                'message': `Data buku dengan id ${id} telah dihapus`,
                'data': book
            }
            res.status(200).json(response);
        } else {
            res.status(404).json({
                message: 'Data Buku Tidak Ditemukan'
            });
        }
    }
}

const object = new BooksController();

module.exports = object;