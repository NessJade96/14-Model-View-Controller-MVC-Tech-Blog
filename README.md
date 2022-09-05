# 14-Model-View-Controller-MVC-Tech-Blog
## Description
A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

## User story:
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## User setup:
n/a 

## Screenshots:

![image](./assets/)

## Links:

GitHub: https://github.com/NessJade96/14-Model-View-Controller-MVC-Tech-Blog
Heroku: 

## planning notes: 
1. Create homepage: existing blog posts, nav links (homepage / dashboard), and log in. This means creating links to the pages 
    -NAV
        -if signed in show "logout option" else show "login"
    -homepage
        -When clicked on it always takes you to the blogposts. 
        -shows a list of blog posts, 
            -if clicked on, then it opens a new page to show the blog post, you can add a comment
    -signin (click login button)
    -signup (click signup instead option under login button)
    -dashboard (click the dashboard button in nav)
        -Only get taken here if logged in, else go to login page. 
        -shows your blogposts 
            -click on blog post to edit
            -give options to add more -> go to Create New Post page


## Commit notes:

1. Setup folders structure with files and set up the readme.

2. Mock HTML set up for tailwind css and page layout planning, all pages. 

3. Added in the comment html text that was missing in the last commit. 

4. Moving the html into seperate html pages (still mock ups for handlebars.)

5. Created the users in the MVC, started on comments and blog_posts. Able to load the homepage on the local server through the browser - all styling applied. 

6. Adding in the Post routes, and changing the commentRoutes to reflect users commenting. 

7. Creating the homeRoutes to navigate through the application. Seeded the database

8. Changed some of the get routes as they weren't loading the content correctly, and updated JS files to 'update post'

9. Changed models/index.js where I was linking the wrong foreign key. 

10. Removed the withAuth from the /homepage routes. Changed the route for  commentBlog, now this navigates and displays the content. I also changed some handlebars styling for the user comments. 



<!-- GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in -->
<!-- WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up -->
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
- sign up button link not working either?
<!-- WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out -->
<!-- WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created -->
<!-- WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment -->
<!-- WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created -->
<!-- WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post -->
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
<!-- WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard -->
<!-- WHEN I click on the logout option in the navigation
THEN I am signed out of the site -->
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
