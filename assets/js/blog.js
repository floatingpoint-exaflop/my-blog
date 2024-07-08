//Declare variable containing the collection of localStorage blog posts.
const blogPosts = JSON.parse(localStorage.getItem('submissions')) || [];
//All the blog post tiles can go inside main tag on blog page.
const mainTag = document.querySelector('main');

//Declare the backButton so we can use it later.
const backButton = document.querySelector('#backButton');

// forEach loop allows us to gather up every blogPosts object to apply the same actions to them. No matter how many posts we get, we can load them all, individually.
blogPosts.forEach(blogPost => {
    // Create article div; this and its children will be styled in css but we just need a container for this stuff first.
    const blogPostTile = document.createElement('article');
    blogPostTile.classList.add('blog-post-tile');

    // 1. postTitle as an <h4>.
    const postTitle = document.createElement('h4');
    postTitle.textContent = blogPost.postTitle;
    postTitle.classList.add('post-title-h4');

    // 2. byLine as an <hr>.
    const byLine = document.createElement('hr');
    byLine.classList.add('byLine');

    // 3. postContent as a <p>.
    const postContent = document.createElement('p');
    postContent.textContent = blogPost.postContent;
    postContent.classList.add('post-content-p');

    // 4. userName as an <h5>.
    const userName = document.createElement('h5');
    userName.textContent =(`Posted by: ${blogPost.userName}`);
    userName.classList.add('user-name-h5');

    // 5. All four properties' values go into the <article> div we generated for each object in the array.
    blogPostTile.appendChild(postTitle);
    blogPostTile.append(byLine);
    blogPostTile.appendChild(postContent);
    blogPostTile.appendChild(userName);

    // 6. Dump all the <article> tiles on the page via appending the container div to the main section.
    mainTag.appendChild(blogPostTile);
});

//Event listener for the Back button.
backButton.addEventListener('click', function (event) {
    event.preventDefault();
    //Leaving the blog.html page to return to the blog.html page, where another new post can be added.
    window.location.replace("./index.html");
    }
);