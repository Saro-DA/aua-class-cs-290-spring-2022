const UnauthorizedError = require('../errors/unauthorized.error');
const userService = require('../../students/students.service');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    if (req.url === '/login') {
        return next();
    }

    try {
        const token = req.headers['authorization'].split(' ')[1];
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        const student = await userService.getOneStudent(verified._id);
        console.log(student);
    } catch (error) {
        console.log(error);
        throw new UnauthorizedError('You are not allowed to visit this url.');
    }

    next();
}