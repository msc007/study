const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

/*
 * After one second output posts
 */
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li> ${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

/*
 * After two second add post three, then calls callback function
 */
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

//CreatePost called first then getposts() called as callback function.
createPost({ title: "Post Three", body: "This is post three" }, getPosts);
