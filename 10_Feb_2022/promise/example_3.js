const fs = require('fs');

function read1() {
    return new Promise((resolve, reject) => {
        fs.readFile('./data1.txt', { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                return reject(err);
            }

            resolve(data);
        })
    })
}

function write1(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./output.txt', data, {}, () => {
            resolve();
        })
    })
}

function read2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./data2.txt', { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                return reject(err);
            }

            resolve(data);
        })
    })
}

read1()
    .then((res) => {
        console.log(res);
        return res;
    })
    .then(write1)
    .then(read2)
    .then(res => console.log(res))
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        console.log('all done');
    })