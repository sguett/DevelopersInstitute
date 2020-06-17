const urls = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4'
]

Promise.all(urls.map((url) =>
    fetch(url)
        .then((result) => {
            return result.json()
        })))
    .then(data => {
        console.log('1 ', data[0])
        console.log('2 ', data[1])
        console.log('3 ', data[2])
        console.log('4 ', data[3])
    })
    .catch(err => {
        console.log(err)
    });