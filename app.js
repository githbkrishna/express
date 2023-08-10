const express = require("express")
const path = require("path")
const app = express();
const port = 80;

// for serving static file 
app.use('/static', express.static('static'))

// set templet engine as pug 
app.set('view engine', 'pug')

// set the views directory
app.set('view',path.join(__dirname, 'views'))

// our pug demo endpoint
app.get('/', (req, res) => {
    res.status(200).render('demo', { title: 'Hey Hari', message: 'Hello there! and thanks for tellingme how to use pug' })
})

app.get("/", (req, res)=>{
    res.status(200).send("This is homepage of my first express app with Hari")
});

app.get("/about", (req, res)=>{
    res.send("This is aboutpage of my first express app with Hari")
});

app.get("/about", (req, res)=>{
    res.send("This is post request page of my first express app with Hari")
});

app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website")
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
    // Backticks
});