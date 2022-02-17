const express = require('express');
const app = express();

const students = ['Arshak', 'Lilit', 'Alex', 'Saro'];

app.get('/students/:id/', (req, res) => {
    const index = req.params['id'];

    const student = students[index]

    if (student === undefined) {
        res.send(404, `Resource with id = ${index} is not found!`);
        return;
    }

    res.send(student);
})

app.get('/students', (req, res) => {
    res.send(students);
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Server is running! 🚀');
})