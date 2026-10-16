const express = require('express');
const path = require('path');
const app = express();
const Port = 3333;

app.get('/', (req, res) => {
    res.send('<h1>Welcome To My Website</h1>');
});

app.get('/about', (req, res) => {
    const name = req.query.name || "name";
    const age = req.query.age || "age";
    res.send(`<p>Hello <strong>${name}</strong>! Your age is <strong>${age}</strong>.</p>`);
});

app.get('/contact', (req, res) => {
    const phone = req.query.phone || "phone";
    res.send(`<p>Your phone no: ${phone}</p>`);
});

app.get('/server', (req, res) => {
    const service = req.query.service || "service";
    res.send(`<p>Build ur webpages is ${service}</p>`);
});

app.get('/help', (req, res) => {
    const helpingNo = req.query.helpingNo || "helpingNo";
    res.send(`<p>Your helping no is ${helpingNo}</p>`);
});

app.get('/gallery', (req, res) => {
    res.send(`
        <h1>Gallery</h1>
        <img src="image.jpg" alt="Gallery Image" width="400">
    `);
});

app.listen(Port, () => {
    console.log(`server is running at http://localhost:${Port}`);
});