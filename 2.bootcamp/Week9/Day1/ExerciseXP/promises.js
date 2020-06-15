
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
    }, 4000)
})

    .then((result) => {
        console.log(result)
    })
    .catch(err => {
        console.log('Ooops something went wrong: ', err)
    })