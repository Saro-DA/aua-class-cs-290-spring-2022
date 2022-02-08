const myObj = {
    name: "Saro",
    lastName: "Deravanesian",
    // phone: 093607770,
    innerObj: {
        a: 'abc'
    }
}

const result = myObj?.phone || 'NA';

console.log(result);

