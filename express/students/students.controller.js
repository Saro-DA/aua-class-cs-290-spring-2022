const express = require('express');
const NotFoundError = require('../common/errors/NotFoundError');

const studentsService = require('./students.service');

const route = express.Router();



route.delete('/:id/', (req, res) => {
    const index = req.params['id'];

    const student = students[index]

    if (student === undefined) {
        res.send(404, `Resource with id = ${index} is not found!`);
        return;
    }

    students.splice(index, 1);

    res.send(student);
})

route.post('/', (req, res) => {
    const studentData = req.body;
    students.push(studentData.name);
    res.send(201, studentData);
})

route.get('/:id/', async (req, res) => {
    const index = req.params['id'];

    try {
        const result = await studentsService.getOneStudent(index);
        res.send(result);
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.send(404, err.message);
        }
    }
})

route.get('/', (req, res) => {
    res.send(students);
})

module.exports = route;