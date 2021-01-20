const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    res.json({hello: 'hello'});
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});