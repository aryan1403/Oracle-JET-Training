require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db/db');

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.post('/login', async (req, res) => {
    const body = req.body;

    const count = await db.find({email: body.email, pass: body.pass}).countDocuments();
    if(count == 1) { // user exist
        res.send({msg: "Login successfull"})
    } else {
        res.send({msg: "Login failed"})
    }
})

app.post('/register', async (req, res) => {
    const body = req.body;
    const data = await db.create(body);
    res.status(201).json({msg: 'user created successfully', data: data});
})

app.listen(process.env.PORT, () => console.log("app started"));