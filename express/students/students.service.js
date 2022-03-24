const NotFoundError = require('../common/errors/not-found.error');
const UnauthorizedError = require('../common/errors/unauthorized.error');
const Student = require('./entities/student.enitity');
const bcrypt = require('bcrypt');

module.exports = {
    async removeStudent(index) {
        const student = await this.getOneStudent(index);

        return student.remove();
    },

    createStudent(data) {
        const student = new Student(data);
        return student.save();
    },

    getAllStudents() {
        return Student.find({}, { __v: false }).exec();
    },

    async getOneStudent(id) {
        const student = await Student.findById(id);

        if (!student) {
            throw new NotFoundError(`Student with id = ${id} is not found!`);
        }

        return student;
    },

    async updateStudent(id, toUpdate) {
        const student = await this.getOneStudent(id);
        student.set(toUpdate);
        return student.save();
    },

    async login(email, password) {
        const message = 'Either email or password is wrong.';

        const student = await Student.findOne({ email });
        if (!student) {
            throw new UnauthorizedError(message);
        }

        const result = bcrypt.compareSync(password, student.password);
        if (!result) {
            throw new UnauthorizedError(message);
        }

        return student;
    }
}