const express = require('express');
const asyncHandler = require('express-async-handler');

const studentsService = require('./students.service');

const route = express.Router();

route.delete('/:id/', asyncHandler(async (req, res) => {
    const id = req.params['id'];
    const removedStudent = await studentsService.removeStudent(id);
    res.send(removedStudent);
}))

route.post('/', asyncHandler(async (req, res) => {
    const newStudent = await studentsService.createStudent(req.body);
    res.status(201).send(newStudent);
}))

route.get('/:id/', asyncHandler(async (req, res, next) => {
    const index = req.params['id'];
    const result = await studentsService.getOneStudent(index);
    res.send(result);
}))

route.get('/', asyncHandler(async (req, res) => {
    const result = await studentsService.getAllStudents();
    res.send(result);
}))

route.patch('/:id', asyncHandler(async (req, res) => {
    const result = await studentsService.updateStudent(req.params['id'], req.body);
    res.send(result);
}))

module.exports = route;