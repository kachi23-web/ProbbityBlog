# ProbbityBlog
Node.js Blog API This is a simple Node.js blog application with CRUD operations, user authentication, and a user interface built with Handlebars.

Getting Started
Prerequisites
Node.js (v14 or higher)
MongoDB
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/<username>/nodejs-blog-api.git
Install the dependencies:

bash
Copy code
cd nodejs-blog-api
npm install
Set the environment variables:

bash
Copy code
cp .env.example .env
Update the .env file with your own configuration.

Start the server:

sql
Copy code
npm start
The server will be running at http://localhost:3000.

API Reference
Authentication
POST /api/auth/register - Register a new user
POST /api/auth/login - Login a user and get an access token
Posts
GET /api/posts - Get all posts
GET /api/posts/:id - Get a single post by ID
POST /api/posts - Create a new post
PUT /api/posts/:id - Update a post by ID
DELETE /api/posts/:id - Delete a post by ID
Comments
GET /api/posts/:id/comments - Get all comments for a post
POST /api/posts/:id/comments - Add a new comment to a post
PUT /api/posts/:id/comments/:commentId - Update a comment for a post
DELETE /api/posts/:id/comments/:commentId - Delete a comment for a post
Built With
Node.js
Express
MongoDB
Handlebars
Authors
Nwakobi Onyeka - kachi
License
This project is licensed under the MIT License - see the LICENSE file for details.


