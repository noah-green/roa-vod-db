const express = require('express');

const port = process.env.PORT || 5000;

const app = express();

app.get('/', async (req, res) => {
    res.json({hello: 'hello'});
});

app.listen(port, () => {
    console.log("listening on 3000");
});