function getStudentFromServer() {
    return {
        username: 'abc',
        firstName: 'Armen',
        lastName: 'Armenyan',
        password: '1234',
        address: {
            city: 'Yerevan',
            streed: 'Komitas'
        }
    };
}

function printAllStudentInfo(std) {
    console.log(std);
}

function doSomething() {
    const { password, ...std } = getStudentFromServer();

    printAllStudentInfo(std);
}

doSomething();