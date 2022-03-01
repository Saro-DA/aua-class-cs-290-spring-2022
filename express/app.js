const errorHandler = require('./common/middlewares/error-handler.middleware');
const apiKeyMiddleware = require('./common/middlewares/api-key.middleware');
const studentController = require('./students/students.controller');
const { square } = require('./common/helpers/math.helper');
const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());

app.use(apiKeyMiddleware);

app.use('/students', studentController);

app.get('/', (req, res) => {
    square(4);
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Server is running! 🚀');
})

// Error handler must be the last added middleware.
app.use((req, res, next) => {
    console.log('nakhaverjin middleware');
})
app.use(errorHandler);