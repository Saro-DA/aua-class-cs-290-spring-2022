
let student = {
    username: 'abc',
    firstName: 'Armen',
    lastName: 'Armenyan',
    password: '1234',
    address: {
        city: 'Yerevan',
        streed: 'Komitas'
    }
}

printInformation(student);

function printInformation({ firstName, lastName, address: { city } }) {
    console.log(firstName);
    console.log(lastName);
    console.log(city);
}