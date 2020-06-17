
// #1) Create a promise that resolves in 4 seconds and returns "success" string

// #2) Run the above promise and make it console.log "success"

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
    }, 4000)
})

p.then((result) => {
    console.log(result)
})

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
Promise.resolve(
    setTimeout(() => {
        console.log('success');
    }, 4000)
)

// #4) Catch this error and console log 'Ooops something went wrong'
// Promise.reject('failed')

Promise.reject('failed')
    .catch(console.log('Ooops something went wrong: ', err))
