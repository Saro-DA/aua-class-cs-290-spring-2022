const NotFoundError = require('../common/errors/not-found.error')
const students = ['Arshak', 'Lilit', 'Alex', 'Saro'];
const { square } = require('../common/helpers/math.helper');
const Student = require('./entities/student.enitity');

module.exports = {
    removeStudent(index) {
        const student = this.getOneStudent(index);

        students.splice(index, 1);

        return student;
    },

    createStudent(data) {
        const student = new Student(data);
        return student.save();
    },

    getAllStudents() {
        return Student.find({}, { __v: false });
    },

    async getOneStudent(index) {
        square(2);
        await new Promise(resolve => setTimeout(resolve, 2000));

        const student = students[index]

        if (student === undefined) {
            throw new NotFoundError(`Student with id = ${index} is not found!`);
        }

        return student;
    }
}