const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello test branch world');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});