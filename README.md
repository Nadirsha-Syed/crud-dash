# CRUD Dash 🚀

A small practice project built to understand RESTful routing and server-side rendering using Node.js and Express.

**Live Demo:** [https://crud-dash.onrender.com/posts](https://crud-dash.onrender.com/posts)

---

## About

This project was created purely for practice — to move beyond theory and actually build a working CRUD system.

It manages simple user posts and follows proper REST conventions for creating, reading, updating, and deleting resources.

The goal wasn’t to build something fancy, but to deeply understand how data flows between the client and server.

---

## Tech Stack

* Node.js
* Express.js
* EJS
* Vanilla CSS
* uuid
* method-override
* Deployed on Render

---

## What This Project Covers

* RESTful route structure (7 standard routes)
* Server-side rendering with EJS
* Handling `req.params`, `req.body`, and query strings
* Middleware usage
* Basic project structuring for deployment
* Relative path handling in production

---

## Challenges I Faced

**1. HTML Forms & HTTP Methods**
HTML forms only support GET and POST.
I used `method-override` to handle PATCH and DELETE properly.

**2. Deployment Issues**
Hardcoded localhost paths broke after deployment.
Switched to relative paths and adjusted folder resolution.

**3. Root Route Error**
Initially got `Cannot GET /` when visiting the base URL.
Solved it by adding a redirect to `/posts`.

---

## Running Locally

```bash
git clone <repo-link>
cd crud-dash
npm install
node index.js
```

Visit:
[http://localhost:3000/posts](http://localhost:3000/posts)

---

## Note

Data is stored in-memory for learning purposes, so it resets when the server restarts.
