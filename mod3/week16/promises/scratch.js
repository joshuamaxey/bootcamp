
// let x = Math.floor(Math.random() * 100);

// console.log(x);


// const promise = new Promise((resolve, reject) => {
//     if (x % 2 === 0) {
//         resolve((successMsg) => console.log(successMsg))
//     } else if (x % 2 !== 0) {
//         reject((failureMsg) => console.log(failureMsg))
//     }
// })

// const promise1 = new Promise((resolve, reject) => {
//     if (x % 2 === 0) {
//         setTimeout(() => {
//             resolve('success');
//         }, 500);
//     }
//     else {
//         setTimeout(() => {
//             reject('failure')
//         }, 500);
//     }
// })

// let promiseInstant = new Promise((resolve, reject) => {

//     let x = Math.floor(Math.random() * 100);

//     if (x % 2 === 0) {
//         resolve(console.log("Even (success)"))
//     } else {
//         reject(console.log("Odd (failure)"))
//     }
// })

// let promiseRandomTime = new Promise((resolve, reject) => {

//     let x = Math.floor(Math.random() * 100);

//     let time = Math.floor(Math.random() * 10000);

//     if (x % 2 === 0) {
//         setTimeout(() => {
//             resolve(console.log(`Even (success) after ${time} ms!`));
//         }, time)
//     } else if (x % 2 !== 0) {
//         setTimeout(() => {
//             reject(console.log(`Odd (failure) after ${time} ms!`));
//         }, time)
//     }
// })


