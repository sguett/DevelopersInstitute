// #2) ADVANCED: Update the function below to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function () {
    const [users, posts, albums] = await Promise.all(urls.map(async (url) => {
        const res = await fetch(url)
        return res.json()
    }));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
}

getData()
