const express = require('express')
const app = express()
const port = 3000

const login = require('./login')
const encode = require('./encode')

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.set('page-size', 20);
    res.set('Access-Control-Expose-Headers', 'page-size');
    next();
});

app.use(express.json())

app.post('/login', login)

app.get('/encode', encode);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))