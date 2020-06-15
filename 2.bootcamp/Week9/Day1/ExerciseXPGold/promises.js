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
        })
        .catch(err => {
            console.log(err)
        })))
    .then(data => {
        console.log(data)
    });