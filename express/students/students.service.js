const NotFoundError = require('../common/errors/NotFoundError')
const students = ['Arshak', 'Lilit', 'Alex', 'Saro'];

module.exports = {
    getAllStudents() {
        return students;
    },

    async getOneStudent(index) {
        await new Promise(resolve => setTimeout(resolve, 2000));

        const student = students[index]

        if (student === undefined) {
            throw new NotFoundError(`Student with id = ${index} is not found!`);
        }

        return student;
    }
}