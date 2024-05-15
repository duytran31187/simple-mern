# server: 
Use Express to create server to:
- as api to CRUD api/tasks
- serve static: render index.html, use javascript to make call to api/tasks and rerender in that html file.
----------------------------
# To make the project work, we need:
-  node > 16
- keep .env in git to make sure dont forget when setup
- if db can't connect, need to re-enable it from https://cloud.mongodb.com/v2/64e617dd3a8607175f6f83ae#/overview 
---------
# some knowledge
- CommonJS modules are the original way to package JavaScript code for Node.js
- REPL (ex: console): Read - Evaluate - Print - Loop
res.locals: used to store data in request without sharing
app.locals: used to store data and share between requests   
--------------
# Mongoose
- By default, Mongoose adds an _id property to your schemas.
- CRUD with model are ASYNC functions   