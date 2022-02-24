const express = require('express');
const asyncHandler = require('express-async-handler');

const studentsService = require('./students.service');

const route = express.Router();

route.delete('/:id/', (req, res) => {
    const index = req.params['id'];
    const removedStudent = studentsService.removeStudent(index);
    res.send(removedStudent);
})

route.post('/', (req, res) => {
    const newStudent = studentsService.createStudent(req.body);
    res.status(201).send(newStudent);
})

route.get('/:id/', asyncHandler(async (req, res) => {
    const index = req.params['id'];

    const result = await studentsService.getOneStudent(index);
    res.send(result);
}))

route.get('/', (req, res) => {
    const result = studentsService.getAllStudents();
    res.send(result);
})

module.exports = route;