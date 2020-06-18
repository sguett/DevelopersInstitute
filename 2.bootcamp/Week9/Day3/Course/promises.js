// const aSyncFunction = async () => {

// }

// console.log(aSyncFunction())


// Exemple 1
// const getPosts = (userId) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Posts ', 'Done!');
//         resolve([{ id: 1 }])
//     }, 1500);
// })

// const getComments = (postId) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Comments ', 'Done!');
//         resolve([{}, {}])
//     }, 1500);
// })

// const getLikes = (postId) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Likes ', 'Done!');
//         resolve(5)
//     }, 1500);
// })

// const getLatestPostActivity = async (userId) => {
//     const posts = await getPosts(userId);
//     const latestPost = posts[0]
//     const comments = await getComments(latestPost.id)
//     const likes = await getLikes(latestPost.id)

//     return { comments: comments, likes: likes }
// }

// getLatestPostActivity(1)
//     .then(res => {
//         console.log(res)
//     })

// Exemple 2

// const setTimeoutPromise = (ms) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms)
//     })
// }

// const waitOnPromise = async () => {
//     await setTimeoutPromise(3000)
//     console.log('done');
// }

// waitOnPromise

// Error Handling

const asyncFunction = async () => {
    // throw new Error('something get wrong');
    return 'done';
}

const main = async () => {
    try {
        let a = await asyncFunction();
        console.log(a);

    } catch (err) {
        console.log(err)
    }
}

main();

// Loops

// const timeOut = async (ms, id) => {
//     await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(id, ' Done!');
//             resolve();
//         }, ms)
//     })
// }

// (async function () {
//     console.log('1', ' Done!');
//     // ['first', 'second', 'third'].forEach(async (id) => { // be careful, forEach is not a async loop function
//     //     await timeOut(3000, id)
//     // })

//     for (const item of ['first', 'second', 'third']) {
//         await timeOut(3000, item)
//     }
//     console.log('3', ' Done!');
// })();


// other
// const getLatestPostActivity = async (userId) => {
//     const posts = await getPosts(userId);
//     const latestPost = posts[0]
//     //     const comments = await getComments(latestPost.id)
//     //     const likes = await getLikes(latestPost.id)
//     const [comments, likes] = await Promise.all(
//         [getComments(latestPost.id), getLikes(latestPost.id)]
//     )

//     return { comments: comments, likes: likes }
// }

// getLatestPostActivity(1)
//     .then(res => {
//         console.log(res)
//     })

// other
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(result => {
//         return result.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err)
//     })

// other
// const getUsers = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         return data
//     } catch (err) {
//         throw new Error('can not fetch')
//     }
// }

// // console.log(getUsers());
// getUsers()
//     .then(res => {
//         console.log(res);

//     })
//     .catch(err => {
//         console.log(err);

//     })