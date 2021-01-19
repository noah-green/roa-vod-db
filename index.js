const express = require('express');

const app = express();

app.get('/', async (req, res) => {
    res.json({hello: 'hello'});
});

app.listen(3000, () => {
    console.log("listening on 3000");
});