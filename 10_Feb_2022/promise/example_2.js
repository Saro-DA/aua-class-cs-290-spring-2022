
// setTimeout(() => {
//     console.log('timeout 1');

//     setTimeout(() => {
//         console.log('timeout 2');

//         setTimeout(() => {
//             console.log('timeout 3');

//             setTimeout(() => {
//                 console.log('timeout 4');
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000)

new Promise((resolve) => setTimeout(resolve, 2000))
    .then(() => new Promise((resolve) => setTimeout(resolve, 2000)))
    .then(() => new Promise((resolve, reject) => setTimeout(resolve, 2000)))
    .then(() => new Promise((resolve) => setTimeout(resolve, 2000)))
    .then(() => console.log("all done"))
    .catch((err) => {
        console.log("One of the promises failed.");
    })
    .finally(() => {

    })