# Module 4 Challenge: Javascript Web APIs

This Homework assignment was completed for Unit Four of the U of M Bootcamp, to practice javascript web APIs, using localStorage to hold sent and retrieved data between two connected html webpages. The complete code allows a user to give a username, title, and body text for blog posts, before submitting that data and seeing it on a blog page that holds multiple submissions via localStorage. Both pages feature a toggle feature for light/dark mode. 

## Explanation of file structure

- HTML:
    - index.html is the homepage. It's a form to submit blog posts.
    - blog.html is the page where submitted blog posts can be viewed.
- CSS:
    - styles.css governs shared elements such as the header and footer, as well as specifications for light and dark modes.
    - form.css is only used by index.html and contains formatting specific to that page.
    - blog.css is only used by blog.html and contains formatting specific to that page.
- JS:
    - logic.js governs shared elements such as the header and footer, as well as specifications for light and dark modes.
    - form.js is only used by index.html and contains logic for storing the user submissions as a stringified array of objects in localStorage.
    - blog.js is only used by blog.html and contains logic for retreiving the user submissions from stringified array of objects in localStorage and applying them as tiles in the main section of the page.

## Link to Deployed Version
[Click here to view the deployed webpage.](https://floatingpoint-exaflop.github.io/my-blog)

## Screenshot of Deployed Version
![image](./assets/deployed-screenshot.png)

## Credits

[Blog stock image source](https://www.michelemmartin.com/wfdsm/blog-101.html)

Starter code used and modified with permission for instructional purposes from U of M Bootcamp, Copyright 2024 edX.

Thanks to Eric Meyer for the [start.css](http://meyerweb.com/eric/tools/css/reset/) code.

Shoutout to [this blog post](https://www.seoptimer.com/blog/favicon-not-showing-up/) and [this tool](https://favicon.io/favicon-converter/) for the help with my favicon stuff.

## License

Please refer to the LICENSE in the repo.