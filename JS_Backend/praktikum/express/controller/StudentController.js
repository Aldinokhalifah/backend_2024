class StudentContoller{
    index(req, res)  {
        const data = {
            'message' : 'menampilkan data student',
            'data' : []
        }
        res.json(data);
    }

    store(req, res)  {
        const {nama} = req.body;
        res.send(`menambahkan student : ${nama}`);
    }

    update(req, res)  {
        const {id} = req.params;
        const {nama} = req.body;
        res.send(`mengupdate student id ${id} dan nama ${nama}`);
    }
}

const object = new StudentContoller;
module.exports = object;