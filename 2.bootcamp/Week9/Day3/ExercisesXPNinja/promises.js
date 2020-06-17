// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now chnage one of the urls so you console.log your error with 'ooooooops'

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(async (url) => {
            const res = await fetch(url)
            return res.json()
        }));
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (e) {
        console.log(e)
    }
}

getData()
