const express = require('express');
const app = express();
const port = process.env.PORT||3000;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    { id:uuidv4(), username: 'Syed', content: 'Hello World!'},
    { id:uuidv4(),username: 'John', content: 'This is a sample post.'}
];


app.get('/', (req, res) => {
    res.redirect('/posts');
});


app.get('/posts', (req, res) => {
    res.render('index.ejs', { posts: posts }); 
});

app.get('/posts/new', (req, res) => {
    res.render('new.ejs')
});

app.get('/posts/:id/edit', (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    if (post) {
        res.render('edit.ejs', { post });
    } else {
        res.status(404).send('Post not found');
    }
});

app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    console.log(post);
    if (post) {
        res.render('show.ejs', { post });
    } else {
        res.status(404).send('Post not found');
    }        
});
app.post('/posts', (req, res) => {
    let { username, content } = req.body;
    id = uuidv4();
    posts.push({ id ,username, content });
    res.redirect('/posts');
});

app.patch('/posts/:id', (req, res) => {
    let { id } = req.params;
    let { username, content } = req.body;
    let post = posts.find(p => p.id === id);
    if (post) {
        post.content = content;
        res.redirect('/posts');
    } else {
        res.status(404).send('Post not found');
    }
});

app.delete('/posts/:id', (req, res) => {
    let { id } = req.params;
    posts = posts.filter(p => p.id !== id);
    res.redirect('/posts');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});