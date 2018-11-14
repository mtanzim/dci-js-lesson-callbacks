const fetch = require('node-fetch');
const urlUsers = 'https://jsonplaceholder.typicode.com/users';
const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
const urlComments = 'https://jsonplaceholder.typicode.com/comments';

module.exports = function fetchData(isPrint = true) {
  return fetch(urlUsers)
    .then(res => res.json())
    .then(users => {
      let requiredUser = users[0].id;
      if (isPrint) console.log(`Querying user:\n\t${users[0].name}`);
      return fetch(`${urlPosts}?userId=${requiredUser}`)
    })
    .then(res => res.json())
    .then(posts => {
      let requiredPost = posts[0].id;
      if (isPrint) console.log(`\nQuerying post:\n\t${posts[0].title}`);
      return fetch(`${urlComments}?postId=${requiredPost}`)

    })
    .then(res => res.json())
    .then(comments => {
      if (isPrint) console.log(`\nFinally found comments!!!`);
      comments.forEach((comment, i) => {
        if (isPrint) console.log(`\n${i}: ${comment.body}`);
      });
      // throw new Error('Error: no comments');
      return comments;
      // return Promise.resolve(comments);
    })
    .catch(err => console.log(err.message));
};