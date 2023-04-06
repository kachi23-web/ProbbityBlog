# ProbbityBlog
Node.js Blog API This is a simple Node.js blog application with CRUD operations, user authentication, and a user interface built :

Node.js
Express
MongoDB
Handlebars

**Getting Started**
Prerequisites
Node.js (v14 or higher)
MongoDB
Installation
Clone the repository:
git clone https://github.com/kachi23-web/ProbbbityBlog.git
Install the dependencies:

cd nodejs-blog-api
npm install
Set the environment variables:

copy .env.example .env
Update the .env file with your own configuration.

Start the server:

npm start
The server will be running at http://localhost:3000.


**Features**

User authentication (login and registration)
CRUD operations for posts
Pagination of posts
Search functionality for posts

**Installation**

Clone the repository: git clone (https://github.com/kachi23-web/ProbbbityBlog.git)
Install dependencies: npm install
Set environment variables: cp .env.example .env and fill in the required variables.
**Start the server: npm start**

**API Endpoints
Authentication**

POST /api/login: User login
POST /api/register: User registration
Posts
GET /api/posts: Get all posts
GET /api/posts/:id: Get a specific post by ID
POST /api/posts: Create a new post
PUT /api/posts/:id: Update a specific post by ID
DELETE /api/posts/:id: Delete a specific post by ID

**Pagination**
GET /api/posts?page=<page>&limit=<limit>: Get paginated posts
**Search**
GET /api/posts/search?q=<query>: Search posts by title or content
  
**Error Handling**
  
400 Bad Request: The request is invalid or missing a required parameter.
401 Unauthorized: The user is not authenticated or does not have permission to access the requested resource.
404 Not Found: The requested resource was not found.
500 Internal Server Error: An error occurred on the server.

Author
Nwakobi Onyeka - kachi
License
This project is licensed under the MIT License - see the LICENSE file for details.


