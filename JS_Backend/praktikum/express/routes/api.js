const StudentContoller = require('../controller/StudentController')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello Express');
})

router.get('/students', StudentContoller.index);
router.post('/students', StudentContoller.store);
router.put('/students/:id', StudentContoller.update);

module.exports = router;