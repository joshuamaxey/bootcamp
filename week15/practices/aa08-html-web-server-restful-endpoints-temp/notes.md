# Restful Web Server: Restful Endpoints

<b>Access the home page</b>

- GET /
- GET /home

<b>Submit a contact form</b>

- POST /home/contact

<b>Access the posts page</b>

- GET /my/posts

<b>Access the edit page for a post</b>

- GET /my/posts/:postId/edit

<b>Access the create page for a post</b>

- POST /my/posts

<b>Create a new user</b>

- POST /users

<b>Log In</b>

- POST /api/login

<b>Log Out</b>

- POST /api/logout

<b>Access the comments for a post page</b>

- GET /comments

<b>Access the create page for a post's comment</b>

- GET /comments/new

<b>Access the edit page for a comment</b>

- GET /comments/:commentId/edit

<b>Submit a like for a post</b>

- POST /posts/likes

<b>Delete a like for a post</b>

- POST /posts/likes/:likeId/delete

<b>Access all the posts of a user</b>

- GET /users/:userId/posts/

<b>Submit a search on posts</b>

- GET /api/users/:userId/posts?search=query
