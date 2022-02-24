const NotFoundError = require('../common/errors/not-found.error')
const students = ['Arshak', 'Lilit', 'Alex', 'Saro'];
const { square } = require('../common/helpers/math.helper');

module.exports = {
    removeStudent(index) {
        const student = this.getOneStudent(index);

        students.splice(index, 1);

        return student;
    },

    createStudent(data) {
        students.push(data.name);
        return data;
    },

    getAllStudents() {
        return students;
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