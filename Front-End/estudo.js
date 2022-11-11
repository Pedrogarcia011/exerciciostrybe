const myPromise = new Promise((resolved, reject) => {

    const name ='Pedro'

    if(name === 'Pedro') {
        resolved(`Usuario igual a ${name}`)
    } else {
        reject(new Error(`O usuario ${name} não foi encontrado`))
    }
})
myPromise.then((data) => {
    return data.toUpperCase()
}).then((stringMod) => {
    console.log(stringMod);
}).catch((error) => {
    console.log(error.message);
})

//Resolvendo varias promessas

const p1 = new Promise((resolve, reject) => {
    resolve (`P1 OK`)
})

const p2 = new Promise((resolve, reject) => {
    resolve (`P2 OK`)
})

const p3 = new Promise((resolve, reject) => {
    resolve (`P3 OK`)
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
console.log(data);
})