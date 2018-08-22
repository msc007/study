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

/* Async; Await
 * Wait for creatPost() to be finished, then getPosts() will be called
 */
async function init() {
  await createPost({ title: "Post Three", body: "This is post three" });
  getPosts();
}

init();

//Async; Await; Fetch
async function fetchUsers() {
  //wait for response header
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //wait for body(contents)
  const data = await res.json();

  console.log(data);
}

fetchUsers();
