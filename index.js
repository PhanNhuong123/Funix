const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('combined'));
app.get('/', (req, res) => {
    res.send(`Link github LAP1-3 https://github.com/PhanNhuong123/Funix/tree/LAP1-3`);
});
app.listen(port , () => {
    console.log(`http://localhost:${port}`)
});

