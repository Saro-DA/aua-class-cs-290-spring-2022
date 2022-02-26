const asyncHandler = require('express-async-handler');
const express = require('express');
const app = express();

const { square } = require('./math.service');

app.use((req, res, next) => {
    console.log("We are logging this first.");
    console.log(req.url);
    if (req.url === '/hello') {
        res.status(403).send('You cannot visit this endpoint.');
        // We are not allowing the 'next' function to be called because
        // the response is already sent back to the client and in the
        // next function which is the endpoint, we will encounter an error
        // if we try to send another response.
        return;
    }
    next();
})

app.get('/square/:side', asyncHandler(async (req, res, next) => {
    // If we're not using asyncHanlder, then we have to catch the async error
    // manually and pass it to next function to be handled in our global error handler.
    // const result = await square(req.params['side']).catch(next);

    const result = await square(req.params['side']);
    res.status(200).send(result.toString());
}))

app.get('/', (req, res) => {
    console.log("Inside '/' path.");
    res.send("Hello from app1.")
})

app.get('/hello', (req, res) => {
    throw new Error('Hello endpoint has error.');
    // res.send("world");
})

app.get('/thisis', (req, res) => {
    res.send('amazing');
})

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send(err.message);
    // next(err);
})

const port = 3000;
app.listen(port, () => {
    console.log(`App is running on port ${port}.`);
})