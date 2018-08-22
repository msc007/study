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

//Promise.all
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);

/* fetch returns promise:
 *  -then() returns html response header
 *  -res.json() gives actual  data (content)
 */
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res =>
  res.json()
);

//Wait for a longest promise (this case promise 3).
Promise.all([promise1, promise2, promise3, promise4]).then(values =>
  console.log(values)
);
