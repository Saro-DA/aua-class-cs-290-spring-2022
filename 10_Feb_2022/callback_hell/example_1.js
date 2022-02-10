
const fs = require('fs');

fs.readFile('./data1.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    fs.writeFile('./output.txt', data, {}, () => {
        console.log('File created successfully.');

        fs.readFile('./data2.txt', { encoding: 'utf-8' }, (err, data) => {

            if (err) {
                console.log(err);
                return;
            }

            console.log(data);

        })
    })
})


