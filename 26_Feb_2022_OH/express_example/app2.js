const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello from app2.")
})

const port = 3001;
app.listen(port, () => {
    console.log(`App is runnin on port ${port}.`);
})