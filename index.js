const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('combined'));
app.get('/', (req, res) => {
    res.send(`<h1>Nhường đẹp trai</h1>`);
});
app.listen(port , () => {
    console.log(`http://localhost:${port}`)
});

