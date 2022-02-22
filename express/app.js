const studentController = require('./students/students.controller');
const express = require('express');
const app = express();

app.use(express.json());

app.use('/students', studentController);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Server is running! 🚀');
})