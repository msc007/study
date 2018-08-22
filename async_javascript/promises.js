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
   * After two second add post three, once it resolved then calls getPosts()
   */
function createPost(post) {
  return new Promise((resove, reject) => {
    setTimeout(() => {
      posts.push(post);

      //Just for testing now; It shoud be actual error checking
      const error = false;

      if (!error) {
        resove();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

/* Resolved: getPosts() will be called
 * Rejected: It will catch error and output error message.
 */
createPost({ title: "Post Three", body: "THis is post three" })
  .then(getPosts)
  .catch(err => console.log(err));
